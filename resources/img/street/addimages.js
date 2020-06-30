const total_images = 4;

(function () {
  let html, newHtml;
  for (let i = 1; i <= total_images; i++) {
    //create HTML string with placeholder text
    html =
      '<div class="img"><a href="resources/img/street/#.jpeg" data-toggle="lightbox" data-gallery="example-gallery" class=""><img src="resources/img/street/#.jpeg" class="img-fluid" /></a></div>';
    //replace the placeholder text with some actual data
    newHtml = html.replace(/#/g, i);
    //insert the HTML into the DOM
    document.querySelector(".gallery").insertAdjacentHTML("beforeend", newHtml);
  }
})();
