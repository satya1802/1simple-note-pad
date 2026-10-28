<!-- sdlc:auto:start adr -->
# ADR-0004: Use AWS for Cloud

Status: Accepted  
Date: 2026-10-28

## Context and Problem Statement

Which Cloud technology does the project use? Decided in architecture v2.

## Considered Options

- AWS
- GCP
- Azure

## Decision Outcome

Chosen option: AWS, because Runs web, server, database and email in one account on a free tier that keeps costs near zero for a free personal tool, with room to grow without re-platforming.

## Consequences

Some AWS-specific configuration, but the default platform target and lowest-cost path for this app.
<!-- sdlc:auto:end adr -->