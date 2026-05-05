<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <title>{{ config('app.name', 'Laka Mark') }}</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        @vite([
            'resources/css/frontend/app.scss',
            'resources/js/frontend/app.ts',
        ])
    </head>
    <body>
        <div id="app">
            @yield('content')
        </div>
    </body>
</html>