<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ProjectTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testProjectListingPage() {
        $response = $this->call('GET', 'projects');
        
        $this->assertTrue(true);
    }
    
    public function testProjectPage() {
      $response = $this->call('GET', 'projects/a');
      
      $this->assertResponseStatus(404);
      
    }
}
