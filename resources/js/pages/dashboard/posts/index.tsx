type Props = {
    resource: {
        label: string;
        routePrefix: string;
    };

    posts: {
        id: number;
        title: string;
        slug: string;
        status: string;
        published_at: string | null;
    }[];
};

export default function Index({ resource, posts }: Props) {
    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-2xl font-bold">{resource.label}</h1>
            </header>

            <div className="space-y-2">
                {posts.map((post) => (
                    <article key={post.id} className="rounded-xl border p-4">
                        <h2 className="font-semibold">{post.title}</h2>

                        <p className="text-sm opacity-70">{post.status}</p>
                    </article>
                ))}
            </div>
        </div>
    );
}
