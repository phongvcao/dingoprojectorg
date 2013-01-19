$(document).ready(function() {
  $("#distro-ubuntu").click(function() {
    $("#distro-ubuntu").addClass("download-button-hover");
    $("#install-ubuntu").css("display", "block");
    
    $("#distro-fedora").removeClass("download-button-hover");
    $("#install-fedora").css("display", "none");
    
    $("#distro-others").removeClass("download-button-hover");
    $("#install-others").css("display", "none");
  });
  
  $("#distro-fedora").click(function() {
    $("#distro-ubuntu").removeClass("download-button-hover");
    $("#install-ubuntu").css("display", "none");
    
    $("#distro-fedora").addClass("download-button-hover");
    $("#install-fedora").css("display", "block");
    
    $("#distro-others").removeClass("download-button-hover");
    $("#install-others").css("display", "none");
  });
  
  $("#distro-others").click(function() {
    $("#distro-ubuntu").removeClass("download-button-hover");
    $("#install-ubuntu").css("display", "none");
    
    $("#distro-fedora").removeClass("download-button-hover");
    $("#install-fedora").css("display", "none");
    
    $("#distro-others").addClass("download-button-hover");
    $("#install-others").css("display", "block");
  });
  
  distroDetect.init();
  
  if (distroDetect.OS == "Linux") {
    if (distroDetect.distro == "Ubuntu") {
      $("#distro-ubuntu").trigger("click");
    }
    
    else if (distroDetect.distro == "Fedora") {
      $("#distro-fedora").trigger("click");
    }
    
    else {
      $("#distro-others").trigger("click");
    }
  }
  
  else {
      $("#distro-ubuntu").trigger("click");
  }
});
