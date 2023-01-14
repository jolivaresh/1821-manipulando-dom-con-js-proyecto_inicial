import checkComplete from "./componets/checkComplete.js";
import deleteIcon from "./componets/deleteIcon.js";

const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]") // crea un elemento padre en html
    const task = document.createElement("li"); // crea un elemento html
    task.classList.add("card"); // agrega una clase a un elemento HTML
    input.value = "";

    const taskContent = document.createElement("div");
    const titletask = document.createElement("samp");
    titletask.classList.add("task");
    titletask.innerText = value
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titletask);
    

 //contiene el codigo que se debe agragar
        //  ${value} crear un template de un párrafo que reciba el contenido HTML y JavaScript
        // task.innerHTML = content; // Agrega contenido al HTML
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task); // agrega un elemento hijo al HTML
};


// Arrow functions o funciones anonimas
btn.addEventListener("click", createTask);





/* Utilizar el método 
addEventListener para escuchar eventos de un elemento
evento.preventDefault Prevenir el comportamiento patrón del formulario
 */

//listener (evento)
/*btn.addEventListener("click", function (evento) {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
}) 
*/


// Arrow functions o funciones anonimas, funciones flechas 
/*btn.addEventListener("click", (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
}) */
