import { Link } from '@inertiajs/react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

import type { ReactNode } from 'react';

import { Button } from '@/components/ui/button';

import type { PaginatedCollection, PaginationLink } from '@/types';

interface CollectionPaginationProps {
    collection: PaginatedCollection<unknown>;
}

/**
 * Generic paginated collection navigation component.
 *
 * Designed for Laravel paginator responses used with Inertia.
 *
 * Features:
 * - Previous / next navigation
 * - Active page state
 * - Disabled links handling
 * - Reusable across dashboard resources
 */
export function CollectionPagination({
    collection,
}: CollectionPaginationProps) {
    return (
        <div className="flex items-center justify-between">
            <div className="hidden flex-1 text-sm text-muted-foreground lg:flex">
                Page {collection.current_page} of {collection.last_page}
            </div>

            <nav role="navigation" aria-label="Pagination">
                <ul className="flex items-center gap-1">
                    {collection.links.map(
                        (link: PaginationLink, index: number) => (
                            <li key={index}>
                                <Button
                                    disabled={link.url === null}
                                    aria-current={
                                        link.active ? 'page' : undefined
                                    }
                                    data-active={link.active}
                                    variant={link.active ? 'outline' : 'ghost'}
                                    size="icon"
                                    asChild
                                >
                                    <Link href={link.url ?? '#'} preserveScroll>
                                        {renderLabel(
                                            link.label,
                                            index,
                                            collection.links.length,
                                        )}
                                    </Link>
                                </Button>
                            </li>
                        ),
                    )}
                </ul>
            </nav>
        </div>
    );
}

/**
 * Renders a pagination label.
 *
 * Converts the first and last pagination items
 * into navigation icons.
 *
 * @param label Pagination label
 * @param index Current item index
 * @param count Total pagination item count
 *
 * @returns Rendered pagination content
 */
function renderLabel(label: string, index: number, count: number): ReactNode {
    if (index === 0) {
        return <ChevronLeftIcon />;
    }

    if (index === count - 1) {
        return <ChevronRightIcon />;
    }

    return label;
}
