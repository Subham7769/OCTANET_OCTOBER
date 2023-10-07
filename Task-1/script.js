      // JavaScript to load the link inside the div
      let project = document.getElementById("projectLink");
      project.addEventListener("click", function (e) {
          if (e.target.tagName === "A" && e.target.getAttribute("target") === "project-show") {
              e.preventDefault(); // Prevent the link from opening in a new page
              var link = e.target.getAttribute("href");
              var projectShow = document.getElementById("project-show");
              projectShow.innerHTML = `<iframe src="${link}" width="100%" height="100%"></iframe>`;
          }
      });
      project.click();
      let certificateLink = document.getElementById("certificateLink1");
      certificateLink.addEventListener("click", function (e) {
          if (e.target.tagName === "A" && e.target.getAttribute("target") === "certificate-show") {
              e.preventDefault(); // Prevent the link from opening in a new page
              var link = e.target.getAttribute("href");
              var certificateShow = document.getElementById("certificate-show");
              certificateShow.innerHTML = `<iframe src="${link}" width="100%" height="100%"></iframe>`;
          }
      });
      certificateLink.click();