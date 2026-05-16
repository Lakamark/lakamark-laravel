/**
 * Finds a DOM element.
 *
 * @param selector - DOM selector.
 *
 * @returns Matching element or null.
 */
export function $<T extends Element>(selector: string): T | null {
    return document.querySelector<T>(selector);
}

/**
 * Finds all matching DOM elements.
 *
 * @param selector - DOM selector.
 *
 * @returns Matching DOM elements.
 */
export function $$<T extends Element>(
    selector: string
): T[] {
    return Array.from(
        document.querySelectorAll<T>(selector)
    );
}

/**
 * Finds a required DOM element.
 *
 * @param selector - DOM selector.
 *
 * @throws Error When the element is missing.
 */
export function required$<T extends Element>(
    selector: string
): T {
    const element = document.querySelector<T>(selector);

    if (!element) {
        throw new Error(
            `Missing required element: ${selector}`
        );
    }

    return element;
}
