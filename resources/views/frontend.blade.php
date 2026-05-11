<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <title>{{ config('app.name', 'Laka Mark') }}</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=roboto:400,500,700" rel="stylesheet">

        @vite([
            'resources/css/frontend/app.scss',
            'resources/js/frontend/app.ts',
        ])

        <script id="lmk-config" type="application/json">
            {!! json_encode([
                'app' => [
                    'name' => config('app.name'),
                    'env' => app()->environment(),
                    'locale' => app()->getLocale(),
                ],

                'user' => auth()->check() ? [
                    'id' => auth()->id(),
                    'username' => auth()->user()->username,
                    'role' => auth()->user()->role->value,
                    'theme' => auth()->user()->theme,
                    'language' => auth()->user()->language,
                    'isLogged' => true,
                    'isStaff' => auth()->user()->role->isStaff(),
                    'canAccessDashboard' => auth()->user()->role->canAccessDashboard(),
                ] : [
                    'id' => null,
                    'username' => null,
                    'role' => null,
                    'theme' => null,
                    'language' => app()->getLocale(),
                    'isLogged' => false,
                    'isStaff' => false,
                    'canAccessDashboard' => false,
                ],

                'routes' => [
                    'home' => route('home'),
                    'account' => [
                        'login' => route('login'),
                        'logout' => route('logout'),
                        'register' => route('register'),
                        'dashboard' => route('dashboard.index'),
                    ]
                ],
                'apiEndpoints' => [],
                'features' => [
                    'darkMode' => true,
                    'accountMenu' => true,
                ],
            ], JSON_THROW_ON_ERROR) !!}
        </script>
    </head>
    <body>
        <div class="page-wrapper" id="app">
            <main class="page-content">
                @yield('content')
            </main>
        </div>
    </body>
</html>