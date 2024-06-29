class DesignWalkthroughCarousel {
    constructor() {
        this.selectors = {
            track: '.design-walkthrough-carousel_track',
            slides: '.design-walkthrough-carousel_slide',
            dots: '.dot',
            playPauseButton: '.play-pause-button',
            resetButton: '.reset-button',
            playIcon: 'img.play-button',
            pauseIcon: 'img.pause-button'
        };

        this.state = {
            currentIndex: 0,
            isDragging: false,
            isPlaying: true,
            startX: 0,
            endX: 0,
            currentTranslate: 0,
            prevTranslate: 0,
            animationID: 0
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

        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', this.initializeElements.bind(this));
    }

    initializeElements() {
        this.elements.carouselTrack = document.querySelector(this.selectors.track);
        this.elements.carouselSlides = document.querySelectorAll(this.selectors.slides);
        this.elements.dots = document.querySelectorAll(this.selectors.dots);
        this.elements.playPauseButton = document.querySelector(this.selectors.playPauseButton);
        this.elements.resetButton = document.querySelector(this.selectors.resetButton);

        this.elements.playIcon = this.elements.playPauseButton.querySelector(this.selectors.playIcon);
        this.elements.pauseIcon = this.elements.playPauseButton.querySelector(this.selectors.pauseIcon);

        this.setupEventListeners();
        this.updateCarousel();
        this.playCurrentVideo();
    }

    setupEventListeners() {
        const handleStart = (event) => {
            this.state.isDragging = true;
            this.state.startX = event.type.includes('touch') ? event.touches[0].clientX : event.clientX;
            this.state.animationID = requestAnimationFrame(this.animation.bind(this));
            this.elements.carouselTrack.classList.add('grabbing');
        };

        const handleMove = (event) => {
            if (!this.state.isDragging) return;
            this.state.endX = event.type.includes('touch') ? event.touches[0].clientX : event.clientX;
            const currentPosition = this.state.endX - this.state.startX;
            this.state.currentTranslate = this.state.prevTranslate + currentPosition;
        };

        const handleEnd = () => {
            this.state.isDragging = false;
            cancelAnimationFrame(this.state.animationID);
            this.elements.carouselTrack.classList.remove('grabbing');
            const movedBy = this.state.currentTranslate - this.state.prevTranslate;
            if (movedBy < -100 && this.state.currentIndex < this.elements.carouselSlides.length - 1) this.state.currentIndex += 1;
            if (movedBy > 100 && this.state.currentIndex > 0) this.state.currentIndex -= 1;
            this.updateCarousel();
            this.playCurrentVideo();
        };

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

        this.elements.carouselSlides.forEach(slide => {
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
                            video.pause();
                            this.elements.playPauseButton.classList.add('paused');
                            this.elements.playIcon.style.display = 'inline';
                            this.elements.pauseIcon.style.display = 'none';
                            this.state.isPlaying = false;
                        } else {
                            video.play();
                            this.elements.playPauseButton.classList.remove('paused');
                            this.elements.playIcon.style.display = 'none';
                            this.elements.pauseIcon.style.display = 'inline';
                            this.state.isPlaying = true;
                        }
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
    }

    playCurrentVideo() {
        this.elements.carouselSlides.forEach((slide, index) => {
            const video = slide.querySelector('video');
            if (video) {
                if (index === this.state.currentIndex) {
                    if (this.state.isPlaying) video.play();
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
                video.play();
                this.elements.playPauseButton.classList.remove('paused');
                this.elements.playIcon.style.display = 'none';
                this.elements.pauseIcon.style.display = 'inline';
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
            }, 5000);
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
            firstSlideVideo.play(); // Play the video
        }
        // Update the play/pause button to reflect the play state
        this.elements.playPauseButton.classList.remove('paused');
        this.elements.playIcon.style.display = 'none';
        this.elements.pauseIcon.style.display = 'inline';
    }
}

new DesignWalkthroughCarousel();
