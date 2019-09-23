<?php

namespace App\Models\Cms;

use App\Models\GroupAdminModel;

/**
 * Fingerprint
 */
class Fingerprint extends GroupAdminModel
{

    /**
     * Fillable
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'comment',
        'params',
        'fingerprint',
    ];

    /**
     * Get params array
     *
     * @param  string  $params
     * @return string
     */
    public function getParamsAttribute($params)
    {
        return json_decode($params, 1);
    }
}
