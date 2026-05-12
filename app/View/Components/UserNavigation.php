<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\Component;

class UserNavigation extends Component
{
    /**
     * User navigation items.
     *
     * @var array<int, array<string, mixed>>
     */
    public array $items = [];

    /**
     * Create a new component instance.
     */
    public function __construct()
    {
        $this->items = Auth::check()
            ? [
                [
                    'label' => 'Account',
                    'url' => route('account.index'),
                    'title' => 'My Account',
                ],
            ]
            : [
                [
                    'label' => 'Login',
                    'url' => route('login'),
                    'title' => 'Login to your account',
                ],
                [
                    'label' => 'Sign up',
                    'url' => route('register'),
                    'title' => 'Sign Up',
                ],
            ];
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.user-navigation');
    }
}
