const nameInput = document.querySelector("#name");
const delayInput = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (isNaN(delay) || delay < 0) {
      reject(new Error("Alarm delay must be a positive number"));
      return;
    }
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}

button.addEventListener("click", async () => {
  // Ensure the delay is treated as a number
  const delayValue = parseInt(delayInput.value, 10);

  try {
    const message = await alarm(nameInput.value.trim(), delayValue);
    output.textContent = message;
  } catch (error) {
    // More user-friendly error handling
    output.textContent = `Couldn't set the alarm: ${error.message}`;
  }
});
