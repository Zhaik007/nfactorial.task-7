filt = document.querySelector(".filter");

vse = document.querySelector(".vse");
vse.addEventListener("click", () => {
  if (vse.classList.contains("active")) {
    vse.style["background-color"] = "#F4E8C6";
    vse.style.color = "black";
    vse.classList.remove("active");
  } else {
    vse.style["background-color"] = "black";
    vse.style.color = "white";
    vse.classList.add("active");
  }
});
impitem = document.querySelector(".impression-items");

lisr = impitem.querySelectorAll(".impression-card");

filt.addEventListener("click", () => {
  active = filt.querySelector(".active");
  for (let i = 0; i < lisr.length; i++) {
    if (active.innerText == "Все") {
      for (let k = 0; k < lisr.length; k++) {
        lisr[k].style.display = "initial";
      }
    } else {
      lisr[i].style.display = "none";
    }
    if (lisr[i].getAttribute("data-category") == active.innerText) {
      lisr[i].style.display = "initial";
    }
  }
});

impcard = document.querySelector(".impression-card");
// popup = document.querySelector("")
// impcard.addEventListener("click",()=>
// popup.classList.add("popper")
// )

cal = document.querySelector(".calendar-days");

cal.addEventListener("click", () => {
  try{
    dat = cal.querySelectorAll(".active");
    dat1 = Number(dat[0].getAttribute("data-value").split("-")[2]);  
      if (dat.length == 1) {
        for (let i = 0; i < lisr.length; i++) {
          if (Number(lisr[i].getAttribute("data-value")) == dat1) {
            lisr[i].style.display = "initial";
            console.log(Number(lisr[i].getAttribute("data-value")) == dat1);
          } else {
            lisr[i].style.display = "none";
          }
        }
      } else {
        if (dat.length == 2) {
          dat2 = Number(dat[1].getAttribute("data-value").split("-")[2]);
          for (let i = 0; i < lisr.length; i++) {
            if (
              Number(lisr[i].getAttribute("data-value")) < dat1 ||
              Number(lisr[i].getAttribute("data-value")) > dat2
            ) {
              lisr[i].style.display = "none";
              console.log(dat1, dat2);
            } else {
              lisr[i].style.display = "initial";
            }
          }
        }
      }
  }
  catch{
    for (let i = 0; i < lisr.length; i++) {
        lisr[i].style.display = "initial";
      }
  }
});

special = document.querySelector(".segme")
asr = cal.querySelectorAll(".calendar-day")
special.addEventListener("click",()=>{
    for(let i =0;i<asr.length;i++){
        asr[i].classList.remove("active","in-range")
        asr[i].style.color = "black";
    }
    
    cal.querySelectorAll(".calendar-day")[5].classList.add("active")
    cal.click()
})

naet = document.querySelector(".naet")
naet.addEventListener("click",()=>{
    for(let i =0;i<asr.length;i++){
        asr[i].classList.remove("active","in-range")
        asr[i].style.color = "black";
    }
    cal.querySelectorAll(".calendar-day")[3].classList.add("active")
    for(let i=4;i<9;i++){
        cal.querySelectorAll(".calendar-day")[i].classList.add("in-range")
    }
    cal.querySelectorAll(".calendar-day")[9].classList.add("active")
    cal.click()
})

navy = document.querySelector(".navy")
navy.addEventListener("click",()=>{
    for(let i =0;i<asr.length;i++){
        asr[i].classList.remove("active","in-range")
        asr[i].style.color = "black";
    }
    cal.querySelectorAll(".calendar-day")[8].classList.add("active")
    cal.querySelectorAll(".calendar-day")[9].classList.add("active")
    cal.click()
})


conf = document.querySelector("#confirm_button")
conf.addEventListener("click",()=>{
    document.querySelector(".login_confirm").classList.remove("active")
    document.querySelector("#popups").style.display = "none"
    document.querySelector(".profile-icon").querySelector("img").src="logo.png"
})
