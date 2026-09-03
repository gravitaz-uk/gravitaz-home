---
title: "Avery Dennison — legacy on-premise to multi-tenant SaaS on Azure"
description: "Migrating a retail shelf-edge price ticketing application to Azure-hosted multi-tenant SaaS — including converting a 32-bit MS-DOS application to Windows Containers."
pubDate: "October 01 2021"
client: "Avery Dennison / Vestcom"
role: "Engineering Lead (fractional)"
period: "October 2021 – December 2022"
sector: "Retail technology"
---

## Challenge

Migrate a legacy on-premise retail shelf-edge price ticketing application to an Azure-hosted multi-tenant SaaS platform, with integration APIs and secure management and monitoring tooling.

## Approach — hands-on

- Refactored the Gradle build to run in Azure DevOps CI/CD pipelines supporting feature-branch development across dev, QA, pre-production and production
- Refactored Java Spring Boot applications to cloud-native design principles, improving elastic scalability and reducing Azure operational cost
- Converted a 32-bit MS-DOS application to run as Windows Containers, removing VM-based hosting entirely

## Outcome

A self-contained multi-tenant SaaS platform with full operational capability: integration APIs built for Currys UK and Ireland in-house systems, Entra ID single sign-on on the admin tools, and a digital signage kiosk solution using Android clients configured over MQTT.

## The buy / build boundary

The platform was built in-house. The run capability was established through a near-shore development and support partnership in Poland, with run-books for service assurance, incident management and Kanban-based enhancement intake — so the build did not create an operational gap.

**Stack:** Azure, Java Spring, TypeScript, Azure DevOps, CI/CD, API Connect, OpenAPI/Swagger, Gradle.
