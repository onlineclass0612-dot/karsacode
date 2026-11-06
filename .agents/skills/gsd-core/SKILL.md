---
name: gsd-core
description: Get Stuff Done (GSD) meta-prompting & disciplined execution framework. Orchestrates complex tasks into phased checkpoints (Explore, Plan, Execute, Verify) to prevent context drift and ensure completion.
---

# GSD Core (Get Stuff Done Framework)

GSD Core is a disciplined meta-prompting and execution framework designed to maintain strict focus, eliminate context drift, prevent hallucinations, and guarantee completion of software development tasks.

---

## 1. The Core 4-Phase GSD Cycle

```text
[ 1. EXPLORE ] ──► [ 2. PLAN ] ──► [ 3. EXECUTE ] ──► [ 4. VERIFY ]
```

### Phase 1: Explore (Zero Mutation)
- **Goal:** Understand existing code and constraints with absolute precision BEFORE touching any file.
- **Rules:**
  1. Inspect the workspace tree, package configs, and existing implementations.
  2. Never assume file contents or directory structure; use inspection tools (`view_file`, `list_dir`, `grep_search`).
  3. Identify all dependencies, types, and side effects.
  4. **Strict Constraint:** Do NOT edit or write code during Phase 1.

### Phase 2: Plan (Atomic & Actionable)
- **Goal:** Design a concrete, step-by-step blueprint with verifiable checkpoints.
- **Rules:**
  1. Break the task into atomic, sequentially independent units of work.
  2. Define specific files to create or modify for each step.
  3. Identify potential failure points, edge cases, and breaking changes.
  4. Define explicit verification criteria (e.g. "Run `npm run build`", "Check API response").

### Phase 3: Execute (Focused & Relentless)
- **Goal:** Implement the plan step-by-step without skipping ahead or losing context.
- **Rules:**
  1. Follow the blueprint strictly. Avoid scope creep or speculative refactoring.
  2. Implement one component/file at a time.
  3. Immediately test and verify each modification before moving to the next chunk.
  4. If an unexpected error arises, diagnose systematically instead of trying random fixes.

### Phase 4: Verify & Hand-off
- **Goal:** Prove that the solution works and meets all acceptance criteria.
- **Rules:**
  1. Run the build command, test suite, and linter.
  2. Verify that no unintended regressions or dead code were introduced.
  3. Present a concise summary of changes, files modified, and next recommended actions to the user.

---

## 2. Anti-Drift Heuristics

1. **The 3-Action Guardrail:**  
   If you have performed 3 consecutive tool actions without making demonstrable progress toward the phase goal, stop, reassess your assumptions, and adjust your approach.
2. **Never Speculate on Missing Requirements:**  
   If business logic is ambiguous (e.g., "What is the penalty for late car return?"), stop and ask the user rather than guessing an arbitrary number.
3. **Preserve Surrounding Code:**  
   Never wipe out unrelated comments, docstrings, or functions when editing a file. Always make targeted, minimal modifications.

---

## 3. GSD Execution Checklist

- [ ] **Explore:** Did I inspect all relevant existing files and dependencies?
- [ ] **Plan:** Is there a clear, ordered checklist with zero ambiguity?
- [ ] **Execute:** Did I follow the plan without premature stopping or tangential refactors?
- [ ] **Verify:** Did the build/test run succeed with zero errors?
- [ ] **Hand-off:** Is the final summary clear, concise, and actionable?
