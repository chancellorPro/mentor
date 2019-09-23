@extends('layouts.app')

@section('main_container')
    <div class="right_col">

        <div class="card-body x_panel">
            <form method="POST" id="fingerprint" action="{{ route('fingerprint.store') }}">
                @csrf

                <div class="form-group row">
                    <label for="name" class="col-md-1 col-form-label text-md-right">{{ __('Name') }}</label>

                    <div class="col-md-3">
                        <input id="name" class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}"
                               name="name" required autofocus value="{{ old('name') ?? Auth()->user()->name }}">
                        @if ($errors->has('name'))
                            <span class="invalid-feedback">
                                <strong>{{ $errors->first('name') }}</strong>
                            </span>
                        @endif
                    </div>
                </div>
                <div class="form-group row">
                    <label for="comment" class="col-md-1 col-form-label text-md-right">{{ __('Comment') }}</label>

                    <div class="col-md-3">
                        <textarea id="comment" class="form-control{{ $errors->has('comment') ? ' is-invalid' : '' }}"
                                  name="comment" required autofocus>{{ old('comment') }}</textarea>
                        @if ($errors->has('comment'))
                            <span class="invalid-feedback">
                                <strong>{{ $errors->first('comment') }}</strong>
                            </span>
                        @endif
                    </div>
                </div>

                <div class="form-group row mb-0">
                    <div class="col-md-6 offset-md-4">
                        <button type="submit" class="btn btn-primary">
                            {{ __('Create') }}
                        </button>
                    </div>
                </div>
            </form>
        </div>
        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                    <div class="x_content">
                        @include('common.paginate', ['data' => $fingerprint, 'filter' => $filter])
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                <tr>
                                    <th>@lang('Name')</th>
                                    <th>@lang('Finger Print')</th>
                                    <th>@lang('Comment')</th>
                                    <th>@lang('Date')</th>
                                    <th>@lang('Params')</th>
                                </tr>
                                <tr>
                                    <th>@include('layouts.filter-col', ['filterType' => 'string', 'field' => 'name'])</th>
                                    <th></th>
                                    <th></th>
                                    <th>@include('layouts.filter-col', ['filterType' => 'date_range', 'field' => 'created_at'])</th>
                                    </th>
                                    <th class="filter-actions">@include('layouts.filter-col', ['filterType' => 'actions'])</th>
                                </tr>
                                </thead>
                                <tbody>

                                @foreach($fingerprint as $item)
                                    @include ('fingerprint.row-template', ['item' => $item, 'prevItem' => $prevItem ?? []])
                                    @php
                                        $prevItem = $item;
                                    @endphp
                                @endforeach
                                </tbody>
                            </table>
                        </div>
                        @include('common.paginate', ['data' => $fingerprint, 'filter' => $filter])
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@push('scripts')
    <script src="{{ asset("js/filter-col.js") }}"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            init_filter_col("{{ route('fingerprint.index') }}");
        })
    </script>
@endpush
