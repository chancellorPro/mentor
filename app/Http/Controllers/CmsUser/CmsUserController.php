<?php

namespace App\Http\Controllers\CmsUser;

use App\Http\Controllers\Controller;
use App\Http\Requests\CmsUser\CreateUpdateUser;
use App\Models\Cms\CmsRole;
use App\Models\Cms\CmsUser;
use App\Traits\FilterBuilder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

/**
 * Class CmsUserController
 */
class CmsUserController extends Controller
{
    use FilterBuilder;

    /**
     * Filter fields
     */
    const FILTER_FIELDS = [
        'id'         => 'numbers',
        'name'       => 'equal',
        'email'      => 'like',
        'login'      => 'equal',
        'page_limit' => 'manual',
        'roles'      => 'manual'
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
        $cmsUsers = $this->applyFilter($request, CmsUser::with('cmsRoles'))->paginate($this->perPage);
        $cmsRoles = CmsRole::all();
        $filter = $this->getFilter();

        return view('cms-user.index', compact('cmsUsers', 'cmsRoles', 'filter'));
    }

    /**
     * Apply roles filter
     *
     * @param  $queryBuilder #
     * @param  $request      #
     * @return mixed         #
     */
    public function applyRolesFilter(Request $request, $queryBuilder)
    {
        return $queryBuilder->whereHas('cmsRoles', function($q) use($request)
        {
            $q->whereIn('id', $request->get('roles'));
        });
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\View\View
     */
    public function create()
    {
        $roles = CmsRole::all();
        return view('cms-user.create', compact(['roles']));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CreateUpdateUser $request Request
     *
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function store(CreateUpdateUser $request)
    {
        $requestData = $request->all();

        $cmsuser = CmsUser::create($requestData);

        if (!empty($request->roles)) {
            $cmsuser->cmsRoles()->attach($request->roles, ['created_by' => Auth::user()->id]);
        }

        pushNotify('success', __('CmsUser') . ' ' . __('common.action.added'));
        return redirect('cms-users');
    }

    /**
     * Display the specified resource.
     *
     * @param integer $id ID
     *
     * @return \Illuminate\View\View
     */
    public function show(int $id)
    {
        $cmsUser = CmsUser::findOrFail($id);

        return view('cms-user.show', compact('cmsUser'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param integer $id ID
     *
     * @return \Illuminate\View\View
     */
    public function edit(int $id)
    {
        $cmsUser = CmsUser::with('cmsRoles')->where('id', $id)->first();

        $roles = CmsRole::all();

        return view('cms-user.edit', compact(['roles', 'cmsUser']));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param CreateUpdateUser $request Request
     * @param integer $id ID
     *
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function update(CreateUpdateUser $request, int $id)
    {
        $requestData = $request->all();

        $cmsuser = CmsUser::findOrFail($id);

        $cmsuser->update($requestData);
        $cmsuser->cmsRoles()->detach();
        if (!empty($request->roles)) {
            $cmsuser->cmsRoles()->attach($request->roles, ['created_by' => Auth::user()->id]);
        }

        pushNotify('success', __('CmsUser') . ' ' . __('common.action.updated'));
        return redirect('cms-users');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param integer $id ID
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(int $id)
    {
        CmsUser::destroy($id);

        pushNotify('success', __('CmsUser') . ' ' . __('common.action.deleted'));

        return $this->success();
    }

    /**
     * Sync cms user on envs
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function sync()
    {
        CmsUser::sync();
        pushNotify('success', __('CmsUser successfully synchronized'));

        return $this->success();
    }
}
