/**
 * functionality for member page
 * members
 */

// get members wrapper
const membersWrapper = document.querySelector("#members-wrapper");
// console.log(membersContainer);

// init val
var membersList = "";

members.map((item) => {
  membersList += `
    <div class="col-12 col-sm-6 col-lg-3 isotope-item leadership">
    <span class="thumb-info thumb-info-hide-wrapper-bg mb-4">
      <span class="thumb-info-wrapper">
        <a href="about-me.html">
          <img src="${item.photo}" class="img-fluid" alt="" />
          <span class="thumb-info-title">
            <span class="thumb-info-inner">${item.name}</span>
            <span class="thumb-info-type">${item.designation}</span>
          </span>
        </a>
      </span>
      <span class="thumb-info-caption">
        <span class="thumb-info-caption-text"
          >${item.description}</span
        >
        <span class="thumb-info-social-icons mb-4">
          <a target="_blank" href="${item.socialMedia.facebook}"
            ><i class="fab fa-facebook-f"></i
            ><span>Facebook</span></a
          >
          <a href="${item.socialMedia.linkedIn}"
            ><i class="fab fa-linkedin-in"></i
            ><span>Linkedin</span></a
          >
        </span>
      </span>
    </span>
  </div>
  `;
});
// display into DOM
membersWrapper.innerHTML = membersList;
