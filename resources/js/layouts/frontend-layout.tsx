import { Link, router, usePage } from '@inertiajs/react';
import type { PropsWithChildren } from 'react';
import type { Auth } from '@/types';

type PageProps = {
    auth: Auth;
};

/**
 * Frontend application layout used by authenticated
 * user-facing pages such as account and profile pages.
 *
 * Responsibilities:
 * - renders the frontend navigation shell
 * - exposes the authenticated user context
 * - handles logout flow
 * - renders page content
 */
export default function FrontendLayout({ children }: PropsWithChildren) {
    const { auth } = usePage<PageProps>().props;
    const { user } = auth;

    /**
     * Logs out the authenticated user and forces
     * a full page reload to reset the frontend state.
     */
    const handleLogout = () => {
        router.post(
            '/logout',
            {},
            {
                onFinish: () => {
                    router.flushAll();
                    window.location.assign('/');
                },
            },
        );
    };

    return (
        <div className="min-h-screen">
            <header className="border-b">
                <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
                    <Link href="/">Hello {user.username}!</Link>

                    <div className="flex items-center gap-4">
                        <button type="button" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                </div>
            </header>

            <main className="mx-auto max-w-5xl px-6 py-10">
                {children}
            </main>
        </div>
    );
}
