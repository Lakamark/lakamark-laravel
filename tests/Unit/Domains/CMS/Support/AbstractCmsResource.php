<?php

use Tests\Fixtures\CMS\FakeCmsResource;

it('returns a lowercase inertia component path', function (): void {
    $resource = new FakeCmsResource;

    expect($resource->component('Index'))
        ->toBe('dashboard/posts/index');
});
