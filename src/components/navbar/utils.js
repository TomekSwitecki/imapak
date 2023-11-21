export function _scrollTo(selector, yOffset = 0) {
  const el = document.getElementById(selector);
  const y = el.getBoundingClientRect().top + window.pageYOffset - yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
}
