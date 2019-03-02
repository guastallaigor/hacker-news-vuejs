<?php

namespace App\Http\Controllers;

use App\Http\Services\HackerNewsService;
use Illuminate\Http\Request;

class HackerNewsController
{
    private $service;

    public function __construct()
    {
        $this->service = new HackerNewsService();
    }

    public function getTopStories(Request $request)
    {
        $topStories = $this->service
            ->getTopStories($request);

        return response()->json($topStories);
    }

    public function getNewStories(Request $request)
    {
        $newStories = $this->service
            ->getNewStories($request);

        return response()->json($newStories);
    }

    public function getBestStories(Request $request)
    {
        $bestStories = $this->service
            ->getBestStories($request);

        return response()->json($bestStories);
    }

    public function getUser(Request $request, $id)
    {
        $user = $this->service
            ->getUser($id);

        return response()->json($user);
    }
}
