<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Auth;
class UserController extends Controller{

    public function register(Request $request){
        $user = new User();
        $request['password'] = bcrypt($request->password);
        $user = $user->store($request->all());
        return response()->json('0',200);
    }

    public function login(Request $request){
        $request->validate([
            'email'       => 'required|string|email',
            'password'    => 'required|string',
        ]);        
        $credentials = request(['email', 'password']);
        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'Unauthorized'], 401);
        }
        return response()->json($request->user());
    }

}
