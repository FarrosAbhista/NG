function openModal(videoUrl) {
    var modal = document.getElementById("modal");
    var modalVideo = document.getElementById("modalVideo");
  
    modalVideo.src = videoUrl;
    modal.style.display = "block";
    modalVideo.play();
  }
  
  function closeModal() {
    var modal = document.getElementById("modal");
    var modalVideo = document.getElementById("modalVideo");
  
    modalVideo.pause();
    modalVideo.currentTime = 0;
    modal.style.display = "none";
  }
  
  var modalCloseButton = document.getElementsByClassName("close")[0];
  modalCloseButton.addEventListener("click", function() {
    closeModal();
  });
  