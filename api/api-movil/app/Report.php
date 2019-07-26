<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Report extends Model{

    protected $table = 'reports';
    protected $primaryKey = 'id';
    protected $fillable = [
        'nameReport',
        'imagen',
        'fecha',
        'usuario',
        'descripcion'
    ];
    public function user(){
        return $this->belongsTo('App\User');
    }
    public function scopeGetReports($query){
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
        return Report::create($request);
    }
    public function edit($request,$report){
        return $report->fill($request)->save();
    }
}
