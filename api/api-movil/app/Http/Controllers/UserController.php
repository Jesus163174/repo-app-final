<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
class UserController extends Controller{

    public function register(Request $request){
        $user = new User();
        $request['password'] = bcrypt($request->password);
        $user = $user->store($request->all());
        return response()->json('0',200);
    }

}
