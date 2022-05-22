const triggers = document.querySelectorAll('.tabs__triggers-item');
const contentsItems = document.querySelectorAll('.tabs__content-item');

triggers.forEach((trigger) =>
  trigger.addEventListener('click', (evt) => {
    evt.preventDefault();
    const activeTab = evt.target.getAttribute('href');

    if (activeTab) {
      const id = activeTab.replace('#', '');
      triggers.forEach((trigger) => {
        if (trigger.classList.contains('tabs__triggers-item--active')) {
          trigger.classList.remove('tabs__triggers-item--active');
        }
      })

      contentsItems.forEach((contentItem) => {
        if (contentItem.classList.contains('tabs__content-item--active')) {
          contentItem.classList.remove('tabs__content-item--active');
        }
      })

      trigger.classList.add('tabs__triggers-item--active');
      document.getElementById(id).classList.add('tabs__content-item--active');
    }
  })
)
