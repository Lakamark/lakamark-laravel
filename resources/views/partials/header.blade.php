<div class="header-wrapper" id="main-header">
    <header class="header">
        <div class="header__inner">

            <div class="header__brand">
                <div class="header__brand-logo">
                    <a href="{{ route('home') }}" title="Home Page">
                        logo here
                    </a>
                </div>

                <x-hamburger-button />
            </div>

            <nav class="nav-menu-wrapper" id="menuNav" aria-label="Main navigation" role="navigation">
                <x-main-navigation />
                <x-user-navigation />
            </nav>

        </div>
    </header>
</div>