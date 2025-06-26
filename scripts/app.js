import { testimonials, projects } from './objects.js';


// ----------------------
// NAVIGATION LOGIC
// ----------------------

// Get navigation elements
const btn = document.getElementById("hum");
const navLinks = document.querySelector('.nav-links');
const iconHamburger = document.querySelector('.icon-hamburger');
const iconClose = document.querySelector('.icon-close');

// Toggle navigation menu and icons on hamburger button click
btn.addEventListener("click", (e) => {
  e.stopPropagation();
  navLinks.classList.toggle("show");
  const isOpen = navLinks.classList.contains("show");
  iconHamburger.style.display = isOpen ? "none" : "inline";
  iconClose.style.display = isOpen ? "inline" : "none";
});

// Hide menu and reset icons when clicking outside the menu
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

// ----------------------
// ACHIEVEMENTS COUNTER
// ----------------------

// Select the achievements section and set a flag
const achievementsSection = document.querySelector('.achievements-grid');
let countersStarted = false;

// Animate all .achievements-h1 counters when section is in view
function animateCounters() {
  document.querySelectorAll('.achievements-h1').forEach((el) => {
    const target = parseInt(el.textContent.replace(/\D/g, ''), 10);
    let count = 0;
    // Slow animation: 10 seconds for all numbers
    const duration = target < 20 ? 10000 : 10000; // ms
    const step = Math.max(1, Math.ceil(target / (duration / 40))); // ~25fps

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

// Use Intersection Observer to trigger counter animation when section is visible
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

// ----------------------
// PROJECTS GENERATED HTML
// ----------------------

// Generate and insert HTML for projects section
function projectsHtml() {
  let projectHtml ='';

  projects.forEach((project) => {
    projectHtml += `
      <article class="project-item-grid">
        <img src="${project.img.src}" alt="${project.img.alt}" class="project-item-img">

        <div class="project-item-flex">
          <h2 class="project-item-heading">${project.heading}</h2>
          <p class="project-item-paragraph">${project.paragraph}</p>
        </div>
      </article>
    `
  })

  document.querySelector(".js-projects-grid").innerHTML = projectHtml;
  console.log(projectHtml);
}

// ----------------------
// TESTIMONIALS GENERATED HTML
// ----------------------

// Generate and insert HTML for testimonials section
function testimonialsHtml(){
  let testimonialHtml = '';

  testimonials.forEach((testimonial) => {
    testimonialHtml += `
      <article class="testimonials-flex">
        <img src="${testimonial.img.src}" alt="${testimonial.img.alt}" class="testimonials-img">
        <h2 class="testimonials-heading">
          ${testimonial.heading}
        </h2>
        <p class="testimonials-paragraph">
          ${testimonial.paragraph}
        </p>
      </article>
    `
  });

  document.querySelector(".js-testimonials-grid").innerHTML = testimonialHtml;
}

// Render testimonials and projects on page load
testimonialsHtml();
projectsHtml();