---
# AGENTS.md

**Purpose**: This document gives clear, deterministic guidance for automated coding agents working in the `web-dev-js` repository. The project is a **learning playground for a complete beginner** – therefore agents must be **extremely helpful, explanatory, and patient**, walking the user through every step of development, explaining *why* we do things, not just *what* we do.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Run / Development Commands](#run--development-commands)
3. [Linting](#linting)
4. [Code‑Style Guidelines](#code‑style-guidelines)
   - [Imports & Modules](#imports--modules)
   - [Formatting & Indentation](#formatting--indentation)
   - [Naming Conventions](#naming-conventions)
   - [Types & JSDoc](#types--jsdoc)
   - [Error Handling](#error-handling)
   - [Comments & Documentation](#comments--documentation)
   - [File Organization](#file-organization)
5. [Tooling & Configuration Files](#tooling--configuration-files)
6. [Agent FAQ](#agent-faq)

---

## Project Overview

The goal of this repository is **learning web development** with vanilla JavaScript, HTML5, and CSS3. The user has _no programming background_, so every explanation should be clear, step‑by‑step, and include the reasoning behind each action.

The repository contains:

- `index.html` – the entry page.
- `script.js` – the main JavaScript module.
- `README.md` – project description.
- `package.json` – minimal npm configuration for tooling.
- `.eslintrc.json` – ESLint configuration.
- `.prettierrc.json` & `.prettierignore` – Prettier configuration.

---

## Run / Development Commands

| Goal                                       | Command                                            | Description                                                                                                                                                                               |
| ------------------------------------------ | -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Start a live‑reload development server** | `npm run start` (or `npx live-server . --watch=.`) | Serves the current folder at `http://127.0.0.1:8080`. Files are automatically reloaded in the browser whenever you save a change. Ideal for a beginner who wants instant visual feedback. |
| **Run the linter**                         | `npm run lint`                                     | Executes ESLint across the repository and prints any style violations.                                                                                                                    |
| **Format code automatically**              | `npm run format`                                   | Runs Prettier to rewrite all source files according to the style rules defined in `.prettierrc.json`.                                                                                     |
| **Run the tests**                          | `npm test`                                         | Executes Jest test suites and reports results.                                                                                                                                            |

**Tip for the learner**: After editing any file, run `npm run format` or enable the VS Code _auto‑fix on save_ option (see the VS Code section below). This keeps the code consistently styled without having to remember every rule.

---

## Linting

The project uses **ESLint** with the configuration found in `.eslintrc.json`. The important rules are:

- No `var`; use `let` or `const`.
- Prefer `const` when a variable never changes.
- Always end statements with a semicolon.
- Use single quotes for strings (unless the string itself contains a single quote).
- Enforce 2‑space indentation.
- Require `===`/`!==` instead of `==`/`!=`.

Run the linter with:

```bash
npm run lint
```

If any warnings appear, the output will point to the exact line and explain the rule that was broken. Encourage the learner to read the message – it’s a great way to understand good JavaScript practices.

---

## Code‑Style Guidelines

These rules complement ESLint and Prettier. They are **mandatory** for any agent that modifies code.

### Imports & Modules

1. Use ES‑modules (`import … from …`).
2. Keep imports grouped: built‑in → third‑party → local.
3. One import per line; avoid wildcard imports.
4. Prefer named imports over default imports when possible.

### Formatting & Indentation

- **Indentation**: 2 spaces, no tabs.
- **Semicolons**: always required.
- **Quotes**: single quotes for strings.
- **Trailing commas**: enabled for multiline objects/arrays.
- **Line length**: max 100 characters.
- **Blank lines**: two before a top‑level function/class, one between methods.

### Naming Conventions

| Entity                       | Convention         |
| ---------------------------- | ------------------ |
| Constants                    | `UPPER_SNAKE_CASE` |
| Variables / Functions        | `camelCase`        |
| Classes / Constructors       | `PascalCase`       |
| Files                        | `kebab-case.js`    |
| DOM IDs / Classes (HTML/CSS) | `kebab-case`       |
| DOM references in JS         | `camelCase`        |

### Types & JSDoc

Even though the project is plain JavaScript, we add **JSDoc** comments to describe public APIs. Example:

```js
/**
 * Adds two numbers together.
 * @param {number} a – first operand.
 * @param {number} b – second operand.
 * @returns {number} The sum of `a` and `b`.
 */
export function add(a, b) {
  return a + b;
}
```

### Error Handling

1. Never silently swallow errors – either handle them or re‑throw.
2. Use `try … catch` only around code that can actually fail (e.g., `fetch`, `JSON.parse`).
3. Log concise, non‑leaky messages: `console.error('Fetch failed:', err);`.
4. For domain‑specific failures, create custom error classes.

### Comments & Documentation

- Add **inline comments** only when the code is not self‑explanatory.
- Use **block JSDoc comments** for exported functions/classes.
- Keep comment width ≤ 80 characters and update comments whenever related code changes.

### File Organization

- **Root**: `index.html`, `script.js`, `README.md`.
- **src/** (optional): place new modules here.
- **dist/**: generated build artifacts (if the user ever adds a build step).
- **tests/** (optional): Jest test suites, if the learner later wants testing.
- Config files: `.eslintrc.json`, `.prettierrc.json`, `.prettierignore`.

---

## Tooling & Configuration Files

Only the tools that actually exist in `package.json` are listed here.

### `.eslintrc.json`

(see the **Linting** section for the full JSON content – it should already exist).

### `.prettierrc.json`

```json
{
  "singleQuote": true,
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "printWidth": 80
}
```

### `.prettierignore`

```
node_modules
dist
```

### `package.json`

**Note for the learner**: After any change to `package.json`, run `npm install` so the new tools become available.

### `jest` (testing framework)

Jest is used for unit testing. Run tests with `npm test`. Keep test files in a `tests/` directory and name them with `.test.js` suffix. When adding new testing libraries or other frameworks, remember to update this AGENTS.md file accordingly.

---

## Agent FAQ

**Q: How should I explain a new command to the user?**

- Break the explanation into three parts: _what the command does_, _why it’s useful for a beginner_, and _how to run it_. Use simple language and give concrete examples.

**Q: The user is unfamiliar with the terminal – what do I do?**

- Show the exact command, then describe each part (e.g., `npx` runs a package without installing it globally). Mention any required keys (like `Ctrl + C` to stop a server).

**Q: Should I automatically run commands for the user?**

- Only run commands when explicitly asked. Otherwise, tell the user the command to run and what output to expect.

**Q: A new library or framework is added – what should I do?**

- Update this AGENTS.md file to document the new tool, including any scripts, usage instructions, and reminders to keep it up‑to‑date.

---

_Generated by the automated `AGENTS.md` generator. All agents should treat this file as the single source of truth for project conventions._
