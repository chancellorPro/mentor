<tr id="row<?=$templatePlaceholder?>"
    data-id="<?=$templatePlaceholder?>">
    <td>
        <div class="row form-group">
            <div class=" col-md-12 ">
                <span class="form-control">{{ $item->id ?? '' }}</span>

                <input type="hidden"
                       name="nla[{{$templatePlaceholder}}][id]"
                       class="id"
                       value="{{ $templatePlaceholder }}">
            </div>
        </div>
    </td>
    <td>
        <div class="row form-group">
            <div class=" col-md-12 ">
                <span class="form-control">{{ $item->name ?? '' }}</span>
            </div>
        </div>
    </td>
    <td>
        <div class="row form-group">
            <div class=" col-md-12 ">
                <img src="{{ isset($item->preview_url) ? env('CDN_URL') . '/' . $item->preview_url : '' }}">
            </div>
        </div>
    </td>
    <td>
        <div class="row form-group">
            <div class=" col-md-12 ">
                @if(isset($item) && $item->cash_price > 0)
                    <div class="icon cash">: {{ $item->cash_price }}</div>
                @elseif(isset($item) && $item->coins_price > 0)
                    <div class="icon coin">: {{ $item->coins_price }}</div>
                @endif
            </div>
        </div>
    </td>
    <td>
        <span>{{ (isset($item->nlaAssets) && isset($categories[$item->nlaAssets->category_id])) ?
        $categories[$item->nlaAssets->category_id]->name : '' }}</span>
    </td>
    <td>{{ $item->sell_start ?? '' }}</td>
    <td>{{ $item->sell_end ?? '' }}</td>
    <td>
        @if(isset($item->shopItems) && $item->shopItems->isNotEmpty())
            @foreach($item->shopItems->pluck('shop_id')->unique() as $shop_id)
                {{ $shops[$shop_id]->name . ' (' . $shop_id . '), ' }}
            @endforeach
        @endif
    </td>
    <td>
        <input type="checkbox" data-asset="{{ $templatePlaceholder }}"
               name="nla[{{ $templatePlaceholder }}][assign]"
               class="form-control" {{ !empty($item->assign) ? 'checked' : '' }}>
    </td>
</tr>
