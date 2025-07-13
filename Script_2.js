async function _click_H() {
  return new Promise((resolve) => {
    let cup = document.querySelector("#H");
    cup.style.cursor = "pointer";
    cup.addEventListener("click", (() => {

      resolve('>Thanks for Visiting!😊');
    }))

  })
}
async function _click_Co() {
  return new Promise((resolve) => {
    let cup_Cold = document.querySelector("#Co");
    cup_Cold.style.cursor = "pointer";
    cup_Cold.addEventListener("click", (() => {

      resolve('>Thanks for Visiting!😊');
    }))

  })
}
async function _click_La() {
  return new Promise((resolve) => {
    let cup_La = document.querySelector("#La");
    cup_La.style.cursor = "pointer";
    cup_La.addEventListener("click", (() => {

      resolve('>Thanks for Visiting!😊');
    }))

  })
}

async function preparation(chosen) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`>Your ${chosen}Coffee is being prepared.🙌\n`)

    }
      , 3000)
  }
  )
}

async function getcoffee_H() {
  return new Promise((resolve) => {

    setTimeout(() => {
      let cup = document.querySelector("#H");
      cup.style.animation = "Coffee_appear 2s ease 1 forwards";
      resolve(">Please Claim Your Coffee from the Coffee Window.\n");

    }, 8500)

  })
}
async function getcoffee_Co() {
  return new Promise((resolve) => {

    setTimeout(() => {
      let cup_Cold = document.querySelector("#Co");
      cup_Cold.style.animation = "Coffee_appear 2s ease 1 forwards";
      resolve(">Please Claim Your Coffee from the Coffee Window.\n");


    }, 8500)

  })
}
async function getcoffee_La() {
  return new Promise((resolve) => {

    setTimeout(() => {
      let cup_La = document.querySelector("#La");
      cup_La.style.animation = "Coffee_appear 2s ease 1 forwards";
      resolve(">Please Claim Your Coffee from the Coffee Window.\n");

    }, 8500)

  })
}

let A = document.querySelector(".Order .order_ex");
A.style.whiteSpace = "pre-line";

let chosen = ""
let choose = document.getElementById("Ch");
choose.addEventListener("change", ((e) => {
  chosen = e.target.value;
  if (chosen == "Hot") {
    let X = document.querySelector(".Choice");
    X.style.pointerEvents = "none"

    main_H();
  }
  if (chosen == "Iced") {
    let X = document.querySelector(".Choice");
    X.style.pointerEvents = "none"

    main_Co();
  }
  if (chosen == "Latte") {
    let X = document.querySelector(".Choice");
    X.style.pointerEvents = "none"

    main_La();
  }

}))


async function main_H() {

  A.textContent = '>Order Confirmed!\n';


  let prepared = await preparation(chosen);
  let Sound = document.querySelector("#Music");
  Sound.play();
  A.textContent += prepared;


  let order = await getcoffee_H();
  A.textContent += order;
  Sound.pause();

  let _clicked = await _click_H();
  let cup = document.querySelector("#H");
  cup.style.display = "none";
  A.textContent += _clicked;
  let B = document.querySelector(".coffee_place");
  B.textContent = "☕Coffee Claimed!"

  let C = document.querySelector(".reset")
  C.style.display = "block";


}

async function main_Co() {

  A.textContent = '>Order Confirmed!\n';


  let prepared = await preparation(chosen);
  let Sound = document.querySelector("#Music");
  Sound.play();
  A.textContent += prepared;



  let order = await getcoffee_Co();

  A.textContent += order;
  Sound.pause();

  let _clicked = await _click_Co();
  let cup_Cold = document.querySelector("#Co");
  cup_Cold.style.display = "none";
  A.textContent += _clicked;
  let B = document.querySelector(".coffee_place");
  B.textContent = "☕Coffee Claimed!"

  let C = document.querySelector(".reset")
  C.style.display = "block";


}

async function main_La() {

  A.textContent = '>Order Confirmed!\n';


  let prepared = await preparation(chosen);
  let Sound = document.querySelector("#Music");
  Sound.play();
  A.textContent += prepared;



  let order = await getcoffee_La();

  A.textContent += order;
  Sound.pause();

  let _clicked = await _click_La();
  let cup_La = document.querySelector("#La");
  cup_La.style.display = "none";
  A.textContent += _clicked;
  let B = document.querySelector(".coffee_place");
  B.textContent = "☕Coffee Claimed!"

  let C = document.querySelector(".reset")
  C.style.display = "block";


}




