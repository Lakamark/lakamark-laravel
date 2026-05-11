# Backend

## Overview

The backend is powered by Laravel and follows a modular, domain-oriented architecture designed to keep business logic separated from infrastructure and frontend concerns.

The backend architecture is still evolving during active development and is not considered final.

---

## Goals

The backend architecture focuses on:

* Separation of concerns
* Modular application structure
* Maintainable business logic
* Progressive scalability
* Explicit application layers
* Long-term flexibility

The goal is to progressively build a maintainable platform architecture without introducing unnecessary complexity too early.

---

## Responsibilities

The backend currently handles:

* Authentication
* Authorization
* CMS management
* User management
* Theme preferences
* Content management
* Application services
* Business logic

Additional platform areas may be introduced progressively during development.

---

## Architecture Philosophy

The backend follows a domain-oriented approach designed to progressively separate:

* Domain logic
* Infrastructure
* Frontend concerns
* Application services
* Framework integrations

The architecture intentionally avoids tightly coupling business logic directly to framework-specific implementations whenever possible.

---

## Laravel Integration

The platform uses Laravel as the application foundation while progressively building custom platform architecture on top of it.

Current Laravel features used by the platform include:

* Routing
* Middleware
* Authentication
* Eloquent ORM
* Queues
* Events
* Validation
* Service container

Additional Laravel ecosystem tools may be introduced progressively during development.

---

## Frontend Integration

The backend supports multiple frontend layers.

### Public Frontend

The public-facing frontend uses:

* Blade templates
* Custom CSS
* Lightweight JavaScript

### Dashboard & Account Interfaces

Authenticated interfaces use:

* Inertia.js
* React
* TypeScript
* Tailwind CSS

The backend is designed to support these different frontend layers while keeping responsibilities clearly separated.

---

## Development Philosophy

The backend architecture evolves progressively during development.

The project intentionally prioritizes:

* Maintainability
* Simplicity
* Explicit architecture
* Incremental refactoring
* Modular organization

The goal is to avoid prematurely overengineering systems while still keeping the platform scalable over time.