<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/test', function () {
    return view('test', ['message' => 'Hello World']);
});

//  Projects
//Route::resource('/projects', 'ProjectController');
Route::get('/projects/', 'ProjectController@list');
Route::get('/projects/{oid}', 'ProjectController@show');
