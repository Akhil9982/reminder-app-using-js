# JavaScript Reminder App

A lightweight, browser-based reminder application built to demonstrate core JavaScript mechanics. This project focuses on DOM manipulation, asynchronous event handling, and persistent state management without relying on external frameworks.

## 🚀 Live Deployment
[**View Live Demo**](https://akhil9982.github.io/reminder-app-using-js/) *(Update this link if your deployment URL is different)*

## ✨ Core Features
* **CRUD Mechanics:** Create, read, update, and delete reminder instances dynamically.
* **Persistent State:** Utilizes the browser's `localStorage` API to maintain data across sessions.
* **Time Evaluation:** Calculates and formats time remaining using native JS `Date` objects.
* **Responsive UI:** Clean CSS layout optimized for both desktop and mobile viewports.

## 🛠️ Tech Stack
* **Language:** JavaScript (ES6+)
* **Markup/Styling:** HTML5, CSS3

## 💻 Installation & Setup
To run this project locally on your machine:

1. Clone the repository:
   ```bash
   git clone [https://github.com/Akhil9982/reminder-app-using-js.git](https://github.com/Akhil9982/reminder-app-using-js.git)
````

2.  Navigate to the project directory:
    ```bash
    cd reminder-app-using-js
    ```
3.  Open `index.html` in your web browser, or serve it locally using an extension like VS Code Live Server.

## 🧠 Technical Architecture & Logic

This application was built to enforce strict JavaScript fundamentals, which serve as a critical stepping stone for React and MERN stack development:

  * **Event Delegation:** Attaches singular event listeners to parent containers to handle dynamic child elements (e.g., delete/edit buttons on generated reminders). This optimizes memory usage and performance.
  * **Logic Isolation:** Separates data-calculation logic from DOM-rendering logic to maintain clean, predictable execution.
  * **Asynchronous Triggers:** Utilizes `setInterval` or `setTimeout` mechanisms to poll for and trigger active reminder alerts asynchronously.

## 📂 Directory Structure

```text
├── index.html        # Semantic layout and UI structure
├── style.css         # Styling and responsive media queries
├── script.js         # Core business logic and DOM manipulation
└── README.md         # Project documentation
```

-----

*Built by [Akhil](https://www.google.com/search?q=https://github.com/Akhil9982) as part of an intensive full-stack engineering upskilling track.*

```
```