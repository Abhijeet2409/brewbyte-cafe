let a = document.body.getElementsByClassName("im")[0];
let animation_triggered = false;
window.addEventListener("scroll", (() => {

  if (!animation_triggered && scrollY > 200) {
    animation_triggered = true;
    a.style.animation = "none";
    a.offsetHeight;
    a.style.animation = "move 4s ease-in-out 1 reverse forwards";

    a.addEventListener("animationend", (() => {
      a.style.animation = "U_d_2 2.2s ease infinite alternate ";
    }))

    let b = document.body.getElementsByClassName("im")[1]
    let c = document.body.getElementsByClassName("im")[2]
    b.style.animation = " U_d_2 2.2s ease 4s infinite alternate "
    c.style.animation = " U_d_2 2.2s ease 4s infinite alternate "


  }
}))
let b = document.querySelector(".Card_contianer")
b.addEventListener("click", (() =>
  document.querySelector(".coffee_section").scrollIntoView({
    behavior: "smooth"
  })


))








