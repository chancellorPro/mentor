@section('pageTitle', 'Certificate visibility setup')
@extends('layouts.pages.config', [
    'title' => 'Certificate visibility setup',
])

@section('content')

    <div class="row"><br>
        <div class="col-md-1 col-sm-1 col-xs-1">
            @include('common.buttons.base', [
                'route' => 'cert-setup.update',
                'name' => __('Save'),
                'fa_class' => '',
                'btn_class' => 'btn-primary btn-sm',
                'class' => 'save-page',
            ])
        </div>
    </div>

    <div class="table-responsive">
        <table class="table table-hover" id="certificate">
            <thead>
            <tr>
                <th>@lang('AssetId')</th>
                <th>@lang('Status')</th>
                <th class="actions">@lang('Actions')</th>
            </tr>
            <tr>
                <th>@include('layouts.filter-col', ['filterType' => 'int', 'field' => 'id'])</th>
                <th></th>
                <th class="filter-actions">@include('layouts.filter-col', ['filterType' => 'actions'])</th>
            </tr>
            </thead>
            <tbody id="cert-save-container">
            @foreach($rows as $id => $row)
                <tr>
                    <td>
                        {{ $row['id'] }}
                        @if(!empty($row['preview_url']))
                            <div class="list-thumbnail" data-toggle="popover"
                                 data-full="{{ env('CDN_URL') . '/' . $row['preview_url'] }}">
                                <img class="img-responsive"
                                     src="{{ env('CDN_URL') . '/' . $row['preview_url'] }}"
                                     title="{{$row['name']}}">
                            </div>
                        @endif
                    </td>
                    <td>
                        @include('layouts.form-fields.select2', [
                            'name' => "cert[{$row['id']}][status]",
                            'collection' => $is_active,
                            'id' => 'id',
                            'value' => 'name',
                            'label' => false,
                            'selected' => $certs[$row['id']]->status ?? 2,
                        ])
                    </td>
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>
@endsection


@push('scripts')
    <script src="{{ asset("js/filter-col.js") }}"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            init_filter_col("{{ route('cert-setup.index') }}");
        })
    </script>
@endpush
