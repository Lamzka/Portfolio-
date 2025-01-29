const words = ["XR", "Game", "Creative Software", "VR"];
let currentWordIndex = 0;
let currentText = "";
let isDeleting = false;
let wordIndex = 0;
const textElement = document.querySelector('.text');  // For typing text

function typeEffect() {
  const currentWord = words[currentWordIndex];

  if (isDeleting) {
    currentText = currentWord.slice(0, wordIndex - 1);
    wordIndex--;
  } else {
    currentText = currentWord.slice(0, wordIndex + 1);
    wordIndex++;
  }

  // Update the text content
  textElement.textContent = currentText;

  // If deleting is done, move to the next word
  if (isDeleting && wordIndex === 0) {
    isDeleting = false;
    currentWordIndex = (currentWordIndex + 1) % words.length; // Cycle through words
  } else if (!isDeleting && wordIndex === currentWord.length) {
    setTimeout(() => {
      isDeleting = true;
    }, 2000); // Delay before starting to delete
  }

  // Adjust typing/deleting speed
  const speed = isDeleting ? 100 : 50;
  setTimeout(typeEffect, speed);
}

// Start the typing effect
typeEffect();
