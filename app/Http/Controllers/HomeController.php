<?php

namespace App\Http\Controllers;

use Illuminate\View\View;

class HomeController extends Controller
{
    /**
     * Display the public homepage.
     *
     * @return View
     */
    public function index(): View
    {
        return view('home.index');
    }
}
