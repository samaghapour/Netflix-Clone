export const Collapse = (e) => {
  if (e.target.className !== 'questionBtn') return;

  let answer = e.target.nextElementSibling,
    icon = e.target.lastChild,
    target = e.target;

  answer.classList.toggle('close');

  Array.from(document.querySelectorAll('.answers'))
    .filter((item) => {
      if (
        !item.classList.contains('close') &&
        item.previousElementSibling !== target
      )
        return true;
    })
    .forEach((item) => {
      item.classList.add('close');
      item.previousElementSibling.lastChild.style.transform = 'rotate(0deg)';
    });

  answer.classList.contains('close')
    ? (icon.style.transform = 'rotate(0deg)')
    : (icon.style.transform = 'rotate(45deg)');
};

// show answer of questions in : landing page/ question section
