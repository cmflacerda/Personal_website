let coll1 = document.getElementsByClassName("collapsible1");
let coll2 = document.getElementsByClassName("collapsible2");

const collapse = (coll) => {
  for (let i = 0; i < coll.length; i++) {
    coll[i].classList.toggle("active");
  }
};