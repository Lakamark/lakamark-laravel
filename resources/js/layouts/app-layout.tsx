import type { ComponentType } from 'react';
import type { ReactNode } from 'react';
import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import type { BreadcrumbItem } from '@/types';

interface AppLayoutProps {
    breadcrumbs?: BreadcrumbItem[];
    children: ReactNode;
}

/**
 * Main application layout wrapper.
 *
 * This component is responsible for rendering the shared
 * dashboard/application shell around Inertia pages.
 *
 * Features:
 * - Sidebar layout integration
 * - Shared navigation structure
 * - Breadcrumb rendering
 * - Persistent layout support with Inertia
 */

export default function AppLayout({
    breadcrumbs = [],
    children,
}: AppLayoutProps) {
    return (
        <AppLayoutTemplate breadcrumbs={breadcrumbs}>
            {children}
        </AppLayoutTemplate>
    );
}

type InertiaPageComponent<T = object> = ComponentType<T> & {
    layout?: (page: ReactNode) => ReactNode;
};

/**
 * Attaches the application layout to an Inertia page component.
 *
 * This helper enables Inertia persistent layouts by assigning
 * a `layout` property directly on the page component.
 *
 * Benefits:
 * - Prevents full layout remounts between page navigations
 * - Preserves layout state (sidebar, scroll, UI state, etc.)
 * - Centralizes dashboard page structure
 * - Reduces layout duplication across pages
 *
 * @template T Page component props
 *
 * @param breadcrumbs Breadcrumb configuration displayed in the layout
 * @param Component Inertia page component
 *
 * @returns The same page component enhanced with a persistent layout
 */
export function withAppLayout<T extends object>(
    breadcrumbs: BreadcrumbItem[],
    Component: ComponentType<T>,
): InertiaPageComponent<T> {
    const Page = Component as InertiaPageComponent<T>;

    Page.layout = (page: ReactNode) => (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="p-4 lg:p-6">
                {page}
            </div>
        </AppLayout>
    );

    return Page;
}