// JavaScript to load the link inside the div
let certificateLink = document.getElementsByClassName("certificateLink");
let project = document.getElementsByClassName("projectLink");

for (let i = 0; i < certificateLink.length; i++) {
    certificateLink[i].addEventListener("click", function (e) {
      if (
        e.target.tagName === "A" &&
        e.target.getAttribute("target") === "certificate-show"
      ) {
        e.preventDefault(); // Prevent the link from opening in a new page
        var link = e.target.getAttribute("href");
        var certificateShow = document.getElementById("certificate-show");
        certificateShow.innerHTML = `<iframe src="${link}" width="100%" height="100%"></iframe>`;
      }
    });
  }

for (let i = 0; i < project.length; i++) {
  project[i].addEventListener("click", function (e) {
    if (
      e.target.tagName === "A" &&
      e.target.getAttribute("target") === "project-show"
    ) {
      e.preventDefault(); // Prevent the link from opening in a new page
      var link = e.target.getAttribute("href");
      var projectShow = document.getElementById("project-show");
      projectShow.innerHTML = `<iframe src="${link}" width="100%" height="100%"></iframe>`;
    }
  });
}

// Default loaded project & certificate 
project[0].click();
certificateLink[0].click();
