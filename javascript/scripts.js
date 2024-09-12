var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    620: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    680: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    920: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1240: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  }
});


// ------------------------- consulta oferta-------------------------------



document.querySelectorAll('.oferta__button').forEach(button => {
  button.addEventListener('click', function() {
      const title = this.parentElement.querySelector('.oferta__title').textContent;
      const message = `Hola!, quiero saber si me puede brindar más información sobre ${title}`;
      const phoneNumber = '543815411429';
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

      window.open(whatsappUrl, '_blank');
  });
});



  // ----------------- scroll behavior ----------------------


  // Wait for the DOM to load
  document.addEventListener('DOMContentLoaded', function () {
    // Get all filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Get the 'articulos' section
    const articulosSection = document.getElementById('articulos');

    // Add click event listeners to each filter button
    filterButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        // Smoothly scroll to the 'articulos' section
        articulosSection.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });



// ------------------- whatsapp --------------------------------




// Selecciona todos los botones de productos
const buttons = document.querySelectorAll('.product__footer');

buttons.forEach(button => {
  button.addEventListener('click', function () {
    // Encuentra el título del producto relacionado con este botón
    const productTitle = this.parentElement.querySelector('.product__title').innerText;

    // Arma el mensaje de WhatsApp
    const mensaje = `Hola! quiero saber si tiene disponible ${productTitle}`;

    // Número de WhatsApp (sin el +, solo código de país y número)
    const numero = '543814621807';

    // Crea el enlace de WhatsApp
    const enlace = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    // Redirige al enlace de WhatsApp
    window.open(enlace, '_blank');
  });
});




// -------------------- busqueda -------------------------------


// Obtener el campo de búsqueda y la lista de sugerencias
const searchInput = document.getElementById('searchInput');
const suggestionsList = document.getElementById('suggestionsList');

// Obtener todos los títulos de productos
const productTitles = Array.from(document.querySelectorAll('.product__title')).map(title => title.textContent.toLowerCase());

// Escuchar el evento 'input' del campo de búsqueda
searchInput.addEventListener('input', function () {
  const query = searchInput.value.toLowerCase();
  suggestionsList.innerHTML = ''; // Limpiar las sugerencias anteriores

  if (query !== '') {
    // Filtrar los títulos que coincidan con la búsqueda
    const filteredTitles = productTitles.filter(title => title.includes(query));

    if (filteredTitles.length === 0) {
      // Si no se encuentra ningún título, mostrar mensaje de "no encontrado"
      const noResultsItem = document.createElement('li');
      noResultsItem.textContent = "No encontramos lo que buscas, prueba con otras palabras";
      noResultsItem.style.fontStyle = "italic"; // Opcional: darle estilo al mensaje
      suggestionsList.appendChild(noResultsItem);
    } else {
      // Mostrar las sugerencias
      filteredTitles.forEach(title => {
        const suggestionItem = document.createElement('li');
        suggestionItem.textContent = title;
        suggestionsList.appendChild(suggestionItem);

        // Permitir que al hacer clic en una sugerencia se llene el input con el texto seleccionado
        suggestionItem.addEventListener('click', () => {
          searchInput.value = title;
          suggestionsList.innerHTML = ''; // Limpiar la lista de sugerencias
        });
      });
    }
  }
});





// ---------------------------- PRODUCTOS -----------------------------------------


document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const products = document.querySelectorAll(".product");
  const loadMoreButton = document.getElementById("loadMoreAll");

  // Número de productos a mostrar inicialmente
  const initialProductsToShow = 10;
  let currentProductsToShow = initialProductsToShow;

  // Mostrar productos iniciales
  showProducts(initialProductsToShow);

  filterButtons.forEach(button => {
    button.addEventListener("click", function () {
      const filterValue = this.getAttribute("data-filter");

      filterButtons.forEach(btn => btn.classList.remove("active"));
      this.classList.add("active");

      // Mostrar productos según la categoría seleccionada
      products.forEach(product => {
        if (filterValue === "all" || product.classList.contains(filterValue)) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      });

      // Restablecer el contador de productos mostrados
      if (filterValue === "all") {
        currentProductsToShow = initialProductsToShow;
        showProducts(currentProductsToShow);
        // Mostrar el botón "Cargar más" solo cuando la categoría es "all"
        loadMoreButton.style.display = "block";
      } else {
        // Ocultar el botón "Cargar más" para otras categorías
        loadMoreButton.style.display = "none";
      }
    });
  });

  // Manejar clic en el botón "Cargar más"
  loadMoreButton.addEventListener("click", function () {
    currentProductsToShow += initialProductsToShow;
    showProducts(currentProductsToShow);
  });

  // Función para mostrar productos
  function showProducts(numToShow) {
    products.forEach((product, index) => {
      if (index < numToShow) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });

    // Mostrar botón "Cargar más" si hay más productos por mostrar
    if (numToShow < products.length) {
      loadMoreButton.style.display = "block";
    } else {
      loadMoreButton.style.display = "none";
    }
  }

  // Función para manejar la búsqueda
  document.getElementById("searchButton").addEventListener("click", function () {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    products.forEach(product => {
      const productName = product.textContent.toLowerCase();
      if (productName.includes(searchTerm)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const products = document.querySelectorAll(".product");
  const loadMoreButton = document.getElementById("loadMoreAll");

  // Número de productos a mostrar inicialmente
  const initialProductsToShow = 15;
  let currentProductsToShow = initialProductsToShow;

  // Mostrar productos iniciales
  showProducts(initialProductsToShow);

  filterButtons.forEach(button => {
    button.addEventListener("click", function () {
      const filterValue = this.getAttribute("data-filter");

      filterButtons.forEach(btn => btn.classList.remove("active"));
      this.classList.add("active");

      // Mostrar productos según la categoría seleccionada
      products.forEach(product => {
        if (filterValue === "all" || product.classList.contains(filterValue)) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      });

      // Restablecer el contador de productos mostrados
      if (filterValue === "all") {
        currentProductsToShow = initialProductsToShow;
        showProducts(currentProductsToShow);
        // Mostrar el botón "Cargar más" solo cuando la categoría es "all"
        loadMoreButton.style.display = "block";
      } else {
        // Ocultar el botón "Cargar más" para otras categorías
        loadMoreButton.style.display = "none";
      }
    });
  });

  // Manejar clic en el botón "Cargar más"
  loadMoreButton.addEventListener("click", function () {
    currentProductsToShow += initialProductsToShow;
    showProducts(currentProductsToShow);
  });

  // Función para mostrar productos
  function showProducts(numToShow) {
    products.forEach((product, index) => {
      if (index < numToShow) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });

    // Mostrar botón "Cargar más" si hay más productos por mostrar
    if (numToShow < products.length) {
      loadMoreButton.style.display = "block";
    } else {
      loadMoreButton.style.display = "none";
    }
  }


});

// ----------------------------- Lightbox --------------------------------------------


$(document).ready(function () {
  const imgElements = document.querySelectorAll('.img');

  imgElements.forEach(function (imgElement) {
    imgElement.addEventListener('click', function () {
      const overlay = document.createElement('div');
      overlay.className = 'overlay';
      document.body.appendChild(overlay);

      const lightbox = document.createElement('div');
      lightbox.className = 'lightbox';

      const clonedImg = imgElement.cloneNode(true);
      lightbox.appendChild(clonedImg);

      const closeButton = document.createElement('button');
      closeButton.textContent = 'Cerrar';
      closeButton.className = 'close-button';
      closeButton.addEventListener('click', function () {
        overlay.classList.remove('active');
        lightbox.classList.remove('active');
        setTimeout(function () {
          document.body.removeChild(overlay);
          document.body.removeChild(lightbox);
        }, 300);
      });
      lightbox.appendChild(closeButton);

      document.body.appendChild(lightbox);

      setTimeout(function () {
        overlay.classList.add('active');
        lightbox.classList.add('active');
      }, 50);
    });
  });
});


// --------------------- mensaje whatsapp productos --------------------------



document.querySelector('.product__cta').addEventListener('click', function() {
  // Obtener el título del producto
  const productTitle = document.querySelector('.product__title').innerText;

  // Crear el mensaje para WhatsApp
  const message = `Hola, me podrias dar mas informacion sobre ${productTitle} muchas gracias`;

  // Número de teléfono con formato para WhatsApp
  const phoneNumber = '543814621807';

  // Crear la URL de WhatsApp con el mensaje
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Redirigir al enlace de WhatsApp
  window.open(whatsappURL, '_blank');
});




// ------------------- testimonios -----------------------


$(document).ready(function(){
  $('.testimony').slick({
    slidesToShow: 3, // Número de tarjetas por defecto
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 800, // Para pantallas menores a 600px
        settings: {
          slidesToShow: 2 // Mostrar 2 tarjetas
        }
      },
      {
        breakpoint: 450, // Para pantallas menores a 450px
        settings: {
          slidesToShow: 1 // Mostrar 1 tarjeta
        }
      }
    ]
  });
});




