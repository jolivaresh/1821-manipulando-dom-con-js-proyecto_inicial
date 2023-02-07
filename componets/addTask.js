import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";
import { displayTasks } from "./readTasks.js";

export const addTask = (evento) => { // esta funcion recibe el evento
    evento.preventDefault();  // el evento genera el formulario
    
    const list = document.querySelector("[data-list]"); // crea un elemento padre en html donde se agregan las tareas
    const input = document.querySelector("[data-form-input]"); // el usuario llena con la tarea que quiere guardar
    const calendar = document.querySelector("[data-form-date]"); // calendario que asigna la fecha
    
    const value = input.value; // texto que genero el usuario
    const date = calendar.value;// la fecha que genero el usuario
    const dateFormat = moment(date).format("DD/MM/YYYY"); //toma la fecha y le fa el formato con la libreria cargada
    
    if( value === '' || date === ''){
        return;
    }

    input.value = "";//limpia 
    calendar.value = "";//limpia

    const complete = false

    const taskObj = { //genera un objeto donde se guarda la informacion
        value,
        dateFormat,
        complete,
        id: uuid.v4()
    };

    list.innerHTML = "";

    const taskList = JSON.parse(localStorage.getItem("tasks")) || []; // lee la informacion almacenada y lo trasfora en un formato JSON si es null lo guarda como arreglo
    taskList.push(taskObj); //metodo para arreglos
    localStorage.setItem("tasks", JSON.stringify(taskList));

    displayTasks();
};

export const createTask = ({ value, dateFormat, complete, id }) => {
    const task = document.createElement("li"); // crea un elemento html
    task.classList.add("card"); // agrega una clase a un elemento HTML

    const taskContent = document.createElement("div"); //genera un elemento de tipo div


    const check = checkComplete(id)

    if (complete){
        console.log("completada")
        check.classList.toggle("fas");
        check.classList.toggle("completeIcon");
        check.classList.toggle("far");
    }
    const titletask = document.createElement("samp"); //genera elemento de tipo span
    titletask.classList.add("task"); //al elemento span se le agrega el task
    titletask.innerText = value;// agrega el texo 
    taskContent.appendChild(check);// agrega los hijos al contenedor
    taskContent.appendChild(titletask);// agrega los hijos al contenedor
    
    const dateElement = document.createElement("span");// genera el span
    dateElement.innerHTML = dateFormat;//agraga la fecha al span

    task.appendChild(taskContent);// agrega los hijos al contenedor
    task.appendChild(dateElement);// agrega los hijos al contenedor
    task.appendChild(deleteIcon(id));// agrega los hijos al contenedor
    return task;//regresa la tarea
};