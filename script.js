import { addTask } from "./componets/addTask.js";
import { displayTasks } from "./componets/readTasks.js";

const btn = document.querySelector("[data-form-btn]");

// Arrow functions o funciones anonimas
btn.addEventListener("click", addTask);

displayTasks();




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
