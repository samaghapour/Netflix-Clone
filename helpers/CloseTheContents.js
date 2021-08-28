export const CloseTheContents = () => {
  const popularItemContent = document.getElementById('popularItemContent'),
    recentItemContent = document.getElementById('recentItemContent'),
    trendItemContent = document.getElementById('trendItemContent'),
    watchroomSwitcherItems = document.querySelectorAll(
      '.watchroomSwitcherItems'
    );

  popularItemContent && popularItemContent.classList.add('close');
  recentItemContent && recentItemContent.classList.add('close');
  trendItemContent && trendItemContent.classList.add('close');

  if (watchroomSwitcherItems)
    return Array.from(watchroomSwitcherItems).forEach((item) => {
      item.classList.remove('active');
    });
};
// close the contentBox of movies and tv shows
