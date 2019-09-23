<?php

namespace App\Exceptions\ConfigServer;

use App\Exceptions\BaseException;

/**
 * UrlNotFoundException
 */
class UrlNotFoundException extends BaseException
{

    /**
     * Message
     *
     * @var string
     */
    protected $message = 'Config server URL not found';
}
