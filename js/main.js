//FAQ
document.addEventListener("DOMContentLoaded", () => {
  const faqContaner = document.querySelector('.faq-content');

  faqContaner.addEventListener('click', (e) => {
    const groupHeader = e.target.closest('.faq-group-header');

    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector('.faq-group-body');
    const icon = groupHeader.querySelector('div');

    const otherGroup = document.querySelectorAll('.faq-group-body');
    otherGroup.forEach((group) => {
      group.classList.remove('open');
    })

    icon.classList.toggle('close');
    groupBody.classList.toggle('open');
  })
});

// mobile menu
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.querySelector('.nav-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open-sidebar');
  })
  mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('open-sidebar');
  })
})