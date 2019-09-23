<?php

namespace App\Models\Cms;

use App\Models\GroupAdminModel;
use App\Models\User\User;
use App\Traits\PstMutator;

/**
 * Class EventLog
 */
class EventLog extends GroupAdminModel
{

    use PstMutator;

    protected $table = 'event_log';

    /**
     * Fillable
     *
     * @var array
     */
    protected $fillable = [
        'news_id',
        'event_id',
        'asset_id',
        'sender_id',
        'receiver_id',
        'cms_user_id',
        'news_message',
        'gc',
        'created_at',
        'updated_at',
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

    /**
     * Get asset
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function event()
    {
        return $this->hasOne(GroupEvent::class, 'id', 'event_id');
    }

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
        return $this->hasOne(CmsUser::class, 'id', 'cms_user_id');
    }
}
