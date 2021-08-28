export const FadeNavbar = (id) => {
  const navbar = document.getElementById(id);
  if (navbar) {
    if (document.documentElement.scrollTop > 0) {
      navbar.style.background =
        'linear-gradient(to bottom,rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.5))';
    } else {
      navbar.style.background = '#000000';
    }
  }
};
// wipe out navbars
