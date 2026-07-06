<div align="center">

  <!-- Colorful Banner using HTML -->
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=200&section=header&text=Playwright%20Fundamentals&fontSize=50&fontColor=ffffff&animation=fadeIn&fontAlignY=35&desc=End-to-End%20Testing%20Made%20Simple&descAlignY=55&descSize=20" alt="Playwright Fundamentals Banner" />

  <br />

  <!-- Colorful Badges -->
  <a href="https://playwright.dev">
    <img src="https://img.shields.io/badge/-Playwright-45ba4b?style=for-the-badge&logo=playwright&logoColor=white" alt="Playwright" />
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  </a>
  <a href="https://nodejs.org/">
    <img src="https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  </a>
  <br />
  <img src="https://img.shields.io/badge/tests-passing-brightgreen?style=flat-square" alt="Tests Passing" />
  <img src="https://img.shields.io/badge/license-ISC-blue?style=flat-square" alt="License" />

  <br />
  <br />

  <!-- Colorful Header Text -->
  <h1>
    <span style="color: #2EAD33;">🎭</span>
    <span style="color: #E535AB;">P</span><span style="color: #3178C6;">l</span><span style="color: #F7DF1E;">a</span><span style="color: #FF4154;">y</span><span style="color: #2EAD33;">w</span><span style="color: #E535AB;">r</span><span style="color: #3178C6;">i</span><span style="color: #F7DF1E;">g</span><span style="color: #FF4154;">h</span><span style="color: #2EAD33;">t</span>
    <span style="color: #3178C6;">Fundamentals</span>
  </h1>

  <p>
    <strong><span style="color: #FF6B6B;">Reliable</span></strong> · 
    <strong><span style="color: #4ECDC4;">Fast</span></strong> · 
    <strong><span style="color: #45B7D1;">Cross-Browser</span></strong> End-to-End Testing
  </p>

</div>

---

## 🚀 About This Project

Welcome to <strong>Playwright Fundamentals</strong>! This repository contains hands-on Playwright examples and configuration files to help you learn browser automation and end-to-end testing with [Microsoft Playwright](https://playwright.dev) and TypeScript.

This project is designed for beginners and intermediate learners who want to practice:

- writing reliable browser tests
- working with locators and assertions
- handling frames, alerts, files, downloads, and drag-and-drop
- running tests in different browser modes
- generating reports and debugging failures

---

## 🛠️ Tech Stack

The repository uses the following tools and libraries:

| Technology | Description |
|------------|-------------|
| 🎭 Playwright | Modern cross-browser automation |
| 🔷 TypeScript | Type-safe test development |
| 🟢 Node.js | JavaScript runtime |
| 📦 npm | Package management |

---

## 📂 Project Structure

The test suite is organized by topic so you can explore concepts in a structured way:

```
PlaywrightFundamentals/
├── 📁 tests/
│   ├── 📁 01_Basics/                    # Basics of Playwright
│   ├── 📁 02_first/                     # First test examples
│   ├── 📁 03_Locators_Commands/         # Locators and commands
│   ├── 📁 04_Session_Storage/           # Session storage handling
│   ├── 📁 05_Allure_Reporting/          # Allure reporting integration
│   ├── 📁 06_Multiple_Element_/         # Multiple element handling
│   ├── 📁 07_WebTables/                 # Web tables testing
│   ├── 📁 08_Web_Select_Frames_Iframe/  # Web select, frames, iframes
│   ├── 📁 09_Frame_Iframe/              # Frames and iframes
│   ├── 📁 10_Keyboard_Hover_Drag_Drop/  # Keyboard, hover, drag & drop
│   ├── 📁 11_JS_Alerts/                 # JavaScript alerts
│   ├── 📁 12_Handle_SVG/                # SVG handling
│   ├── 📁 13_Shadow_DOM/                # Shadow DOM testing
│   ├── 📁 14_FileUpload/                # File upload tests
│   ├── 📁 15_File_Download/             # File download tests
│   ├── 📁 16_Scroll_toElement/          # Scroll to element
│   ├── 📁 17_Expect_Assertions/         # Expect assertions
│   ├── 📁 18_Test_hooks/                # Test hooks (before/after)
│   ├── 📁 19_Data_Driven_Testing/       # Data-driven testing
│   ├── 📁 20_Page_Object_Model/         # Page Object Model
│   ├── 📁 21_Fixture/                   # Playwright fixtures
│   ├── 📁 22_Misc_Concepts/             # Miscellaneous concepts
│   └── 📁 23_Advance_Framework/         # Advanced framework topics
├── 📄 playwright.config.ts              # Playwright configuration
├── 📄 package.json                      # Project dependencies
├── 📄 .gitignore                        # Ignored files and folders
└── 📄 README.md                         # Project documentation
```

---

## 🧪 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the tests

```bash
# Run all tests
npx playwright test

# Run a single test file
npx playwright test tests/02_first/237_BCP_Test_Options.spec.ts

# Run tests in headed mode
npx playwright test --headed

# Run a specific file in headed mode
npx playwright test tests/02_first/237_BCP_Test_Options.spec.ts --headed
```

### 3. View reports

```bash
# Open the HTML report
npx playwright show-report
```

> Use the exact file name with the .spec.ts suffix and the path relative to the repository root when running a single file. The current configuration discovers tests from the tests folder and runs them in Firefox while enabling traces, screenshots, and videos.

### 4. Troubleshooting tips

- If Playwright says no tests were found, verify that the file name ends with .spec.ts and that the path is correct.
- If a browser is missing, install the required Playwright browser binaries with the Playwright CLI.
- For detailed debugging, review the generated trace and screenshots in the test-results folder.

```bash
# Install dependencies
npm install

# Run all tests
npx playwright test

# Run a specific test file
npx playwright test tests/02_first/237_BCP_Test_Options.spec.ts

# Run tests in headed mode
npx playwright test --headed

# Run a specific file in headed mode
npx playwright test tests/02_first/237_BCP_Test_Options.spec.ts --headed

# Generate and open HTML report
npx playwright show-report
```

> Use the exact filename with the .spec.ts suffix and the path relative to the project root when running a single test file. The current config discovers tests from the root tests folder and runs them in Firefox with tracing, screenshots, and video recording enabled.

---

## 🌐 Supported Browsers

The current setup is configured for Firefox by default, and the project can be extended to run on additional browsers as needed.

- ✅ Firefox
- ✅ Chromium
- ✅ WebKit

- ✅ Chromium (Google Chrome / Microsoft Edge)
- ✅ Firefox
- ✅ WebKit (Safari)

---

## 📖 Learn More

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [API Reference](https://playwright.dev/docs/api/class-playwright)
- [Best Practices](https://playwright.dev/docs/best-practices)

---

<div align="center">

  <br />

  <p>
    <span style="color: #FF6B6B;">❤️</span> Built with passion for testing
  </p>

  <p>
    <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=100&section=footer" alt="Footer Banner" />
  </p>

</div>
