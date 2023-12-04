<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
<!--   <title>Proyecto 4 - Aplicación Web de Libros</title> -->
</head>
<body>
<p align="center">
  <img src="./img/logo.png" alt="Logo" style="width: 20%;">
</p>
<h1>Proyecto 4 - Aplicación Web de Libros</h1>


<p>Este repositorio contiene los archivos necesarios para una sencilla aplicación web que permite visualizar libros y realizar búsquedas utilizando la API de Google Books.</p>

<h2>Contenido</h2>

<ul>
  <li><code>index.html</code>: Página principal que muestra una lista de libros y permite realizar búsquedas. El logo, lo he tomado prestado de mi madre.</li>
  <li><code>login.html</code>, <code>register.html</code>: Páginas con formularios para iniciar sesión y registrarse.</li>
  <li><code>thank.html</code>: Página de agradecimiento después de registrarse.</li>
  <li><code>book.css</code>: Archivo CSS que define el estilo principal y diseño de la aplicación.</li>
  <li><code>register.css</code>, <code>thank.css</code>: Archivos CSS para formulario y página de agradecimiento.</li>
  <li><code>script5.js</code>: Archivo JavaScript que maneja la interacción con la API de Google Books y la funcionalidad de búsqueda.</li>
</ul>

<h2>Uso</h2>

<h3>Página principal (<code>index.html</code>)</h3>

<p><strong>Barra de Navegación:</strong> Permite acceder a la página principal, la sección "Acerca de nosotros" y la página de registro ("Mi cuenta").</p>
<p><strong>Sección de Libros:</strong> Muestra una lista de libros relacionados con un tema específico (actualmente configurado como "ciencia"). Los libros se presentan en tarjetas con su título y portada. Al hacer clic en un libro, se abre una nueva pestaña con más detalles en Google Books.</p>
<p><strong>Búsqueda en Google Books:</strong> Permite buscar libros ingresando un término en el campo provisto y haciendo clic en "Buscar". Los resultados se muestran en una nueva ventana.</p>

<h3>Estilos (<code>book.css</code>)</h3>

<p>Define estilos para la estructura de la página, la barra de navegación, el diseño de las tarjetas de libros y los elementos de búsqueda.</p>

<h3>Funcionalidad (<code>script5.js</code>)</h3>

<p>Contiene funciones que interactúan con la API de Google Books y manejan la lógica de búsqueda. Incluye:</p>
<ul>
  <li>Mostrar lista de libros relacionados con un tema específico.</li>
  <li>Búsqueda de libros utilizando el término ingresado por el usuario.</li>
  <li>Validación básica de formularios de registro y login.</li>
  <li>Redireccionamiento a una página de agradecimiento después de enviar un formulario.</li>
</ul>

<h2>Ejecución</h2>

<ol>
  <li>Descarga los archivos a tu ordenador.</li>
  <li>Abre el archivo <code>index.html</code> en un navegador web compatible.</li>
</ol>

<h3>Notas adicionales</h3>

<p>Puedes modificar el tema de búsqueda en el código JavaScript para buscar libros relacionados con otros temas. Asegúrate de tener conexión a Internet para que la búsqueda funcione correctamente, ya que depende de la API de Google Books.</p>

<p>Documentación de Google Books: <a href="https://developers.google.com/books/docs/v1/getting_started?hl=es-419">Documentación de Google Books</a></p>
<p>Diseño en Figma: <a href="https://www.figma.com/file/UDyNsdrs0bmv8qGwTYbSyA/Proyecto4?type=design&node-id=0%3A1&mode=design&t=jhnzikWXbxeDy2dv-1">Figma</a></p>

<p>(Se contempla la posibilidad de implementar el despliegue y agregar el enlace correspondiente, si el tiempo lo permite.)</p>

</body>
<<<<<<< HEAD
</html>
=======
</html>

>>>>>>> 59208aba662a0eecedf0fe2aa828c5d15a09a25b
