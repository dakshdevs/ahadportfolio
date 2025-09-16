

// home page js start


const toggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('close-btn');

 
    toggle.addEventListener('click', () => {
      sidebar.classList.add('active');
      document.body.classList.add('lock-scroll');
    });

    
    closeBtn.addEventListener('click', () => {
      sidebar.classList.remove('active');
      document.body.classList.remove('lock-scroll');
    });

 
    const sidebarLinks = sidebar.querySelectorAll("ul li a");
    sidebarLinks.forEach(link => {
      link.addEventListener("click", () => {
        sidebar.classList.remove("active");
        document.body.classList.remove("lock-scroll");
      });
    });

 
    const texts = ["I'm a Web Developer", "I'm a Web Designer", "Backened Developer"];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";
    let isDeleting = false;
    const speed = 100;
    const delayBetweenWords = 500;
    const typewriterElement = document.getElementById('typewriter');

    function type() {
      currentText = texts[count];
      if (isDeleting) {
        letter = currentText.substring(0, index--);
      } else {
        letter = currentText.substring(0, index++);
      }

      typewriterElement.textContent = letter;

      if (!isDeleting && index === currentText.length) {
        setTimeout(() => { isDeleting = true; }, delayBetweenWords);
      } else if (isDeleting && index === 0) {
        isDeleting = false;
        count = (count + 1) % texts.length;
      }

      setTimeout(type, isDeleting ? speed / 2 : speed);
    }

    type();


// home page js end







    // my skills section start


     const progressBars = document.querySelectorAll('.myskills-progress');
    const fadeElements = document.querySelectorAll('.fade-up');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {

          if (entry.target.classList.contains('fade-up')) {
            entry.target.classList.add('show');
          }

       
          if (entry.target.classList.contains('myskills-progress')) {
            const progress = entry.target.getAttribute('data-progress');
            entry.target.style.width = progress + '%';
          }

          observer.unobserve(entry.target); 
        }
      });
    }, { threshold: 0.3 });

    fadeElements.forEach(el => observer.observe(el));
    progressBars.forEach(bar => observer.observe(bar));


// my skills section end



    // my project section start



    const projCards = document.querySelectorAll('.myproj-card');

function revealProjCards() {
  const triggerBottom = window.innerHeight * 0.85;

  projCards.forEach((card, i) => {
    const boxTop = card.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      setTimeout(() => {
        card.classList.add('show');
      }, i * 200); 
    }
  });
}

window.addEventListener('scroll', revealProjCards);
revealProjCards();



// my projects section end 





// contact me section start





const elements = document.querySelectorAll('.animate');

const scrollObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => scrollObserver.observe(el));

// contact me section end