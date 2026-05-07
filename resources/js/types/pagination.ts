export interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

export interface Pagination {
    url: string | null;
    label: string;
    active: boolean;
}

export interface PaginatedCollection<T> {
    data: T[];

    links: PaginationLink[];

    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}