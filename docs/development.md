# Development

## Overview

This document describes the local development workflow and the main conventions used throughout the project.

The platform is currently under active development and some parts of the workflow may evolve over time.

---

## Requirements

The project currently requires:

* PHP 8.5
* Composer
* Node.js
* npm

Recommended environment:

* Linux or WSL2
* MySQL or MariaDB
* Git

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install backend dependencies:

```bash
composer install
```

Install frontend dependencies:

```bash
npm install
```

Create the environment file:

```bash
cp .env.example .env
```

Generate the application key:

```bash
php artisan key:generate
```

Run database migrations:

```bash
php artisan migrate
```

---

## Development Environment

Start the local development environment:

```bash
composer run dev
```

This command starts:

* Laravel development server
* Queue worker
* Log viewer
* Vite development server

---

## Code Style

The project aims to maintain a clean and maintainable codebase by following:

* Strong typing
* Modular architecture
* Separation of concerns
* Domain-oriented structure
* Incremental refactoring
* Explicit naming conventions

---

## Testing

Run backend tests:

```bash
php artisan test
```

Additional frontend testing infrastructure may be introduced later during development.

---

## Project Philosophy

The platform focuses on:

* Maintainability
* Progressive scalability
* Lightweight frontend architecture
* Modular backend organization
* Developer experience
* Long-term flexibility
