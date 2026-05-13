import {
    forceUnlockBodyScroll,
    isBodyScrollLocked,
    lockBodyScroll,
    unlockBodyScroll,
} from '@/frontend/dom/bodyScrollLock';

describe('bodyScrollLock', () => {
    beforeEach(() => {
        document.documentElement.className = '';
        document.body.className = '';

        forceUnlockBodyScroll();
    });

    it('locks scrolling on both html and body', (): void => {
        lockBodyScroll();

        expect(document.documentElement).toHaveClass('is-scroll-locked');
        expect(document.body).toHaveClass('is-scroll-locked');
        expect(isBodyScrollLocked()).toBe(true);
    });

    it('unlocks scrolling on both html and body', (): void => {
        lockBodyScroll();

        unlockBodyScroll();

        expect(document.documentElement).not.toHaveClass('is-scroll-locked');
        expect(document.body).not.toHaveClass('is-scroll-locked');
        expect(isBodyScrollLocked()).toBe(false);
    });

    it('keeps scrolling locked while another lock is still active', (): void => {
        lockBodyScroll();
        lockBodyScroll();

        unlockBodyScroll();

        expect(document.documentElement).toHaveClass('is-scroll-locked');
        expect(document.body).toHaveClass('is-scroll-locked');
        expect(isBodyScrollLocked()).toBe(true);
    });

    it('unlocks scrolling after all locks are released', (): void => {
        lockBodyScroll();
        lockBodyScroll();

        unlockBodyScroll();
        unlockBodyScroll();

        expect(document.documentElement).not.toHaveClass('is-scroll-locked');
        expect(document.body).not.toHaveClass('is-scroll-locked');
    });

    it('does not break when unlocking without an active lock', (): void => {
        unlockBodyScroll();

        expect(document.documentElement).not.toHaveClass('is-scroll-locked');
        expect(document.body).not.toHaveClass('is-scroll-locked');
        expect(isBodyScrollLocked()).toBe(false);
    });

    it('forces scrolling to unlock regardless of active locks', (): void => {
        lockBodyScroll();
        lockBodyScroll();

        forceUnlockBodyScroll();

        expect(document.documentElement).not.toHaveClass('is-scroll-locked');
        expect(document.body).not.toHaveClass('is-scroll-locked');
        expect(isBodyScrollLocked()).toBe(false);
    });
});
