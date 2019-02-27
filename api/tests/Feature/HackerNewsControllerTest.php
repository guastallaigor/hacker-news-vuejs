<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Enums\Page;

class HackerNewsControllerTest extends TestCase
{
    /**
     * @var array $baseJsonStructure
     */
    private $baseJsonStructure = [
        'current_page',
        'data' => [
            '*' => [
                'by',
                'descendants',
                'id',
                'score',
                'time',
                'title',
                'type',
            ]
        ],
        'first_page_url',
        'from',
        'last_page',
        'last_page_url',
        'next_page_url',
        'path',
        'per_page',
        'to',
        'total',
    ];

    /**
     * @var array $baseJsonFragment
     */
    private $baseJsonFragment = [
        'current_page' => 1,
        'from' => 1,
        'per_page' => Page::PER_PAGE,
        'to' => Page::PER_PAGE,
    ];

    /**
     * @var string $topStoriesEndpoint
     */
    private $topStoriesEndpoint = 'api/v1/top-stories';

    /**
     * @var string $newStoriesEndpoint
     */
    private $newStoriesEndpoint = 'api/v1/new-stories';

    /**
     * @var string $bestStoriesEndpoint
     */
    private $bestStoriesEndpoint = 'api/v1/best-stories';

    public function testGetTopStoriesPaginatedFromTheFirstPage()
    {
        // When we try to get all the top stories from the first page of hacker news
        $response = $this->json('GET', $this->topStoriesEndpoint.'?page=1');

        // It should return a paginated json the same as the baseJsonStructure
        $response
            ->assertStatus(200)
            ->assertJsonStructure($this->baseJsonStructure)
            ->assertJsonFragment($this->baseJsonFragment);
    }

    public function testGetNewStoriesPaginatedFromTheFirstPage()
    {
        // When we try to get all the new stories from the first page of hacker news
        $response = $this->json('GET', $this->newStoriesEndpoint.'?page=1');

        // It should return a paginated json the same as the baseJsonStructure
        $response
            ->assertStatus(200)
            ->assertJsonStructure($this->baseJsonStructure)
            ->assertJsonFragment($this->baseJsonFragment);
    }

    public function testGetBestStoriesPaginatedFromFirstThePage()
    {
        // When we try to get all the best stories from the first page of hacker news
        $response = $this->json('GET', $this->bestStoriesEndpoint.'?page=1');

        // It should return a paginated json the same as the baseJsonStructure
        $response
            ->assertStatus(200)
            ->assertJsonStructure($this->baseJsonStructure)
            ->assertJsonFragment($this->baseJsonFragment);
    }
}
