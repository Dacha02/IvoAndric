jQuery(document).ready(function ($) {
  $("#checkbox").change(function () {
    setInterval(function () {
      moveRight();
    }, 3000);
  });

  var slideWidth = 500;
  $(window).resize(function () {
    console.log($(window).width());
    if (window.matchMedia("(max-width: 438px)").matches) {
      slideWidth = 300;
    } else {
      slideWidth = 500;
    }
  });

  var slideCount = $("#slider ul li").length;
  var slideHeight = 300;
  var sliderUlWidth = slideCount * slideWidth;

  $("#slider").css({ width: slideWidth, height: slideHeight });

  $("#slider ul").css({ width: sliderUlWidth, marginLeft: -slideWidth });

  $("#slider ul li:last-child").prependTo("#slider ul");

  function moveLeft() {
    $("#slider ul").animate(
      {
        left: +slideWidth,
      },
      200,
      function () {
        $("#slider ul li:last-child").prependTo("#slider ul");
        $("#slider ul").css("left", "");
      }
    );
  }

  function moveRight() {
    $("#slider ul").animate(
      {
        left: -slideWidth,
      },
      200,
      function () {
        $("#slider ul li:first-child").appendTo("#slider ul");
        $("#slider ul").css("left", "");
      }
    );
  }

  $(".control_prev").click(function () {
    moveLeft();
  });

  $(".control_next").click(function () {
    moveRight();
  });
});

/* jQuery(document).ready(function ($) {
  $("#checkbox").change(function () {
    setInterval(function () {
      moveRight();
    }, 3000);
  });

  var slideCount = $("#slider ul li").length;
  var slideWidth = $("#slider ul li").width();
  var slideHeight = $("#slider ul li").height();
  var sliderUlWidth = slideCount * slideWidth;

  $("#slider").css({ width: slideWidth, height: slideHeight });

  $("#slider ul").css({ width: sliderUlWidth, marginLeft: -slideWidth });

  $("#slider ul li:last-child").prependTo("#slider ul");

  function moveLeft() {
    $("#slider ul").animate(
      {
        left: +slideWidth,
      },
      200,
      function () {
        $("#slider ul li:last-child").prependTo("#slider ul");
        $("#slider ul").css("left", "");
      }
    );
  }

  function moveRight() {
    $("#slider ul").animate(
      {
        left: -slideWidth,
      },
      200,
      function () {
        $("#slider ul li:first-child").appendTo("#slider ul");
        $("#slider ul").css("left", "");
      }
    );
  }

  $(".control_prev").click(function () {
    moveLeft();
  });

  $(".control_next").click(function () {
    moveRight();
  });
}); */

/*Counter*/
let pokrenuo = false;

window.addEventListener("scroll", () => {
  let skrol = window.scrollY;
  if (skrol > 300) {
    let vratiGore = document.getElementById("vratiGore");
    vratiGore.classList.remove("sakrijBackToTop");
  } else {
    let vratiGore = document.getElementById("vratiGore");
    vratiGore.classList.add("sakrijBackToTop");
  }
  let divKaunter = document.getElementById("kaunterdiv");
  let pozicija = divKaunter.getBoundingClientRect();
  let y = pozicija.top;
  //console.log(y);
  //console.log(skrol);
  if (y <= window.innerHeight && pokrenuo == false) {
    pokrenuo = true;
    let niz = document.querySelectorAll(".count");
    let prom = [0, 0, 0, 0];
    let intervali = [0, 0, 0, 0];
    let prom2 = [0, 0, 0, 0];
    for (let i = 0; i < niz.length; i++) {
      prom[i] = parseInt(niz[i].textContent);
      let r = prom[i] / 3;
      intervali[i] = 1000 / r;
    }

    for (let i = 0; i < intervali.length; i++) {
      uvecaj(prom[i], prom2[i], i, intervali[i]);
    }

    function uvecaj(x, y, i, dr) {
      let m;
      m = setInterval(() => {
        if (y < x) {
          y++;
          niz[i].textContent = y;
        }
      }, dr);
      if (y == x) clearInterval(m);
    }
  }
});

/*Modal*/
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener(
    "test",
    null,
    Object.defineProperty({}, "passive", {
      get: function () {
        supportsPassive = true;
      },
    })
  );
} catch (e) {}
var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent =
  "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

function disableScroll() {
  window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
  window.addEventListener("keydown", preventDefaultForScrollKeys, false);
}

function enableScroll() {
  window.removeEventListener("DOMMouseScroll", preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener("touchmove", preventDefault, wheelOpt);
  window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
}
var modal = document.querySelectorAll(".single-book");
for (let i = 0; i < modal.length; i++) {
  modal[i].addEventListener("click", () => {
    disableScroll();
    let uzmiDivStrelice = document.getElementsByClassName("arrow-box");
    uzmiDivStrelice[0].classList.add("zindex0");
    //Dohvatanje src slike
    let uzeceSliku = document.querySelectorAll(".srcSlike");
    let srcSlike = uzeceSliku[i].src;
    console.log(srcSlike);

    //Dohvatanje h1
    let uzeceNaslov = document.querySelectorAll(".single-book__title");
    let contentSlike = uzeceNaslov[i].textContent;

    //Dohvatanje span
    let uzeceSpan = document.querySelectorAll(".single-book__price");
    let contentSpana = uzeceSpan[i].textContent;

    //Pravljenje novih elemenata
    let div = document.createElement("div");
    let img = document.createElement("img");
    let h1 = document.createElement("h1");
    let span = document.createElement("span");
    let p = document.createElement("p");

    //Popunjavanje elemenata
    p.innerHTML = "&times";
    img.setAttribute("src", srcSlike);
    h1.textContent = contentSlike;
    if (i == 0) {
      span.textContent = `Ostaju??i na tragu osobenosti Andri??evog
      pripoveda??kog postupka, mo??emo sklopiti
      skicu jedne posebne literarne gra??evine:
      takozvane beogradske hronike. Ta nedovr??e-
      na gra??evina mogla bi da bude imaginarni
      model za projekciju knji??evne rekonstrukcije
      novije povesti Beograda.`;
    } else if (i == 1) {
      span.textContent = `U zbirci ,,Sarajevske pri??e" pred ??itaocem se
      otvara jedna mnogolika galaksija junaka i
      sveobuhvatna slika Sarajeva koja naj??e????e ima
      za temu neki od istorijski va??nih trenutaka u
      Zivotu grada na Miljacki, toga ,,cveta me??u
      gradovima".`;
    } else if (i == 2) {
      span.textContent = `Turske pri??e po egzoti??nosti tema i udaljenom
      istorijskom trenutku nalikuju kakvom
      rukavcu iz Hiljadu i jedne no??i. U njima pisac
      rasvetljava istorijske, verske, kulturolo??ke
      i socijalne specifi??nosti jednog tegobnog
      prostora ro??enog u patnji i krvi, ali odaje i
      nepodeljenu pohvalu trajnosti lepote koja
      prevazilazi i samo trajanje zla.`;
    } else {
      span.textContent = `Kao radoznao duh i - uprkos ???modernisti??kim" predrasudama - raznovrstan i avan-
      gardan pisac, Andri?? je ostao privr??en i sasvim kratkoj proznoj formi, o ??emu svedo??i
      ne samo niz sasvim kratkih pri??a koje je objavio za ??ivota nego i veliki broj proznih
      zapisa, skica i belezaka koji su posthumno objavljeni pod naslovima ,,Znakovi pored
      puta" i ,,Sveske"`;
    }

    //Dodavanje clasa
    p.classList.add("close");
    div.classList.add("stilModal");
    img.classList.add("stilModalContent");
    h1.classList.add("stilNaslov");
    span.classList.add("stilCaption");

    //Dodavanje elemenata na stranicu
    div.appendChild(img);
    div.appendChild(h1);
    div.appendChild(span);
    div.appendChild(p);
    document.body.appendChild(div);

    //Zatvaranje modala
    p.addEventListener("click", () => {
      div.classList.add("zatvoriSliku");
      document.body.removeChild(div);
      enableScroll();
    });
  });

  modal[i].addEventListener("mouseover", () => {
    console.log("RADIII");
    let divKojiDrziStrlicu = document.querySelectorAll(".single-book_download");
    divKojiDrziStrlicu[i].classList.add("class", "vidljivost");
  });

  modal[i].addEventListener("mouseout", () => {
    let divKojiDrziStrlicu = document.querySelectorAll(".single-book_download");
    divKojiDrziStrlicu[i].classList.remove("class", "vidljivost");
  });
}

/*Regex za formu*/
let uzorakIme =
  /^[A-Z??????????][a-z??????????]{2,15}(\s[A-Z??????????][a-z??????????]{2,15})?(\s[A-Z??????????][a-z??????????]{2,20})\s*$/;

let txtIme = document.getElementById("name");
txtIme.addEventListener("blur", proveraImena);

function proveraImena() {
  let ime = txtIme.value;
  ime.replace(/\s\s+/g, " ");
  if (!uzorakIme.test(ime)) {
    let poljeIme = document.getElementById("upozorenjeIme");
    if (ime == "" || !ime.trim()) {
      poljeIme.innerHTML = "Niste popunili ime i prezime!";
    } else {
      poljeIme.innerHTML = "Pog??an unos imena i prezimena!";
    }
    poljeIme.classList.remove("sakrij");
    return false;
  }
  if (uzorakIme.test(ime)) {
    let poljeIme = document.getElementById("upozorenjeIme");
    poljeIme.classList.add("sakrij");
    return true;
  }
}

let uzorakEmail = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;

let txtEmail = document.getElementById("email");
txtEmail.addEventListener("blur", proveraEmail);

function proveraEmail() {
  let email = txtEmail.value;
  if (!uzorakEmail.test(email)) {
    let poljeEmail = document.getElementById("upozorenjeEmail");
    if (email == "" || !email.trim())
      poljeEmail.innerHTML = "Niste popunili email!";
    else poljeEmail.innerHTML = "Email nije u dobrom formatu!";

    poljeEmail.classList.remove("sakrij");
    return false;
  }
  if (uzorakEmail.test(email)) {
    let poljeEmail = document.getElementById("upozorenjeEmail");
    poljeEmail.classList.add("sakrij");
    return true;
  }
}

let erijaTextaId = document.getElementById("erijaTexta");
erijaTextaId.addEventListener("blur", proveraTextErije);

function proveraTextErije() {
  let erijatexta = document.getElementById("erijaTexta").value;
  let spanIznadTxtErije = document.getElementById("upozorenjeTextErija");

  if (erijatexta.length == "") {
    spanIznadTxtErije.classList.remove("sakrij");
    return false;
  } else if (erijatexta.length < 25) {
    spanIznadTxtErije.classList.remove("sakrij");
    spanIznadTxtErije.textContent =
      "Ne mozete poslati poruku kra??u od 25 karaktera";
    return false;
  } else {
    spanIznadTxtErije.classList.add("sakrij");
    return true;
  }
}

let selektForme = document.getElementById("selektujTemu");
selektForme.addEventListener("blur", proveraSelekta);
function proveraSelekta() {
  let value = selektForme.options[selektForme.selectedIndex].value;
  if (value == "") {
    document.getElementById("spanZaDDL").classList.remove("sakrij");
    return false;
  } else {
    document.getElementById("spanZaDDL").classList.add("sakrij");
    return true;
  }
}

function proveraRadioButton() {
  if ($("input[name=drone]:checked").length > 0) {
    console.log("Cekirano");
    document.getElementById("upozorenjeRadioBatn").classList.add("sakrij");
    return true;
  } else {
    console.log("Nije cekirano");
    document.getElementById("upozorenjeRadioBatn").classList.remove("sakrij");
    return false;
  }
}

let dugmeForme = document.getElementById("dugmeForme");
dugmeForme.addEventListener("click", () => {
  if (
    proveraTextErije() &&
    proveraImena() &&
    proveraEmail() &&
    proveraSelekta() &&
    proveraRadioButton()
  ) {
    document.getElementById("uspehPoruka").classList.remove("sakrij");
  } else {
    proveraImena();
    proveraEmail();
    proveraTextErije();
    proveraSelekta();
    proveraRadioButton();
    document.getElementById("uspehPoruka").classList.add("sakrij");
  }
});

//Kviz

let batn = document.querySelectorAll(".batnKviz");
var kliknuto = 0;
for (let i = 0; i < batn.length; i++) {
  batn[i].addEventListener("click", () => {
    kliknuto = i;
    if (i == 0) {
      console.log("Klinuto1");
      batn[i].classList.add("pogresno");
    } else if (kliknuto == 1) {
      console.log("Klinuto2");
      batn[i].classList.add("ispravno");
      batn[0].setAttribute("disabled", "true");
      batn[2].setAttribute("disabled", "true");
      batn[3].setAttribute("disabled", "true");
    } else if (kliknuto == 2) {
      console.log("Klinuto3");
      batn[i].classList.add("pogresno");
    } else if (kliknuto == 3) {
      console.log("Klinuto4");
      batn[i].classList.add("pogresno");
    }
  });
}

//Plugin za slajder
$(document).ready(function () {
  $(".your-class").slick({
    autoplaySpeed: 3000,
    autoplay: true,
    arrows: false,
  });
});
