<?php

namespace App\Http\Controllers\Base;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Traits\ApiResponser;
use App\Models\Teacher;
use App\Models\Subjectclass;

class TeacherController extends Controller
{
    use ApiResponser;

    public function __construct()
{
    $this->middleware('isUser', ['only' => ['show','updateSelf']]);
    $this->middleware('isAdmin', ['only' => ['show','store','update','destroy']]); //
    $this->middleware('isProprietor', ['only' => ['show','store','update','destroy']]);
}

 /*** Helper Functions */
 public static function getAllTeachersinSchool($schid){ //Helpher One
   
    $subclass = Subjectclass::whereHas('teacher', function (Builder $query) use ($schid) {
        $query->where('sch_id', '=', $schid);
    })->get();

    //$teachers = Subjectclass::where('school_id',$schid)->where('_type', 0)->where('_status', 1)->get();        
    return  $subclass;
}

  public static function getTeacherName($teaid){ //Helpher One
        $teacher = Teacher::where('id',$teaid)->first();        
        return  $teacher->fname. " ".  $teacher->lname;
  }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $teachers = Teacher::all();
        //return response()->json($teachers->toArray());
        return $this->success("All Teacher data gotten",  $teachers->toArray() );  
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'fname' => 'required|max:255',
            'lname' => 'required|string',
            'gender' => 'required|string|max:1',
            'agerange' => 'required|string',
            'bias' => 'required|string',
            'coursetype' => 'required|string',

            'qualification' => 'required|string',
            'experience' => 'string',
            'status' => 'required|numeric',
            'type_of' => 'required|numeric',
            'sch_id'=>'required|numeric'
        ]);

        if ($validator->fails()) {
           
           return $this->error($validator->errors(), 400);
        }

        $teacher = new Teacher;
        $teacher->fill($request->all());
        $teacher->save();

        return $this->success("Teacher data created",  $request->all() );  
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $teacher = Teacher::findOrFail($id);
    
        return $this->success("Teacher data gotten",  $teacher );   
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $teacher = Teacher::findOrFail($id);
            $teacher->fill($request->all());
            $teacher->save();
    
            return $this->success("Teacher updated", $request->all() );   

        } catch (Exception $e) {
            return $this->error($e->getMessage(), 400);
        }
    }

     /**
     * Update the current logged in Teacher
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function updateSelf(Request $request)
    {
        try {
            $teacher = Teacher::findOrFail(Auth::id());
            $teacher->fill($request->all());
            $teacher->save();
    
            return $this->success("Teacher updated himself", $request->all() );           

        } catch (Exception $e) {
            return $this->error($e->getMessage(), 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $teacher = Teacher::findOrFail($id);
            $teacher->delete();
    
            return $this->success("Teacher deleted", $teacher);

        } catch (Exception $e) {
           
            return $this->error($e->getMessage(), 400);
            
        }
    }
}
