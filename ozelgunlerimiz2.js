// const daysNames = ["Tanıştığımız Gün", "Nikah Tarihimiz", "Düğün Tarihimiz", "Selim Doğdu", "Kerim Doğdu"];
// const days = [`2015-06-09`, `2015-09-16`, `2015-09-20`, `2017-11-09`, `2019-11-03`]
const dates = {
  "Tanıştığımız Gün" : `2015-06-09`,
  "Nikah Tarihimiz" : `2015-09-16`,
  "Düğün Tarihimiz" : `2015-09-20`,
  "Selim Doğdu" : `2017-11-09`,
  "Kerim Doğdu" : `2019-11-03`
};


let kalan = Number(document.querySelector(`.remain`).textContent);

document.querySelector(`.check-btn`).addEventListener(`click`, () => {
  let guessDate = document.querySelector(`.date-input`).value;
  console.log(guessDate);
  const infoMessage = document.querySelector(`.msg`);

  //! girilen tarihin index numarasini elde ediyorum. Bu index numarasina gore ? kisminda tarihin adini yazdirmaya calisacagim.
  let indexNo = Object.values(dates).indexOf(guessDate)
  // const secretDay = document.querySelector(`.secret-date`).innerHTML
  console.log(indexNo);


  if(!guessDate){
    infoMessage.textContent = `Lütfen aşağıdan bizim için önemli tarihlerden birini seç :D`
    infoMessage.style.color = `red`
    //! dates objesinin value'su girilen tarih degerini iceriyorsa
  }else if(Object.values(dates).includes(guessDate)) {
    kalan--;
    if(kalan > 0) {
      document.querySelector(`.remain`).innerHTML = kalan;
      infoMessage.innerHTML = `<br> <img src="https://c.tenor.com/sZAFBih2R54AAAAC/minions.gif" width="250">`;
      // bodyBgColor.classList.add(`bg-danger`);
      // counter = 0;
      // const correctInterval = setInterval(()=>{
      //   bodyBgColor.setAttribute(`class`, `bodybg`);
      //   counter++
      //   if(counter > 10){
      //   bodyBgColor.setAttribute("class", "defBg")
      //   clearInterval(correctInterval)
      //   }
      // }, 100);
      document.querySelector("body").classList.add("bodybg")
      //! sakli tarihi, elde ettigim index numarasinin key adi ile eslestirip yazdiriyorum.
      document.querySelector(`.secret-date`).innerHTML = Object.keys(dates)[indexNo];
      document.querySelector(`.check-btn`).addEventListener("click", () => {
        guessDate.focus();
      });
      document.querySelector(`.date-input`).value = ``;

    } else {
      document.querySelector(`.check-btn`).disabled = true;
      document.querySelector(`.remain-all`).textContent = `Tebrikler, hepsini bildin!`;
      document.querySelector(`.remain-all`).style.color = `dodgerblue`;
    }
  }else {
    infoMessage.textContent = `Böyle bir tarih bulunamadı. Tekrar dene!`
    infoMessage.style.color = `red`
    document.querySelector(`.secret-date`).innerHTML = "?"
    document.querySelector("body").classList.remove("bodybg");
  }
  document.querySelector(`.date-input`).focus();
  document.querySelector(`.date-input`).value = "";
});

document.querySelector(`.date-input`).addEventListener(`keydown`, (e) => {
  if(e.keyCode === 13) {
    document.querySelector(`.check-btn`).click();
    // window.onload()
  }
});

window.addEventListener("load", ()=>{
  document.querySelector(`.date-input`).focus();
});


// let known = [];
//     known.push(guessDate);
//     if(guessDate in known) {
//       infoMessage.textContent = `Bu tarihi daha once girdin :P`
//       infoMessage.style.color = `red`
//       console.log(known);