<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * GroupAdminModel
 */
abstract class GroupAdminModel extends Model
{

    /**
     * Look in config/database.php
     */
    const DB_CONNECTION = 'group_admin';

    /**
     * CmsModel constructor.
     *
     * @param array $attributes Attributes
     *
     * @return void
     */
    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        $this->connection = environment() . '.' . self::DB_CONNECTION;
    }
}
