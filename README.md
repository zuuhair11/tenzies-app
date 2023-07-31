# Tenzies: A Dice-Rolling Game with React

## Introduction

Welcome to Tenzies, a thrilling dice-rolling game built using React! The objective of the game is simple yet addictive - roll a set of dice until they all show the same value. But watch out, your fate lies in your hands as you can strategically freeze certain dice between rolls to increase your chances of winning. Get ready for some heart-pounding fun!

## Technologies Used

Tenzies is built using the following technologies and libraries:

- React: A popular JavaScript library for building user interfaces.
- nanoid: A small library used to generate unique IDs for the dice.
- react-use: A library that provides useful hooks for React.
- react-confetti: A fun library for adding confetti animations.

## How to Play

1. **Getting Started**: When you launch the game, you'll be greeted by ten dice, each displaying a random value between 1 and 6.

2. **Rolling the Dice**: Click on the **Roll** button to begin the game. The dice will roll, and new random values will be displayed.

3. **Holding the Dice**: After each roll, you have the power to influence the outcome. Click on any die to toggle its hold status. Held dice will retain their value and won't be re-rolled in the next round.

4. **Rolling Again**: Click the **Roll** button to roll the remaining dice that were not held.

5. **Victory Conditions**: Keep rolling and holding until all the dice show the same value. When that happens, congratulations, you win the game!

6. **Starting a New Game**: After you've achieved the perfect match, a **New Game** button will appear. Click it to start a fresh round of Tenzies.

## How it Works

The Tenzies game is powered by React and takes advantage of React hooks to manage state and handle user interactions. Here are the main components and functions that drive the game:

### 1. Dice Component

The `Die` component renders individual dice on the screen. Each die receives its value and hold status as props and allows players to click on it to toggle its hold status. The `handleHoldDice` function is called when a player clicks on a die to freeze or unfreeze it.

### 2. App Component

The `App` component is the core of the game. It sets up the game's state using React's `useState` hook, which includes an array of dice objects. Each object contains the following properties: `value` (the current number on the die), `isHeld` (whether the die is frozen), and `id` (a unique identifier for each die).

The game logic is implemented through various functions within the `App` component:

- `generateNewDie()`: Generates a new die object with a random value between 1 and 6 and a unique ID using `nanoid`.

- `allNewDice()`: Generates an array of ten dice objects using `generateNewDie()`. It is used to initialize the game state and to reset the dice when the player starts a new game.

- `rollDice()`: Called when the player clicks the **Roll** button. If no dice are frozen (`tenzies` is false), it generates new values for all non-held dice. If all dice are held (`tenzies` is true), the function resets the game by calling `allNewDice()`.

- `holdDice(id)`: Called when a player clicks on a die. It toggles the `isHeld` property of the corresponding die object, freezing or unfreezing it.

- `useEffect()`: Checks if all dice are held after each roll. If all dice are held, it checks if they all have the same value. If so, it sets the `tenzies` state to true, indicating the player has won.

### 3. Confetti Animation

The `react-confetti` library adds a touch of celebration when the player wins the game. When `tenzies` is true (indicating a win), confetti is displayed on the screen, creating a fun visual effect.

## Conclusion

We hope you enjoy playing Tenzies as much as we enjoyed building it! The game combines elements of chance and strategy to keep players engaged and entertained. Feel free to explore the code on [GitHub](https://github.com/zuuhair11/tenzies) and customize the game to your liking. If you have any feedback or suggestions, we'd love to hear them.

Get ready to roll the dice and experience the thrill of Tenzies!

Best regards,
Zouhair
