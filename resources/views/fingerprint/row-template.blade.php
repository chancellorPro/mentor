<tr>
    <td>
        <div class="row form-group">
            <div class=" col-md-12 ">
                {{$item->name}}
            </div>
        </div>
    </td>
    <td>
        <div class="row form-group">
            <div class=" col-md-12 ">
                {{$item->fingerprint}}
            </div>
        </div>
    </td>
    <td>
        <div class="row form-group">
            <div class=" col-md-12 ">
                {{$item->comment}}
            </div>
        </div>
    </td>
    <td>
        <div class="row form-group">
            <div class=" col-md-12 ">
                {{$item->created_at}}
            </div>
        </div>
    </td>
    <td>
        <div class="row form-group hidden-wrapper">
            <div class="col-md-12">
                @foreach($item->params as $key => $value)
                    <div {{ ($prevItem && $prevItem->params[$key] != $value) ? 'style=background:#FFC3C6' : '' }}>
                        @if(is_array($value))
                            {!! json_encode($value) !!}
                        @else
                            {!! $value !!}
                        @endif
                    </div>
                    <div class="clearfix"></div>
                @endforeach
            </div>
        </div>
    </td>
</tr>
