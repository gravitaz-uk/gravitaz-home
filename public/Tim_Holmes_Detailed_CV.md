# Tim Holmes — Enterprise Architect

**Contact**  
Email: tim.holmes@gravitaz.co.uk  
Phone: +44 7899 061663  
Location: United Kingdom — willing to travel

---

## Professional Summary

Enterprise Architect who sees through technology to the underlying business architecture. I use capability mapping and quality-property-driven governance to establish what a business actually needs, then apply deep hands-on digital and eCommerce platform experience to the buy-versus-build decision — and to holding suppliers and internal teams to account through delivery.

I work as an interim and fractional architecture lead, typically engaged for three to twelve months to assess, define and de-risk a transformation, then hand over a working practice. The engagement lengths below reflect that model.

---

## Core Competencies

### Business Architecture and Method

- **Capability-based modelling of the business**, independent of technology or supplier — ArchiMate As-Is and target models (Flowtech, Cambridge Assessment via Orbus iServer), capability maps and technology roadmaps (Kaplan, Telefónica), vendor-neutral decomposition into capabilities, services and value streams (Serge Ferrari).

- **Quality-property-driven governance** — ISO 25010 quality characteristics agreed, aligned and assigned to named stakeholders as recognised architectural concerns (Selfridges, KFC Global, Broadgate).

- **Layered models matching change velocity to system type** (PACE at Selfridges), and **decision-record-based governance embedded into agile delivery** — architecture decision log across London and Bologna (YNAP), scrum-of-scrums alignment across six markets (KFC Global).

- **Establishing an architecture practice where none existed** — Kaplan, Flowtech, Tapi and Which?. TOGAF 9 certified.

### Digital and eCommerce Platform Depth

- **Commerce and content**: SAP Hybris and SAP Commerce Cloud, commercetools, Adobe Commerce, Shopify, BigCommerce, Sanity and Contentful CMS, Algolia search, PIMCore and Pimberly PIM.

- **Composable / MACH**: storefront plus BFF and unified commerce service layer (TypeScript, Kubernetes microservices), API-first integration, event-driven and SOA patterns.

- **Cloud and delivery**: AWS (CDK, Lambda, Well-Architected reviews), Azure (Integration Fabric, Entra ID SSO, Azure DevOps CI/CD), Terraform, DataDog, DevSecOps, Kanban delivery governance.

- **Identity and compliance**: Gigya (now SAP Customer Data Cloud) CIAM integrated across three eCommerce platforms at YNAP, PKCE exchange via CDK-deployed Lambda functions, domain ownership for Privacy and Compliance, GDPR readiness.

- **Still hands-on where it counts**: Nine TypeScript/Fastify services and five AWS CDK stacks delivered solo on ETX (2026); Gradle build refactored into Azure DevOps pipelines; Java Spring Boot services refactored to cloud-native principles; 32-bit MS-DOS application converted to Windows Containers.

### Buy and Build Judgment

- **Buy**: Supplier selection against a capability model (Flowtech; AOL CMS RFI/RFP evaluating Vignette and CoreMedia), incumbent capability analysis (New Look), technical due diligence supporting an acquisition that went ahead (INTO), near-shore supplier transition (KFC Global, Avery Dennison).

- **Build**: Global SaaS service delivery platform behind Vodafone Live; multi-tenant SaaS built out of a legacy on-prem application (Avery Dennison); paywall and entitlement model for institutional and individual access (Wiley); bulk-processing re-architecture (Tech Mahindra).

- **The judgment between them**: Recommended SAP Commerce Cloud over a proposed commercetools MACH re-platform at New Look on budget, talent and total-cost grounds. Advised Mercer's CEO and CTO against a machine-learning investment the underlying pension data could not support.

---

## Professional Experience

### ETX Platform — Platform Architect and Sole Engineer (Independent)
**May 2026 – Present**

Multi-tenant SaaS hospitality and events booking platform. Built in own time alongside the Cencora engagement.

**Challenge**  
Take a prototype concept to a production-grade multi-tenant booking platform for high-volume events. Requires a complex domain model spanning enquiry, listing, request, RSVP, booking and guest workflows, with tenant isolation, bidirectional CRM integration and a state-machine-driven approval process across decentralised services.

**Approach**  
Built a TypeScript monorepo of nine Fastify services over a Prisma-managed Postgres schema, with test-first delivery enforced in CI above 90% statement coverage. Evolved the domain model through two deliberate iterations — prototype validation (May), then a backend restructure (June) onto a canonical entity chain with 32 schema migrations applied. Architected for parallel development through per-service semantic versioning, selective Docker builds in CI and fast-update ECS deploys.

**Outcome**  
All nine services and a React SPA running in production on AWS ECS with 90.58% statement coverage (648 integration tests + 73 E2E tests across 42 files). Integrated bidirectionally with the AOK 3D CRM: outbound enquiry push with HMAC signatures, idempotency keys and dead-letter retries; inbound typed webhooks with signature verification and BullMQ event handling. Multi-tenant isolation enforced through Postgres row-level security on 8 tables, CORS subdomain regex validation, and live OpenAPI aggregation across all services.

**Infrastructure**  
AWS CDK in TypeScript synthesising five stacks — VPC, Aurora Serverless v2, ElastiCache Serverless, ECS Fargate and CloudFront SPA — covered by CDK assertion tests. Playwright E2E (52 chromium + 21 branded screenshots), k6 stress and soak suites, and local Raspberry Pi 5 deployment alongside AWS pre-prod and production.

**Stakeholders**  
Solo engineer and architect: domain design, service architecture, testing strategy, CI/CD pipeline, infrastructure as code and live production operations.

---

### EA Consultant at Cencora Ltd (Mosaic Island)
**(Current) October 2025 – Present**

Enterprise Architecture for the Cencora International Business Group (B2B distributor, Life Sciences).

**Challenge**  
Following a series of mergers and acquisitions, the International Business Group had no standard pattern for B2C omnichannel and unified eCommerce across its European online pharmacies. Worked with the Director of EA for the group to establish one.

**Approach**  
Reduced supplier-led programmes of work to a common capability set, then established composable architecture patterns markets could adopt without re-litigating the technology choice each time. Worked closely with Alliance Healthcare Norway to gain approval and manage delivery of the key technical enablers for the eCommerce and customer satisfaction workstreams.

**Outcome**  
B2C and omnichannel composable patterns delivered and approved, then applied to Boots Norway and Pharmavance in France. A standards-compliant route agreed by adapting supplier-led work rather than replacing it, avoiding unplanned rework.

**Build and Integration**  
Built: BFF and unified commerce service layer as TypeScript microservices on Kubernetes. Bought and integrated: Adobe Commerce, Shopify, BigCommerce, Sanity CMS, Algolia, PIMCore, ServeFirst SaaS for customer engagement, Azure Integration Fabric.

**Stakeholders**  
Represented the International Business Group to the US EA governance team; engaged suppliers, Norway market stakeholders and the global senior leadership team.

---

### Consultant (Broadgate Consulting)
**August – September 2025**

Technical review and report to the COO on the state of a fintech payments start-up's technology.

**Challenge**  
A catalogue of failures had led the executive team to seek outside advice. Assessed the issues as symptoms of the transition from start-up to scale-up, caused by absent technical governance — demand management, change control, incident handling and service assurance.

**Approach**  
Reviewed technology, people and process together, then agreed, aligned and assigned quality characteristics to stakeholders as recognised concerns, so that each gap had an owner rather than a recommendation.

**Outcome**  
Delivered an architectural assessment covering technology maturity, cloud-native stance, security, quality and organisational structure, recommending an IT operations capability focused on stability and service assurance, a DevSecOps uplift in practice and tooling, and a change-management governance process bridging technology and business teams.

---

### Head of Architecture at KFC Global Engineering (Foundry.cc)
**June 2024 – July 2025**

Omnichannel retail and B2C commerce across six global markets — Australia/NZ, Thailand, Japan, India, Canada, South Africa.

**Challenge**  
Fragmented architecture, ad-hoc feature intake and inconsistent delivery practice were slowing time-to-market and undermining scalability and cost efficiency across six markets.

**Approach**  
As part of the Foundry senior leadership team, helped switch suppliers to a more effective near-shore delivery model and form a new KFC Global engineering team. Headed the architecture and design practice, directing cross-functional teams — engineering leads, solution architects, QA and delivery managers — through a Kanban model, applying a quality-property-driven approach across B2C engagement channels, integration, BFF/service layer, DevSecOps and SaaS commerce back end. Ran decision-record-based governance feeding into delivery via a biweekly scrum-of-scrums.

**Outcome**  
Delivered a stable, scalable omnichannel platform, reducing operational risk and accelerating global feature rollout. Achieved the key objective of delivering against a committed feature roadmap over the final six months — something the KFC markets had not previously experienced. Established reusable frameworks and architectural practice that sustained delivery across multiple international markets after handover.

---

### Enterprise Architect at New Look
**December 2023 – June 2024**

Three-year B2C technology roadmap; migration of legacy on-prem SAP Hybris Commerce.

**Challenge**  
The on-prem Hybris platform was reaching end of life and end of support. A commercetools MACH re-platform had been proposed. Asked to guide delivery of the three-year roadmap and to test that proposal before it was committed to.

**Approach**  
Ran a capability analysis of the incumbent supplier and assessed the MACH proposal against budget, available talent and total cost of ownership rather than against platform features — that is, against the organisation's actual capacity to run it. Collaborated with senior technology leadership and mentored the enterprise architecture team, strengthening architectural practice.

**Outcome**  
Recommended against the MACH migration; the team agreed instead to migrate to SAP Commerce Cloud, avoiding a re-platform the organisation was not resourced to sustain and protecting significant programme spend. Also recommended a move from the incumbent offshore supplier to a specialist; this was not taken forward on cost grounds.

---

### Consulting Architect at Flowtech Fluidpower (Zebra Associates)
**August – December 2023**

ERP transformation, architecture practice set-up, technical audit, supplier selection, platform consolidation.

**Challenge**  
Legacy ERP and fragmented eCommerce platforms, compounded by major acquisitions, were limiting digital channel growth and slowing feature delivery.

**Approach**  
Performed an in-depth technical audit and delivered a capability-based As-Is enterprise architecture model in ArchiMate, then ran a comprehensive review of technical, process and product capability as the basis for supplier selection. Performed an AWS Well-Architected review alongside it.

**Outcome**  
Selected and onboarded a new eCommerce supplier against the capability model. Developed a re-platforming strategy for a 30-year-old ERP system. Identified AWS cost inefficiencies and improved financial visibility. Also delivered: remediated the Pimberly PIM implementation, identifying faults and optimising the data load within the .NET codebase; defined integration patterns for product, pricing and customer data flows; introduced DevSecOps practice and cloud-native infrastructure.

---

### Solution Architect at Specsavers (Valtech)
**February – June 2023**

Azure, Contentful, Algolia, commercetools, TypeScript, Cloudflare, Azure DevOps, CI/CD, MACH, Terraform, DataDog.

**Challenge**  
Specsavers lacked architectural expertise in SaaS content platforms. A single-space Contentful contract was creating bottlenecks, limiting flexibility for distributed teams and slowing delivery of new digital services.

**Approach**  
Provided architectural leadership for Contentful, introducing SaaS governance, integration and multi-team usage practice, and led the transition from a single-space to a multi-space enterprise contract aligned to global development needs.

**Outcome**  
Delivered a content architecture supporting parallel development across multiple teams, reducing delivery friction and improving time-to-market for customer and clinician-facing services, while establishing sustainable architectural expertise in-house.

---

### Engineering Lead at Avery Dennison / Vestcom (Direct, Fractional)
**October 2021 – December 2022**

Azure migration, Java Spring, TypeScript, Azure DevOps, CI/CD, API Connect, OpenAPI/Swagger, Gradle.

**Challenge**  
Migrate a legacy on-prem retail shelf-edge price ticketing application to an Azure-hosted multi-tenant SaaS platform, with integration APIs and secure management and monitoring tooling.

**Approach — Hands-on**  
Refactored the Gradle build to run in Azure DevOps CI/CD pipelines supporting feature-branch development across dev, QA, pre-prod and production. Refactored Java Spring Boot applications to cloud-native design principles, improving elastic scalability and reducing Azure operational cost. Converted a 32-bit MS-DOS application to run as Windows Containers, removing VM-based hosting entirely.

**Outcome**  
Delivered a self-contained multi-tenant SaaS platform with full operational capability: integration APIs built for Currys UK and Ireland in-house systems, Entra ID single sign-on on the admin tools, and a digital signage kiosk solution using Android clients configured over MQTT.

**Buy / Build Boundary**  
Built the platform in-house; established the run capability through a near-shore development and support partnership in Poland, with run-books for service assurance, incident management and Kanban-based enhancement intake.

---

### Consultant at Serge Ferrari (Mindera)
**September – October 2022**

B2B consultancy — closed-loop value recovery, SAP production and warehouse automation.

**Challenge**  
Design a B2B liquidations portal to recover value from substandard product output, using a House of Brands approach to protect the core brand.

**Approach**  
Worked with the CIO to understand the business model and the existing SAP-based production and warehouse automation estate, produced As-Is application, data and technology views, and reduced the architecture to a vendor-neutral set of capabilities, services and value streams.

**Outcome**  
Catalogued the full challenge set — near-term sale of Silver Quality stock, longer-term cost of the SAP automation suite — and a Mindera engineering team was engaged to deliver the solution and an ongoing support model for a local operations team.

---

### Enterprise Architecture Consultant (Fractional) at Selfridges (Mindera)
**January – September 2022**

Consultancy, mentoring, Agile, governance, AWS, Serverless, CDK, Salesforce, DORA, ISO 25010.

**Challenge**  
A multi-year digital transformation toward integrated omnichannel. Legacy platforms, siloed delivery and traditional SIAM-based architectural governance were creating friction in scaling eCommerce, loyalty and customer engagement — especially in establishing an internal agile engineering capability.

**Approach**  
Worked with the existing enterprise architects to align digital commerce, CRM and supply chain. Partnered with senior stakeholders across retail, digital and IT to rationalise platforms and drive API-first integration. Adopted a PACE-layered model to guide cloud-native adoption, DevSecOps and data-driven customer engagement.

**Outcome**  
Bridged traditional enterprise SIAM and modern agile delivery through a three-tier PACE model — agile systems of engagement, adaptive APIs for value-added integration, established systems of record. Established business agility as a first-class quality property and therefore a valid architectural concern within the EA team.

---

### Transformation Consultant at Tapi Carpets and Flooring (Sullivan & Stanley)
**April – October 2021**

Omnichannel retail, CEO/CPO engagement, ERP upgrade (Dynamics 365), Azure.

**Challenge**  
As a retail challenger scaling fast, Tapi's early-stage architecture could not support eCommerce growth, ERP integration or scalable customer engagement.

**Approach**  
Designed and implemented the target architecture for B2B and B2C commerce, integrating ERP, CRM and eCommerce, with patterns for data, identity and cloud-native operations. Provided hands-on design authority to delivery teams and helped establish DevOps practice. Engaged owners, CEO, CPO, COO and CFO.

**Outcome**  
Enabled Tapi to scale from start-up to nationwide retailer on an integrated omnichannel platform, and established an ERP transformation programme to move from Navision to Microsoft D365.

---

### Enterprise Architect, Kaplan (Direct)
**September 2020 – April 2021**

Education technology, MACH, Kubernetes, AWS, data modelling, DWH/analytics.

**Challenge**  
A fragmented systems landscape was impeding integration of global student platforms, CRM and learning management systems, with no enterprise-level architectural oversight and a poorly implemented Tableau-based reporting service.

**Approach**  
Introduced an enterprise architecture practice across business domains — capability maps, governance process and technology roadmaps — and worked with product and technology teams to rationalise platforms and define API-led integration.

**Outcome**  
Established a sustainable architecture function, reduced platform duplication and accelerated delivery of student-facing initiatives. Replaced the Tableau reporting estate with an analytics service built on Looker, Fivetran, dbt and Snowflake.

---

### Enterprise Architect, INTO University Partnerships (Espalier Ventures)
**February – April 2020**

Provided technical due diligence on a US-based SaaS platform Espalier Ventures was considering acquiring, and produced a reference target architecture showing how the capability would integrate with the existing platform. The acquisition proceeded on the strength of the assessment and the service was adopted by INTO. *Engagement curtailed by the Covid-19 lockdown.*

---

### Enterprise Architect, YOOX NET-A-PORTER (Direct)
**August 2017 – January 2020**

Luxury fashion eCommerce, B2C, security, privacy and compliance, AWS, Gigya, GraphQL.

**Challenge**  
YNAP needed to expand omnichannel capability while meeting GDPR, with problems in customer identity management, data compliance and integration across its three core eCommerce platforms.

**Approach**  
Provided solution architecture leadership to modernise the commerce stack. Designed and delivered the integration of the Gigya CIAM platform across all three platforms, enabling unified authentication, consent management and secure data handling. Took domain responsibility for Privacy and Compliance within the cybersecurity team, extending Gigya with a PKCE exchange implemented through CDK-deployed Lambda functions in AWS.

**Governance**  
Chaired cross-team architecture calls between London and Bologna and owned the architecture decision log spanning customer onboarding, CRM and marketing (Salesforce), security, merchandising, cart and content integration, order processing, payments, fulfilment and warehouse operations.

**Outcome**  
Achieved GDPR compliance through a centralised CIAM solution, unified customer identity and consent across platforms, and laid the foundation for international growth and brand integration. Strengthened the EA governance function as domain architect for Privacy and Compliance.

---

## Additional Roles

### Consultant, Mercer Pensions (Oliver Wyman)
**July – August 2017**

Reviewed the process for evaluating defined benefit pension scheme liability across decades of legacy applications. Assessed issues to be related to poor underlying data quality. Advised the CEO and CTO that the data could not effectively train a machine-learning model and recommended investing in the underlying IT tools and services instead, preventing a costly investment in the wrong solution.

### Interim Managing Architect, Salmon (Net-a-Porter)
**November 2016 – June 2017**

Stepped in after the Chief Architect resigned following Salmon's acquisition by Wunderman Thompson. Led four domain architects across infrastructure, content, commerce and integration, maintaining architectural continuity and delivery momentum through the transition to new Salmon leadership.

### Enterprise Architect, Cambridge Assessment
**March 2015 – October 2016**

Defined the target enterprise architecture for large-scale online assessment and publishing, modelling organisational structures and solution contexts in ArchiMate via Orbus iServer. Created the EPAM (External Party Access Management) blueprint for anonymised, compliant online testing, later adopted at Cambridge University Press. Delivered SELTS, a secure digital IELTS testing platform for UK visa compliance used by the British Council.

### Digital Architect, TUI Travel
**July 2013 – January 2015**

Established the target architecture for omnichannel travel with API-first integration, consolidated the design teams and introduced governance aligning product, engineering and business. Solved supplier contract management, flight segment mapping, B2B/B2C identity, temporal product catalogue (CPQ), yield management, reservations, fulfilment and faceted search. Next-generation SAP Hybris website delivered on time on a new design-first delivery practice.

### Lead Architect, MailOnline (Direct)
**January – June 2013**

Modernised the digital publishing infrastructure, introducing scalable cloud services and CDN optimisation to support global traffic volumes.

### Enterprise Integration Architect, Telefónica
**May 2012 – June 2013**

Defined target-state architecture for API-led integration and service orchestration, introducing governance and capability maps to reduce the friction of integrating back-end services into a new generation of mobile and web front ends.

### Enterprise Solutions Architect (Martech), Betfair (Direct)
**July 2011 – April 2012**

Led adoption of IBM Unica and delivery of a new Customer Data Platform for campaign management and customer engagement; guided migration to a SaaS Oracle Finance platform.

### Lead Architect, Tech Mahindra (Emergn)
**February – June 2011**

Re-architected a global network configuration platform from web-based data entry to bulk ingestion with back-end orchestration; introduced Agile practice, pair programming, CI/CD and automated testing to India-based engineering teams.

### Lead Architect and Engineer, Which? Digital (Mosaic Island)
**August 2007 – February 2011**

Introduced Which? to Agile and CI/CD, transformed the SDLC into a working agile practice, and led delivery of Reviews, Price Comparison, Mortgage Calculation and Cars.

### Solution Architect, John Wiley
**January – August 2007**

Re-architected the publishing workflow for dynamic assembly of curated peer-reviewed article collections, and designed a paywall and entitlement model supporting individual, institutional IP-range and hybrid authorisation.

### Enterprise Strategy Architect, AOL EU (Direct)
**November 2005 – January 2007**

Defined the next-best-action strategy for inbound call-centre operations, evaluating a Pegasystems upgrade against adoption of Chordiant; led the CMS RFI/RFP evaluating Vignette and CoreMedia.

---

## Foundational Experience

Multi-market platform architecture at global scale — the thread running through to the omnichannel programmes above.

### Chief Architect, Vodafone Global Services (Permanent)
**January 2000 – October 2005**

Telecoms, multi-channel and multi-media web, SOA, Java, architecture leadership, stakeholder engagement.

**Challenge**  
Vodafone set out to launch Vodafone Live, the world's first large-scale colour mobile web proposition, across its global operating companies in Europe, South Africa, Australia and the USA via Verizon. That meant unifying fragmented regional systems into a single scalable service delivery platform, supporting emerging 3G network capability and the arrival of colour-capable handsets.

**Approach**  
Joined through the Vizzavi joint venture between Vodafone and Vivendi, contributing to a multi-channel content and commerce platform first deployed in the UK, France and Germany, then transitioned with the team into Vodafone Global Services. Led a group of six senior architects to extend the platform internationally. Introduced Service Oriented Architecture as the integration model — pioneering at the time — and designed content partner syndication models so each operating company could build a commercial ecosystem on the shared platform.

**Outcome**  
Delivered the global SaaS service delivery platform underpinning Vodafone Live, establishing Vodafone as a first mover in colour mobile services and digital content distribution. Proved mobile content and commerce viable at scale, and created repeatable frameworks for service integration and partner syndication that shaped Vodafone's approach to global platform delivery through the 3G era.

**Buy and Build**  
Built the core platform and the syndication model in-house; the commercial ecosystem then depended on third-party content partners onboarded against it. The same build-the-core, integrate-at-the-edges pattern runs through to the composable architecture work at Cencora and KFC Global twenty years later.

---

## Education and Qualifications

- **TOGAF 9 Certified** — 2015. The Open Group.
- **MSc Database and Information Systems** — 1991–1993. Birkbeck College, University of London.
- **BSc (Hons) Computer Science** — 1982–1986. Brunel University, Uxbridge.
