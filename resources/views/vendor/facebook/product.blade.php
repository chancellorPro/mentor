<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:fb="http://www.facebook.com/2008/fbml" xml:lang="en" lang="en">
<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# product: http://ogp.me/ns/product#">
    <meta property="og:type"                content="og:product" />
    <meta property="og:title"               content="{{ $name }}" />
    <meta property="og:plural_title"        content="{{ $name }}" />
    <meta property="og:image"               content="{{ $preview_url }}" />
    <meta property="og:description"         content="{{ $description }}" />
    <meta property="og:url"                 content="{!! $url !!}" />
    <meta property="product:price:amount"   content="{{ $price / 100 }}"/>
    <meta property="product:price:currency" content="{{ $currency }}"/>
</head>
<body>&nbsp;</body>
</html>
