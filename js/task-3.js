const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    const outputText = event.currentTarget.value.trim();

    output.textContent = outputText === '' ? "Anonymous" : outputText;
  });