// add class navBarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    const threshold = window.innerHeight - 1;

    // added const for consistency across screen sizes
    // added transparency and solid color
    if(top >= threshold) {
        header.style.backgroundColor = '#743014'; 
    }
    else {
        header.style.backgroundColor = 'rgba(249, 249, 249, 0)'; // transparent
    }
}