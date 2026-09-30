let cuenta = 0;

const numero = document.querySelector("#numero");

const btnSumar = document.querySelector("#btnSumar");

btnSumar.addEventListener("click", function () {
    cuenta = cuenta + 1;
    numero.innerText = `${cuenta} Like(s)`;
});


let cuenta2 = 0;

const numero2 = document.querySelector("#numero2");

const btnSumar2= document.querySelector("#btnSumar2");

btnSumar2.addEventListener("click", function () {
    cuenta2 = cuenta2 + 1;
    numero2.innerText = `${cuenta2} Like(s)`;
});


let cuenta3 = 0;

const numero3 = document.querySelector("#numero3");

const btnSumar3 = document.querySelector("#btnSumar3");

btnSumar3.addEventListener("click", function () {
    cuenta3 = cuenta3 + 1;
    numero3.innerText = `${cuenta3} Like(s)`;
});


