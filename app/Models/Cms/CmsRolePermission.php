<?php

namespace App\Models\Cms;

use App\Models\GroupAdminModel;
use Illuminate\Notifications\Notifiable;

/**
 * Class CmsRolePermission
 */
class CmsRolePermission extends GroupAdminModel
{

    use Notifiable;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'cms_role_permissions';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'permission'
    ];

    /**
     * CmsRole relation
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function cmsRole()
    {
        return $this->belongsToMany(CmsRole::class);
    }
}
