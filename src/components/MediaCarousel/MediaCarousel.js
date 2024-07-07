export default class MediaCarousel {
    constructor(carouselContainerSelector) {
        this.carouselContainer = document.querySelector(carouselContainerSelector);
        this.itemsContainer = this.carouselContainer.querySelector('.media-carousel-items');
        this.items = Array.from(this.itemsContainer.querySelectorAll('.media-carousel-item'));
        this.pagination = this.carouselContainer.querySelector('.media-carousel-pagination');
        this.dots = Array.from(this.pagination.children);

        // Initialize other properties
        this.isDragging = false;
        this.startPos = 0;
        this.currentTranslate = 0;
        this.prevTranslate = 0;
        this.animationID = 0;
        this.currentIndex = 0;
        this.itemWidth = this.items[0].getBoundingClientRect().width;

        // Bind event listeners
        this.initializeEventListeners();
        this.observeResize();
    }

    initializeEventListeners() {
        // Touch events
        this.itemsContainer.addEventListener('touchstart', this.touchStart.bind(this));
        this.itemsContainer.addEventListener('touchend', this.touchEnd.bind(this));
        this.itemsContainer.addEventListener('touchmove', this.touchMove.bind(this), { passive: true });

        // Mouse events for desktop
        this.itemsContainer.addEventListener('mousedown', this.touchStart.bind(this));
        this.itemsContainer.addEventListener('mouseup', this.touchEnd.bind(this));
        this.itemsContainer.addEventListener('mouseleave', this.touchEnd.bind(this));
        this.itemsContainer.addEventListener('mousemove', this.touchMove.bind(this));

        // Dot navigation
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.currentIndex = index;
                this.setPositionByIndex();
                this.updateActiveDot();
            });
        });
    }

    touchStart(event) {
        this.isDragging = true;
        this.startPos = this.getPositionX(event);
        this.animationID = requestAnimationFrame(this.animation.bind(this));
        this.itemsContainer.classList.remove('smooth-return');
    }

    touchEnd() {
        this.isDragging = false;
        cancelAnimationFrame(this.animationID);
        const movedBy = this.currentTranslate - this.prevTranslate;
        if (movedBy < -100 && this.currentIndex < this.items.length - 1) this.currentIndex += 1;
        if (movedBy > 100 && this.currentIndex > 0) this.currentIndex -= 1;
        this.setPositionByIndex();
    }

    touchMove(event) {
        if (this.isDragging) {
            const currentPosition = this.getPositionX(event);
            this.currentTranslate = this.prevTranslate + currentPosition - this.startPos;
        }
    }

    getPositionX(event) {
        return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    }

    animation() {
        this.setSliderPosition();
        if (this.isDragging) requestAnimationFrame(this.animation.bind(this));
    }

    setPositionByIndex() {
        this.currentTranslate = this.currentIndex * -this.itemWidth;
        this.prevTranslate = this.currentTranslate;
        this.setSliderPosition();
        this.updateActiveDot();
    }

    setSliderPosition() {
        this.itemsContainer.style.transform = `translateX(${this.currentTranslate}px)`;
    }

    updateActiveDot() {
        this.dots.forEach((dot, index) => {
            dot.classList.remove('active-dot');
            if (index === this.currentIndex) {
                dot.classList.add('active-dot');
            }
        });
    }

    observeResize() {
        const resizeObserver = new ResizeObserver(() => {
            const newItemWidth = this.items[0].getBoundingClientRect().width;
            if (this.itemWidth !== newItemWidth) {
                requestAnimationFrame(() => {
                    this.itemWidth = newItemWidth;
                    this.setPositionByIndex();
                });
            }
        });
    
        resizeObserver.observe(this.itemsContainer);
    }
}
