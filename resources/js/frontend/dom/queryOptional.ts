/**
 * Safely queries a DOM element from a root node.
 *
 * Returns `null` when no matching element is found.
 *
 * @param root - Root node used for the query.
 * @param selector - CSS selector to match.
 */
export function queryOptional<T extends Element>(
    root: ParentNode,
    selector: string,
): T | null {
    return root.querySelector<T>(selector);
}
