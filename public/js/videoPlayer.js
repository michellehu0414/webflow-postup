document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll('.autoplay-video');

    // Create the IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;
            if (entry.isIntersecting) {
                video.play().catch(error => {
                    console.error('Error attempting to play video:', error);
                });
            } else {
                video.pause();
            }
        });
    }, { threshold: 0.5 });

    // Observe each video element
    videos.forEach(video => {
        observer.observe(video);
    });
});
