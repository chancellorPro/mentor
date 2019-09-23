<?php

namespace App\Http\Controllers\Trophy;

use App\Http\Controllers\Controller;
use App\Models\Cms\CmsUser;
use App\Models\Cms\TrophyHistory;
use App\Traits\FilterBuilder;
use Illuminate\Http\Request;

/**
 * Class TrophyHistoryController
 */
class TrophyHistoryController extends Controller
{
    use FilterBuilder;

    const FILTER_FIELDS = [
        'sender_id'   => 'equal',
        'receiver_id' => 'equal',
        'asset_id'    => 'equal',
        'cms_user'    => 'equal',
        'date_from'   => 'manual',
        'date_to'     => 'manual',
    ];

    /**
     * Show the Trophy History.
     *
     * @param Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(Request $request)
    {
        $cmsUserList = CmsUser::all();
        $user = CmsUser::with('cmsRoles')->whereId(auth()->id())->first();
        $isAdmin = in_array(CmsUser::ADMIN, array_column($user->cmsRoles->toArray(), 'name'));
        if ($isAdmin) {
            $queryBuilder = $this->ApplyFilter(
                $request,
                TrophyHistory::with('sender', 'receiver', 'cmsUser')
            );
        } else {
            $queryBuilder = $this->ApplyFilter(
                $request,
                TrophyHistory::with('sender', 'receiver', 'cmsUser')->where(['cms_user' => auth()->id()])
            );
        }

        $data = $queryBuilder->orderBy('created_at', 'desc')->get();

        return view('trophy-history.index', [
            'rows'        => $data,
            'isAdmin'     => $isAdmin,
            'cmsUserList' => $cmsUserList,
        ]);
    }

    /**
     * @param $request
     * @param $queryBuilder
     * @return mixed
     */
    public function applyDateFromFilter($request, $queryBuilder)
    {
        return $queryBuilder->where('created_at', '>', $request->get('date_from'));
    }

    /**
     * @param $request
     * @param $queryBuilder
     * @return mixed
     */
    public function applyDateToFilter($request, $queryBuilder)
    {
        return $queryBuilder->where('created_at', '<', $request->get('date_to'));
    }
}
