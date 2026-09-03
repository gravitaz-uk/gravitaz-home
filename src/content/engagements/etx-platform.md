---
title: "ETX — a multi-tenant booking platform, built end to end"
description: "Taking a prototype concept to a production-grade multi-tenant SaaS booking platform for high-volume events, delivered solo across nine services and five infrastructure stacks."
pubDate: "May 01 2026"
client: "ETX Platform"
role: "Platform Architect and Sole Engineer"
period: "May 2026 – Present"
sector: "Hospitality and events SaaS"
---

## Challenge

Take a prototype concept to a production-grade multi-tenant booking platform for high-volume events. The domain model had to span enquiry, listing, request, RSVP, booking and guest workflows, with tenant isolation, bidirectional CRM integration and a state-machine-driven approval process across decentralised services.

## Approach

A TypeScript monorepo of nine Fastify services over a Prisma-managed Postgres schema, with test-first delivery enforced in CI above 90% statement coverage.

The domain model was evolved through two deliberate iterations — prototype validation, then a backend restructure onto a canonical entity chain with 32 schema migrations applied. The platform was architected for parallel development through per-service semantic versioning, selective Docker builds in CI and fast-update ECS deploys.

## Outcome

All nine services and a React SPA running in production on AWS ECS with 90.58% statement coverage — 648 integration tests and 73 E2E tests across 42 files.

Integration with the AOK 3D CRM runs in both directions: outbound enquiry push with HMAC signatures, idempotency keys and dead-letter retries; inbound typed webhooks with signature verification and BullMQ event handling. Multi-tenant isolation is enforced through Postgres row-level security on eight tables, CORS subdomain regex validation, and live OpenAPI aggregation across all services.

## Infrastructure

AWS CDK in TypeScript synthesising five stacks — VPC, Aurora Serverless v2, ElastiCache Serverless, ECS Fargate and CloudFront SPA — covered by CDK assertion tests. Playwright E2E (52 chromium and 21 branded screenshots), k6 stress and soak suites, and local Raspberry Pi 5 deployment alongside AWS pre-production and production.

This engagement is the current answer to a question clients reasonably ask of any architect: is the advice still grounded in building the thing?
