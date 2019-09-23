<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

/**
 * Class CreateCmsUsersTable
 */
class CreateCmsUsersTable extends Migration
{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cms_users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('login', 50)->nullable()->unique('cms_users_login_key');
            $table->string('password');
            $table->string('name', 50);
            $table->string('email', 50)->nullable();
            $table->boolean('is_super_admin')->default(0);

            $table->string('user_id')->nullable();
            $table->string('fb_group_id')->nullable();
            $table->unsignedInteger('created_by')->nullable();
            $table->integer('tiara')->nullable();
            $table->integer('trophy')->nullable();

            $table->dateTime('blocked_at')->nullable();
            $table->dateTime('visited_at')->nullable();

            $table->dateTime('cross_month')->nullable();
            $table->integer('gift_count')->default(0);
            $table->integer('cert_count')->default(0);

            $table->timestamps();
            $table->softDeletes();

            $table->rememberToken();
            $table->char('api_token', 60)->nullable();

            $table->index('api_token', 'api_token_idx');
        });
    }


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('cms_users');
    }
}
