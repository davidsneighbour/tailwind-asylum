const tabButtons = Array.from(document.querySelectorAll('.tab-button'));
const tabPanels = Array.from(document.querySelectorAll('.tab-panel'));

function activateTab(button) {
  const panelId = button.dataset.panel;

  tabButtons.forEach((item) => item.classList.toggle('active', item === button));
  tabPanels.forEach((panel) => {
    panel.classList.toggle('hidden', panel.id !== panelId);
  });
}

tabButtons.forEach((button, index) => {
  button.addEventListener('click', () => activateTab(button));

  if (index === 0) {
    activateTab(button);
  }
});
