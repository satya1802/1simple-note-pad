# Product Requirements

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start narrative -->
## Summary

### REQ-STACK-001 · approved · source: requirements:stack

Product owner approved an exact technology stack for the note pad app: FastAPI backend, AWS hosting, PostgreSQL database, React frontend.

Backend: FastAPI 0.115 — chosen for sign-in and per-user CRUD/search with minimal code and low load; platform default. Cloud: AWS — cheap, reliable hosting for web, server, database and email in one account with a free tier; platform default. Database: PostgreSQL 16 — durable, private, multi-device-consistent note storage plus built-in full-text keyword search, avoiding a separate search system; platform default. Frontend: React 19 — responsive single-screen app (searchable note list + editor) needing instant in-place editing across devices; platform default and common hand-off choice. Instruction given: design against exactly these, do not substitute.

**Related:** EPIC-001, EPIC-002, EPIC-003, EPIC-004

### REQ-SERVICES-001 · approved · source: requirements:services

An SMTP email service was approved to support password-reset and optional verification emails for the email/password sign-in flow.

Service: SMTP server (SaaS), env vars SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD. Rationale: email/password sign-in needs a way to send password-reset (and optional verification) messages, or a user who forgets their password is locked out permanently; SMTP is cheap for a free app's low transactional email volume. Required API keys: SMTP_HOST, SMTP_PASSWORD, SMTP_PORT, SMTP_USER.

**Related:** US-001, US-002

- ⚠ The SMTP rationale references a password-reset (and optional verification) email flow, but no user story or acceptance criteria for 'forgot password' or 'email verification' exist in the requirements — this functionality is implied by the service but not specified as in-scope behavior. Needs clarification before design/build.

### REQ-SCOPE-001 · approved · source: requirements:scope

Rich text formatting, folders/tags, and checklists are explicitly out of scope for design and build.

Delivery scope is 'lightweight', requirements version 1. Out-of-scope items: rich text formatting, folders/tags, checklists. In-scope capabilities: create/edit/delete plain-text notes, most-recently-edited ordering, keyword search, sign-up/sign-in, per-account privacy, cross-device sync, title with first-line fallback, last-edited timestamp, persistent sessions.

**Related:** EPIC-002

### EPIC-001 · draft · source: requirements:EPIC-001

Each person can create a personal account and sign in so their notes are private to them and available on any device.

Assumption: sign-up/sign-in use email and password; sessions persist so notes sync across devices. No payment or billing involved; app is free to use.

**Related:** US-001, US-002, US-003, US-004

### US-001 · draft · source: requirements:US-001

[critical] A new visitor can create an account using email and password, so notes are kept private to them.

AC-001: Valid email + password submitted on sign-up → account created, user signed in to an empty note space. AC-002: Email already registered → account not created, user told email is already in use. AC-003: Missing/invalid email or empty password submitted → account not created, user shown which field needs correcting.

**Related:** EPIC-001

### US-002 · draft · source: requirements:US-002

[critical] A registered user can sign in with email and password to access their private notes.

AC-004: Correct email + password submitted → user signed in and taken to note list. AC-005: Email or password does not match an account → user not signed in, shown 'invalid credentials' error.

**Related:** EPIC-001

### US-003 · draft · source: requirements:US-003

[high] A signed-in user's session persists and notes are available on any device they log in from.

AC-006: User returns to the app later in the same browser without signing out → remains signed in without re-entering credentials (assumption: sessions persist so notes sync across devices). AC-007: User signs in with the same account on a different device → same notes are available there. AC-008: User signs out → session ends, notes inaccessible until signing in again.

**Related:** EPIC-001

### US-004 · draft · source: requirements:US-004

[critical] Only a signed-in user's own notes are visible to them; notes stay private per account.

AC-009: Two separate users each have their own notes → a signed-in user sees only their own notes, never another user's. AC-010: User not signed in tries to access the note list or a note → shown no notes, prompted to sign in. Assumption: general domain with no special regulatory requirements beyond per-account privacy.

**Related:** EPIC-001, NFR-001, NFR-002

### EPIC-002 · draft · source: requirements:EPIC-002

Core note behavior: users create, edit, and delete plain-text notes, with optional title (first-line fallback) and a last-edited timestamp.

Assumption: notes are plain text only; rich-text formatting, folders/tags, and checklists are out of scope.

**Related:** US-005, US-006, US-007, US-008

### US-005 · draft · source: requirements:US-005

[critical] A signed-in user can create a new plain-text note to capture what they want to remember.

AC-011: New note created with plain text → saved to account with a last-edited timestamp, appears in note list. AC-012: While typing content, only plain text is captured — no rich-text formatting, folders/tags, or checklists offered.

**Related:** EPIC-002, NFR-004

### US-006 · draft · source: requirements:US-006

[high] A note can optionally be given a title, or have one derived automatically from its first line.

AC-013: Title provided when creating/editing → saved and shown for the note in the list. AC-014: Note saved without a title but with text → title auto-derived from the note's first line (assumption: title optional, falls back to first line). AC-015: Note saved with no title and no text → shown with a clear empty/untitled placeholder rather than a blank entry.

**Related:** EPIC-002

### US-007 · draft · source: requirements:US-007

[critical] A signed-in user can edit a note's text or title to keep it up to date.

AC-016: Text or title changed and saved → updated content stored, last-edited timestamp updated to current time. AC-017: Note edited and viewed on another signed-in device → edited content is shown there.

**Related:** EPIC-002, NFR-004

### US-008 · draft · source: requirements:US-008

[high] A signed-in user can delete a note they no longer need.

AC-018: Note deleted → removed from note list, no longer accessible. AC-019: Note deleted, user signs in on another device → deleted note does not appear there either.

**Related:** EPIC-002

### EPIC-003 · draft · source: requirements:EPIC-003

All of a user's notes appear in a single list ordered by most recently edited, each showing a last-edited timestamp, searchable by keyword.

Assumption: ordering is by most recently edited; there are no folders or tags.

**Related:** US-009, US-010, US-011

### US-009 · draft · source: requirements:US-009

[critical] All notes are shown in a list ordered from most to least recently edited.

AC-020: Several notes with different last-edited times → shown most-recently-edited first. AC-021: A note is edited → it moves to the top of the list on return to the note list. AC-022: No notes yet → empty state invites user to create their first note.

**Related:** EPIC-003, NFR-004

### US-010 · draft · source: requirements:US-010

[medium] Each note displays its last-edited timestamp so the user knows how recent it is.

AC-023: Notes in the list → each displays its last-edited timestamp. AC-024: Note saved → displayed timestamp reflects the time of that edit.

**Related:** EPIC-003

### US-011 · draft · source: requirements:US-011

[high] A signed-in user can search their notes by keyword to quickly find a specific note.

AC-025: Keyword entered in search → only notes whose title or text contains that keyword are shown. AC-026: No note matches the keyword → clear 'no results' state shown. AC-027: Active search cleared → full note list ordered by most recently edited is shown again.

**Related:** EPIC-003, NFR-004

### EPIC-004 · draft · source: requirements:EPIC-004

The app is delivered as a responsive web application that works across phone, tablet, and desktop browsers, free of charge.

Assumption: free to use with no payment or billing features.

**Related:** US-012, US-013

### US-012 · draft · source: requirements:US-012

[high] The app adapts to the size of the user's screen for comfortable note-taking on any device.

AC-028: App opened on a small/mobile screen, viewing the note list, a note, or sign-in screens → layout adapts, remains usable without horizontal scrolling. AC-029: App opened on a desktop browser using the same features → layout makes appropriate use of the larger screen.

**Related:** EPIC-004, NFR-003

### US-013 · draft · source: requirements:US-013

[medium] The app is completely free to use with no payment or billing setup required.

AC-030: User signs up or uses any feature → never asked for payment details, no billing or paywall presented at any point (assumption: app is free with no payment or billing features).

**Related:** EPIC-004

### NFR-001 · draft · source: requirements:NFR-001

[privacy] Each user's notes must be visible only to the account that created them.

No signed-in user can ever see another user's notes. Applies to US-004.

**Related:** US-004

### NFR-002 · draft · source: requirements:NFR-002

[security] Access to notes requires a valid signed-in session.

Visitors who are not signed in are shown no notes and are prompted to sign in. Applies to US-004.

**Related:** US-004

### NFR-003 · draft · source: requirements:NFR-003

[compatibility] The app must be responsive across phone, tablet, and desktop browser screen sizes.

Remains usable without horizontal scrolling on small screens; makes appropriate use of larger screens. Applies to US-012.

**Related:** US-012

### NFR-004 · draft · source: requirements:NFR-004

[performance] Typing, switching notes, and searching on the main screen must feel instant and responsive.

Applies to note creation, editing, list viewing, and search (US-005, US-007, US-009, US-011).

**Related:** US-005, US-007, US-009, US-011

### NFR-005 · draft · source: requirements:NFR-005

[compliance, accepted risk] No special regulatory controls are required beyond per-account note privacy.

The app operates in a general domain with no special regulatory or data-sensitivity requirements beyond keeping each user's notes private to their account; no additional compliance controls are built. Applies to the whole system. This is an accepted risk, not a built control.
<!-- sdlc:auto:end narrative -->

<!-- sdlc:auto:start summary -->
**Requirements version:** v1  
**Delivery scope:** lightweight  
**Approved:** 2026-10-28

**Capabilities in scope:** Create, edit and delete plain-text notes, Note list ordered by most recently edited, Keyword search across notes, Account sign-up and sign-in, Notes kept private to each account, Notes synced across any device the user logs in from, Note title with fallback derived from the first line, Last-edited timestamp on each note, Email-and-password sign-in, Persistent sessions so notes sync across devices, Title auto-derived from a note's first line when none is given

**Approved technology stack:**

| Layer | Choice | Rationale |
|---|---|---|
| backend | FastAPI | The server's job is small and clear: sign people in, and let each person create, edit, delete, list and search their own notes. FastAPI covers exactly this with little code, keeps the app fast under the light load a free personal tool will see, and is the default on this platform. Nothing you described needs anything heavier. |
| cloud | AWS | A free, personal web app needs cheap, reliable hosting that can grow quietly if more people sign up, without you re-platforming. AWS is the default here and runs the whole app -- web, server, database, email -- in one account with a free tier that keeps early costs near zero for a product with no revenue. |
| database | PostgreSQL | You need durable, private storage of each person's notes that stays consistent as they edit from several devices, plus keyword search across their notes. PostgreSQL stores the notes and accounts reliably and does the keyword search itself with built-in full-text search, so you avoid adding a separate search system for a simple app. It's the platform default and more than enough for this scale. |
| frontend | React | Your product is a responsive web app with one main screen -- a searchable list of notes and an editor -- that must feel instant as people type and switch devices. React handles that kind of live, in-place editing well and is the default here, so there's no reason to deviate. It also keeps the app easy to hand to another developer later, since React is the most common choice for work like this. |
<!-- sdlc:auto:end summary -->

<!-- sdlc:auto:start epics -->
## EPIC-001: Account Sign-up and Sign-in

Each person can create a personal account and sign in so their notes are private to them and available on any device. Assumption: sign-up and sign-in use email and password, and sessions persist so notes sync across devices. No payment or billing is involved; the app is free to use.

### US-001: Sign up with email and password

**Priority:** critical

> As a new visitor, I want to create an account using my email address and a password, so that I have a personal space where my notes are kept private to me.

| ID | Given | When | Then |
|---|---|---|---|
| AC-001 | I am on the sign-up screen and have not yet registered | I enter a valid email address and a password and submit | my account is created and I am signed in to my own empty note space |
| AC-002 | I am on the sign-up screen | I enter an email address that is already registered | the account is not created and I am told the email is already in use |
| AC-003 | I am on the sign-up screen | I submit with a missing or invalid email or an empty password | the account is not created and I am shown which field needs correcting |

### US-002: Sign in with email and password

**Priority:** critical

> As a registered user, I want to sign in with my email and password, so that I can access my private notes.

| ID | Given | When | Then |
|---|---|---|---|
| AC-004 | I have a registered account | I enter my correct email and password and submit | I am signed in and taken to my note list |
| AC-005 | I am on the sign-in screen | I enter an email or password that does not match an account | I am not signed in and I am shown an error that the credentials are invalid |

### US-003: Persistent session across devices

**Priority:** high

> As a signed-in user, I want my session to persist and my notes to be available wherever I log in, so that I can pick up my notes on any device.

| ID | Given | When | Then |
|---|---|---|---|
| AC-006 | I signed in and did not sign out | I return to the app later in the same browser | I remain signed in without re-entering my credentials. Assumption: sessions persist so notes sync across devices |
| AC-007 | I am signed in on one device and have notes saved | I sign in with the same account on a different device | the same notes are available on that device |
| AC-008 | I am signed in | I sign out | my session ends and my notes are no longer accessible until I sign in again |

### US-004: Notes kept private to each account

**Priority:** critical

> As a signed-in user, I want only my own notes to be visible to me, so that my notes stay private.

| ID | Given | When | Then |
|---|---|---|---|
| AC-009 | two separate users each have their own notes | one user is signed in | that user sees only their own notes and never another user's notes |
| AC-010 | I am not signed in | I try to access the note list or a note | I am not shown any notes and am prompted to sign in. Assumption: general domain with no special regulatory requirements beyond keeping each user's notes private to their account |

## EPIC-002: Note Creation, Editing and Deletion

The core note behaviour: users create, edit and delete plain-text notes. Each note has an optional title, with a fallback derived from the first line when none is given, and shows a last-edited timestamp. Assumption: notes are plain text only — rich-text formatting, folders/tags and checklists are out of scope.

### US-005: Create a plain-text note

**Priority:** critical

> As a signed-in user, I want to create a new plain-text note, so that I can capture what I want to remember.

| ID | Given | When | Then |
|---|---|---|---|
| AC-011 | I am signed in and viewing my notes | I create a new note and enter plain text | the note is saved to my account with a last-edited timestamp and appears in my note list |
| AC-012 | I am entering note text | I type content | only plain text is captured, with no rich-text formatting, folders/tags or checklists offered |

### US-006: Give a note an optional title with first-line fallback

**Priority:** high

> As a signed-in user, I want to optionally give a note a title, or have one derived from its first line, so that I can recognise the note in my list.

| ID | Given | When | Then |
|---|---|---|---|
| AC-013 | I am creating or editing a note | I provide a title | that title is saved and shown for the note in the list |
| AC-014 | I create or save a note without a title | the note has text | its title is automatically derived from the note's first line. Assumption: the title is optional and falls back to the first line |
| AC-015 | I save a note with no title and no text | it appears in the list | it is shown with a clear empty/untitled placeholder rather than a blank entry |

### US-007: Edit an existing note

**Priority:** critical

> As a signed-in user, I want to edit the text or title of a note, so that I can keep my notes up to date.

| ID | Given | When | Then |
|---|---|---|---|
| AC-016 | I have an existing note | I change its text or title and save | the updated content is stored and the note's last-edited timestamp is updated to the current time |
| AC-017 | I have edited a note | I view it on another device I am signed in to | the edited content is shown |

### US-008: Delete a note

**Priority:** high

> As a signed-in user, I want to delete a note I no longer need, so that my note list stays relevant.

| ID | Given | When | Then |
|---|---|---|---|
| AC-018 | I have an existing note | I delete it | the note is removed from my note list and is no longer accessible |
| AC-019 | I have deleted a note | I sign in on another device | the deleted note no longer appears there either |

## EPIC-003: Note List, Ordering and Search

All of a user's notes appear in a single list ordered by most recently edited, each showing a last-edited timestamp. The list can be searched by keyword. Assumption: ordering is by most recently edited; there are no folders or tags.

### US-009: View all notes ordered by most recently edited

**Priority:** critical

> As a signed-in user, I want to see all my notes in a list ordered with the most recently edited first, so that I can quickly find what I was last working on.

| ID | Given | When | Then |
|---|---|---|---|
| AC-020 | I have several notes with different last-edited times | I open my note list | the notes are shown in order from most recently edited to least recently edited |
| AC-021 | I edit a note | I return to the note list | that note moves to the top of the list |
| AC-022 | I have no notes yet | I open my note list | I see an empty state inviting me to create my first note |

### US-010: See last-edited timestamp on each note

**Priority:** medium

> As a signed-in user, I want to see when each note was last edited, so that I know how recent each note is.

| ID | Given | When | Then |
|---|---|---|---|
| AC-023 | I have notes in my list | I view the list | each note displays its last-edited timestamp |
| AC-024 | I edit a note | the note is saved | its displayed last-edited timestamp reflects the time of that edit |

### US-011: Search notes by keyword

**Priority:** high

> As a signed-in user, I want to search my notes by keyword, so that I can quickly find a specific note.

| ID | Given | When | Then |
|---|---|---|---|
| AC-025 | I have notes containing various text | I enter a keyword in the search | only my notes whose title or text contains that keyword are shown |
| AC-026 | I have searched for a keyword | no note matches it | I am shown a clear 'no results' state |
| AC-027 | I have an active search | I clear the search | the full note list ordered by most recently edited is shown again |

## EPIC-004: Responsive Web Delivery

The app is delivered as a responsive web application that works across phone, tablet and desktop browsers. Assumption: it is free to use with no payment or billing features.

### US-012: Use the app on any device size

**Priority:** high

> As a user, I want the app to adapt to the size of my screen, so that I can take notes comfortably on phone, tablet or desktop.

| ID | Given | When | Then |
|---|---|---|---|
| AC-028 | I open the app on a small (mobile) screen | I view the note list, a note, or the sign-in screens | the layout adapts to the screen size and remains usable without horizontal scrolling |
| AC-029 | I open the app on a desktop browser | I use the same features | the layout makes appropriate use of the larger screen |

### US-013: Free to use with no billing

**Priority:** medium

> As a user, I want to use the app completely free, so that I can take notes without any cost or payment setup.

| ID | Given | When | Then |
|---|---|---|---|
| AC-030 | I am signing up or using any feature of the app | I go through the flows | I am never asked for payment details and no billing or paywall is presented. Assumption: the app is free with no payment or billing features |
<!-- sdlc:auto:end epics -->
