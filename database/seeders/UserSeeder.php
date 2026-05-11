<?php

namespace Database\Seeders;

use App\Domains\User\Role;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Admin
        User::factory()->create([
            'email' => 'lakamark@lakamark.com',
            'username' => 'Lakamark',
            'role' => Role::Admin,
        ]);

        // Editor
        User::factory()->create([
            'email' => 'editor@lakamark.com',
            'username' => 'Editor',
            'role' => Role::Editor,
        ]);

        // Moderator
        User::factory()->create([
            'email' => 'moderator@lakamark.com',
            'username' => 'Moderator',
            'role' => Role::Moderator,
        ]);

        // Basic user
        User::factory(5)->create();
    }
}
