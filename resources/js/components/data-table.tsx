import type { ReactNode } from 'react';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

/**
 * Defines a table column configuration.
 *
 * @template T Table item type
 */
export interface Column<T> {
    /**
     * Object key used to extract the value from the item.
     */
    key: keyof T;

    /**
     * Column label displayed in the table header.
     */
    label: string;

    /**
     * Optional custom cell renderer.
     *
     * Useful for:
     * - badges
     * - buttons
     * - formatted dates
     * - actions
     * - links
     *
     * @param item Current row item
     *
     * @returns Rendered cell content
     */
    render?: (item: T) => ReactNode;
}

/**
 * Generic paginated collection structure.
 *
 * @template T Collection item type
 */
export interface DataTableCollection<T> {
    /**
     * Collection items.
     */
    data: T[];
}

/**
 * Generic reusable data table component.
 *
 * Features:
 * - Fully typed with generics
 * - Dynamic column rendering
 * - Optional custom cell rendering
 * - Reusable across dashboard resources
 *
 * Example:
 * - posts
 * - users
 * - categories
 * - comments
 *
 * @template T Table item type
 */
interface DataTableProps<T> {
    /**
     * Paginated collection returned by Laravel.
     */
    collection: DataTableCollection<T>;

    /**
     * Table columns configuration.
     */
    columns: Column<T>[];
}

/**
 * Generic reusable dashboard table component.
 *
 * @template T Table item type
 */

export function DataTable<T extends { id: number | string }>({
    collection,
    columns,
}: DataTableProps<T>) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    {columns.map((column) => (
                        <TableHead key={String(column.key)}>
                            {column.label}
                        </TableHead>
                    ))}
                </TableRow>
            </TableHeader>

            <TableBody>
                {collection.data.map((item) => (
                    <TableRow key={item.id}>
                        {columns.map((column) => (
                            <TableCell key={String(column.key)}>
                                {column.render
                                    ? column.render(item)
                                    : String(item[column.key])}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}