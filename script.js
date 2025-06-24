const btn = document.getElementById("hum");
const navLinks = document.querySelector('.nav-links');
const iconHamburger = document.querySelector('.icon-hamburger');
const iconClose = document.querySelector('.icon-close');

// Toggle menu and icons together
btn.addEventListener("click", (e) => {
  e.stopPropagation();
  navLinks.classList.toggle("show");
  const isOpen = navLinks.classList.contains("show");
  iconHamburger.style.display = isOpen ? "none" : "inline";
  iconClose.style.display = isOpen ? "inline" : "none";
});

// Hide menu and reset icons when clicking outside
document.addEventListener("click", (e) => {
  if (
    !navLinks.contains(e.target) &&
    !btn.contains(e.target)
  ) {
    navLinks.classList.remove("show");
    iconHamburger.style.display = "inline";
    iconClose.style.display = "none";
  }
});

// Hide menu and reset icons when clicking a link inside the menu
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("show");
    iconHamburger.style.display = "inline";
    iconClose.style.display = "none";
  }
});

// Counter animation for .achievements-h1 when section is in view
const achievementsSection = document.querySelector('.achievements-grid');
let countersStarted = false;

function animateCounters() {
  document.querySelectorAll('.achievements-h1').forEach((el) => {
    const target = parseInt(el.textContent.replace(/\D/g, ''), 10);
    let count = 0;
    // Make duration much slower: 10000ms for <20, 10000ms otherwise
    const duration = target < 20 ? 10000 : 10000; // ms
    const step = Math.max(1, Math.ceil(target / (duration / 40))); // slower, ~25fps

    function updateCounter() {
      count += step;
      if (count >= target) {
        el.textContent = target + '+';
      } else {
        el.textContent = count + '+';
        requestAnimationFrame(updateCounter);
      }
    }

    el.textContent = '0+';
    requestAnimationFrame(updateCounter);
  });
}

if (achievementsSection) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersStarted) {
          countersStarted = true;
          animateCounters();
          obs.unobserve(achievementsSection);
        }
      });
    },
    { threshold: 0.3 }
  );
  observer.observe(achievementsSection);
}

