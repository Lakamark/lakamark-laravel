const SCROLL_LOCK_CLASS = 'is-scroll-locked';

let lockCount = 0;

/**
 * Locks document scrolling globally.
 *
 * The lock is applied to both <html> and <body> because depending on the
 * layout, the scroll container may be one or the other.
 */
export function lockBodyScroll(): void {
    lockCount += 1;

    document.documentElement.classList.add(SCROLL_LOCK_CLASS);
    document.body.classList.add(SCROLL_LOCK_CLASS);
}

/**
 * Releases one scroll lock.
 *
 * Scrolling is only restored when all active locks have been released.
 */
export function unlockBodyScroll(): void {
    lockCount = Math.max(0, lockCount - 1);

    if (lockCount === 0) {
        document.documentElement.classList.remove(SCROLL_LOCK_CLASS);
        document.body.classList.remove(SCROLL_LOCK_CLASS);
    }
}

/**
 * Forces all scroll locks to be cleared.
 *
 * Useful before Turbo caches the current page.
 */
export function forceUnlockBodyScroll(): void {
    lockCount = 0;

    document.documentElement.classList.remove(SCROLL_LOCK_CLASS);
    document.body.classList.remove(SCROLL_LOCK_CLASS);
}

/**
 * Checks whether global document scrolling is currently locked.
 */
export function isBodyScrollLocked(): boolean {
    return (
        document.documentElement.classList.contains(SCROLL_LOCK_CLASS) ||
        document.body.classList.contains(SCROLL_LOCK_CLASS)
    );
}
