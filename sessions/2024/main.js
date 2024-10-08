const videoThumbnails = document.querySelectorAll(
  ".video-gallery .all-videos .thumbnail"
);
const videoPlayer = document.querySelector(
  ".video-gallery .featured-video iframe"
);
const videoTitle = document.querySelector(".video-gallery .video-title");

const showVideo = (videoId, title) => {
  let videoUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;
  videoPlayer.setAttribute("src", videoUrl);
  
  // Check if videoTitle exists before setting innerHTML
  if (videoTitle) {
    videoTitle.innerHTML = title;
  }
};

videoThumbnails.forEach((v) => {
  v.addEventListener("click", () => {
    showVideo(v.dataset.id, v.dataset.title);
    
    // Scroll to the top of the page smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
