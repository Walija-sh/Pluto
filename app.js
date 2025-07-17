

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

        // --- All scripts start AFTER preloader is removed ---

       
        // 2. Copy address button
        const copyBtn = document.querySelector('.copy-btn');
        const copyText = document.querySelector('.hero-copy p');

        if (copyBtn && copyText) {
            copyBtn.addEventListener('click', () => {
                const textToCopy = copyText.textContent;
                navigator.clipboard.writeText(textToCopy).then(() => {
                    const originalText = copyBtn.textContent;
                    copyBtn.textContent = "Copied!";
                    setTimeout(() => {
                        copyBtn.textContent = originalText;
                    }, 1000);
                }).catch(err => {
                    console.error("Failed to copy: ", err);
                });
            });
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



        const locoScroll=()=>{
  gsap.registerPlugin(ScrollTrigger)

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    smartphone: {
      smooth: true
    }
  })

  locoScroll.on('scroll', ScrollTrigger.update)


  ScrollTrigger.scrollerProxy('#main', {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y
    }, 
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      }
    },

    pinType: document.querySelector('#main').style.transform
      ? 'transform'
      : 'fixed',
  })

  ScrollTrigger.addEventListener('refresh', () => locoScroll.update())

  ScrollTrigger.refresh()
}
locoScroll()
// end of loco setup

gsap.registerPlugin(ScrollTrigger);

gsap.to(".hero-obj", {
  x: "70vw", 
  scrollTrigger: {
    trigger: ".hero-cont",
    start: "top top",  
    end: "center",    
    scrub: true,          
    markers: false,       
  }
});
