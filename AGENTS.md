# Project Instructions

## General

This is an existing production Next.js project.

Before making changes:

1. Inspect the existing project structure.
2. Read the relevant components and dependencies.
3. Understand the current implementation before modifying anything.
4. Preserve existing functionality unless the task explicitly requires changing it.

Do not perform unrelated refactoring.

---

## Development rules

- Follow the existing project architecture and coding style.
- Prefer modifying existing components over creating duplicate implementations.
- Keep components small and reusable where appropriate.
- Do not introduce unnecessary abstractions.
- Do not rewrite working code without a clear reason.
- Do not rename files, folders, components, variables, or routes unless required.
- Do not change existing APIs or component props unless necessary.
- Preserve responsive behavior unless explicitly asked to change it.

---

## Next.js

Follow the patterns already used by the project.

Before creating a new component or route:

- inspect similar existing components;
- reuse existing utilities and patterns where possible;
- determine whether the project uses App Router or Pages Router;
- preserve the current server/client component architecture.

Do not add `"use client"` unless client-side functionality actually requires it.

Prefer Server Components when appropriate.

---

## Styling

Follow the styling system already used by the project.

If Tailwind CSS is used:

- prefer existing utility patterns;
- preserve the existing spacing system;
- preserve existing breakpoints;
- avoid unnecessary custom CSS;
- avoid arbitrary values when an existing design token or utility can be used.

Do not redesign unrelated sections.

When changing responsive UI, verify:

- mobile
- tablet
- desktop

---

## Dependencies

Do not install new production dependencies unless they are genuinely necessary.

Before installing a package:

1. Check whether the functionality already exists in the project.
2. Check whether it can reasonably be implemented with existing dependencies.
3. Explain why the new dependency is needed.

Never remove existing dependencies unless explicitly requested.

---

## Safety

Never modify or expose:

- `.env`
- `.env.local`
- API keys
- access tokens
- credentials
- secrets

Do not print secrets in terminal output or responses.

Do not modify deployment configuration unless explicitly requested.

---

## Git

Do not:

- force push;
- rewrite Git history;
- delete branches;
- reset unrelated user changes;
- discard existing uncommitted changes.

Before making substantial changes, inspect:

`git status`

After completing the task, report which files were modified.

---

## Validation

After code changes, perform the relevant available checks.

Prefer:

`npm run lint`

and:

`npm run build`

If tests exist and are relevant, run them.

If a validation command fails:

1. investigate the failure;
2. determine whether it was caused by your changes;
3. fix issues caused by your changes;
4. report unrelated pre-existing failures separately.

Do not claim that validation passed unless you actually ran it.

---

## Task execution

For small tasks:

1. Inspect.
2. Implement.
3. Validate.
4. Summarize.

For large or risky tasks:

1. Inspect the codebase.
2. Explain the proposed approach.
3. Identify the files likely to change.
4. Then implement the change.
5. Validate the result.

Avoid changing files unrelated to the task.

---

## Final response

After completing a task, provide:

- a short summary of what was changed;
- the list of modified files;
- validation commands that were run;
- any remaining issues or recommendations.

Keep the response concise.
