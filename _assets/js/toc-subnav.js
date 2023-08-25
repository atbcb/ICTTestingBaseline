(function () {
  // Table of Contents SubNavigation

  // Set page section anchors
  // TODO Add support for updating link anchor style on scroll
  // and page anchor change
  function setPageSectionAnchors(event) {
    let elements;
    let pageURL = event ? event.newURL : document.URL;
    let urlParsed = pageURL.split('#');
    let hasAnchor = urlParsed.length > 1;
    let currentAnchor = hasAnchor ? urlParsed[urlParsed.length - 1] : null;
    let content = document.getElementById("toc-source-content");

    if (content) {
      elements = content.querySelectorAll("h3");
    }

    let subsections = document.getElementById("subsections");

    // Clear subsections list items
    if (subsections) {
      subsections.innerHTML = ""
    }

    if (elements) {
      for (let i = 0; i < elements.length; i++) {
        let idtag;
        let element = elements[i];

        let section = element.innerText;
        let cleanedSection = DOMPurify.sanitize(section);

        // if cleanedSection is empty go to next element in loop
        if (cleanedSection === "") continue;

        if (element.id) {
          idtag = element.id
        } else {
          idtag = cleanedSection
            .replace(/ /g,"-")
            .toLowerCase()
            .trim();

          element.setAttribute("id",idtag);
        }

        let li = document.createElement("li");
        let a = document.createElement("a");
        a.setAttribute("href", "#" + idtag);
        a.innerText = cleanedSection;

        if (currentAnchor === idtag) {
          a.className = "usa-current";
        }

        li.appendChild(a);

        if (subsections) {
          subsections.appendChild(li);
        }
      };
    }
  }

  // Set accordion state on load
  function setSubnav() {
    let subnavButton;
    const screenWidth = window.innerWidth;
    const subnavButtons = document.querySelectorAll('[aria-controls=subnav-list]');
    const subnavContent = document.getElementById('subnav-list');

    if (subnavButtons.length > 0) {
      subnavButton = subnavButtons[0];
    }

    if (subnavButton && screenWidth < 1024) {
      subnavButton.setAttribute('aria-expanded', false);
      subnavContent.setAttribute('hidden', '');
    }

    if (subnavButton && screenWidth >= 1024) {
      subnavButton.setAttribute('aria-expanded', true);
      subnavContent.removeAttribute('hidden');
    }
  }

  // Set Anchors onload
  setPageSectionAnchors();
  // Add event listener on window resize
  window.addEventListener('hashchange', setPageSectionAnchors);

  // Set accordion onload
  setSubnav();
  // Add event listener on window resize
  window.addEventListener('resize', setSubnav);
})();
