document.addEventListener('DOMContentLoaded', function() {
    const card = document.getElementById('card');
    const footer = document.querySelector('footer');
    const navbar = document.querySelector('nav');
    const cardInitialOffsetTop = card.offsetTop;
    const cardHeight = card.offsetHeight;
    const navbarHeight = navbar.offsetHeight;

    function handleScroll() {
      if (window.innerWidth <= 768) return;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const footerOffsetTop = footer.offsetTop;
      const cardBottomFixed = scrollTop + cardHeight + navbarHeight + 20; // 20 is the margin from navbar

      if (scrollTop >= cardInitialOffsetTop - navbarHeight && cardBottomFixed < footerOffsetTop) {
        card.classList.add('fixed');
        card.classList.remove('absolute');
        card.style.top = `${navbarHeight + 20}px`; // Top offset from the navbar
      } else if (cardBottomFixed >= footerOffsetTop) {
        card.classList.remove('fixed');
        card.classList.add('absolute');
        card.style.top = `${footerOffsetTop - cardHeight - 20}px`; // Top offset for stopping before footer
      } else {
        card.classList.remove('fixed', 'absolute');
        card.style.top = 'auto';
      }
    }

    function checkScreenWidth() {
      if (window.innerWidth > 768) {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Run initially in case the page is already scrolled
      } else {
        window.removeEventListener('scroll', handleScroll);
        card.classList.remove('fixed', 'absolute');
        card.style.top = 'auto';
      }
    }

    window.addEventListener('resize', checkScreenWidth);

    // Initial check
    checkScreenWidth();
  });