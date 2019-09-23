<?php

namespace App\Models\Cms;

use App\Models\GroupAdminModel;

/**
 * Class TrophyCupConfig
 */
class TrophyCupConfig extends GroupAdminModel
{

    protected $table = 'trophy_cup_config';

    /**
     * The primary key for the model.
     *
     * @var string
     */
    protected $primaryKey = 'user_id';

    /**
     * The "type" of the key.
     *
     * @var string
     */
    protected $keyType = 'int';

    /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var boolean
     */
    public $incrementing = false;

    /**
     * Fillable
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'asset_id',
        'limit',
        'updated_at',
    ];

    /**
     * Get asset
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function assetId()
    {
        return $this->hasOne(Asset::class, 'id', 'asset_id');
    }
}
