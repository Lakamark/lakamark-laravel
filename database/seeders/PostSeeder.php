<?php

namespace Database\Seeders;

use App\Domains\Blog\Models\Post;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Post::factory()
            ->count(50)
            ->recycle(User::all())
            ->published()
            ->create();
    }
}
