document.addEventListener('DOMContentLoaded', (event) => {
    const carouselTrack = document.querySelector('.design-walkthrough-carousel_track');
    const carouselSlides = document.querySelectorAll('.design-walkthrough-carousel_slide');
    const dots = document.querySelectorAll('.dot');
    const playPauseButton = document.querySelector('.play-pause-button');

    let currentIndex = 0;
    const totalSlides = carouselSlides.length;
    let startX, endX, isDragging = false;

    function updateCarousel() {
        const slideWidth = parseFloat(getComputedStyle(carouselSlides[0]).width) + parseFloat(getComputedStyle(carouselSlides[0]).marginRight);
        carouselTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    function handleStart(event) {
        isDragging = true;
        startX = event.type.includes('touch') ? event.touches[0].clientX : event.clientX;
    }

    function handleMove(event) {
        if (!isDragging) return;
        endX = event.type.includes('touch') ? event.touches[0].clientX : event.clientX;
    }

    function handleEnd() {
        if (!isDragging) return;
        isDragging = false;
        if (startX > endX + 50) {
            currentIndex = (currentIndex + 1) % totalSlides;
        } else if (startX < endX - 50) {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        }
        updateCarousel();
        playCurrentVideo();
    }

    function playPauseVideos() {
        const currentSlide = carouselSlides[currentIndex];
        const video = currentSlide.querySelector('video');
        if (playPauseButton.classList.contains('paused')) {
            video.play();
            playPauseButton.classList.remove('paused');
        } else {
            video.pause();
            playPauseButton.classList.add('paused');
        }
    }

    function playCurrentVideo() {
        carouselSlides.forEach((slide, index) => {
            const video = slide.querySelector('video');
            if (index === currentIndex) {
                if (!playPauseButton.classList.contains('paused')) {
                    video.play();
                }
            } else {
                video.pause();
                video.currentTime = 0;
            }
        });
    }

    function handleVideoEnd() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
        playCurrentVideo();
    }

    function initSequentialVideos() {
        const videoSets = document.querySelectorAll('.sequential-video-set');

        videoSets.forEach((set, index) => {
            const video = set.querySelector('video');

            video.addEventListener('ended', () => {
                if (index === currentIndex) {
                    handleVideoEnd();
                }
            });
        });
    }

    carouselTrack.addEventListener('touchstart', handleStart);
    carouselTrack.addEventListener('touchmove', handleMove);
    carouselTrack.addEventListener('touchend', handleEnd);

    carouselTrack.addEventListener('mousedown', handleStart);
    carouselTrack.addEventListener('mousemove', handleMove);
    carouselTrack.addEventListener('mouseup', handleEnd);
    carouselTrack.addEventListener('mouseleave', handleEnd);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
            playCurrentVideo();
        });
    });

    playPauseButton.addEventListener('click', playPauseVideos);

    initSequentialVideos();

    playCurrentVideo();
});
