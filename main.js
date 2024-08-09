onload = () =>{
        document.body.classList.remove("container");
};

window.addEventListener('load', function() {
    var video = document.getElementById('myVid');
    video.play().then(() => {
      // Setelah video mulai diputar, aktifkan suaranya
      video.muted = false;
    }).catch((error) => {
      console.error("Autoplay tidak berhasil, karena:", error);
    });
  });
