// ------------------------------------------------
//                  PROJECTS DATA
// ------------------------------------------------

export const projects = [

  {
  img: {
    src: "images/expense-tracker.jpg",
    alt: "expense-tracker-image"
  },
  heading: "Expense Tracker",
  paragraph: "A simple web app to log income and expenses, categorize them, and calculate your total balance. Data is stored locally in the browser for persistent use."
  }, {
  img: {
    src: "images/movie-finder-2.png" ,
    alt: "movie-finder-image"
  },
  heading: "Movie Finder",
  paragraph: "A responsive interface that uses the OMDB API to search for movies by title and display key info like poster, rating, and plot in real-time."
  }, {
  img: {
    src: "images/expense-tracker.jpg",
    alt: "typing-speed-image"
  },
  heading: "Typing Speed Tester",
  paragraph: "This app challenges users to type a random paragraph and calculates their words per minute (WPM) and error count."
  }, {
  img: {
    src: "images/markdown-previewer-2.Default",
    alt: "markdown-previewer-image"
  },
  heading: "Markdown previewer",
  paragraph: "A split-screen editor that lets users type Markdown on one side and see live formatting on the other—great for writers and developers."
  }
];
// ------------------------------------------------
//            TESTIMONIALS DATA
// ------------------------------------------------

export const testimonials = [{
  img : {
    src: "images/testimonial-img-1.png",
    alt: "testimonial-img-1"
  },
  heading: "Gamma Real",
  paragraph: "Working with Valentine was fantastic. He brought our ideas to life with clean, modern design and smooth functionality. Professional, timely, and creative—highly recommended!"
}, {
  img : {
    src: "images/testimonial-img-2.png",
    alt: "testimonial-img-2"
  },
  heading: "Alpha Hawi",
  paragraph: "Valentine delivered a sleek, responsive website that perfectly fits our brand. He communicates well, solves problems fast, and adds great value to every project. Truly impressive work!"
}, {
  img : {
    src: "images/testimonial-img-3.png",
    alt: "testimonial-img-3"
  },
  heading: "Valentine Gamma",
  paragraph: " We hired Valentine for a full-site redesign, and the results exceeded our expectations. From layout to final deployment, everything was handled with care, skill, and precision."
}, {
  img : {
    src: "images/testimonial-img-4.png",
    alt: "testimonial-img-4"
  },
  heading: "Nate Real",
  paragraph: "Valentine is incredibly talented and dependable. He transformed our vision into a functional, visually appealing site. We’ve seen a clear improvement in engagement since launch."
}]






// ------------------------------------------------
//             PROJECTS GENERATED HTML
// ------------------------------------------------

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

// ------------------------------------------------
//             TESTIMONIALS GENERATED HTML
// ------------------------------------------------

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

