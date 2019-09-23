<?php

namespace App\Models\Cms;

use App\Models\GroupAdminModel;
use App\Traits\PstMutator;

/**
 * Class GroupEvent
 */
class GroupEvent extends GroupAdminModel
{

    use PstMutator;

    /**
     * Fillable
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'date_from',
        'date_to',
        'date_from_pst',
        'date_to_pst',
        'assets_setup',
        'updated_at',
        'created_at',
    ];

    public function getAssetsSetupAttribute($value)
    {
        return json_decode($value, 1);
    }
}
