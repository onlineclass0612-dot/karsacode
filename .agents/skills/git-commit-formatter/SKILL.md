---
name: git-commit-formatter
description: Conventional Commits 1.0.0 formatter and git staging workflow. Generates precise atomic commits with standard types (feat, fix, refactor, chore), scopes, and breaking change alerts.
---

# Git Commit Formatter

Guideline for formatting git commits and managing atomic staging according to the **Conventional Commits 1.0.0** specification.

---

## 1. Commit Message Structure

Every commit message must follow this exact format:

```text
<type>(<scope>): <subject>

[optional body explaining WHY, not WHAT]

[optional footer(s) for BREAKING CHANGE or issue references]
```

---

## 2. Permitted Commit Types

| Type | Description | Example |
|---|---|---|
| **`feat`** | A new feature or functionality for the user/system | `feat(booking): add down payment 30% option` |
| **`fix`** | A bug fix | `fix(payment): resolve Mayar webhook signature mismatch` |
| **`refactor`** | Code change that neither fixes a bug nor adds a feature | `refactor(auth): simplify session token validation` |
| **`perf`** | A code change that improves performance | `perf(catalog): cache available fleet query with redis` |
| **`style`** | Changes that do not affect code logic (formatting, spaces, semicolons) | `style(tailwind): format navigation bar glassmorphism classes` |
| **`docs`** | Documentation only changes | `docs(readme): update API key setup instructions` |
| **`test`** | Adding missing tests or correcting existing tests | `test(booking): add unit test for date collision detection` |
| **`chore`** | Updating build tasks, package manager configs, dependencies | `chore(deps): upgrade prisma to latest minor release` |
| **`ci`** | Changes to CI configuration files and scripts | `ci(github): add automated lint and build workflow` |
| **`build`** | Changes that affect the build system or external dependencies | `build(next): configure standalone output for docker` |
| **`revert`** | Reverting a previous commit | `revert: revert "feat(pricing): dynamic surge pricing"` |

---

## 3. Formatting Rules

### 3.1 The Header (Line 1)
- **Scope (Optional but recommended):** Noun describing the section of the codebase (e.g. `(booking)`, `(cars)`, `(invoice)`, `(webhook)`).
- **Imperative Mood:** Use imperative, present tense:
  - ✅ `add`, `fix`, `change`, `remove`
  - ❌ `added`, `adds`, `fixed`, `changing`, `removes`
- **Case & Punctuation:**
  - Lowercase throughout (except for proper nouns or acronyms).
  - **No period (`.`)** at the end of the subject line.
  - Maximum **50–72 characters** for the header line.

### 3.2 The Body (Optional)
- Separated from the subject by one blank line.
- Explains the **motivation** behind the change and contrasts it with previous behavior.
- Wrap lines at 72 characters.

### 3.3 The Footer & Breaking Changes
- **Breaking Changes:** Must start with `BREAKING CHANGE:` followed by a space and a clear description of what broke and how to migrate:
  ```text
  feat(api): change date format in booking payload

  BREAKING CHANGE: `startDate` now expects ISO-8601 string instead of unix timestamp.
  ```
- **Issue References:** Reference issues like `Closes #123` or `Fixes #45`.

---

## 4. Atomic Commit Guidelines

1. **One Logical Change per Commit:**  
   Never mix refactoring, feature work, and formatting changes in a single commit.
2. **Selective Staging:**  
   Use `git add -p` or stage specific files:
   ```bash
   git add src/services/paymentService.ts
   git commit -m "feat(payment): integrate Mayar dynamic QRIS generation"
   ```
3. **Working Tree Cleanliness:**  
   The project must compile and pass tests after every commit. Do not commit broken intermediate states.

---

## 5. Commit Verification Checklist

- [ ] Does the commit header start with a valid type (`feat`, `fix`, etc.)?
- [ ] Is the subject line in the imperative mood and under 72 characters?
- [ ] Is there NO trailing period in the subject line?
- [ ] Is the change atomic (focuses on only one logical change)?
- [ ] If there is a breaking change, is `BREAKING CHANGE:` properly noted?
