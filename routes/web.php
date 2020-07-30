<?php

use Illuminate\Support\Facades\Route;

Route::get('get-user', 'AppController@getUser');

Route::post('admin-login', 'AppController@login');

Route::get('login-check', 'AppController@loginCheck');
Route::get('get-applications', 'AppController@getApplications');
Route::get('get-templates', 'AppController@getTemplates');

Route::post('create-template', 'AppController@createTemplate');
Route::post('delete-template', 'AppController@deleteTemplate');

Route::post('apply', 'AppController@apply');
Route::post('decline', 'AppController@decline');
Route::post('accept', 'AppController@accept');
Route::post('print-application', 'AppController@printApplication');
Route::post('sort', 'AppController@sort');

Route::get('/{any}', 'AppController@index')->where('any', '.*');
