<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class MainNavigation extends Component
{
    /**
     * Navigation items.
     *
     * @var array<int, array<string, mixed>>
     */
    public array $items = [];

    /**
     * Create a new component instance.
     */
    public function __construct()
    {
        $this->items = [
            [
                'label' => 'Blog',
                'url' => '#',
                'title' => 'Read the Laka Mark blog.',
                'active' => request()->routeIs('blog.*'),
            ],
            [
                'label' => 'Projects',
                'url' => '#',
                'title' => 'Explore LakaMark projects',
                'active' => request()->routeIs('projects.*'),
            ],
            [
                'label' => 'Events',
                'url' => '#',
                'title' => 'Explore LakaMark events',
                'active' => request()->routeIs('events.*'),
            ],
            [
                'label' => 'Shop',
                'url' => 'https://shop.lakamark.com',
                'title' => "Discover the last Laka Mark's merch.",
                'active' => request()->routeIs('shop.*'),
            ],
            [
                'label' => 'Contact',
                'url' => '#',
                'title' => 'Contact us',
                'active' => request()->routeIs('contact.*'),
            ],
        ];
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.main-navigation');
    }
}
