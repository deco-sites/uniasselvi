document.addEventListener('DOMContentLoaded', function() {
    const card = document.getElementById('card');
    const footer = document.querySelector('footer');
    const navbar = document.querySelector('nav');
    const cardInitialOffsetTop = card.offsetTop;
    const cardHeight = card.offsetHeight;
    const navbarHeight = navbar.offsetHeight;

    function handleScroll() {
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

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', function() {
      // Recalculate positions in case of window resize
      handleScroll();
    });

    // Initial check in case page is already scrolled
    handleScroll();
  });