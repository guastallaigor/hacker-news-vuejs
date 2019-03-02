<?php

namespace App\Http\Services;

use App\Enums\Endpoint;
use App\Enums\Page;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;

class HackerNewsService extends RestService
{
    const JSON = '.json?';
    const OPTION_TOP = 'top';
    const OPTION_NEW = 'new';
    const OPTION_BEST = 'best';

    public function getTopStories(Request $request)
    {
        return $this->getStories($request, self::OPTION_TOP);
    }

    public function getNewStories(Request $request)
    {
        return $this->getStories($request, self::OPTION_NEW);
    }

    public function getBestStories(Request $request)
    {
        return $this->getStories($request, self::OPTION_BEST);
    }

    public function getItem($item)
    {
        $endpoint = Endpoint::ITEM.'/'.$item.self::JSON;

        return $this->sendRequest($endpoint);
    }

    public function getUser($id)
    {
        $endpoint = Endpoint::USER.'/'.$id.self::JSON;

        return $this->sendRequest($endpoint);
    }

    private function getStories(Request $request, $option)
    {
        $limit = $this->getLimit($request);
        $page = $this->getPage($request);
        $endpoint = $this->getEndpointBasedOnOption($option);
        $stories = $this->sendRequest($endpoint);

        $data = collect($stories)
            ->filter(function ($value, $key) use ($page) {
                return $key > (($page - 1) * Page::PER_PAGE);
            })
            ->take($limit)
            ->map(function ($story) {
                return $this->getItem($story);
            })
            ->toArray();

        $paginator = new LengthAwarePaginator(
            array_values($data),
            sizeof($stories),
            $limit,
            $page
        );

        return $paginator;
    }

    private function getEndpointBasedOnOption($option)
    {
        switch ($option) {
            case self::OPTION_TOP:
                return Endpoint::TOP_STORIES.self::JSON;
            case self::OPTION_NEW:
                return Endpoint::NEW_STORIES.self::JSON;
            case self::OPTION_BEST:
                return Endpoint::BEST_STORIES.self::JSON;
        }
    }
}
