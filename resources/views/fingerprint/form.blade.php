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
                               name="name" required autofocus value="{{ old('name') }}">
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
                                  name="comment" required>{{ old('comment') }}</textarea>
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
    </div>
@endsection
