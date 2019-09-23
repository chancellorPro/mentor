<?php

namespace App\Models\Cms;

use App\Models\GroupAdminModel;
use App\Models\User\User;

/**
 * Class GroupAdmin
 */
class GroupAdmin extends GroupAdminModel
{

    /**
     * Fillable
     *
     * @var array
     */
    protected $fillable = [
        'is_main',
        'sender_id',
        'receiver_id',
        'updated_at',
        'created_at',
    ];

    /**
     * User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function user()
    {
        return $this->hasOne(User::class, 'id', 'receiver_id');
    }

    /**
     * Cms User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function cmsUser()
    {
        return $this->hasOne(CmsUser::class, 'id', 'sender_id');
    }
}
