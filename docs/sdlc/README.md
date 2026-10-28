# simple note pad — SDLC Documentation

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start overview -->
simple note pad

**Documentation version:** v3
<!-- sdlc:auto:end overview -->

## Contents

<!-- sdlc:auto:start contents -->
| Document | State |
|---|---|
| [Requirements](requirements/README.md) | v1 approved |
| [Architecture](architecture/README.md) | 12 entries |
| [Development](development/README.md) | 4 entries |
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
| [Changelog](CHANGELOG.md) | 3 versions |
<!-- sdlc:auto:end contents -->

## Open gaps

<!-- sdlc:auto:start open-gaps -->
### Requirements

- The SMTP rationale references a password-reset (and optional verification) email flow, but no user story or acceptance criteria for 'forgot password' or 'email verification' exist in the requirements — this functionality is implied by the service but not specified as in-scope behavior. Needs clarification before design/build.

### Architecture

- Overview does not cite specific requirement IDs, so this summary-level entry cannot be traced to individual user stories beyond what appears in the tech-decision notes (US-011, US-012).
- Input does not explicitly state which requirement IDs besides US-011 the backend as a whole satisfies.
- No requirement ID in the known list is explicitly linked to password-reset/email functionality in this input; traceability to a specific US-xxx is unconfirmed.
- No explicit requirement ID is attached to this critical path in the input.
- No explicit requirement ID is attached to this critical path in the input, though it aligns functionally with title-derivation behavior described under the POST/PUT /notes endpoints.
- No explicit requirement IDs are attached to individual entities in the input.
- Endpoints are not individually mapped to requirement IDs in the input beyond the general US-011 search reference; per-endpoint traceability to US-001..US-013 is not explicit.
- No deployment phase input exists yet to confirm these nodes were actually provisioned as designed (see deployment phase gaps).
- NFR-004 is referenced in the input but is not present in the known requirement-key list provided for this project; confirm whether it is a tracked non-functional requirement elsewhere.

### Development

- No record of actual development execution (tickets started/completed, code produced, commits, PRs) exists in the input -- only the plan's assignment of work. Completion status of any story cannot be confirmed.
- No evidence provided that any US-001 through US-004 ticket was actually started, implemented, or completed.
- 4 points of the 20-point capacity are unaccounted for by named items -- unclear if intentional buffer or an omission.
- No evidence provided that any US-005 through US-008 ticket was actually started, implemented, or completed.
- 5 points of the 20-point capacity are unaccounted for by named items.
- Sprint 2's stated goal references recency ordering, but the corresponding story (US-009) is listed under Sprint 3/EPIC-003, not Sprint 2 -- discrepancy between sprint goal text and item assignment should be confirmed.
- No evidence provided that any US-009 through US-013 ticket was actually started, implemented, or completed.
- 2 points of the 20-point capacity are unaccounted for by named items.
- US-013 ('Free to use with no billing') is described as a frontend-agent story with no detail on what, if any, functionality or verification this entails -- unclear what is actually being built versus simply a policy statement.

### Testing

- Testing phase has not started: no test plans, test cases, or test results are available.

### Deployment

- Deployment phase has not started: no environment setup, release, or deployment records are available.

### Maintenance

- Maintenance phase has not started: the app has not been deployed, so there are no post-deployment notes, incidents, or support records.
<!-- sdlc:auto:end open-gaps -->
