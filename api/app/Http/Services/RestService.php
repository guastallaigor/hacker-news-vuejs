<?php

namespace App\Http\Services;

use GuzzleHttp\Client as GuzzleClient;
use GuzzleHttp\Exception\RequestException;
use Illuminate\Http\Request;
use App\Enums\Page;

class RestService
{
    protected $client;

    public function __construct()
    {
        $this->client = new GuzzleClient([
            'base_uri' => env('BASE_URI'),
            'cookies' => true,
        ]);
    }

    protected function sendRequest($endpoint, $method = 'GET', $payload = [])
    {
        try {
            $response = $this->client->request($method, $endpoint, $payload);

            return json_decode($response->getBody()->getContents(), true);
        } catch (RequestException $error) {
            throw $error;
        }
    }

    protected function getLimit(Request $request)
    {
        return $request->get('limit') ?: Page::PER_PAGE;
    }

    protected function getPage(Request $request)
    {
        return $request->get('page') ?: 1;
    }
}
