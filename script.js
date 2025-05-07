let currentIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll('.depoimentos blockquote');
  const totalSlides = slides.length;

  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

  const newTransformValue = -currentIndex * 100;
  document.querySelector('.depoimentos').style.transform = `translateX(${newTransformValue}%)`;
}

document.querySelectorAll('.show-more').forEach(button => {
    button.addEventListener('click', () => {
      const descricaoCompleta = button.nextElementSibling;
      const descricao = button.previousElementSibling;
      
      if (descricaoCompleta.style.display === "none" || descricaoCompleta.style.display === "") {
        descricaoCompleta.style.display = "block";
        descricao.style.display = "none";
        button.textContent = "Mostrar Menos";
      } else {
        descricaoCompleta.style.display = "none";
        descricao.style.display = "block";
        button.textContent = "Mostrar Mais";
      }
    });
  });