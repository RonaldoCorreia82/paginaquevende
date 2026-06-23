document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================
   * 1. MENU RESPONSIVO (MOBILE TOGGLE)
   * ========================================== */
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      
      // Animação visual do botão hambúrguer
      const bars = menuToggle.querySelectorAll('.bar');
      if (menuToggle.classList.contains('active')) {
        bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
      } else {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
      }
    });

    // Fechar menu ao clicar em qualquer link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        
        const bars = menuToggle.querySelectorAll('.bar');
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
      });
    });
  }

  /* ==========================================
   * 2. EFEITO DE ROLAGEM NA NAVBAR
   * ========================================== */
  const navbar = document.getElementById('navbar');
  
  const handleNavbarScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleNavbarScroll);
  handleNavbarScroll(); // Executar uma vez no carregamento inicial

  /* ==========================================
   * 3. ANIMAÇÕES AO ROLAR A PÁGINA (SCROLL REVEAL)
   * ========================================== */
  const revealElements = document.querySelectorAll('.scroll-reveal');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Deixar de observar após animar
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px' // Ativa um pouco antes do elemento estar totalmente visível
  });

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });

  /* ==========================================
   * 4. ANIMAÇÃO DE CONTADORES DE ESTATÍSTICAS
   * ========================================== */
  const counters = document.querySelectorAll('.counter');
  const statsSection = document.querySelector('.stats-section');

  const startCounters = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const duration = 1500; // Tempo em milissegundos
      const stepTime = Math.max(Math.floor(duration / target), 10);
      let current = 0;
      
      const timer = setInterval(() => {
        current += Math.ceil(target / (duration / stepTime));
        if (current >= target) {
          counter.textContent = target;
          clearInterval(timer);
        } else {
          counter.textContent = current;
        }
      }, stepTime);
    });
  };

  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statsObserver.observe(statsSection);
  }

  /* ==========================================
   * 5. FAQ ACCORDION (PERGUNTAS FREQUENTES)
   * ========================================== */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Fechar todos os outros FAQs abertos
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.faq-answer').style.maxHeight = null;
        }
      });

      // Alternar o FAQ clicado
      if (isActive) {
        item.classList.remove('active');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('active');
        // Define a altura máxima dinamicamente baseada no tamanho do conteúdo
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  /* ==========================================
   * 6. REDIRECIONAMENTO DINÂMICO DE WHATSAPP (OPCIONAL)
   * ========================================== */
  // Substituir os números de whatsapp fictícios '5500000000000' se houver um número configurado
  const whatsappNumber = '5571989230751'; // Insira o WhatsApp padrão da Página que vende aqui
  const whatsappLinks = document.querySelectorAll('a[href^="https://wa.me/"]');

  whatsappLinks.forEach(link => {
    const originalUrl = link.getAttribute('href');
    if (originalUrl.includes('5571989230751')) {
      const updatedUrl = originalUrl.replace('5571989230751', whatsappNumber);
      link.setAttribute('href', updatedUrl);
    }
  });

});
