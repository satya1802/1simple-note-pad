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

Chosen option: AWS, because Runs the whole app — static web, API, database and email — in one account on the free tier, keeping early costs near zero and leaving room to scale quietly if more people sign up.

## Consequences

Managing multiple AWS services adds some setup, but keeping everything in one account simplifies operation for a free personal tool.
<!-- sdlc:auto:end adr -->