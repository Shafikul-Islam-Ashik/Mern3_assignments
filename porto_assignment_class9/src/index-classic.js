/**
 * functionality for
 * our features
 */

/**
 * left part (features)
 */

// get features wrapper (left part)
const leftFeaturesWrapper = document.querySelector(".feature-left");
// init val
let leftFeaturesList = "";

// maping
features[0].map((item) => {
  leftFeaturesList += `
  <div class="feature-box feature-box-style-2">
  <div class="feature-box-icon">
    <i class="icons ${item.icon} text-color-primary"></i>
  </div>
  <div class="feature-box-info">
    <h4 class="font-weight-bold text-4-5 mb-1">${item.content.title}</h4>
    <p class="mb-4">
    ${item.content.description}
    </p>
  </div>
</div>
  `;
});
// display into DOM
leftFeaturesWrapper.innerHTML = leftFeaturesList; //ends left features

/**
 * right part (features)
 */

// get features wrapper (right part)
const rightFeaturesWrapper = document.querySelector(".feature-right");
// init val
let rightFeaturesList = "";

// maping
features[1].map((item) => {
  rightFeaturesList += `
  <div class="feature-box feature-box-style-2">
  <div class="feature-box-icon">
    <i class="icons ${item.icon} text-color-primary"></i>
  </div>
  <div class="feature-box-info">
    <h4 class="font-weight-bold text-4-5 mb-1">${item.content.title}</h4>
    <p class="mb-4">
    ${item.content.description}
    </p>
  </div>
</div>
  `;
});
// display into DOM
rightFeaturesWrapper.innerHTML = rightFeaturesList; //ends right features

/**
 * functionality for
 * accordion
 */
// get accordion wrapper
const accordionWrapper = document.querySelector(".accordion-wrapper");
// init val
let accordionList = "";
let classForActive = "";

// maping
accordions.map((item) => {
  // first accordion will be opened
  if(item.id === 1){
    classForActive = "show";
  } else {
    classForActive = "";
  }
  accordionList += `
    <div class="card card-default">
    <div class="card-header">
      <h4 class="card-title m-0">
        <a
          class="accordion-toggle text-color-dark font-weight-bold"
          data-toggle="collapse"
          data-parent="#accordion"
          href="#${item.content.accordinLink}"
        >
          <i class="icons ${item.icon} text-color-primary"></i>
          ${item.content.title}
        </a>
      </h4>
    </div>
    <div id="${item.content.accordinLink}" class="collapse ${classForActive}">
      <div class="card-body text-2">
        <p>
        ${item.content.description}
        </p>
        <p class="mb-0">
          <a href="#" class="d-block text-color-dark font-weight-semibold pt-4"
            >read more
            <i class="fas fa-angle-right position-relative top-1 ml-1"></i
          ></a>
        </p>
      </div>
    </div>
  </div>
    `;
});
// display into DOM
accordionWrapper.innerHTML = accordionList; //ends accordion

/**
 * functionality for
 * clients
 */
// get clients wrapper
const clientContainer = document.querySelector(".brands-wrapper");
// init val
let clientList = "";

clients.map((item) => {
  clientList += `
  <div>
  <img class="img-fluid" src="${item.photo}" alt="" />
</div>
  `;
});
// display into  DOM
clientContainer.innerHTML = clientList; //ends client

/**
 * functionality for
 * latest posts
 */

// get latest posts wrapper
const latestPostsWrapper = document.querySelector(".latest-posts-wrapper");
//init val
let latestPostList = "";

latestPosts.map((item) => {
  latestPostList += `
  <div class="row">
  <div class="col-lg-6 mb-4 mb-lg-0">
    <article>
      <div class="row">
        <div class="col-auto pr-0">
          <div class="date">
            <span class="day font-weight-extra-bold"
              >${item[0].date}</span
            >
            <span class="month text-1">${item[0].month}</span>
          </div>
        </div>
        <div class="col pl-1">
          <h4 class="text-primary text-4">
            <a class="d-block" href="blog-post.html"
              >Lorem ipsum dolor sit amet, consectetur</a
            >
          </h4>
          <p class="pr-4 mb-0">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
          <a
            href="https://www.okler.net/"
            class="read-more text-color-dark font-weight-semibold text-2"
            >read more
            <i
              class="fas fa-angle-right position-relative top-1 ml-1"
            ></i
          ></a>
        </div>
      </div>
    </article>
  </div>

  <div class="col-lg-6">
    <article>
      <div class="row">
        <div class="col-auto pr-0">
          <div class="date">
            <span class="day font-weight-extra-bold"
              >${item[1].date}</span
            >
            <span class="month text-1">${item[1].month}</span>
          </div>
        </div>
        <div class="col pl-1">
          <h4 class="text-primary text-4">
            <a class="d-block" href="blog-post.html"
              >Lorem ipsum dolor sit amet, consectetur</a
            >
          </h4>
          <p class="pr-4 mb-0">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
          <a
            href="https://www.okler.net/"
            class="read-more text-color-dark font-weight-semibold text-2"
            >read more
            <i
              class="fas fa-angle-right position-relative top-1 ml-1"
            ></i
          ></a>
        </div>
      </div>
    </article>
  </div>
</div>
  `;
});
// display into DOM
latestPostsWrapper.innerHTML = latestPostList; //ends left latest posts

/**
 * functionality for
 * testimonials
 */

// get testimonial wrapper
const testimonialWrapper = document.querySelector(".testimonial-wrapper");
//init val
let testimonialList = "";

testimonial.map((item) => {
  testimonialList += `
  <div>
  <div class="col">
    <div class="testimonial testimonial-primary">
      <blockquote>
        <p class="mb-0">
        ${item.content}
        </p>
      </blockquote>
      <div class="testimonial-arrow-down"></div>
      <div class="testimonial-author">
        <div class="testimonial-author-thumbnail">
          <img src="${item.author.photo}" class="rounded-circle" alt="" />
        </div>
        <p><strong>${item.author.name}</strong><span>${item.author.profession}</span></p>
      </div>
    </div>
  </div>
</div>
  `;
});
// display into DOM
testimonialWrapper.innerHTML = testimonialList; //ends testimonial
