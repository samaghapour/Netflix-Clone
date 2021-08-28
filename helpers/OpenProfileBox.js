export const OpenProfileBox = () => {
  const profileItemsBox = document.querySelector('.profileItemsBox');

  if (profileItemsBox) profileItemsBox.classList.toggle('close');
};
