@section('pageTitle', 'Certificate history')
@extends('layouts.pages.config', [
    'title' => 'Certificate history',
])

@section('content')
    <style>
        .datepicker {
            display: inline;
            width: 47%;
            margin-right: 10px;
        }
    </style>
    <div class="table-responsive">
        <table class="table table-hover" id="trophy-history-users">
            <thead>
            <tr>
                <th>@lang('Date')</th>
                <th>@lang('Sender Id')</th>
                <th>@lang('Winner Id')</th>
                <th class="id">@lang('Asset')</th>
                @if($isAdmin)
                    <th class="id">@lang('CMS User')</th>
                @endif
                <th class="actions">@lang('Actions')</th>
            </tr>
            <tr>
                <th>
                    <div class="row form-group">
                        <input autocomplete="off" placeholder="Date to"
                               class="filter form-control datepicker pull-right"
                               value="{{ old("date_to") ?? '' }}" name="date_to" id="filter_date_to">
                        <input autocomplete="off" placeholder="Date from"
                               class="filter form-control datepicker pull-right"
                               value="{{ old("date_from") ?? '' }}" name="date_from" id="filter_date_from">
                    </div>
                </th>
                <th>@include('layouts.filter-col', ['filterType' => 'int', 'field' => 'sender_id'])</th>
                <th>@include('layouts.filter-col', ['filterType' => 'int', 'field' => 'receiver_id'])</th>
                <th>@include('layouts.filter-col', ['filterType' => 'int', 'field' => 'asset_id'])</th>
                @if($isAdmin)
                    <th>@include('layouts.filter-col', ['filterType' => 'select', 'field' => 'cms_user', 'filterCollection' => $cmsUserList])</th>
                @endif
                <th class="filter-actions">@include('layouts.filter-col', ['filterType' => 'actions'])</th>
            </tr>
            </thead>
            <tbody>
            @foreach($rows as $id => $row)
                <tr>
                    <td style="text-align: center" title="{{$row->created_at_pst}}">{{ $row->created_at_pst }}</td>
                    <td>{{ !empty($row->sender) ? $row->sender->name : ''}} ({{$row->sender_id}})</td>
                    <td>{{ !empty($row->receiver) ? $row->receiver->name : ''}} ({{$row->receiver_id}})</td>
                    <td>{{$row->asset->name}}
                        @if($isAdmin)
                            ({{$row->asset_id}})
                        @endif
                    </td>
                    @if($isAdmin)
                        <td>{{$row->cmsUser->name ?? ''}}</td>
                    @endif

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
            init_filter_col("{{ route('cert-history.index') }}");
        })
    </script>
@endpush
