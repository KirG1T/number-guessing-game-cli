import readline from 'node:readline';

// Readline initialization
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Game main settings
const secret = Math.floor(Math.random() * 100) + 1;
let chances;
let attempts = 0;

console.log(`Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.
You have limited chances to guess it.\n`);

// Game handlers
const askAgain = () => {
  rl.question('Do you want to play again? [y/n] ', (answer) => {
    const decision = answer.toLowerCase();

    switch (decision) {
      case 'y':
        askGuess(chances, attempts);
        break;
      case 'n':
        rl.close();
        break;

      default:
        console.log('\nSelect Yes [y] or No [n]');
        askAgain();
        break;
    }
  });
};

const askGuess = (chances, attempts) => {
  if (chances === 0) {
    console.log(`\n💀 Game over! The correct number was ${secret}.\n`);
    askAgain();
    return;
  }

  rl.question('\nEnter your guess: ', (answer) => {
    const guess = Number(answer);
    attempts++;

    if (Number.isNaN(guess)) {
      console.log('Please enter a valid number!');
      return askGuess(chances, attempts);
    }

    if (guess === secret) {
      console.log(`\n🎉 Congratulations! You guessed the correct number ${secret} in ${attempts} attempts.\n`);
      askAgain();
    } else {
      console.log(guess < secret ? '📈 Higher!' : '📉 Lower!');
      console.log(`You have ${chances - 1} ${chances - 1 === 1 ? 'chance' : 'chances'} left.`);
      askGuess(chances - 1, attempts);
    }
  });
};

const start = () => {
  console.log(`Please select the difficulty level:
1. Easy (10 chances)
2. Medium (5 chances)
3. Hard (3 chances)\n`);

  rl.question('Enter your choice: ', (answer) => {
    let choice = Number(answer);

    switch (choice) {
      case 1:
        chances = 10;
        break;
      case 2:
        chances = 5;
        break;
      case 3:
        chances = 3;
        break;
      default:
        console.log('Invalid choice. Defaulting to Easy.');
        choice = 1;
        chances = 10;
    }

    console.log(`\nGreat! You chose level ${choice}. You have ${chances} chances.\nLet's start the game!`);
    askGuess(chances, attempts);
  });
};

start();
