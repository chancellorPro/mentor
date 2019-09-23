<?php

namespace App\Http\Controllers\CmsUser;

use App\Http\Controllers\Controller;
use App\Models\Cms\CmsActionsHistory;
use Illuminate\Http\Request;
use App\Models\Cms\CmsUser;
use App\Traits\FilterBuilder;

/**
 * Class CmsUserActionsController
 */
class CmsUserActionsController extends Controller
{
    use FilterBuilder;
    
    /**
     * Filtered fields
     */
    const FILTER_FIELDS = [
        'cms_user_id' => 'equal',
        'source'      => 'equal',
        'action'      => 'equal',
    ];
    /**
     * Display a listing of the resource.
     *
     * @param Request $request Request
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(Request $request)
    {
        $builder = CmsActionsHistory::latest();
        $users   = CmsUser::all();

        $rows = $this->applyFilter($request, $builder)
            ->paginate($this->perPage);

        $filter = $this->getFilter();

        $sources = configArrayToCollection(CmsActionsHistory::SOURCES, 'id', 'name', 'sources');
        $actions = configArrayToCollection(CmsActionsHistory::ACTIONS, 'id', 'name', 'actions');
        
        return view('user-actions.index', compact('rows', 'filter', 'users', 'sources', 'actions'));
    }
}
