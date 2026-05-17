import { Link } from '@inertiajs/react';

import { DropdownMenuItem } from '@/components/dropdown-actions';

import type { Moderatable } from '@/types/contracts/moderatable';

interface ModerationActionsProps {
    /**
     * Moderatable entity.
     */
    item: Moderatable;

    /**
     * Approve action URL.
     */
    approveUrl: string;

    /**
     * Reject action URL.
     */
    rejectUrl: string;
}

/**
 * Generic moderation dropdown actions.
 */
export function ModerationActions({
    item,
    approveUrl,
    rejectUrl,
}: ModerationActionsProps) {
    return (
        <>
            {item.moderation_status !== 'approved' && (
                <DropdownMenuItem asChild>
                    <Link href={approveUrl} method="post">
                        Approve
                    </Link>
                </DropdownMenuItem>
            )}

            {item.moderation_status !== 'rejected' && (
                <DropdownMenuItem asChild>
                    <Link href={rejectUrl} method="post">
                        Reject
                    </Link>
                </DropdownMenuItem>
            )}
        </>
    );
}
