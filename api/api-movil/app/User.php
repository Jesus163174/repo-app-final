<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;
    protected $fillable = [
        'name', 'email', 'password','first_name','rol',
    ];
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function store($request){
        return User::create($request);
    }
}
