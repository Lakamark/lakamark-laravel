import { createInertiaApp } from '@inertiajs/react';

import type { ComponentType } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { initializeTheme } from '@/hooks/use-appearance';
import AppLayout from '@/layouts/app-layout';
import AuthLayout from '@/layouts/auth-layout';
import FrontendLayout from '@/layouts/frontend-layout';
import SettingsLayout from '@/layouts/settings/layout';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

/**
 * Represents a lazily loaded Inertia page module.
 */
type PageModule = {
    default: ComponentType;
};

/**
 * Lazily imports all available Inertia pages.
 */
const pages = import.meta.glob<PageModule>('./pages/**/*.tsx');

/**
 * Resolves the layout associated with an Inertia page.
 */
function resolveLayout(name: string) {
    if (name === 'welcome') {
        return null;
    }

    if (name.startsWith('auth/')) {
        return AuthLayout;
    }

    if (name.startsWith('settings/')) {
        return [AppLayout, SettingsLayout];
    }

    if (name.startsWith('frontend/')) {
        return FrontendLayout;
    }

    return AppLayout;
}

/**
 * Resolves and loads an Inertia page component.
 *
 * @throws {Error} When the requested page does not exist.
 */
async function resolvePage(name: string): Promise<ComponentType> {
    const page = pages[`./pages/${name}.tsx`];

    if (!page) {
        throw new Error(`Page not found: ${name}`);
    }

    const module = await page();

    return module.default;
}

/**
 * Initializes the persisted application theme before
 * the React application is mounted.
 */
initializeTheme();


/**
 * Bootstraps the Inertia.js React application.
 */
void createInertiaApp({
    /**
     * Generates the browser document title.
     */
    title: (title) => (title ? `${title} - ${appName}` : appName),

    /**
     * Resolves Inertia page components dynamically.
     */
    resolve: resolvePage,

    /**
     * Resolves the layout associated with a page.
     */
    layout: resolveLayout,

    /**
     * Enables additional React development checks.
     */
    strictMode: true,

    /**
     * Wraps the application with shared providers.
     */
    withApp(app) {
        return (
            <TooltipProvider delayDuration={0}>
                {app}
                <Toaster />
            </TooltipProvider>
        );
    },

    /**
     * Configures the Inertia navigation progress bar.
     */
    progress: {
        color: '#4B5563',
    },
});