# Number Guessing Game CLI

You need to create a simple number guessing game where the computer randomly picks a number, and the player tries to guess it within a limited number of attempts. The game ends when the player guesses correctly or runs out of chances.

Project page URL:
https://roadmap.sh/projects/number-guessing-game

## ⚙️ Prerequisites

To run this project, ensure you have the following installed:

- **Node.js**: Version **18.0.0** or higher. [Download Node.js](https://nodejs.org/en/download)
- **npm**: Version **8.0.0** or higher (typically included with Node.js).

Verify your versions with:

```bash
node -v
npm -v
```

## 📦 Installation

```bash
git clone https://github.com/KirG1T/task-tracker-cli.git
cd task-tracker-cli
```

Make the script executable (optional, for Unix systems):

```bash
chmod +x index.js
```

## 🚀 Usage

The list of commands and their usage is given below:

```bash
# Adding a new task
task-cli add "Buy groceries"
# Output: Task added successfully (ID: 1)

# Updating and deleting tasks
task-cli update 1 "Buy groceries and cook dinner"
task-cli delete 1

# Marking a task as in progress or done
task-cli mark-in-progress 1
task-cli mark-done 1

# Listing all tasks
task-cli list

# Listing tasks by status
task-cli list done
task-cli list todo
task-cli list in-progress
```
