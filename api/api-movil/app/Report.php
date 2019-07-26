<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Report extends Model{

    private $table = 'reports';
    private $primaryKey = 'id';
    private $fillable = [
        'nameReport',
        'imagen',
        'fecha',
        'usuario'
    ];
    public function user(){
        return $this->belongsTo('App\User');
    }
    public function scopeGetAllReports($query){
        return $query->orderById();
    }
    public function scopeGetReportsByReporter($query,$user){
        return $query->byReporter($user)->orderById();
    }
    public function scopeByReporter($query,$reporter){
        return $query->where('usuario',$reporter);
    }
    public function scopeOrderById($query){
        return $query->orderBy('id','desc');
    }
    public function validate($request){
        return $request->validate([
            'nameReport'=>'required',
            'descripcion'=>'required',
        ]);
    }
    public function store($request){
        return User::create($request);
    }
    public function edit($request,$report){
        return $report->fill($request)->save();
    }
}
