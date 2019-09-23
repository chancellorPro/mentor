<div class="list-thumbnail img-preview"
     data-toggle="popover"
     data-placement="{{ $placement ?? 'top' }}"
     title="{{ $box_title ?? '' }}"
     data-full="{{ env('CDN_URL') . '/' . $url }}"
>
    <img class="img-responsive {{ $url ? '' : 'no-img' }}"
         src="{{ $url ? env('CDN_URL') . '/' . $url : '' }}"
         title="{{ $title or '' }}"
    />
</div>
