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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/verified-only', function(Request $request){

    dd('your are verified', $request->user()->name);
})->middleware('auth:api','verified');


Route::post('/register', 'Api\AuthController@register');
Route::post('/login', 'Api\AuthController@login');

Route::post('/password/email', 'Api\ForgotPasswordController@sendResetLinkEmail');
Route::post('/password/reset', 'Api\ResetPasswordController@reset');


Route::get('/email/resend', 'Api\VerificationController@resend')->name('verification.resend');
Route::get('/menu', 'Api\page\menuController@getmenu')->name('getmenu');
Route::post('/menu', 'Api\page\menuController@updatemenu');


Route::get('/auth', 'Api\page\menuController@getauth');
Route::post('/auth', 'Api\page\menuController@updateauth');

Route::get('/dashboard', 'Api\page\menuController@get_dashboard');
Route::post('/dashboard', 'Api\page\menuController@update_dashboard');


Route::get('/package', 'Api\page\menuController@get_package');
Route::post('/package', 'Api\page\menuController@update_package');


Route::get('/email/verify/{id}/{hash}', 'Api\VerificationController@verify')->name('verification.verify');

