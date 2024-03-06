import { lista_componentes } from "./data.js";
let div_root = document.querySelector(".root");

/*titulo y buscador*/

let bloques_principales = `
    <h3>Componenetes del computador</h3>
    <input class="entrada_texto" type="text">
    <div class="lista_items"></div>
`;

div_root.innerHTML = bloques_principales;

function cargar_items(texto){

    let div_items = document.querySelector(".lista_items");
    div_items.innerHTML = "";

    lista_componentes.forEach((elemento) => {

        /*Acción del for por cada elemento*/
        if(texto == "" || texto == elemento.nombre){
            let div = document.createElement("div");
            div.classList.add("item");

            div.innerHTML = ` <img src="${elemento.img}" alt=""> `;
            div_items.appendChild(div);
        }
    });
}

/*Evento de la entrada de texto*/
let entrada = document.querySelector(".entrada_texto");

cargar_items("");

entrada.addEventListener("input", ()=> {
    cargar_items(entrada.value);

});