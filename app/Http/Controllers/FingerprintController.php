<?php

namespace App\Http\Controllers;

use App\Models\Cms\Fingerprint;
use App\Traits\FilterBuilder;
use Illuminate\Http\Request;

/**
 * Class FingerprintController
 */
class FingerprintController extends Controller
{
    use FilterBuilder;

    const FILTER_FIELDS = [
        'name'       => 'like',
        'created_at' => 'date_range',
    ];

    /**
     * Index action
     *
     * @param Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(Request $request)
    {
        $data = $this->ApplyFilter(
            $request,
            Fingerprint::orderBy('name')
        )->paginate($this->perPage);

        return view('fingerprint.index', ['fingerprint' => $data, 'filter' => $this->getFilter()]);
    }

    /**
     * Form page
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function edit()
    {
        return view('fingerprint.form');
    }

    /**
     * Store fingerprint
     *
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        Fingerprint::create([
            'name'        => $request->get('name'),
            'comment'     => $request->get('comment'),
            'params'      => json_encode($request->get('values')),
            'fingerprint' => $request->get('fingerprint')
        ]);

        pushNotify('success', __('Fingerprint') . ' ' . __('common.action.added'));
        return response()->json([
            'type' => 'success',
        ]);
    }
}
