# Frontend

## Overview

The platform frontend is intentionally separated into multiple layers in order to keep the public website lightweight while providing a richer application experience for authenticated areas.

The architecture separates the platform into three main areas:

* Public frontend
* Account area
* Dashboard / CMS

## Public Frontend

The public-facing website uses a lightweight frontend architecture based on:

* Blade templates
* Custom CSS
* Lightweight JavaScript
* Progressive enhancement

The goal is to keep the public platform fast, accessible and maintainable without relying on a heavy client-side application architecture.

## Dashboard & Account Interfaces

Authenticated platform areas such as the dashboard and account interfaces use a modern application stack powered by:

* Inertia.js
* React
* TypeScript
* Tailwind CSS
* Vite

These interfaces are designed to provide a richer and more interactive user experience for platform management features.

## Frontend Philosophy

The frontend architecture focuses on:

* Separation of concerns
* Lightweight public pages
* Rich application interfaces where necessary
* Progressive scalability
* Maintainable UI architecture
* Modular frontend development
