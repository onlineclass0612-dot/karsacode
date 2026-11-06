---
name: clean-code-playbook
description: Pragmatic clean code standards, SOLID principles, refactoring heuristics, naming conventions, and cognitive load minimization across TypeScript, JavaScript, Python, and SQL.
---

# Clean Code Playbook

Standard operational guide for writing readable, maintainable, and pragmatic code. Inspired by Clean Code (Robert C. Martin), Refactoring (Martin Fowler), and real-world production engineering best practices.

## 1. Meaningful Naming Principles

### 1.1 Intent-Revealing Names
- Names must state **what it does**, **why it exists**, and **how it is used**.
- **Bad:** `let d; // elapsed time in days`
- **Good:** `let elapsedTimeInDays: number;`
- **Bad:** `const list = getCars();`
- **Good:** `const availableRentalCars = getCarsByAvailability(Status.AVAILABLE);`

### 1.2 Pronounceable and Searchable Names
- Avoid abbreviations and mental mapping.
- **Bad:** `genInvPdfDoc()`
- **Good:** `generateInvoicePdfDocument()`

### 1.3 Consistency in Lexicon
- Stick to one word per concept across the entire codebase:
  - `fetch` vs `get` vs `retrieve` -> Pick **one** (e.g., `get` for local/sync, `fetch` for remote/async).
  - `controller` vs `manager` vs `handler` -> Pick **one** consistently.

### 1.4 Boolean Naming
- Prefix boolean variables and functions with `is`, `has`, `should`, or `can`:
  - `isAvailable`, `hasPaidDeposit`, `canCancelBooking`, `shouldSendNotification`.

---

## 2. Small Functions & Single Responsibility (SRP)

### 2.1 The 20-Line Heuristic
- A function should ideally fit on one screen and do **exactly one thing** well.
- If a function has more than 20–25 lines, look for opportunities to extract sub-responsibilities.

### 2.2 One Level of Abstraction (SLAP)
- Statements within a function should all be at the same level of abstraction.
- High-level orchestrator functions should call mid-level functions, not mix high-level business logic with low-level string slicing or raw SQL queries.

### 2.3 Function Arguments Limit
- **Ideal:** 0–2 arguments (niladic or dyadic).
- **3+ arguments:** Group them into a typed parameter object / interface:
  ```typescript
  // Bad
  function bookCar(carId: string, userId: string, start: Date, end: Date, isWithDriver: boolean, dp: number) {}

  // Good
  interface BookingRequest {
    carId: string;
    userId: string;
    startDate: Date;
    endDate: Date;
    isWithDriver: boolean;
    depositAmount: number;
  }
  function bookCar(request: BookingRequest) {}
  ```
- **Never use Flag Arguments:** Passing a boolean like `render(isModal: boolean)` indicates the function does two things. Split it into `renderInline()` and `renderModal()`.

---

## 3. Cognitive Load & Flow Control

### 3.1 Return Early (Guard Clauses)
- Invert `if/else` ladders to handle error/boundary conditions immediately at the top of the function.
- Avoid deep indentation (keep indentation $\le 2$ levels).

```typescript
// Bad (Deep Nesting)
function processPayment(booking: Booking, payment: Payment) {
  if (booking) {
    if (booking.status === 'PENDING') {
      if (payment.amount >= booking.totalAmount) {
        // execute payment
      } else {
        throw new Error('Insufficient payment');
      }
    } else {
      throw new Error('Booking not pending');
    }
  }
}

// Good (Guard Clauses)
function processPayment(booking: Booking, payment: Payment) {
  if (!booking) throw new Error('Booking not found');
  if (booking.status !== 'PENDING') throw new Error('Booking is not pending');
  if (payment.amount < booking.totalAmount) throw new Error('Insufficient payment');

  // Execute payment directly at root level
  return executeBookingPayment(booking, payment);
}
```

### 3.2 Avoid Side Effects
- Functions should not secretly mutate input objects or global state unless explicitly designed and named as mutating mutators.
- Prefer immutable data structures and pure functions where reasonable.

---

## 4. Error Handling Standards

1. **Use Exceptions/Result Types, Not Magic Return Codes:**  
   Do not return `-1` or `null` to represent failure when an exception or explicit `Result<T, E>` pattern explains the root cause.
2. **Never Swallow Errors Silently:**  
   Avoid empty `catch (e) {}` blocks. Always log or wrap with domain context.
3. **Include Context in Error Messages:**  
   Instead of `Error: Failed to update car`, provide `Error: Failed to update car [ID: ${carId}] to status [${status}]: ${reason}`.

---

## 5. Comments & Documentation Policy

- **Don't comment what code does — make the code express it.**
- **Good Comments:** Explain *why* a non-obvious decision was made (business edge cases, third-party library workarounds, performance trade-offs).
- **Bad Comments:** Obvious restatements (`// increment counter: i++`), zombie/commented-out dead code (delete it; git history remembers).

---

## 6. Pre-Commit Clean Code Checklist

- [ ] Does every function have a single clear responsibility?
- [ ] Are variable and function names self-describing without guessing?
- [ ] Are guard clauses used to prevent deep indentation?
- [ ] Are there magic numbers or hardcoded strings that should be constants/enums?
- [ ] Are all error states handled with informative messages?
- [ ] Is dead or commented-out code completely removed?
