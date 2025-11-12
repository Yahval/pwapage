const slides = document.querySelectorAll(".slide");
    let index = 0;
    document.querySelector(".next").onclick = () => cambiarSlide(1);
    document.querySelector(".prev").onclick = () => cambiarSlide(-1);

    function cambiarSlide(n) {
      slides[index].classList.remove("active");
      index = (index + n + slides.length) % slides.length;
      slides[index].classList.add("active");
    }

    // --- Agregar noticias ---
    const form = document.getElementById("form-noticia");
    const contenedor = document.getElementById("contenedor-noticias");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const titulo = document.getElementById("titulo").value;
      const contenido = document.getElementById("contenido").value;

      const noticia = document.createElement("div");
      noticia.classList.add("noticia");
      noticia.innerHTML = `<h4>${titulo}</h4><p>${contenido}</p>`;

      contenedor.prepend(noticia);

      form.reset();
    });