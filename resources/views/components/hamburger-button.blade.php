@props([
    'controls' => 'menuNav',
    'label' => 'Open menu',
])

<div {{ $attributes->merge(['class' => 'header__brand-button']) }}>
    <button
            class="header__hamburger"
            type="button"
            id="menu-toggle"
            aria-controls="{{ $controls }}"
            aria-expanded="false"
            aria-label="{{ $label }}"
    >
        <span></span>
    </button>
</div>