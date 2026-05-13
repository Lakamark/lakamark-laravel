/**
 * Queries a required DOM element from a root node.
 *
 * Unlike `queryOptional`, this helper throws an error
 * when the element cannot be found.
 *
 * @param root - Root node used for the query.
 * @param selector - CSS selector to match.
 *
 * @returns The matching DOM element.
 *
 * @throws Error When no matching element is found.
 */
export function queryRequired<T extends Element>(
    root: ParentNode,
    selector: string,
): T {
    const element = root.querySelector<T>(selector);

    if (!element) {
        throw new Error(`Missing required element: "${selector}".`);
    }

    return element;
}
