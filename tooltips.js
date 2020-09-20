    // Initialize
    var Tooltips = document.getElementsByClassName('TooltipTrigger');

    // Track all tooltips trigger
    for (var i = 0; i < Tooltips.length; i++) {

      // Event Handler
      Tooltips[i].addEventListener("mouseenter", function(ev) {
        ev.preventDefault();
        this.style.position = "relative";
        this.innerHTML = this.innerHTML + "<div class='Tooltips'><p class='" + this.getAttribute("data-position") + "'>" + this.getAttribute("data-tooltips") + "</p></div>";
      });
      Tooltips[i].addEventListener("mouseleave", function(ev) {
        ev.preventDefault();
        this.removeAttribute("style");
        this.innerHTML = this.innerHTML.replace(/<div[^]*?<\/div>/, '');;
      });

    }