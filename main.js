const intxtResponsable = document.querySelector('input');
const intxtTarea = document.querySelector('textarea');
const form = document.querySelector('form');
const contenedorTareas = document.querySelector('.contenedor-tareas');
const lista = document.querySelector('ul');
const btnAgrgar = document.getElementById('btn-agregar');

btnAgrgar.addEventListener('click', (e) => {

    e.preventDefault(); //evitar refrescar el form

    let responsable = intxtResponsable.value + ', tienes pendiente:'; //obtener datos del form
    let tarea = intxtTarea.value;
    
    const liTarea = document.createElement('li'); //elementos necesarios para el componente
    const h2Tarea = document.createElement('h2');
    const pTarea = document.createElement('p');
    const divTexto = document.createElement('div');
    const divBtn = document.createElement('div');
    const btnBorrar = document.createElement('button');

    btnBorrar.textContent = "X";
    btnBorrar.className = "btnBorrar";
    btnBorrar.addEventListener('click', (e) => {
        const elemento = e.target.parentElement;
        lista.removeChild(elemento);
    });
    
    h2Tarea.textContent = responsable; //insertar datos del form en el componente
    pTarea.textContent = tarea;

    divTexto.appendChild(h2Tarea); //acomodar los elementos para formar el componente
    divTexto.appendChild(pTarea);
    liTarea.appendChild(divTexto);
    liTarea.appendChild(btnBorrar);
    lista.appendChild(liTarea);

    intxtResponsable.value = '';
    intxtTarea.value = '';
});


