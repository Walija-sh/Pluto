

window.addEventListener('load', function () {
    const preloader = document.querySelector('.loading-screen-mobile');
    const preloaderColor = document.querySelector('.preloader-color');

    if (preloaderColor) {
        preloaderColor.style.clipPath = 'inset(0 100% 0 0)';
        preloaderColor.offsetHeight;
    }

    setTimeout(() => {
        if (preloaderColor) {
            preloaderColor.style.clipPath = 'inset(0 0% 0 0)';
        }
    }, 100);

    // After 3s: fade out preloader
    setTimeout(() => {
        if (preloader) {
            preloader.style.opacity = '0';
            document.body.style.overflow = '';
        }
    }, 3000);

    // After 10s: remove preloader and then start scripts
    setTimeout(() => {
        if (preloader) {
            preloader.remove();
        }


       const container = document.getElementById("mouse-parallax-container");

if (container) {
    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;
    const maxTranslate = 10; // Maximum translation in px
    const ease = 0.08;

    container.style.perspective = "1000px";
    container.style.transition = "transform 0.1s ease-out";

    function animate() {
        currentX += (mouseX - currentX) * ease;
        currentY += (mouseY - currentY) * ease;

        const translateX = -currentX * maxTranslate;
        const translateY = -currentY * maxTranslate;

        container.style.transform = `translate(${translateX}px, ${translateY}px)`;

        requestAnimationFrame(animate);
    }

    container.addEventListener("mousemove", (e) => {
        const rect = container.getBoundingClientRect();
        mouseX = (e.clientX - rect.left) / rect.width - 0.5;
        mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    });

    container.addEventListener("mouseleave", () => {
        mouseX = 0;
        mouseY = 0;
    });

    animate(); // Start animation loop
}

// copy text
 const copyButtons = document.querySelectorAll('.copy-btn');

    copyButtons.forEach(copyBtn => {
        copyBtn.addEventListener('click', () => {
            // Get the closest .copy-text container
            const copyContainer = copyBtn.closest('.copy-text');
            const copyText = copyContainer ? copyContainer.querySelector('p') : null;

            if (copyText) {
                const textToCopy = copyText.textContent.trim();
                navigator.clipboard.writeText(textToCopy).then(() => {
                    const originalText = copyBtn.textContent;
                    copyBtn.textContent = "Copied!";
                    setTimeout(() => {
                        copyBtn.textContent = originalText;
                    }, 1000);
                }).catch(err => {
                    console.error("Failed to copy: ", err);
                });
            }
        });
    });



    }, 4000); // End of final preloader removal timeout
});

 // 1. Moving overlay effect
        const overlay = document.querySelector('.blur-overlay');
        const overlayInner = overlay?.querySelector('div');
        let posX = 0, posY = 0, targetX = 0, targetY = 0;

        function updateOverlayPosition() {
            let attempts = 0;
            do {
                targetX = (Math.random() - 1) * 10;
                targetY = (Math.random() - 1) * 10;
                attempts++;
            } while (
                attempts < 10 &&
                15 > Math.abs(targetX - posX) &&
                15 > Math.abs(targetY - posY)
            );

            posX = targetX;
            posY = targetY;
            if (overlayInner)
                overlayInner.style.transform = `translateX(${posX}%) translateY(${posY}%)`;
        }

        updateOverlayPosition();
        setInterval(updateOverlayPosition, 100);








        // marquee
document.addEventListener("DOMContentLoaded", function () {
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", function () {
    const currentScrollY = window.scrollY;
    const scrollDown = currentScrollY > lastScrollY;
    lastScrollY = currentScrollY;

    // Loop through each marquee container
    const marqueeSections = document.querySelectorAll(".marquee-cont");

    marqueeSections.forEach(section => {
      const marquees = section.querySelectorAll(".marquee__inner");
      if (marquees.length < 2) return;

      const [first, second] = marquees;

      if (scrollDown) {
        first.classList.add("marquee__inner2");
        first.classList.remove("marquee__inner1");

        second.classList.add("marquee__inner1");
        second.classList.remove("marquee__inner2");
      } else {
        first.classList.add("marquee__inner1");
        first.classList.remove("marquee__inner2");

        second.classList.add("marquee__inner2");
        second.classList.remove("marquee__inner1");
      }
    });
  });
});

// Scroll and animations
gsap.registerPlugin(ScrollTrigger);

function initGSAPScrollAnimations() {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());

  if (window.innerWidth > 1024) {
    gsap.to(".hero-obj", {
      x: "70vw",
      y:'30vh',
      scrollTrigger: {
        trigger: ".hero-cont",
        scroller: "#main", 
        start: "top top",
        end: "center",
        scrub: 1.5,
        onLeaveBack: () => {
          gsap.to(".hero-obj", { x: "0vw",y:'0vh', duration: 0.4, ease: "power1.out" });
        },
        onUpdate: self => {
          if (!self.isActive && self.progress === 0) {
            gsap.set(".hero-obj", { x: "0vw",y:'0vh' });
          }
        }
      }
    });

    gsap.to(".hero-content", {
      y: "-50px",
      scrollTrigger: {
        trigger: ".hero-cont",
        scroller: "#main",
        start: "top 30%",
        end: "center",
        scrub: 1.5,
        onLeaveBack: () => {
          gsap.to(".hero-content", { y: "0px", duration: 0.4, ease: "power1.out" });
        },
        onUpdate: self => {
          if (!self.isActive && self.progress === 0) {
            gsap.set(".hero-content", { y: "0px" });
          }
        }
      }
    });

    gsap.to(".mission-content", {
      x: "40px",
      scrollTrigger: {
        trigger: ".mission-sect",
        scroller: "#main",
        start: "top 80%",
        end: "bottom 40%",
        scrub: 1.5,
        onLeaveBack: () => {
          gsap.to(".mission-content", { x: "0px", duration: 0.4, ease: "power1.out" });
        },
        onUpdate: self => {
          if (!self.isActive && self.progress === 0) {
            gsap.set(".mission-content", { x: "0px" });
          }
        }
      }
    });

    gsap.to(".stats-content", {
      x: "-40px",
      scrollTrigger: {
        trigger: ".stats-sect",
        scroller: "#main",
         start: "top 80%",
        end: "bottom 40%",
        scrub: 1.5,
        onLeaveBack: () => {
          gsap.to(".stats-content", { x: "0px", duration: 0.4, ease: "power1.out" });
        },
        onUpdate: self => {
          if (!self.isActive && self.progress === 0) {
            gsap.set(".stats-content", { x: "0px" });
          }
        }
      }
    });
  } else {
    gsap.set(".hero-obj", { x: "0vw",y:'0vh' });
    gsap.set(".hero-content", { y: "0px" });
    gsap.set(".mission-content", { x: "0px" });
    gsap.set(".stats-content", { x: "0px" });
  }
}

function initLocoAndGSAP() {
  const scrollContainer = document.querySelector("#main");

  const locoScroll = new LocomotiveScroll({
    el: scrollContainer,
    smooth: true,
    smartphone: {
      smooth: true
    }
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(scrollContainer, {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    },
    pinType: scrollContainer.style.transform ? "transform" : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  setTimeout(() => {
    initGSAPScrollAnimations();
    ScrollTrigger.refresh();
  }, 100); 
}

window.addEventListener("resize", () => {
  initGSAPScrollAnimations();
  ScrollTrigger.refresh();
});

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  initLocoAndGSAP();
});


// adding stars
let starsContainer = null;
  let styleSheet = null;

  function createStars() {
    const container = document.querySelector('main');
    if (!container) return;

    // Remove old stars
    const oldStars = container.querySelectorAll('.star');
    oldStars.forEach(star => star.remove());

    // Remove old keyframes
    if (styleSheet && styleSheet.parentNode) {
      styleSheet.remove();
    }

    styleSheet = document.createElement('style');
    let allKeyframes = '';
    const colors = ['white', '#fefefe', '#cfcfcf', '#dddddd'];
    const numStars = 150;

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';

      const sprayX = Math.random() * 100;
      const sprayY = Math.random() * 100;

      star.style.left = `${sprayX}%`;
      star.style.top = `${sprayY}%`;

      const randomSize = Math.random() * 2 + 1;
      const randomShadow = Math.random() * 10;
      star.style.width = `${randomSize}px`;
      star.style.height = `${randomSize}px`;
      star.style.boxShadow = `0 0 ${randomShadow}px white`;
      star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

      // Direction based on center of screen
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const selfX = sprayX / 100 * window.innerWidth;
      const selfY = sprayY / 100 * window.innerHeight;
      const dx = selfX - centerX;
      const dy = selfY - centerY;
      const radian = Math.atan2(dy, dx);
      const distance = 5000;
      const moveX = Math.cos(radian) * distance;
      const moveY = Math.sin(radian) * distance;

      const animationName = `movemove${i}`;
      allKeyframes += `
        @keyframes ${animationName} {
          0% { transform: translate(0px, 0px); }
          100% { transform: translate(${moveX}px, ${moveY}px); }
        }
      `;

      const randomTiming = Math.random() * 500 + 200;
      const twinkleDuration = Math.random() * 3 + 2;

      star.style.animation = `${animationName} ${randomTiming}s ease-in-out infinite, twinkle ${twinkleDuration}s ease-in-out infinite`;

      container.appendChild(star);
    }

    styleSheet.textContent = allKeyframes;
    document.head.appendChild(styleSheet);
  }

  window.addEventListener("load", () => {
    setTimeout(() => {
      createStars();
    }, 200);
  });

  window.addEventListener("resize", () => {
    createStars();
  });