# LakaMark Laravel

[![tests](https://github.com/Lakamark/lakamark-laravel/actions/workflows/tests.yml/badge.svg)](https://github.com/Lakamark/lakamark-laravel/actions/workflows/tests.yml)

Official LakaMark platform built with Laravel, Inertia.js and React.

---

## Overview

LakaMark is a personal creative platform focused on digital experiences, content publishing and community-driven features.

This repository contains the next generation of the platform, migrated from Symfony to a modern Laravel-based architecture.

The project is currently under active development and represents the official continuation of the former Symfony platform.

---

## Why Laravel?

The original LakaMark platform was initially developed with Symfony.

Over time, the project evolved toward a more content-driven and application-oriented platform where Laravel provided a development experience better aligned with the current goals of the project.

While Symfony remained a solid and powerful framework, the technology stack introduced more complexity than necessary for the type of platform LakaMark was evolving into.

Laravel offered a workflow and ecosystem that felt more natural and better adapted to the project's needs, particularly for:

* Faster application development
* Simpler frontend integration
* Improved developer experience
* A more flexible content management foundation
* Modern full-stack tooling with Inertia.js and React

This transition also provides an opportunity to progressively rethink parts of the platform architecture while keeping the project modular and maintainable.

The former Symfony-based platform (`lakamark.web`) is no longer actively maintained and is now preserved as an archived technical reference.

---

## Technical Disclaimer

The decision to migrate **Laka Mark** from Symfony to Laravel is based on my own experience, project needs and personal 
development workflow.

This does not mean that Laravel is objectively better than Symfony, or that Symfony was a poor technology choice. Symfony remains a powerful and mature framework.

For this specific project, Laravel currently provides a workflow, ecosystem and development experience that better aligns with the direction and goals of the platform.

Technology choices are contextual. What works well for LakaMark may not necessarily be the best choice for another type of project.


## Tech Stack

### Backend

* PHP 8.5
* Laravel

### Dashboard & Account Interfaces

* Inertia.js
* React
* TypeScript
* Tailwind CSS
* Vite

### Public Frontend

* Blade templates
* Custom CSS
* Lightweight JavaScript

---

## Architecture

The platform follows a modular and domain-oriented architecture designed to separate business logic from infrastructure and frontend concerns.

The application is intentionally divided into multiple layers:

* Lightweight public frontend
* Rich authenticated interfaces
* Modular backend architecture

The architecture is still evolving during active development and is not considered final.

---

## Documentation

Additional technical documentation is available in the [`/docs`](./docs/intro.md) directory.

Current documentation includes:

* Architecture
* Development workflow
* Authentication
* CMS
* Theme system
* Frontend architecture
* Backend architecture

---

## Development

Install backend dependencies:

```bash id="hq9zv5"
composer install
```

Install frontend dependencies:

```bash id="m34mxn"
npm install
```

Create the environment configuration:

```bash id="67xgmu"
cp .env.example .env
```

Generate the application key:

```bash id="4ex68t"
php artisan key:generate
```

Run database migrations:

```bash id="fktd88"
php artisan migrate
```

Start the development environment:

```bash id="s0s4lq"
composer run dev
```

---

## Project Status

⚠️ Active development.

Some parts of the platform are still experimental and may evolve significantly during development.

---

## Previous Symfony Platform

The original Symfony-based platform has been archived following the migration to Laravel.

It is preserved as a technical reference:

* [Lakamark.web](https://github.com/Lakamark/Lakamark.web)

---

## License

This project is licensed under the MIT License.

The LakaMark name, branding, logos and visual assets are not covered by the open-source license and may not be used without permission.
