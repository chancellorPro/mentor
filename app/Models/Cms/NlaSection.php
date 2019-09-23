<?php

namespace App\Models\Cms;

use App\Models\GroupAdminModel;

/**
 * NlaSection
 */
class NlaSection extends GroupAdminModel
{

    /**
     * Fillable
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'sort',
    ];

}
