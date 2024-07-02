class DesignWalkthroughCarousel {
    constructor(carouselElement) {
        this.carouselElement = carouselElement;

        this.selectors = {
            track: '.design-walkthrough-carousel_track',
            slides: '.design-walkthrough-carousel_slide',
            dots: '.dot',
            playPauseButton: '.play-pause-button',
            resetButton: '.reset-button',
            playIcon: '.img-play-button',
            pauseIcon: '.img-pause-button'
        };

        this.state = {
            currentIndex: 0,
            isDragging: false,
            isPlaying: true,
            startX: 0,
            endX: 0,
            currentTranslate: 0,
            prevTranslate: 0,
            animationID: 0,
            lastPausedTime: 0,
            progress: {}, // Store progress state for each slide
            wasPlayingBeforeOut: false, // Track if the video was playing before out of view
            wasPausedManually: false // Track if the pause was manual
        };

        this.elements = {
            carouselTrack: null,
            carouselSlides: null,
            dots: null,
            playPauseButton: null,
            resetButton: null,
            playIcon: null,
            pauseIcon: null
        };

        this.initializeElements();
        this.initializeIntersectionObserver();
    }

    initializeElements() {
        this.elements.carouselTrack = this.carouselElement.querySelector(this.selectors.track);
        this.elements.carouselSlides = this.carouselElement.querySelectorAll(this.selectors.slides);
        this.elements.dots = this.carouselElement.querySelectorAll(this.selectors.dots);
        this.elements.playPauseButton = this.carouselElement.querySelector(this.selectors.playPauseButton);
        this.elements.resetButton = this.carouselElement.querySelector(this.selectors.resetButton);

        this.elements.playIcon = this.elements.playPauseButton.querySelector(this.selectors.playIcon);
        this.elements.pauseIcon = this.elements.playPauseButton.querySelector(this.selectors.pauseIcon);

        this.setupEventListeners();
        this.updateCarousel();
        this.playCurrentVideo();
        this.setupVideoProgressListener();
    }

    setupEventListeners() {
        // Bind the methods to the instance
        const handleStart = this.handleStart.bind(this);
        const handleMove = this.handleMove.bind(this);
        const handleEnd = this.handleEnd.bind(this);

        // Use these bound methods in your event listeners
        this.elements.carouselTrack.addEventListener('touchstart', handleStart);
        this.elements.carouselTrack.addEventListener('touchmove', handleMove);
        this.elements.carouselTrack.addEventListener('touchend', handleEnd);
        this.elements.carouselTrack.addEventListener('mousedown', handleStart);
        this.elements.carouselTrack.addEventListener('mousemove', handleMove);
        this.elements.carouselTrack.addEventListener('mouseup', handleEnd);
        this.elements.carouselTrack.addEventListener('mouseleave', () => {
            if (this.state.isDragging) handleEnd();
        });

        this.elements.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.state.currentIndex = index;
                this.updateCarousel();
                this.playCurrentVideo();
            });
        });

        this.elements.playPauseButton.addEventListener('click', this.playPauseVideos.bind(this));
        this.elements.resetButton.addEventListener('click', this.resetCarousel.bind(this));

        this.elements.carouselSlides.forEach((slide, index) => {
            const video = slide.querySelector('video');
            if (video) {
                video.addEventListener('ended', this.handleVideoEnd.bind(this));
            }
        });

        this.elements.carouselSlides.forEach((slide, index) => {
            const video = slide.querySelector('video');
            if (video) {
                slide.addEventListener('click', () => {
                    // If the clicked slide is the current slide, toggle play/pause.
                    if (index === this.state.currentIndex) {
                        if (this.state.isPlaying) {
                            this.state.lastPausedTime = video.currentTime;
                            video.pause();
                            this.state.progress[this.state.currentIndex] = video.currentTime; // Store the progress
                            this.elements.playPauseButton.classList.add('paused');
                            this.elements.playIcon.style.display = 'inline';
                            this.elements.pauseIcon.style.display = 'none';
                            this.state.isPlaying = false;
                        } else {
                            video.currentTime = this.state.progress[this.state.currentIndex] || 0;
                            video.play().then(() => {
                                this.elements.playPauseButton.classList.remove('paused');
                                this.elements.playIcon.style.display = 'none';
                                this.elements.pauseIcon.style.display = 'inline';
                                this.state.isPlaying = true;
                            }).catch(error => console.error('Error playing video:', error));
                        }
                    }
                });
            }
        });
    }

    handleStart(event) {
        this.state.isDragging = true;
        this.state.startX = event.type.includes('touch') ? event.touches[0].clientX : event.clientX;
        this.state.animationID = requestAnimationFrame(this.animation.bind(this));
        this.elements.carouselTrack.classList.add('grabbing');
    }

    handleMove(event) {
        if (!this.state.isDragging) return;
        this.state.endX = event.type.includes('touch') ? event.touches[0].clientX : event.clientX;
        const currentPosition = this.state.endX - this.state.startX;
        this.state.currentTranslate = this.state.prevTranslate + currentPosition;
    }

    handleEnd() {
        this.state.isDragging = false;
        cancelAnimationFrame(this.state.animationID);
        this.elements.carouselTrack.classList.remove('grabbing');
        const movedBy = this.state.currentTranslate - this.state.prevTranslate;
        if (movedBy < -100 && this.state.currentIndex < this.elements.carouselSlides.length - 1) this.state.currentIndex += 1;
        if (movedBy > 100 && this.state.currentIndex > 0) this.state.currentIndex -= 1;
        this.updateCarousel();
        this.playCurrentVideo();
    }

    initializeIntersectionObserver() {
        const options = {
            root: null, // viewport
            threshold: 0.5 // 50% of the item's visible area must be visible to trigger
        };

        new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Resume playing if it was playing before scrolling out of view
                    if (this.state.wasPlayingBeforeOut) {
                        this.playCurrentVideo();
                    }
                } else {
                    // Pause the video and remember it was playing
                    this.state.wasPlayingBeforeOut = this.state.isPlaying;
                    this.pauseCurrentVideo();
                }
            });
        }, options).observe(this.carouselElement);
    }

    setupVideoProgressListener() {
        this.elements.carouselSlides.forEach((slide, index) => {
            const video = slide.querySelector('video');
            const activeDot = this.elements.dots[index];
            const progressBar = activeDot.querySelector('.progress-bar');

            let animationFrameId;

            const updateBar = () => {
                if (!video.paused && !video.ended) {
                    const progress = (video.currentTime / video.duration) * 100;
                    progressBar.style.width = `${progress}%`;
                    animationFrameId = requestAnimationFrame(updateBar);
                }
            };

            if (video && progressBar) {
                video.addEventListener('play', () => {
                    animationFrameId = requestAnimationFrame(updateBar);
                });

                video.addEventListener('pause', () => {
                    cancelAnimationFrame(animationFrameId);
                    const progress = (video.currentTime / video.duration) * 100;
                    progressBar.style.width = `${progress}%`;
                });

                video.addEventListener('ended', () => {
                    cancelAnimationFrame(animationFrameId);
                });

                video.addEventListener('timeupdate', () => {
                    if (video.paused || video.ended) {
                        const progress = (video.currentTime / video.duration) * 100;
                        progressBar.style.width = `${progress}%`;
                    }
                });
            }
        });
    }

    getSlideWidth() {
        const slide = this.elements.carouselSlides[0];
        return parseFloat(getComputedStyle(slide).width) + parseFloat(getComputedStyle(slide).marginRight);
    }

    setSliderPosition() {
        this.elements.carouselTrack.style.transform = `translateX(${this.state.currentTranslate}px)`;
    }

    animation() {
        this.setSliderPosition();
        if (this.state.isDragging) requestAnimationFrame(this.animation.bind(this));
    }

    updateCarousel() {
        const slideWidth = this.getSlideWidth();
        this.state.prevTranslate = -this.state.currentIndex * slideWidth;
        this.state.currentTranslate = this.state.prevTranslate;
        this.setSliderPosition();
        this.elements.dots.forEach(dot => dot.classList.remove('active'));
        this.elements.dots[this.state.currentIndex].classList.add('active');
        this.setupVideoProgressListener();
    }

    pauseCurrentVideo(manualPause = false) {
        const video = this.elements.carouselSlides[this.state.currentIndex].querySelector('video');
        if (video && !video.paused) {
            video.pause();
            this.state.isPlaying = false;
            this.state.wasPausedManually = manualPause; // Track if the pause was manual
            // Update play/pause button visuals if necessary
        }
    }

    playCurrentVideo() {
        if (!this.state.isPlaying || this.state.wasPausedManually) return; // Do not auto-play if paused manually
        this.elements.carouselSlides.forEach((slide, index) => {
            const video = slide.querySelector('video');
            if (video) {
                if (index === this.state.currentIndex) {
                    video.play();
                } else {
                    video.pause();
                    video.currentTime = 0;
                }
            }
        });
    }

    playPauseVideos() {
        const video = this.elements.carouselSlides[this.state.currentIndex].querySelector('video');
        if (video) {
            if (this.state.isPlaying) {
                video.pause();
                this.elements.playPauseButton.classList.add('paused');
                this.elements.playIcon.style.display = 'inline';
                this.elements.pauseIcon.style.display = 'none';
            } else {
                video.currentTime = this.state.progress[this.state.currentIndex] || 0;
                video.play().then(() => {
                    this.elements.playPauseButton.classList.remove('paused');
                    this.elements.playIcon.style.display = 'none';
                    this.elements.pauseIcon.style.display = 'inline';
                }).catch(error => console.error('Error playing video:', error));
            }
            this.state.isPlaying = !this.state.isPlaying;
        }
    }

    handleVideoEnd() {
        if (this.state.currentIndex < this.elements.carouselSlides.length - 1) {
            setTimeout(() => {
                this.state.currentIndex = (this.state.currentIndex + 1) % this.elements.carouselSlides.length;
                this.updateCarousel();
                this.playCurrentVideo();
            }, 2000);
        } else {
            // When the last slide is finished, change the pause button to the play button
            this.elements.playPauseButton.classList.add('paused');
            this.elements.playIcon.style.display = 'inline';
            this.elements.pauseIcon.style.display = 'none';
            this.state.isPlaying = false;
        }
    }

    resetCarousel() {
        // Reset the current index to 0
        this.state.currentIndex = 0;
        // Set the playing state to true
        this.state.isPlaying = true;
        // Update the carousel to reflect the reset state
        this.updateCarousel();
        // Explicitly reset and play the video on the first slide
        const firstSlideVideo = this.elements.carouselSlides[0].querySelector('video');
        if (firstSlideVideo) {
            firstSlideVideo.currentTime = 0; // Reset video time to start
            firstSlideVideo.play().catch(error => console.error('Error playing video:', error)); // Play the video
        }
        // Update the play/pause button to reflect the play state
        this.elements.playPauseButton.classList.remove('paused');
        this.elements.playIcon.style.display = 'none';
        this.elements.pauseIcon.style.display = 'inline';
    }
}

// Initialize multiple carousels
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.design-walkthrough-carousel').forEach(carouselElement => {
        new DesignWalkthroughCarousel(carouselElement);
    });
});
