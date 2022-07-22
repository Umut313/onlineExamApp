let sunucudandonen;

var baglanti = new XMLHttpRequest();
baglanti.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        sunucudandonen = JSON.parse(baglanti.responseText);
        soruGetir();

    }

    return sunucudandonen;
};
baglanti.open("GET", "data.json", true);
baglanti.send();

const sonucAlani = document.getElementById("soruAlani");
const soru = documü.getElementById("soru");
const secenekler = document.getElementsByName("secenek");

const aciklamaA = document.getElementById("aciklamaA");
const aciklamaB = document.getElementById("aciklamaB");
const aciklamaC = document.getElementById("aciklamaC");
const aciklamaD = document.getElementById("aciklamaD");

const gonderButonu = document.getElementById("gonder");

let puan = 0;
let sira = 0;

function soruGetir() {
    secimiTemizle();
    console.log(sunucudandonen);

    let siradakiSoru = sunucudandonen.sorular[sira];

    soru.innerHTML = siradakiSoru.soru;
    aciklamaA.innerText=siradakiSoru.secenekA;
    aciklamaB.innerText=siradakiSoru.secenekB
    aciklamaC.innerText=siradakiSoru.secenekC;
    aciklamaD.innerText=siradakiSoru.secenekD;

}

function secimiTemizle() {
    secenekler.forEach(secenek => secenek.checked = false);
}