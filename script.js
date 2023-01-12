const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]") // crea un elemento padre en html
    const task = document.createElement("li"); // crea un elemento html
    task.classList.add("card"); // agrega una clase a un elemento HTML
    input.value = "";
    const content = `<div>  
         <i class="far fa-check-square icon"></i>
         <span class="task">${value}</span>
        </div>
        <i class="fas fa-trash-alt trashIcon icon"></i>`; //contiene el codigo que se debe agragar
        task.innerHTML = content; // Agrega contenido al HTML

        list.appendChild(task) // agrega un elemento hijo al HTML

        console.log(content);
};

console.log(btn);

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

