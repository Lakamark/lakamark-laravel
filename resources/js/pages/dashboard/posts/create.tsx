import { Form, Head } from '@inertiajs/react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';

import { store as postStore } from '@/routes/dashboard/posts';

export default function CreatePost() {
    return (
        <AppLayout>
            <Head title="Create Post" />

            <div className="max-w-2xl space-y-6">
                <div>
                    <h1 className="text-2xl font-semibold">
                        Create a new post
                    </h1>
                </div>

                <Form
                    action={postStore.url()}
                    resetOnSuccess
                    className="space-y-6"
                >
                    {({ processing, errors }) => (
                        <>
                            <div className="space-y-2">
                                <Label htmlFor="title">Title</Label>

                                <Input
                                    id="title"
                                    name="title"
                                    type="text"
                                    required
                                    autoFocus
                                    placeholder="Post title"
                                />

                                <InputError message={errors.title} />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="content">Content</Label>

                                <Textarea
                                    id="content"
                                    name="content"
                                    required
                                    placeholder="Write your post..."
                                    rows={10}
                                />

                                <InputError message={errors.content} />
                            </div>

                            <Button type="submit" disabled={processing}>
                                {processing && <Spinner />}
                                Create post
                            </Button>
                        </>
                    )}
                </Form>
            </div>
        </AppLayout>
    );
}
