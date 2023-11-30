# Proyect4
Book Web App
Este repositorio contiene los archivos necesarios para una aplicación web simple para visualizar libros y realizar búsquedas utilizando la API de Google Books.
Contenido
•	index.html: Página principal que muestra una lista de libros y permite realizar búsquedas.
•	login.html, register.html: Páginas con formularios para iniciar sesión y para registrarte. 
•	thank.html: Página de agradecimiento después de registrarte
•	book.css: Archivo CSS que define el estilo principal y diseño de la aplicación.
•	register.css, thank.css: Archivo CSS para formulario y página de agradecimiento.
•	script5.js: Archivo JavaScript que maneja la interacción con la API de Google Books y la funcionalidad de búsqueda.
Uso
Página principal (index.html)
La página principal contiene una barra de navegación, una sección para mostrar libros y una sección para realizar búsquedas en Google Books.
•	Barra de navegación: Permite navegar a la página principal, la página "About us" y la página de registro ("Mi cuenta").
•	Sección de libros: Muestra una lista de libros relacionados con un tema específico (actualmente configurado como "science"). Los libros se muestran en tarjetas con su título y portada. Al hacer clic en un libro, se abre una nueva pestaña con más detalles del libro en Google Books.
•	Sección de búsqueda de Google Books: Permite buscar libros en Google Books ingresando un término de búsqueda en el campo provisto y haciendo clic en "Search". Los resultados de la búsqueda se muestran en una nueva ventana.
Estilos (book.css)
El archivo CSS define estilos para la estructura de la página, la barra de navegación, el diseño de las tarjetas de libros y los elementos de búsqueda.
Funcionalidad (script5.js)
El archivo JavaScript contiene las funciones que interactúan con la API de Google Books y manejan la lógica de búsqueda. También incluye:
•	Funciones para mostrar la lista de libros: Utiliza la API de Google Books para obtener una lista de libros relacionados con un tema específico y muestra las tarjetas de libros en la sección correspondiente.
•	Función para búsqueda de libros: Permite buscar libros en Google Books utilizando el término ingresado por el usuario. Los resultados se muestran en una nueva ventana.
•	Validación de formularios: Incluye validaciones básicas de campos en formularios de registro y login. Además, presenta una función para redireccionar a una página de agradecimiento después de enviar un formulario.
Cómo ejecutar la aplicación
1.	Descarga los archivos a tu ordenador.
2.	Abre el archivo index.html en un navegador web compatible.
Notas adicionales
•	La aplicación actualmente utiliza un tema predefinido ("science") para buscar libros. Puedes modificar el tema en el código JavaScript para buscar libros relacionados con otros temas.
•	Asegúrate de tener una conexión a Internet para que la búsqueda de libros funcione correctamente, ya que se basa en la API de Google Books.
- Si nos da tiempo haremos deployment y añadiremos el link.
