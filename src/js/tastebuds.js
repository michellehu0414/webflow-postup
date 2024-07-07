// Import SCSS file for this page
import '../scss/tastebuds.scss';

// Import and initialize components specific to this page
import '../components/Accordion/accordion';
// import '../components/Carousel/carousel';
import '../components/AutoplayVideo/autoplay-video';
import '../components/AutoplayVideoCarousel/AutoplayVideoCarousel'
import '../components/ScrollButton/scroll-button';
import '../components/SequentialVideoPlayer/sequential-video-player';
import '../components/Tabs/tabs';

import MediaCarousel from '../components/MediaCarousel/MediaCarousel';
document.addEventListener('DOMContentLoaded', function () {
    new MediaCarousel('#carousel-01');
    new MediaCarousel('#carousel-02');
});

import '../components/scrollable';

document.addEventListener('DOMContentLoaded', () => {
    console.log('Main TasteBuds page loaded');
    // Additional initialization code for this page
});
