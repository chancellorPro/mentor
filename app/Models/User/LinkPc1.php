<?php

namespace App\Models\User;

use App\Models\UserModel;

/**
 * LinkPc1
 *
 */
class LinkPc1 extends UserModel
{

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'user_link_pc1';

    /**
     * The primary key for the model.
     *
     * @var string
     */
    protected $primaryKey = 'user_id';

    /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var boolean
     */
    public $incrementing = false;


    public $timestamps = false;

    /**
     * Fillable
     *
     * @var array
     */
    protected $fillable = [
        'moved',
    ];

}
