@section('pageTitle', 'Cms User Action Log')
@extends('layouts.app')

@section('main_container')
    <div class="right_col">
        <div>
            <div class="page-title">
                <div class="title_left">
                    <h3>@lang('Cms User Action Log')</h3>
                </div>

                <div class="title_right">
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12">

                    <div class="x_panel">
                        <div class="x_content">
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th class="col-md-1">@lang('Id')</th>
                                            <th class="col-md-2">@lang('User')</th>
                                            <th class="col-md-1">@lang('Source')</th>
                                            <th class="col-md-1">@lang('Action')</th>
                                            <th class="col-md-1">@lang('Info')</th>
                                            <th class="col-md-1">@lang('Date')</th>
                                        </tr>
                                        <tr>
                                            <th class="filter-actions">@include('layouts.filter-col', ['filterType' => 'actions'])</th>
                                            <th>@include('layouts.filter-col', ['filterType' => 'select', 'field' => 'cms_user_id', 'filterCollection' => $users])</th>
                                            <th>@include('layouts.filter-col', ['filterType' => 'select', 'field' => 'source', 'filterCollection' => $sources])</th>
                                            <th>@include('layouts.filter-col', ['filterType' => 'select', 'field' => 'action', 'filterCollection' => $actions])</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    @foreach($rows as $row)
                                        
                                        @switch($row->source)
                                            @case('app_settings')
                                                @include('user-actions.rows.app-settings')
                                                @break
                                            @break
                                            
                                            @default
                                                @include('user-actions.rows.common')
                                        @endswitch
                                    @endforeach
                                    </tbody>
                                </table>
                                <div class="pagination-wrapper"> {!! $rows->appends($filter)->render() !!} </div>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@push('scripts')
<script src="{{ asset("js/filter-col.js") }}"></script>

<script type="text/javascript">
    $(document).ready(function(){
        init_filter_col("{{ route('cms-user-actions.index') }}");
    })
</script>
@endpush
