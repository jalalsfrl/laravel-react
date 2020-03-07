<?php

namespace App\Http\Controllers\Api;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AuthController extends Controller
{
   public function register(Request $request)
   {

       $validatedData['name'] = $request->input('name');
       $validatedData['email'] = $request->input('email');
       $validatedData['password'] = $request->input('password');


        $validatedData['password'] = bcrypt($validatedData['password']);

        $user = User::create($validatedData);

        $accessToken = $user->createToken('authToken')->accessToken;



       return response(['user'=> $user, 'access_token'=> $accessToken]);


   }

    public function test_PHP($variable)
    {
        echo '<script>';
        echo 'console.log(' . json_encode($variable) . ')';
        echo '</script>';
    }


   public function login(Request $request)
   {

       $loginData['email'] = $request->input('email');
       $loginData['password'] = $request->input('password');

        if(!auth()->attempt($loginData)) {
            return response(['message'=>'Invalid credentials']);
        }

        $accessToken = auth()->user()->createToken('authToken')->accessToken;

        return response(['user' => auth()->user(), 'access_token' => $accessToken]);

   }
}
