<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('description');
            $table->string('codename', 20)->unique();
            $table->integer('organization_id')->unsigned();
            $table->integer('created_by')->unsigned();
            $table->enum('phase', [0, 1, 2, 3, 4, 5]);
            $table->json('tags');
            $table->softDeletes();
            $table->timestamps();
            
            $table->foreign('organization_id')->references('id')->on('organizations');
            $table->foreign('created_by')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('projects');
    }
}