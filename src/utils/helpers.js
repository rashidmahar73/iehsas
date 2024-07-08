function slidesCount({
  setSlidesPerPage,
  currentIndex,
  setCurrentIndex,
  count,
}) {
  if (window.innerWidth < 578) {
    setSlidesPerPage(1);
    return;
  }
  if (window.innerWidth < 768) {
    setCurrentIndex(1);
    setSlidesPerPage(count.mdCount);
    return;
  }

  setCurrentIndex(currentIndex);
  setSlidesPerPage(count.lgCount);
}

export { slidesCount };
