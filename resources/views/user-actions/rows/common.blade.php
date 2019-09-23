<tr>
    <td>{{ $row->id }}</td>
    <td>{{ $row->cmsUser->name ?? '' }}</td>
    <td>@lang('cms-action-history.sources.' . $row->source)</td>
    <td>@lang('cms-action-history.actions.' . $row->action)</td>
    <td>
        <div class="row">
            <div class="col-sm-12">
                @if(isset($row->data['id']))
                    @lang('Id'): {{ $row->data['id'] ?? '' }}
                @endif
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                @if(isset($row->data['env']))
                    @lang('Env'): {{ $row->data['env'] ?? '' }}
                @endif
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                @if(isset($row->data['connection']))
                    @lang('Connection'): {{ $row->data['connection'] ?? '' }}
                @endif

            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                @if(isset($row->data['user']))
                    @lang('User'): <a target="_blank"
                                      href="/users/{{ $row->data['user'] ?? '' }}/edit">{{ $row->data['user'] ?? '' }}</a>
                @endif

            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                @if(isset($row->data['amount']))
                    @lang('Amount'): {{ $row->data['amount'] ?? '' }}
                @endif
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                @if(isset($row->data['ids']))
                    @lang('Ids'): {{ implode(', ', $row->data['ids']) ?? '' }}
                @endif
            </div>
        </div>
    </td>
    <td>{{ $row->created_at_pst }}</td>
</tr>
