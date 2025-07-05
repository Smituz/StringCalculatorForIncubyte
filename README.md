# String Calculator TDD Kata for Incubyte

## 👋 Hello Evaluators!!

Welcome to my submission for the Incubyte's **String Calculator TDD Kata**.

While most **code to finish, I craft to impress.**  
I'm genuinely excited about this opportunity to demonstrate my commitment to **writing clean, testable code.** I intend more on thought of developing **not just code that works, but code that communicates.**

This project reflects my understanding of **Test-Driven Development (TDD)**, my love for structure, and my belief that good software is an outcome of both thinking and discipline.

Thank you for reviewing my work. I hope it’s as enjoyable to read as it was to build.

– **Smit Bhansali**

---

## 🚀 Project Goals

- Practice and demonstrate disciplined **TDD**
- Deliver **readable, maintainable, and testable** code
- Build the solution step-by-step using **atomic commits** that reflect the TDD lifecycle

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
| Throws error for a single negative number | ✅ | Exception: `"negatives not allowed: -3."` |
| Throws error for multiple negative numbers | ✅ | Exception: `"negatives not allowed: -2,-3."` |
| Numbers > 1000 are ignored | ✅ | e.g., `2+1001+3` = `5` |
| Supports custom delimiters of any length | ✅ | e.g., `"//[***]\n1***2***3"` |
| Supports multiple delimiters of any length | ✅ | e.g., `"//[&&][###]\n1&&2###3"` |
| Tracks how many times `add()` is called | ✅ | Implemented via `getCalledCount()` in class |

---

## 📸 Screenshots: A Visual Journey

To support this journey, I have maintained a full **set of screenshots** that visually document:

-  **Failing tests** before implementation  
-  **Passing tests** after writing the minimum code and  **Refactor** that code with cleaner helper methods


These screenshots (stored in `screenshots/`) take you on a **chronological tour** of how this kata evolved, moment by moment not just through code, but also through visual feedback loops.

---

## 🔁 TDD Commit Style

Each feature followed the **Red → Green → Refactor** cycle and has been:

- Started with a **failing (or non-compiling) test**
- Followed by **minimum implementation** to pass it
- **Refactored** to improve clarity, reusability, and testability
- Committed using **clear and atomic commit messages**

Some examples:

- `Add failing test for empty string input`
- `Make test pass for input string with single number in it`
- `Refactoring : Use of split-map-reduce for parsing comma-seperated numbers`

---

## 🧠 Personal Takeaways

As a final-year student, I had never **formally practiced Test-Driven Development** before this kata.

But through this experience, I learned:

- How **writing a failing test** makes the goal of your next step crystal clear.
- That the moment a test **starts passing** creates a burst of motivation.
- How this structure **saves time** and improves decision-making when building real-world software.
- And most importantly that writing tests **first** helps you write code that doesn't just work, but is robust and future-proof.

TDD gave me **discipline, rhythm, and confidence** as a developer and I now see myself using it in all future projects.

---

## 🛠️ Technologies Used

- **Node.js** (JavaScript runtime)
- **Jest** (Unit testing framework)
- Manual versioning with **Git**
- **Visual Studio Code** as **IDE**

---