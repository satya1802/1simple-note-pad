# simple note pad — SDLC Documentation

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start overview -->
simple note pad

**Documentation version:** v1
<!-- sdlc:auto:end overview -->

## Contents

<!-- sdlc:auto:start contents -->
| Document | State |
|---|---|
| [Requirements](requirements/README.md) | v1 approved |
| [Architecture](architecture/README.md) | 1 entry |
| [Development](development/README.md) | 1 entry |
| [Testing](testing/README.md) | 1 entry |
| [Deployment](deployment/README.md) | 1 entry |
| [Maintenance](maintenance/README.md) | 1 entry |
| [Data model](architecture/data-model.md) | not generated yet |
| [API (OpenAPI)](architecture/api/openapi.yaml) | not generated yet |
| [Decisions (ADRs)](architecture/adr/README.md) | 0 decisions |
| [Sprint plan](development/sprint-plan.md) | not generated yet |
| [Developer guide](development/developer-guide.md) | not generated yet |
| [API reference](development/api-reference.md) | 0 routes |
| [Test report](testing/test-report.md) | not run yet |
| [Tests](testing/test-cases.md) | 0 tests |
| [Deployment guide](deployment/deployment-guide.md) | not deployed yet |
| [Runbook](deployment/runbook.md) | not deployed yet |
| [Release notes](deployment/release-notes.md) | 0 releases |
| [Traceability matrix](traceability-matrix.md) | 13 requirements |
| [Changelog](CHANGELOG.md) | 1 version |
<!-- sdlc:auto:end contents -->

## Open gaps

<!-- sdlc:auto:start open-gaps -->
### Requirements

- The SMTP rationale references a password-reset (and optional verification) email flow, but no user story or acceptance criteria for 'forgot password' or 'email verification' exist in the requirements — this functionality is implied by the service but not specified as in-scope behavior. Needs clarification before design/build.

### Architecture

- Architecture phase has not started: no system design, data model, API design, or screen/UI design is available despite an approved technology stack (FastAPI, AWS, PostgreSQL, React) from the requirements phase.

### Development

- Development phase has not started: no sprint plans, tickets, or code/implementation records are available.

### Testing

- Testing phase has not started: no test plans, test cases, or test results are available.

### Deployment

- Deployment phase has not started: no environment setup, release, or deployment records are available.

### Maintenance

- Maintenance phase has not started: the app has not been deployed, so there are no post-deployment notes, incidents, or support records.
<!-- sdlc:auto:end open-gaps -->
