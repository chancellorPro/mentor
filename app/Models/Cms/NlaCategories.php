<?php

namespace App\Models\Cms;

use App\Models\GroupAdminModel;

/**
 * NlaCategories
 */
class NlaCategories extends GroupAdminModel
{

    /**
     * Fillable
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'sort',
        'section_id',
    ];

}
