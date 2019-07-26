<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Report;
class ReportController extends Controller{

    public function index(){
        $data = null;
        try{    
            $reports = Report::getReports()->user()->get();
            
            $data = array(
                'reports'=>$reports,
                'succes'=>true,
                'length'=>$reports->count(),
                'status'=>202,
                "message"=>''
            );
            return response()->json($data,200);
        }catch(Exception $e){  
            $data = array(
                'reports'=>'',
                'succes'=>$false,
                'lenght'=>'0',
                'status'=>500,
                'message'=>$e->getMessage()
            ); 
            return response()->json($data,200);
        }

    }
    public function store(Request $request){
        $response = null;
        try{
            $report = new Report();
            //return $request;
            $request['fecha'] = now()->format('Y-m-d');
            $save   = $report->store($request->all());
            $response = array(
                'message'=>'Reporte creado exitosamente',
                'status'=>202
            );
            return response()->json($response,200);
        }catch(Exception $e){
            $response = array(
                'message'=>'Error al crear reporte, '.$e->getMessage(),
                'status'=>202
            );
            return response()->json($reponse,500);
        }
    }
    public function show($id){
        $date = null;
        try{
            $report = Report::find($id);
            $date = array(
                'report'=>$report,
                'status'=>202
            );
            return response()->json($date,200);
        }catch(Exception $e){
            $data = array(
                'reports'=>'',
                'status'=>500,
                'message'=>$e->getMessage()
            ); 
            return response()->json($data,200);
        }
    }
    public function update(Request $request, $id){
        $reponse = null;
        try{
            $report = Report::find($id);
            $report->edit($request,$report);
            $reponse = array(
                'message'=>'Reporte creado exitosamente',
                'status'=>202
            );
        }catch(Exception $e){
            $reponse = array(
                'message'=>'Error al crear reporte, '.$e->getMessage(),
                'status'=>202
            );
            return response()->json($reponse,500);
        }
    }
    public function destroy($id){
        $response = null;
        $reponse = null;
        try{
            $report = Report::find($id);
            $report->destroy();
            $reponse = array(
                'message'=>'Reporte eliminado',
                'status'=>202
            );
        }catch(Exception $e){
            $reponse = array(
                'message'=>'Error al crear reporte, '.$e->getMessage(),
                'status'=>500
            );
            return response()->json($reponse,500);
        }
    }
}
