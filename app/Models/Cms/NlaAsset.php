<?php

namespace App\Models\Cms;

use App\Models\GroupAdminModel;
use App\Traits\PstMutator;

/**
 * NlaAssets
 */
class NlaAsset extends GroupAdminModel
{

    use PstMutator;

    /**
     * Fillable
     *
     * @var array
     */
    protected $fillable = [
        'asset_id',
        'category_id',
    ];

    /**
     * Has assets
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function assets()
    {
        return $this->belongsTo(Asset::class, 'asset_id');
    }
}
