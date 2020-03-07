<?php

namespace App\Http\Controllers\Api\page;

use App\menuAndAuth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class menuController extends Controller
{
    public function getmenu(){

        $data = menuAndAuth::getAll();
        return response(json_encode($data));
    }

    public function updatemenu(Request $request){

        $data = $request->getContent();
        $data1 = menuAndAuth::update($data);
        return response( json_encode($data1));

    }

    public function getauth(){

        $data = menuAndAuth::get_Auth();
        return response(json_encode($data));
    }

    public function updateauth(Request $request){

        $data = $request->getContent();
        $data = menuAndAuth::update_Auth($data);
        return response( json_encode($data));

    }

    public function get_dashboard(){

        $data = menuAndAuth::get_dashboard();
        return response(json_encode($data));
    }

    public function update_dashboard(Request $request){

        $data = $request->getContent();
        $data = menuAndAuth::update_dashboard($data);
        return response( json_encode($data));

    }

    public function get_package(){

        $data = menuAndAuth::get_table("package");
        return response(json_encode($data));
    }

    public function update_package(Request $request){

        $data = $request->getContent();
        $data = menuAndAuth::update_table("package", $data);
        return response( json_encode($data));

    }
    public function test_PHP($variable)
    {
        echo '<script>';
        echo 'console.log(' . json_encode($variable) . ')';
        echo '</script>';
    }
}
