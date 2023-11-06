document.addEventListener("DOMContentLoaded", function () {
    const startScreen = document.getElementById("start-screen");
    const startButton = document.getElementById("start-button");
    const snake = document.getElementById("snake");
    const food = document.getElementById("food");
    const gameContainer = document.querySelector(".game-container");
    const gameoverScreen = document.getElementById("game-over");
    const restartButton = document.getElementById("restart");
    const scoreElement = document.getElementById("score");

    let snakeX = 0;
    let snakeY = 0;
    let foodX = 0;
    let foodY = 0;
    let score = 0;
    let isGameOver = false;
    let speed = 20; // Initial speed in milliseconds
    let updateInterval;

    // Function to generate food at random positions
    function generateFood() {
        foodX = Math.floor(Math.random() * 20) * 20;
        foodY = Math.floor(Math.random() * 20) * 20;
        food.style.left = foodX + "px";
        food.style.top = foodY + "px";
    }

    // Function to check collision with boundaries and food
    function checkCollision() {
        if (snakeX < 0 || snakeX >= 400 || snakeY < 0 || snakeY >= 400) {
            isGameOver = true;
            gameoverScreen.style.display = "block";
        }

        if (snakeX === foodX && snakeY === foodY) {
            score++;
            generateFood();
            scoreElement.textContent = "Score: " + score;
            increaseSpeed(); // Increase speed when the score increases
        }
    }

    // Function to increase speed every 5 points scored
    function increaseSpeed() {
        if (score % 5 === 0 && speed > 50) {
            // Increase speed every 5 points, but not below 50ms
            clearInterval(updateInterval);
            speed -= 10;
            updateInterval = setInterval(update, speed);
        }
    }

    // Function to restart the game
    function restartGame() {
        snakeX = 0;
        snakeY = 0;
        isGameOver = false;
        gameoverScreen.style.display = "none";
        score = 0;
        scoreElement.textContent = "Score: 0";
        generateFood();
        clearInterval(updateInterval);
        speed = 20; // Reset speed to the initial value
        updateInterval = setInterval(update, speed);
    }

    // Function to update the game state
    function update() {
        if (isGameOver) return;

        snakeX += 20;
        snake.style.left = snakeX + "px";

        checkCollision();
    }

    // Event listener to start the game when the "Start Game" button is clicked
    startButton.addEventListener("click", startGame);

    // Event listener to restart the game when the "Restart" button is clicked
    restartButton.addEventListener("click", restartGame);

    // Function to start the game loop
    function gameLoop() {
        updateInterval = setInterval(update, speed); // Start with the initial speed
    }

    // Initialize the game by generating food and starting the game loop
    generateFood();
    snake.style.left = snakeX + "px";
    snake.style.top = snakeY + "px";
    
    // Display the start screen
    startScreen.style.display = "block";
});
