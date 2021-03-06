<?php

namespace App\Http\Controllers\Groups;

use App\Http\Controllers\Controller;
use App\Http\Requests\GroupAdmin\GroupRequest;
use App\Models\Cms\AppSettings;
use App\Models\Cms\GroupAdmin;
use App\Models\User\User;
use App\Traits\FilterBuilder;
use Illuminate\Http\Request;

/**
 * Class GroupController
 */
class GroupController extends Controller
{

    use FilterBuilder;

    const FILTER_FIELDS = [
        'receiver_id' => 'equal',
    ];

    /**
     * Show group admin list.
     *
     * @param Request $request Request
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(Request $request)
    {
        $rows = GroupAdmin::with('user', 'cmsUser')->orderBy('sender_id')->get();

        $main_ids = $all_ids = [];
        foreach ($rows->toArray() as $user) {
            if($user['is_main']) {
                if(array_search($user['user']['id'], $main_ids) === false) {
                    $main_ids[] = $user['user']['id'];
                }
            }
            if (array_search($user['user']['id'], $all_ids) === false) {
                $all_ids[] = $user['user']['id'];
            }
        }

        return view('group.index', compact(['rows', 'all_ids', 'main_ids']));
    }

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function edit(Request $request)
    {
        $rows = $this->ApplyFilter($request, GroupAdmin::with('user')->where(['sender_id' => auth()->id()]))->get();

        return view('group-edit.index', compact(['rows']));
    }

    /**
     * Change main admin.
     *
     * @param Request $request Request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request)
    {
        GroupAdmin::where(['sender_id' => auth()->id()])->update(['is_main' => 0]);
        $user = GroupAdmin::findOrFail($request->get('main_id'));
        $user->update(['is_main' => 1]);

        return $this->success(['message' => __('GroupAdmin') . __('common.action.updated')]);
    }

    /**
     * Find user
     *
     * @param Request $request Request
     *
     * @return array
     */
    public function findUser(Request $request)
    {
        if (empty($request->get('uid'))) {
            $users = User::with('userPets')->whereRaw("concat(first_name, ' ', last_name) like '%" . trim($request->get('name')) . "%' ")->get();
        } else {
            $uid = $request->get('uid');
            if (!ctype_digit($request->get('uid'))) {
                $uid = $this->decode($request->get('uid'));
            }
            $users = User::with('userPets')->where(['id' => $uid])->get();
        }

        $levels = AppSettings::getConfig('levels');
        foreach ($users as $k => $user) {
            $users[$k]['xp'] = xpToLevel($levels['rows'], $user->xp);
            $pet = $user->userPets->first();
            $users[$k]['pet'] = $pet ? $pet->name : 'Pet not found';
        }

        return [
            'users' => $users,
            'type'  => $request->get('prefix')
        ];
    }

    /**
     * @param GroupRequest $request
     * @return string
     */
    public function store(GroupRequest $request)
    {
        GroupAdmin::create([
            'sender_id'   => auth()->id(),
            'receiver_id' => (int)$request->get('uid')
        ]);

        return __('GroupAdmin') . ' ' . __('common.action.updated');
    }

    /**
     * @param $id
     * @return string
     */
    public function destroy($id)
    {
        GroupAdmin::destroy($id);

        return __('GroupAdmin') . ' ' . __('common.action.deleted');
    }
}
