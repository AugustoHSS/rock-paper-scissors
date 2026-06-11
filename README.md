# 🪨 📄 ✂️ Rock, Paper, Scissors (Console Game)

A terminal-based Rock, Paper, Scissors game played entirely in the browser console. This project was developed to practice fundamental JavaScript logic, including functions, loops, and conditional statements.

This project is part of [The Odin Project's Foundations Course](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors).

---

## 🎮 How to Play

Since this project doesn't have a graphical interface yet, you play it using the browser's developer tools:

1. Open the website in your browser.
2. A prompt will appear asking for your choice: `rock`, `paper`, or `scissor`.
3. Open the developer console:
   * Press **F12** (or `Ctrl + Shift + I` on Windows / `Cmd + Option + I` on Mac) and click on the **Console** tab.
4. The game runs for **5 rounds**, tracks the score, and announces the final winner in the console!

---

## 🛠️ Features & Logic Applied

* **Game Loop:** Runs exactly 5 rounds using a `for` loop.
* **Input Validation:** Converts user input to lowercase using `.toLowerCase()`, and uses recursion to ask again if the input is invalid.
* **AI Opponent:** The computer choices are randomized using `Math.random()`.
* **Score Tracking:** Tracks and displays wins, losses, or draws after each round, with a final score announcement at the end.

## 💻 Technologies Used

* **JavaScript** - Game logic and core programming.
* **HTML** - Simple structure to load the script.