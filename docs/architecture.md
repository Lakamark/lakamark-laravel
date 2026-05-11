# Architecture

## Overview

The platform follows a modular and domain-oriented architecture designed to separate business logic from infrastructure and frontend concerns.

The project is intentionally structured to remain flexible, maintainable and scalable as the platform evolves.

The architecture is still experimental and may change significantly during active development.

---

## Core Principles

The platform architecture focuses on:

* Separation of concerns
* Domain-oriented organization
* Modular frontend architecture
* Lightweight public frontend
* Scalable backend structure
* Progressive feature development
* Maintainable developer experience

The goal is to avoid tightly coupled application layers while keeping the project easy to evolve over time.

---

## Application Layers

The platform is intentionally separated into multiple application layers.

### Public Frontend

The public-facing website uses a lightweight frontend architecture based on:

* Blade templates
* Custom CSS
* Lightweight JavaScript
* Progressive enhancement

This layer is intentionally minimal in order to keep the public platform fast, accessible and maintainable.

### Dashboard & Account Interfaces

Authenticated interfaces such as the dashboard and account areas use a richer application stack powered by:

* Inertia.js
* React
* TypeScript
* Tailwind CSS
* Vite

These interfaces are designed for platform management, administration and interactive user experiences.

### Backend

The backend is powered by Laravel and handles:

* Authentication
* Authorization
* Business logic
* CMS management
* Application services
* User management
* Theme preferences

The backend architecture aims to keep framework concerns separated from platform logic whenever possible.

---

## Frontend Philosophy

The frontend architecture intentionally avoids relying entirely on a single SPA architecture.

The platform instead separates:

* Lightweight public pages
* Rich authenticated interfaces
* Backend application logic

This approach helps maintain:

* Better performance
* Simpler frontend maintenance
* Progressive scalability
* Clearer separation of responsibilities

---

## Backend Philosophy

The backend architecture follows a domain-oriented approach designed to keep the codebase modular and maintainable.

The platform aims to progressively separate:

* Domain logic
* Infrastructure
* Frontend concerns
* Application services

The architecture is intentionally evolving during development and is not considered final.

---

## Platform Areas

Current platform areas include:

* Authentication system
* Roles and permissions
* CMS / dashboard
* Frontend platform
* Content management
* Theme system

Additional areas may be introduced progressively during development.

---

## Development Philosophy

The project focuses on:

* Long-term maintainability
* Progressive scalability
* Explicit architecture
* Lightweight public experiences
* Modular development
* Incremental refactoring

The architecture intentionally evolves progressively rather than attempting to prematurely finalize all systems.