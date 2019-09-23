<?php

namespace App\Models\Cms;

use App\Models\User\User;
use App\Traits\PstMutator;
use Illuminate\Database\Eloquent\Model;

/**
 * Class TrophyHistory
 */
class CertHistory extends Model
{

    use PstMutator;

    protected $table = 'cert_history';

    /**
     * Fillable
     *
     * @var array
     */
    protected $fillable = [
        'news_id',
        'sender_id',
        'receiver_id',
        'asset_id',
        'cms_user',
        'created_at',
        'updated_at',
    ];

    /**
     * Sender
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function sender()
    {
        return $this->hasOne(User::class, 'id', 'sender_id');
    }

    /**
     * Receiver
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function receiver()
    {
        return $this->hasOne(User::class, 'id', 'receiver_id');
    }

    /**
     * Get cmsUser
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function cmsUser()
    {
        return $this->hasOne(CmsUser::class, 'id', 'cms_user');
    }

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
