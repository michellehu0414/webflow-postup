document.addEventListener('DOMContentLoaded', (event) => {
    const carouselTrack = document.querySelector('.design-walkthrough-carousel_track');
    const carouselSlides = document.querySelectorAll('.design-walkthrough-carousel_slide');
    const dots = document.querySelectorAll('.dot');
    const playPauseButton = document.querySelector('.play-pause-button');
    const resetButton = document.querySelector('.reset-button');
    const playIcon = playPauseButton.querySelector('img.play-button');
    const pauseIcon = playPauseButton.querySelector('img.pause-button');

    let currentIndex = 0;
    const totalSlides = carouselSlides.length;
    let isDragging = false;
    let isPlaying = true; // Initial state is playing
    let autoSwipeTimeout;
    let startX, endX; // Declare endX here
    let currentTranslate = 0, prevTranslate = 0, animationID = 0;

    function updateCarousel() {
        const slideWidth = parseFloat(getComputedStyle(carouselSlides[0]).width) + parseFloat(getComputedStyle(carouselSlides[0]).marginRight);
        carouselTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
        prevTranslate = -currentIndex * slideWidth;
        setPositionByIndex();
    }

    function setPositionByIndex() {
        const slideWidth = parseFloat(getComputedStyle(carouselSlides[0]).width) + parseFloat(getComputedStyle(carouselSlides[0]).marginRight);
        currentTranslate = currentIndex * -slideWidth;
        prevTranslate = currentTranslate;
        setSliderPosition();
    }

    function setSliderPosition() {
        carouselTrack.style.transform = `translateX(${currentTranslate}px)`;
    }

    function animation() {
        setSliderPosition();
        if (isDragging) requestAnimationFrame(animation);
    }

    function handleStart(event) {
        isDragging = true;
        startX = event.type.includes('touch') ? event.touches[0].clientX : event.clientX;
        animationID = requestAnimationFrame(animation);
        carouselTrack.classList.add('grabbing');
    }

    function handleMove(event) {
        if (!isDragging) return;
        endX = event.type.includes('touch') ? event.touches[0].clientX : event.clientX;
        const currentPosition = endX - startX;
        currentTranslate = prevTranslate + currentPosition;
    }

    function handleEnd() {
        isDragging = false;
        cancelAnimationFrame(animationID);
        carouselTrack.classList.remove('grabbing');

        const movedBy = currentTranslate - prevTranslate;

        if (movedBy < -100 && currentIndex < totalSlides - 1) {
            currentIndex += 1;
        }

        if (movedBy > 100 && currentIndex > 0) {
            currentIndex -= 1;
        }

        updateCarousel();
        playCurrentVideo();
    }

    function playPauseVideos() {
        const currentSlide = carouselSlides[currentIndex];
        const video = currentSlide.querySelector('video');
        if (isPlaying) {
            video.pause();
            playPauseButton.classList.add('paused');
            playIcon.style.display = 'inline';
            pauseIcon.style.display = 'none';
            isPlaying = false;
        } else {
            video.play();
            playPauseButton.classList.remove('paused');
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'inline';
            isPlaying = true;
        }
    }

    function playCurrentVideo() {
        carouselSlides.forEach((slide, index) => {
            const video = slide.querySelector('video');
            if (index === currentIndex) {
                if (isPlaying) {
                    video.play();
                }
            } else {
                video.pause();
                video.currentTime = 0;
            }
        });
    }

    function handleVideoEnd() {
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateCarousel();
            playCurrentVideo();
        }, 500); // Wait for 2 seconds before changing slide
    }

    function resetCarousel() {
        currentIndex = 0;
        updateCarousel();
        playCurrentVideo();
    }

    function initSequentialVideos() {
        carouselSlides.forEach((slide) => {
            const video = slide.querySelector('video');
            video.addEventListener('ended', handleVideoEnd);
        });
    }

    function togglePlayPause() {
        const currentSlide = carouselSlides[currentIndex];
        const video = currentSlide.querySelector('video');
        if (isPlaying) {
            video.pause();
            isPlaying = false;
            playPauseButton.classList.add('paused');
            playIcon.style.display = 'inline';
            pauseIcon.style.display = 'none';
        } else {
            video.play();
            isPlaying = true;
            playPauseButton.classList.remove('paused');
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'inline';
        }
    }

    function removeHoverClass(event) {
        event.target.classList.remove('hover');
    }

    function addHoverClass(event) {
        event.target.classList.add('hover');
    }

    carouselTrack.addEventListener('touchstart', handleStart);
    carouselTrack.addEventListener('touchmove', handleMove);
    carouselTrack.addEventListener('touchend', handleEnd);

    carouselTrack.addEventListener('mousedown', handleStart);
    carouselTrack.addEventListener('mousemove', handleMove);
    carouselTrack.addEventListener('mouseup', handleEnd);
    carouselTrack.addEventListener('mouseleave', () => {
        if (isDragging) handleEnd();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
            playCurrentVideo();
        });
    });

    playPauseButton.addEventListener('click', playPauseVideos);
    playPauseButton.addEventListener('click', removeHoverClass);
    playPauseButton.addEventListener('mouseleave', addHoverClass);

    resetButton.addEventListener('click', resetCarousel);
    resetButton.addEventListener('click', removeHoverClass);
    resetButton.addEventListener('mouseleave', addHoverClass);

    carouselSlides.forEach(slide => {
        slide.addEventListener('click', togglePlayPause);
    });

    initSequentialVideos();
    updateCarousel();
    playCurrentVideo();
});
s