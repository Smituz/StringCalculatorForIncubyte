# String Calculator TDD Kata for Incubyte

## 👋 Hello Evaluators!!

Welcome to my submission for the Incubyte's **String Calculator TDD Kata**.

While most **Code to finish, I Craft to Impress.** <br>
I'm genuinely excited about the opportunity to demonstrate my commitment to **writing clean, testable code,** not just the code that works, but code that communicates.
This project reflects my understanding of **Test-Driven Development (TDD)**, my love for structure, and my belief that good software is an outcome of both thinking and discipline.

Thank you for reviewing my work. I hope it’s as enjoyable to read as it was to build.

– **Smit Bhansali**

## 🚀 Project Goals

- Practice and demonstrate disciplined TDD.
- Deliver readable, maintainable, and testable code.
- Build up the solution step-by-step using commits that reflect the TDD cycle.

---

## ✅ Features Implemented So Far

| Feature | Status | Notes |
|--------|--------|-------|
| Returns 0 for empty string | ✅ | Base case |
| Returns number for single input | ✅ | Handled non-comma strings |
| Returns sum of two numbers | ✅ | Initially handled fixed digits → Refactored using `split`, `map`, `reduce` |
| Handles unknown number of inputs | ✅ | Used array processing logic |
| Supports `\n` as delimiter | ✅ | Combined with comma for parsing |
| Supports custom single-character delimiters | ✅ | e.g., `"//;\n1;2"` |
| Throws error for a single negative number | ✅ | Exception with message: `"negatives not allowed: -3."` |
| Throws error for multiple negative numbers | ✅ | Exception with message: `"negatives not allowed: -2,-3."` |
---

## 🔁 TDD Commits explained

Each feature followed the **Red → Green → Refactor** cycle and has been:
- Written with a **failing test first**
- Made to **pass with minimal implementation**
- **Refactored for clarity and reusability** (e.g., helper functions like `checkNegatives`, `sumParsedNumbers`)
- Committed in small, atomic chunks with meaningful messages

---

## 🛠️ Technologies Used

- Node.js (JavaScript)
- Jest (Unit testing)

---