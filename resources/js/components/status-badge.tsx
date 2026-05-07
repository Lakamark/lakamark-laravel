import { cva  } from 'class-variance-authority';
import type {VariantProps} from 'class-variance-authority';

import { Badge } from '@/components/ui/badge';

import { cn } from '@/lib/utils';

const statusBadgeVariants = cva('', {
    variants: {
        status: {
            draft: 'border-zinc-500/20 bg-zinc-500/15 text-zinc-400',

            published:
                'border-emerald-500/20 bg-emerald-500/15 text-emerald-400',

            archived: 'border-red-500/20 bg-red-500/15 text-red-400',
        },
    },

    defaultVariants: {
        status: 'draft',
    },
});

interface StatusBadgeProps extends VariantProps<typeof statusBadgeVariants> {
    children: React.ReactNode;

    className?: string;
}

/**
 * Generic status badge component.
 *
 * Provides consistent visual variants
 * for dashboard entity states.
 */
export function StatusBadge({ status, children, className }: StatusBadgeProps) {
    return (
        <Badge
            variant="outline"
            className={cn(
                statusBadgeVariants({
                    status,
                }),
                className,
            )}
        >
            {children}
        </Badge>
    );
}
