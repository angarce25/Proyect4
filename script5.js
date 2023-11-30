function displayBookList(done) {
    const tema = 'science'; // Cambia al tema que desees buscar

    fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${tema}`)
        .then(response => response.json())
        .then(data => {
            done(data);
            attachClickEvent(data.items);
        });
}

function attachClickEvent(books) {
    books.forEach(book => {
        const article = document.createElement('article');
        article.innerHTML = `
            <div class="image-container">
                <img src="${book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/150x200.png?text=No+Image'}" alt="portada de libro">
            </div>
            <span>${book.volumeInfo.title}</span>
        `;

        article.addEventListener('click', () => {
            const bookId = book.id;
            window.open(`https://www.googleapis.com/books/v1/volumes/${bookId}`, '_blank');
        });

        document.getElementById('book-list').appendChild(article);
    });
}

displayBookList(data => {
    // La función de visualización de libros y el manejo de clics se han separado para mayor claridad y legibilidad del código.
});


document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('search-btn');
    searchButton.addEventListener('click', searchBooks);
});

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
  


