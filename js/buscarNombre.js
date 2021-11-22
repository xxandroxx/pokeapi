'use strict'

//Variables
const inputBuscar = document.querySelector('#input-buscar');
const btnBuscar = document.querySelector('#btn-buscar');
const formulario = document.querySelector('#formulario');
const contenedorMainBuscar = document.querySelector('#contenedor-main-buscar');
const popUpCarga = document.querySelector('.carga');

//Variables creadas
const contenidoMainBuscar = document.createElement('div');
const nombrePokemon = document.createElement('h3');
const contenidoMainBuscarImg = document.createElement('div');
const imgPokemon = document.createElement('img');
const idPokemon = document.createElement('h3');
const typePokemon = document.createElement('p');
const divType = document.createElement('div');


//Evento no actualizar página
formulario.addEventListener('submit', e => e.preventDefault());


//Evento principal
btnBuscar.addEventListener('click', () =>{
    //Variables
    const nombre = inputBuscar.value;
    const url = `https://pokeapi.co/api/v2/pokemon/${nombre}/`;

    
    //Clases agregadas
    contenidoMainBuscar.classList.add('contenido-main-buscar');
    contenidoMainBuscar.classList.add('contenedor');
    contenidoMainBuscarImg.classList.add('contenido-main-buscar-img');
    divType.classList.add('div-type');

    popUpCarga.style.display = 'block';

    setTimeout(() => {
        popUpCarga.style.display = 'none';

        //Fetch
        fetch(url)
        .then(res => res.json())
        .then(data => {
        
        //Interacción con el DOM
        nombrePokemon.innerHTML = data.name;
        typePokemon.innerHTML = data.types[0].type.name;
        contenidoMainBuscar.appendChild(nombrePokemon);
        contenedorMainBuscar.appendChild(contenidoMainBuscar);
        divType.appendChild(typePokemon);

        imgPokemon.src = data.sprites.front_default;
        idPokemon.innerHTML = 'N°' + data.id;
        contenidoMainBuscarImg.appendChild(imgPokemon);
        contenidoMainBuscarImg.appendChild(idPokemon);
        contenidoMainBuscar.appendChild(contenidoMainBuscarImg);
        contenidoMainBuscar.appendChild(divType);


         //Funciones background divType
         if(data.types[0].type.name === 'fire'){
            divType.style.backgroundColor = '#f28f3e';
        }else if(data.types[0].type.name === 'electric'){
            divType.style.backgroundColor = '#ffcd02';
        }else if(data.types[0].type.name === 'normal'){
            divType.style.backgroundColor = '#8a929a';
        }else if(data.types[0].type.name === 'water'){
            divType.style.backgroundColor = '#338bd1';
        }else if(data.types[0].type.name === 'dragon'){
            divType.style.backgroundColor = '#0069bf';
        }else if(data.types[0].type.name === 'grass'){
            divType.style.backgroundColor = '#35b547';
        }else if(data.types[0].type.name === 'bug'){
            divType.style.backgroundColor = '#7cb900';
        }else if(data.types[0].type.name === 'poison'){
            divType.style.backgroundColor = '#ac62c4';
        }else if(data.types[0].type.name === 'ground'){
            divType.style.backgroundColor = '#dc6c33';
        }else if(data.types[0].type.name === 'fairy'){
            divType.style.backgroundColor = '#ee82df';
        }else if(data.types[0].type.name === 'psychic'){
            divType.style.backgroundColor = '#f2616f';
        }else if(data.types[0].type.name === 'fighting'){
            divType.style.backgroundColor = '#804222';
        }else if(data.types[0].type.name === 'rock'){
            divType.style.backgroundColor = '#bead7f';
        }else if(data.types[0].type.name === 'ghost'){
            divType.style.backgroundColor = '#7276c0';
        }else if(data.types[0].type.name === 'ice'){
            divType.style.backgroundColor = '#4cd1c0';
        }

        
        })
    }, 2000);
    


});


    






