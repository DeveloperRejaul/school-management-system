export function scrollByNavId (id:string) {
  const section = document.getElementById(id.toLowerCase());
  if (section) {
    window.scrollTo({ behavior: "smooth", top: section.offsetTop - 80 });
  }
}