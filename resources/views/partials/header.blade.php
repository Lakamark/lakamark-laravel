<div class="header-wrapper" id="main-header">
    <header class="header">
        <div class="header__inner">

            <div class="header__brand">
                <div class="header__brand-logo">
                    <a href="{{ route('home') }}" title="Home Page">
                        <x-brand.logo/>
                    </a>
                </div>

                <x-hamburger-button />
            </div>

            <nav class="nav-menu-wrapper" id="menuNav" aria-label="Main navigation" role="navigation">
                <x-main-navigation />
                <x-user-navigation />

                @auth
                    <form method="POST" action="{{ route('logout') }}" data-turbo="false">
                        @csrf

                        <button type="submit">
                            Logout
                        </button>
                    </form>
                @endauth
            </nav>

        </div>
    </header>
</div>