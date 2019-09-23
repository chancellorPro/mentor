@section('pageTitle', 'Trophy cup users')
@extends('layouts.pages.config', [
    'title' => 'Trophy cup users',
])

@section('content')

    <div class="table-responsive">

        <div class="row"><br>
            <div class="col-md-1 col-sm-1 col-xs-1">
            @include('common.buttons.base', [
                'route' => 'trophy-cup-users.update',
                'name' => __('Save'),
                'fa_class' => '',
                'btn_class' => 'btn-primary btn-sm',
                'class' => 'update-row',
            ])
            </div>
        </div>
        <template id="user_template">
            @include ('trophy-cup-users.row-template', ['templatePlaceholder' => '%id%'])
        </template>

        <table class="table table-hover" id="trophy-cup-users">
            <thead>
            <tr>
                <th class="id">@lang('User Id')</th>
                <th>@lang('Name')</th>
                <th>@lang('AssetId')</th>
                <th>@lang('Limit')</th>
                <th class="actions">@lang('Actions')</th>
            </tr>
            <tr>
                <th>@include('layouts.filter-col', ['filterType' => 'int', 'field' => 'id'])</th>
                <th>@include('layouts.filter-col', ['filterType' => 'string', 'field' => 'name'])</th>
                <th>@include('layouts.filter-col', ['filterType' => 'int', 'field' => 'asset_id'])</th>
                <th>@include('layouts.filter-col', ['filterType' => 'int', 'field' => 'limit'])</th>
                <th class="filter-actions">@include('layouts.filter-col', ['filterType' => 'actions'])</th>
            </tr>
            </thead>
            <tbody class="trophy-save-container">
            @foreach($rows as $id => $row)
                @include ('trophy-cup-users.row-template', ['item' => $row, 'templatePlaceholder' => $row->id])
            @endforeach
            </tbody>
        </table>
    </div>
@endsection


@push('scripts')
    <script src="{{ asset("js/filter-col.js") }}"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            init_filter_col("{{ route('trophy-cup-users.index') }}");
        })
    </script>
@endpush
