# simple note pad — SDLC Documentation

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start overview -->
simple note pad

**Documentation version:** v7
<!-- sdlc:auto:end overview -->

## Contents

<!-- sdlc:auto:start contents -->
| Document | State |
|---|---|
| [Requirements](requirements/README.md) | v1 approved |
| [Architecture](architecture/README.md) | 12 entries |
| [Development](development/README.md) | 3 entries |
| [Testing](testing/README.md) | 1 entry |
| [Deployment](deployment/README.md) | 1 entry |
| [Maintenance](maintenance/README.md) | 1 entry |
| [Data model](architecture/data-model.md) | generated |
| [API (OpenAPI)](architecture/api/openapi.yaml) | generated |
| [Decisions (ADRs)](architecture/adr/README.md) | 4 decisions |
| [Sprint plan](development/sprint-plan.md) | 3 sprints |
| [Developer guide](development/developer-guide.md) | generated |
| [API reference](development/api-reference.md) | 1 route |
| [Test report](testing/test-report.md) | not run yet |
| [Tests](testing/test-cases.md) | 0 tests |
| [Deployment guide](deployment/deployment-guide.md) | not deployed yet |
| [Runbook](deployment/runbook.md) | not deployed yet |
| [Release notes](deployment/release-notes.md) | 0 releases |
| [Traceability matrix](traceability-matrix.md) | 13 requirements |
| [Changelog](CHANGELOG.md) | 7 versions |
<!-- sdlc:auto:end contents -->

## Open gaps

<!-- sdlc:auto:start open-gaps -->
### Requirements

- The SMTP rationale references a password-reset (and optional verification) email flow, but no user story or acceptance criteria for 'forgot password' or 'email verification' exist in the requirements — this functionality is implied by the service but not specified as in-scope behavior. Needs clarification before design/build.

### Architecture

- Input labels this 'Version: 1' but also describes it as a revision review against 'the previously approved architecture' -- the prior version's content was not supplied, so the claim that scope is unchanged cannot be independently verified.
- No explicit mapping from architecture components/endpoints to specific requirement ids (US-001..US-013) was included in the input, so related_ids could not be populated for most entries without guessing.
- Input says 'optional verification' email but does not state whether verification is actually in scope for this build -- status is ambiguous.
- Choice between App Runner and ECS Fargate for the backend is left open ('App Runner / ECS Fargate') -- final selection not recorded in input.
- NFR-003 and NFR-004 are referenced as rationale but are not present in the known requirement keys list (US-001..US-013) supplied for this phase, so they could not be linked via related_ids.

### Development

- No ticket-level execution status, code, commits, or completion evidence provided for Sprint 1 -- cannot confirm whether US-001 through US-004 have actually been built.
- Planned points (16) are below stated capacity (20); no explanation given for the gap -- not necessarily a problem but unconfirmed.
- No ticket-level execution status, code, commits, or completion evidence provided for Sprint 2 -- cannot confirm whether US-005 through US-009 have actually been built.
- No ticket-level execution status, code, commits, or completion evidence provided for Sprint 3 -- cannot confirm whether US-010 through US-013 have actually been built.
- Planned points (13) are below stated capacity (20); no explanation given for the gap -- not necessarily a problem but unconfirmed.

### Testing

- Testing phase has not started: no test plans, test cases, or test results are available.

### Deployment

- Deployment phase has not started: no environment setup, release, or deployment records are available.

### Maintenance

- Maintenance phase has not started: the app has not been deployed, so there are no post-deployment notes, incidents, or support records.
<!-- sdlc:auto:end open-gaps -->
