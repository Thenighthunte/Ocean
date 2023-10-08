document.querySelector('.dive-button').addEventListener('click', function() {
  const oceanVideo = document.querySelector('.ocean-video');
  oceanVideo.style.opacity = '0';  // Fade out the video

  setTimeout(() => {
      // Change the background to represent deeper waters
      document.querySelector('.ocean').style.background = 'linear-gradient(to bottom, #0066CC, #003366)';
      oceanVideo.style.display = 'none';  // Hide the video after fade out
  }, 1000);  // 1 second transition time

  // Hide the dive button and welcome text
  this.style.display = 'none';
  document.querySelector('.welcome-text').style.display = 'none';

  // Display the phytoplankton
  const phytoplanktons = document.querySelectorAll('.phytoplankton');
  phytoplanktons.forEach(plankton => {
      plankton.style.display = 'block';
      plankton.style.top = `${Math.random() * 100}%`;
      plankton.style.left = `${Math.random() * 100}%`;
  });
});
