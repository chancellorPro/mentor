@if(!empty($data))
    <div class="clearfix"></div>
    <div class="pagination-wrapper"> {!! $data->appends($filter)->render() !!}
        <div class="page-limit-wrapper pull-left">
            @include('layouts.form-fields.select', [
                'label' => false,
                'name' => 'page_limit',
                'class' => 'page-limit',
                'collection' => arrayToCollection(config('presets.page_limit')),
                'id' => 'id',
                'value' => 'name',
                'selected' => !empty($data->perPage()) ? $data->perPage() :
                request('page_limit', config('presets.default_page_limit'))
             ])
        </div>
    </div>
    <div class="clearfix"></div>
@endif
