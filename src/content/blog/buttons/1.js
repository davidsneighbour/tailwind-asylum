const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    button.textContent = 'Clicked!';
    setTimeout(() => {
      button.textContent = button.dataset.originalText ?? button.textContent;
    }, 700);
  });

  button.dataset.originalText = button.textContent ?? '';
});
