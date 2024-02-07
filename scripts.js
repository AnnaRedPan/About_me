const menu = document.querySelector('#menu')
const toggle = document.querySelector('#toggle')

const toggleMenu = () => {
  toggle.classList.toggle('is-active')
  menu.classList.toggle('active')
}

document.addEventListener('DOMContentLoaded', () =>{
  toggle.addEventListener('click', toggleMenu)
})

const setupReadMore = () => {
  console.log("loaded")
  const list = document.querySelectorAll(".accordion")
  console.log(list)
  list.forEach(function (accordion, index) {
    const link = accordion.querySelector('a.more')
    const p = accordion.querySelector('p.more')
    console.log(p);
    link.addEventListener('click', () => {
      p.style.display = p.style.display == "block" ? "none" : "block";
    })
  })
}

document.addEventListener("DOMContentLoaded", setupReadMore);