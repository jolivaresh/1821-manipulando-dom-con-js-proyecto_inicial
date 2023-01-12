( () => {
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
    const content = `
        <i class="fas fa-trash-alt trashIcon icon"></i>`; //contiene el codigo que se debe agragar
        //  ${value} crear un template de un párrafo que reciba el contenido HTML y JavaScript
        // task.innerHTML = content; // Agrega contenido al HTML
        task.appendChild(taskContent);
        list.appendChild(task); // agrega un elemento hijo al HTML
};


// Arrow functions o funciones anonimas
btn.addEventListener("click", createTask);

const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far","fa-check-square","icon");
    i.addEventListener("click", completeTask);
    return i
}
// Inmediately invokerd function expression IIFE 
const completeTask = (event) => {
    const element = event.target
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");

};

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
})();