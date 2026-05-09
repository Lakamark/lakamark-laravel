import type { ReactNode } from 'react';
import FrontendLayout from '@/layouts/frontend-layout';

export default function AccountIndex() {
    return (
        <section>
            <h1 className="text-2xl font-semibold">My account</h1>
        </section>
    );
}

AccountIndex.layout = (page: ReactNode) => <FrontendLayout children={page} />;
