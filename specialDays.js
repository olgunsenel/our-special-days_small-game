// const daysNames = ["Tanıştığımız Gün", "Nikah Tarihimiz", "Düğün Tarihimiz", "Selim Doğdu", "Kerim Doğdu"];
// const days = [`2015-06-09`, `2015-09-16`, `2015-09-20`, `2017-11-09`, `2019-11-03`]
const dates = {
  "Tanıştığımız Gün" : `2015-06-09`,
  "Nikah Tarihimiz" : `2015-09-16`,
  "Düğün Tarihimiz" : `2015-09-20`,
  "Selim Doğdu" : `2017-11-09`,
  "Kerim Doğdu" : `2019-11-03`
};
let known = [];


let kalan = Number(document.querySelector(`.remain`).textContent);

document.querySelector(`.check-btn`).addEventListener(`click`, () => {
  let guessDate = document.querySelector(`.date-input`).value;
  console.log(guessDate);
  const infoMessage = document.querySelector(`.msg`);
  const again = document.querySelector(`.again-btn`);

  //! girilen tarihin index numarasini elde ediyorum. Bu index numarasina gore ? kisminda tarihin adini yazdirmaya calisacagim.
  let indexNo = Object.values(dates).indexOf(guessDate)
  // const secretDay = document.querySelector(`.secret-date`).innerHTML
  console.log(indexNo);
  if(!guessDate){
    infoMessage.textContent = `ZehraNur'cuğum, lütfen aşağıdan bizim için önemli tarihlerden birini seç :D`
    infoMessage.style.color = `red`
    //! dates objesinin value'su girilen tarih degerini iceriyorsa
  }else if(Object.values(dates).includes(guessDate)) {
    if(known.includes(guessDate)) {
      console.log(typeof known, known);
      infoMessage.textContent = `Bu tarihi daha once girdin tatlım :P`;
      infoMessage.style.color = `red`;
      document.querySelector(`.date-input`).focus();
      document.querySelector(`.date-input`).value = ``;
    }else {
      known.push(guessDate);
      kalan--;
      if(kalan > 0) {
        document.querySelector(`.remain`).innerHTML = kalan;
        infoMessage.innerHTML = `<br> <img src="https://c.tenor.com/sZAFBih2R54AAAAC/minions.gif" width="250">`;
        document.querySelector("body").classList.add("bodybg")
        //! sakli tarihi, elde ettigim index numarasinin key adi ile eslestirip yazdiriyorum.
        document.querySelector(`.secret-date`).innerHTML = Object.keys(dates)[indexNo];
        document.querySelector(`.date-input`).focus();
        document.querySelector(`.date-input`).value = ``;
      }else {
        document.querySelector(`.check-btn`).disabled = true;
        document.querySelector(`.remain-all`).innerHTML = `Tebrikler aşkım, hepsini bildin! <img src="https://media.tenor.com/39cYcxX8HeoAAAAM/omg-chris-pratt.gif" width="250">`;
        document.querySelector(`.remain-all`).style.color = `#ffd504`;
        infoMessage.remove();
      }};
  }else {
    infoMessage.textContent = `Böyle bir tarihimiz burda yok. Tekrar dene! :P`
    infoMessage.style.color = `red`
    document.querySelector(`.secret-date`).innerHTML = "?"
    document.querySelector("body").classList.remove("bodybg");
    document.querySelector(`.date-input`).focus();
    document.querySelector(`.date-input`).value = "";
  }
  again.addEventListener(`click`, (e)=>{
    location.reload(e);
  });
});
document.querySelector(`.date-input`).addEventListener(`keydown`, (e) => {
  if(e.keyCode === 13) {
    document.querySelector(`.check-btn`).click();
    document.querySelector(`.date-input`).focus();
  }
});

window.addEventListener("load", ()=>{
  document.querySelector(`.date-input`).focus();
});