'use strict'

//Variables
const contenedorMain = document.querySelector('#contenedor-main');





//Creacion de Fetch
for(let i = 1; i<= 150; i++){
    //Variables
    const url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
    const contenidoMain = document.createElement('div')
    const contenidoImgMain = document.createElement('div');
    const nombrePokemon = document.createElement('h3');
    const imgPokemon = document.createElement('img');
    const idPokemon = document.createElement('h3');
    const typePokemon = document.createElement('p');
    const divType = document.createElement('div');

    fetch(url)
    .then(res => res.json())
    .then(data =>{
        //Clases creadas
        contenidoMain.classList.add('contenido-main');
        contenidoImgMain.classList.add('contenido-imagen-main');
        divType.classList.add('div-type');

        //Interacción con el DOM
        nombrePokemon.innerHTML = data.name;
        contenidoMain.appendChild(nombrePokemon);
        imgPokemon.src = data.sprites.front_default;
        idPokemon.innerHTML = 'N°' + data.id;
        contenidoImgMain.appendChild(imgPokemon);
        contenidoMain.appendChild(contenidoImgMain);
        contenidoImgMain.appendChild(idPokemon);
        contenedorMain.appendChild(contenidoMain);
        typePokemon.innerHTML = data.types[0].type.name;
        divType.appendChild(typePokemon);
        contenidoMain.appendChild(divType);



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
        

    });
}






































// let inputSearch = document.querySelector('#inputSearch');
// const form = document.querySelector('#formulario');
// const btnBuscar = document.querySelector('#btn-buscar');
// let numero=0;
// let nombre = '';
// const imgPokemon = document.querySelector('#img-pokemon');
// const nombrePokemon = document.querySelector('#nombre-pokemon');
// let error = document.querySelector('.error');
// let arr = [];
// let lista = document.querySelector('#lista');

// form.addEventListener('submit', e =>{
//     e.preventDefault();
// });


// btnBuscar.addEventListener('click', () =>{
//     nombre = inputSearch.value;
//     const url = `https://pokeapi.co/api/v2/pokemon/${nombre}/`;
//     fetch(url)
//     .then(res => res.json())
//     .then(data => {
//     imgPokemon.src = data.sprites.front_default;
//     nombrePokemon.innerHTML = data.id;
//     arr.push(nombre);
//     console.log(arr);
//     localStorage.setItem('nombre', arr);
    
    
    
//     })
//     .catch(
//         error.style.display = 'block',
//         setTimeout(() => {
//             error.style.display = 'none'
//         }, 2000)
//     )
// });

// arr.forEach(() =>{
//     lista.innerHTML = localStorage.getItem('nombre');
// })







