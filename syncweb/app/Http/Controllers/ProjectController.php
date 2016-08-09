<?php

namespace SyncWeb\Http\Controllers;

use Illuminate\Http\Request;
use SyncWeb\Models\Project;
use SyncWeb\Http\Requests;

class ProjectController extends Controller {
  /**
   * GET	
   * - index
   * - create
   * - show 
   * - edit
   */
  public function index() {
    return view('projects.index', []);
  }
  public function create() {}
  public function show($id) {}
  public function edit($id) {}
  /**
   * POST
   *  - store
   */
  public function store() {}
  
  /**
   * PUT/PATCH
   * - update	
   */
  public function update($id) {}
  
  /**
   * DELETE
   * - destroy
   */
  public function destroy($id) {}
  
  public function list() { 
    $data = json_encode([]);
    return response($data)
      ->withHeaders([
        'Content-Type' => 'application/json',
        'Content-Length' => strlen($data)
      ]);
  }
}
