<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['api'])->group(function () {
    Route::group([
            'prefix' => '/v1/',
        ], function() {
        Route::get('top-stories', 'HackerNewsController@getTopStories');
        Route::get('new-stories', 'HackerNewsController@getNewStories');
        Route::get('best-stories', 'HackerNewsController@getBestStories');
    });
});
