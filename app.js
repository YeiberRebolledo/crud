let listaRegistro = [];

const objRegistro = {
    id: '',
    nombre: '',
    apellido: '',
    cedula: '',
    reservacion: '',
    TiempodeEstadia: ''
}

let editando = false;

const formulario = document.querySelector('#formulario');
const nombreInput = document.querySelector('#nombre');
const apellidoInput = document.querySelector('#apellido');
const cedulaInput = document.querySelector('#cedula');
const reservacionInput = document.querySelector('#reservacion');
const TiempodeEstadiaInput = document.querySelector('#TiempodeEstadia');
const btnAgregar = document.querySelector('#ntnAgregar');

formulario.addEventListener('submit', validarformulario);

function validarformulario(e) {
    e.preventDefault();
  
    if(nombreInput.value === '' || apellidoInput.value === '' || cedulaInput.value === '' || reservacionInput.value === '' || TiempodeEstadiaInput.value === '') {
        alert('Todos los campos son oligatorios.');
        return;
    }

    if(editando) {
        //editarRegistro();
        editando = false;
    } else {
        objRegistro.id = Date.now();
        objRegistro.nombre = nombreInput.value;
        objRegistro.apellido = apellidoInput.value;
        objRegistro.cedula = cedulaInput.value;
        objRegistro.reservacion = reservacionInput.value;
        objRegistro.TiempodeEstadia = TiempodeEstadiaInput.value;

        agregarRegistro();
    }
}

function agregarRegistro() {
    listaRegistro.push({...objRegistro});

    mostrarRegistro();
}

function mostrarRegistro() {
   
    limpiarHTML
   
    const divRegistro = document.querySelector('.div-registro');
   
    listaRegistro.forEach( registro => {
        const {id, nombre, apellido, cedula, reservacion, TiempodeEstadia} = registro;
        
        const parrafo = document.createElement('p');
        parrafo.textContent = `$(id) - $(nombre) - $(apellido) - $(cedula) - $(reservacion) - $(TiempodeEstadia) - `;
        parrafo.dataset.id = id;

        const editarBoton = document.createElement('button');
        //editarBoton.onclick = () => cargarRegistro(registro);
        editarBoton.textContent = 'Editar';
        editarBoton-classList.add('btn', 'btn-editar');
        parrafo.append(editarBoton);

        const eliminarBoton = document.createElement('button');
        //eliminarBoton.onclick = () => eliminarRegistro(id);
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton-classList.add('btn', 'btn-eliminar');
        parrafo.append(eliminarBoton);

        const hr = document.createElement('hr');

        divRegistro.appendChild(parrafo);
        divRegistro.appendChild(hr);
    });
}

function limpiarHTML() {
    const divRegistro = document.querySelector('.div-registro');
    while(divRegistro.firstChild) {
        divRegistro.removeChild(divRegistro.firstChild);
    }
}