import {
    $,
    lockBodyScroll,
    unlockBodyScroll
} from '@/frontend/dom';
import { AbstractModule } from '@/frontend/modules/AbstractModule';

/**
 * Header module.
 *
 * Responsibilities:
 * - Handle mobile navigation toggle state
 * - Sync accessibility attributes
 * - Bind and cleanup DOM event listeners
 *
 * This module is intentionally UI-agnostic and only manages
 * behavioral state classes and accessibility attributes.
 *
 * Expected DOM structure:
 *
 * - [data-lmk-header]
 * - [data-lmk-menu]
 * - [data-lmk-hamburger]
 *
 * Applied CSS states:
 *
 * - is-menu-open
 */
export class HeaderModule extends AbstractModule {
    readonly name: string = 'header';

    /**
     * Header root element.
     */
    private header: HTMLElement | null = null;

    /**
     * Navigation menu element.
     */
    private menu: HTMLElement | null = null;

    /**
     * Hamburger toggle button.
     */
    private hamburger: HTMLButtonElement | null = null;

    /**
     * Toggles the mobile navigation menu state.
     *
     * Updates:
     * - header state classes
     * - hamburger accessibility attributes
     */
    private readonly onToggleMenu = (): void => {
        if (!this.menu || !this.hamburger || !this.header) {
            return;
        }

        const isOpen: boolean = this.header.classList.toggle('is-menu-open');

        this.hamburger.setAttribute('aria-expanded', String(isOpen));

        if (isOpen) {
            lockBodyScroll();

            return;
        }

        unlockBodyScroll();
    };

    /**
     * Mounts the header module.
     *
     * Responsibilities:
     * - Resolve required DOM elements
     * - Bind UI event listeners
     */
    protected onMount(): void {
        this.header = $('[data-lmk-header]');
        this.menu = $('[data-lmk-menu]');
        this.hamburger = $('[data-lmk-hamburger]');

        if (!this.header || !this.menu || !this.hamburger) {
            return;
        }

        this.hamburger.addEventListener('click', this.onToggleMenu);

        window.addEventListener('resize', this.onResize);
    }

    /**
     * Destroys the header module.
     *
     * Responsibilities:
     * - Remove event listeners
     * - Prevent duplicated bindings after Turbo navigation
     */
    protected onDestroy(): void {
        this.hamburger?.removeEventListener('click', this.onToggleMenu);
        window.removeEventListener('resize', this.onResize);

        this.header?.classList.remove('is-menu-open');
        this.hamburger?.setAttribute('aria-expanded', 'false');

        unlockBodyScroll();

        this.header = null;
        this.menu = null;
        this.hamburger = null;
    }

    /**
     * Resets the mobile menu state on desktop breakpoints.
     *
     * Prevents stale mobile UI states when resizing
     * between mobile and desktop layouts.
     */
    private readonly onResize = (): void => {
        if (!this.header || !this.hamburger) {
            return;
        }

        if (window.innerWidth >= 980) {
            this.header.classList.remove('is-menu-open');

            this.hamburger.setAttribute('aria-expanded', 'false');

            unlockBodyScroll();
        }
    };
}