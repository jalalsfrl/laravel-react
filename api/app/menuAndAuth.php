<?php

namespace App;


use Illuminate\Support\Facades\DB;

class menuAndAuth
{

    private static $table = 'menu';
    private static $table_auth = 'auth';
    private static $table_dashboard = 'dashboard';

    public static function getAll() {
        $query = DB::table(static::$table)
            ->get();
        return $query;
    }

    public static function update($data){

          echo $data;
          $data = json_decode($data);
          static::test_PHP($data);

        foreach ($data as $datum) {
            static::test_PHP($datum->id);
            DB::table(static::$table)
                ->where('id', '=',$datum->id )->update(['chinese'=>$datum->chinese]);
        }

        $query = DB::table(static::$table)->get();

        return $query;

    }

    public static function get_Auth() {
        $query = DB::table(static::$table_auth)
            ->get();
        return $query;
    }

    public static function update_Auth($data){


        $data = json_decode($data);

        foreach ($data as $datum) {
            DB::table(static::$table_auth)
                ->where('id', '=',$datum->id )->update(['chinese'=>$datum->chinese]);
        }

        $query = DB::table(static::$table_auth)->get();

        return $query;

    }

    public static function get_dashboard(){
        $query = DB::table(static::$table_dashboard)
            ->get();
        return $query;
    }

    public static function update_dashboard($data){
        $data = json_decode($data);

        foreach ($data as $datum) {
            DB::table(static::$table_dashboard)
                ->where('id', '=',$datum->id )->update(['chinese'=>$datum->chinese]);
        }

        $query = DB::table(static::$table_dashboard)->get();

        return $query;
    }

    public static function get_table($table_name){
        $query = DB::table($table_name)
            ->get();
        return $query;
    }

    public static function update_table($table_name, $data){
                $data = json_decode($data);

        foreach ($data as $datum) {
            DB::table($table_name)
                ->where('id', '=',$datum->id )->update(['chinese'=>$datum->chinese]);
        }

        $query = DB::table($table_name)->get();

        return $query;
}

    public static function test_PHP($variable)
    {
        echo '<script>';
        echo 'console.log(' . json_encode($variable) . ')';
        echo '</script>';
    }
}
