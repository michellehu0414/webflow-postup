// // Import SCSS file for this page
// import './postup.scss';
//
// // Import all components dynamically
function importAllComponents(r) {
    r.keys().forEach(r);
}

importAllComponents(require.context('../../components', true, /\.js$/));

document.addEventListener('DOMContentLoaded', () => {
    console.log('PostUp page loaded');
    // Additional initialization code for this page
});
