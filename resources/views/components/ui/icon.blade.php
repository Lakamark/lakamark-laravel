@props([
    'name'
])

<svg
        {{ $attributes }}
        fill="none"
        aria-hidden="true"
>
    <use href="{{ asset('images/icons.svg') }}#{{ $name }}"></use>
</svg>