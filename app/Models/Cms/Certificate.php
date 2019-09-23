<?php

namespace App\Models\Cms;

use App\Models\GroupAdminModel;

/**
 * Class Certificate
 */
class Certificate extends GroupAdminModel
{

    const CERT_SUBTYPE = 45;
    const IS_ACTIVE = 1;

    protected $table = 'cert_assets_visibility';

    /**
     * Timestamps
     *
     * @var boolean
     */
    public $timestamps = false;

    /**
     * Fillable
     *
     * @var array
     */
    protected $fillable = [
        'asset_id',
        'status',
    ];

    /**
     * Get asset
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function asset()
    {
        return $this->hasOne(Asset::class, 'id', 'asset_id');
    }

}
