/*!
    * Start Bootstrap - Admin Static Template v0.0.1 (https://github.com/tsweets/admin-starter)
    * Copyright 2013-2020 undefined
    * Licensed under undefined (https://github.com/BlackrockDigital/admin-starter/blob/master/LICENSE)
    */
    (function($) {
  "use strict";

  // Add active state to sidbar nav links
  var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
  $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {
    if (this.href === path) {
      $(this).addClass("active");
    }
  });

  // Toggle the side navigation
  $("#sidebarToggle").on("click", function(e) {
    e.preventDefault();
    $("body").toggleClass("sb-sidenav-toggled");
  });
})(jQuery);
