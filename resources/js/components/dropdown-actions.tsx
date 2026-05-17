
import { MoreHorizontal } from 'lucide-react';
import type { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface DropdownActionsProps {
    /**
     * Dropdown action items.
     */
    children: ReactNode;
}

/**
 * Reusable dropdown actions menu.
 *
 * Responsibilities:
 * - Provide a compact actions menu
 * - Standardize table row actions
 * - Reduce action button clutter
 *
 * This component is intended for CMS
 * tables and dashboard entity actions.
 */
export function DropdownActions({ children }: DropdownActionsProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />

                    <span className="sr-only">Open actions</span>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">{children}</DropdownMenuContent>
        </DropdownMenu>
    );
}

export { DropdownMenuItem };
