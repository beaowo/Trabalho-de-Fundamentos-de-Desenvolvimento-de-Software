/* Ao clicar aparece a frase. Se clicar novamente a frase some.*/
function fraselivro() {
    const paragrafo = document.getElementById("mensagem-frase");

    if (paragrafo.style.display === "none" || paragrafo.style.display === "") {
        paragrafo.style.display = "block";
    } else {
        paragrafo.style.display = "none";
    }
}
