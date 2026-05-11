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
 * Standard data-backed table column.
 *
 * Uses a model property key to automatically
 * render the cell value.
 *
 * Example:
 * {
 *   key: 'title',
 *   label: 'Title',
 * }
 */
type DataColumn<T> = {
    type?: 'data';

    /**
     * Unique column identifier.
     */
    key: keyof T;

    /**
     * Object key used to extract the value from the item.
     */
    label: string;

    /**
     * Column label displayed in the table header.
     */
    render?: (item: T) => ReactNode;
};

/**
 * UI-only display column.
 *
 * Does not map directly to a model property.
 * Must provide a custom render function.
 *
 * Useful for:
 * - actions
 * - buttons
 * - dropdowns
 * - icons
 * - custom layouts
 *
 * Example:
 * {
 *   type: 'display',
 *   id: 'actions',
 *   label: 'Actions',
 *   render: () => <Button>Edit</Button>,
 * }
 */
type DisplayColumn<T> = {
    type: 'display';
    id: string;
    label: string;
    render: (item: T) => ReactNode;
};

/**
 * Supported table column definitions.
 *
 * - DataColumn:
 *   Maps directly to a model property.
 *
 * - DisplayColumn:
 *   Fully custom rendered column.
 */
export type Column<T> = DataColumn<T> | DisplayColumn<T>;

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
                    {columns.map((column: Column<T>) => {
                        const columnId = getColumnId(column);

                        return (
                            <TableHead key={columnId}>
                                {column.label}
                            </TableHead>
                        );
                    })}
                </TableRow>
            </TableHeader>

            <TableBody>
                {collection.data.map((item: T) => (
                    <TableRow key={item.id}>
                        {columns.map((column: Column<T>) => {
                            const columnId = getColumnId(column);

                            return (
                                <TableCell key={columnId}>
                                    {column.render
                                        ? column.render(item)
                                        : column.type !== 'display'
                                          ? String(item[column.key] ?? '')
                                          : null}
                                </TableCell>
                            );
                        })}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

/**
 * Resolves the unique identifier used for React keys.
 *
 * - Display columns use their explicit `id`
 * - Data columns use their model property `key`
 *
 * @template T Table item type
 *
 * @param column Table column definition
 *
 * @returns Unique column identifier
 */
function getColumnId<T>(column: Column<T>): string {
    return column.type === 'display'
        ? column.id
        : String(column.key);
}