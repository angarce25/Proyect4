function displayBookList(done) { //se hace solicitud a la api de googlebooks https://developers.google.com/books/docs/v1/getting_started?hl=es-419
    const tema = 'science'; // Cambia al tema que desees buscar
//cuando obtiene respuesta, ejecuta la función done don los datos obtenidos
    fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${tema}`)
        .then(response => response.json())// hace solicitud y convierte la respuesta en json
        .then(data => {
            done(data); //llama a la función done pasando los datos obtenidos
            attachClickEvent(data.items); //llama a la función que maneja los clic en los libros (a los elementos)
        });
}
//de los datos obtenidos de done, ahora los manejamos para que puedan ser utilizados por la siguiente función
function attachClickEvent(books) {//toma la lista de libros
    books.forEach(book => {
        //crea elementos HTML para mostrar cada libro y su imagen, título y fecha de publicación
        const article = document.createElement('article');
        article.innerHTML = `
            <div class="image-container">
                <img src="${book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/150x200.png?text=No+Image'}" alt="portada de libro">
            </div>
            <span>${book.volumeInfo.title}</span>
            <span>${book.volumeInfo.publishedDate}</span>
        `;
       
//agregamos un evento clic que abre una nueva ventana con detalle del libro, al hacer clic
        article.addEventListener('click', () => {
            const bookId = book.id;
            const newWindow = window.open('', '_blank');
            
            // Creación de la tabla con la información detallada del libro
            const table = document.createElement('table');
            table.innerHTML = `
                <tr>
                    <th>Propiedad</th>
                    <th>Valor</th>
                </tr>
                <tr>
                    <td>Título</td>
                    <td>${book.volumeInfo.title}</td>
                </tr>
                <tr>
                    <td>Autores</td>
                    <td>${book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'No disponible'}</td>
                </tr>
                <tr>
                    <td>Fecha de publicación</td>
                    <td>${book.volumeInfo.publisher ? book.volumeInfo.publisher : 'No disponible'}</td>
                </tr>
                <tr>
                    <td>Editorial</td>
                    <td>${book.volumeInfo.publishedDate ? book.volumeInfo.publishedDate : 'No disponible'}</td>
                </tr>
                <tr>
                    <td>Categorías</td>
                    <td>${book.volumeInfo.categories ? book.volumeInfo.categories.join(', ') : 'No disponible'}</td>
                </tr>
                <tr>
                    <td>Descripción</td>
                    <td>${book.volumeInfo.description ? book.volumeInfo.description : 'No disponible'}</td>
                </tr>
                <tr>
                <td>Páginas</td>
                <td>${book.volumeInfo.pageCount ? book.volumeInfo.pageCount : 'No disponible'}</td>
            </tr>
            `;
            
            // Estilos CSS para la tabla
            newWindow.document.body.innerHTML = `
                <style>
                    table {
                        border-collapse: collapse;
                        width: 100%;
                    }
                    th, td {
                        border: 1px solid #dddddd;
                        text-align: left;
                        padding: 8px;
                    }
                    th {
                        background-color: #f2f2f2;
                    }
                    h2{
                        text-align:center;
                    }
                </style>
                <h2>${book.volumeInfo.title}</h2>
            `;
            
            // Agregar la tabla a la ventana emergente
            newWindow.document.body.appendChild(table);
        });

        document.getElementById('book-list').appendChild(article);
    });
}
//la siguiente es una callback o función de devolución
displayBookList(data => { //se invoca a displayBookList pasando una función como argumento. Se ejecuta cuando las anteriores estén listas
    // La función de visualización de libros y el manejo de clics se han separado para mayor claridad y legibilidad del código.
});//Primero se invoca y luego la función de devolución de llamada. Se pasa una función anónima como argumento, toma el parámetro data
//entre las llaves se puede añadir más 
document.addEventListener('DOMContentLoaded', function () { //document se refiere al documento HTML que aparece en el navegador
    //Cuando el DOM está completamente cargado, se agrega un evento al botón de búsqueda
    const searchButton = document.getElementById('search-btn');
    searchButton.addEventListener('click', searchBooks);
});
//función se activa cuando presionas el botón de búsqueda, realiza la solicitud a la api y muestra el resultado en otra ventana usando opensearchResults

function searchBooks() {
    const searchInput = document.getElementById('search-input').value.trim();
    if (searchInput !== '') {
        const url = `https://www.googleapis.com/books/v1/volumes?q=${searchInput}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                openSearchResults(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    } else {
        alert('Please enter a search term');
    }
}
//est función muestra el resultado en una ventana nueva, creando un html o muestra un mensaja de no result si no hay resultados
function openSearchResults(data) {
    const searchWindow = window.open('', '_blank');
    if (data.items && data.items.length > 0) {
        const books = data.items.map(book => {
            return `
                <article>
                    <div class="image-container">
                        <img src="${book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/150x200.png?text=No+Image'}" alt="Portada del libro">
                    </div>
                    <span>${book.volumeInfo.title}</span>
                </article>
            `;
        }).join('');

        const searchHTML = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
            <link href="./book.css" rel="stylesheet">
            <title>Results</title>
            </head>
            <body>
            <header>
            <a href="./index.html"><img class="logo" src="./img/logo.png"
                    alt="logo telarinche con letras y máquina de coser de color verde"></a>

            <nav class="navBar" id="nav">

                <ul class="navLink">
                    <li class="navList"><a href="#">Home</a></li>
                    <li class="navList"><a href="#">About us</a></li>
                    <li class="navList"><a href="./register.html">Mi cuenta</a></li>

                </ul>
            </nav>
        </header>
                <h1>Search Results</h1>
                <div id="search-results">
                    ${books}
                </div>
           
                </body>
            </html>
        `;
        searchWindow.document.write(searchHTML);
    } else {
        searchWindow.document.write('<h1>No results found</h1>');
    }
}

//validación login
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        if (email === '' || password === '') {
            alert('Por favor, completa todos los campos.');
        } else {
            // Aquí podrías enviar el formulario si las validaciones son exitosas
            // loginForm.submit();
            console.log('Formulario enviado con éxito');
        }
    });
});

//Validación de formulario
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	
	nombre: false,
	password: false,
	correo: false,
	telefono: false
}

//formulario

const validarFormulario = (e) => {
	switch (e.target.name) {
		
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});


function redirectThankPage() {
	// Aquí puedes agregar tu lógica para procesar el formulario
	// Luego, redirige a la página de agradecimiento
	window.location.href = './thank.html';
	return false; // Para evitar que el formulario se envíe de forma predeterminada
  }
  
