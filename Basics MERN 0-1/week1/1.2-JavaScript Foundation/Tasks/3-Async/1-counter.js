// Function to create a countdown
function startCountdown() {
    let counter = 30;

    // Display initial value
    console.log(`Countdown: ${counter}`);

    // Update the counter every second
    const countdownInterval = setInterval(() => {
        counter--;

        // Display the updated value
        console.log(`Countdown: ${counter}`);

        // Check if the countdown has reached 0
        if (counter === 0) {
            clearInterval(countdownInterval); // Stop the countdown when it reaches 0
            console.log("Countdown completed!");
        }
    }, 1000); // Interval is set to 1000 milliseconds (1 second)
}

// Start the countdown
startCountdown();
