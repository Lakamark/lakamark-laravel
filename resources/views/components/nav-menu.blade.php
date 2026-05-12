@props([
    'items' => [],
])

<ul
        {{ $attributes->merge(['class' => 'nav-menu']) }}
        role="list"
>
    @foreach ($items as $item)
        <li class="nav-menu__entry">
            <a
                    @class([
                        'nav-menu__link',
                        'is-active' => $item['active'] ?? false,
                    ])
                    href="{{ $item['url'] }}"
                    title="{{ $item['title'] ?? $item['label'] }}"
                    @if ($item['active'] ?? false)
                        aria-current="page"
                    @endif
            >
                {{ $item['label'] }}
            </a>
        </li>
    @endforeach
</ul>