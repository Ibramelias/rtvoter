
/// scroling down automatically function ///

// $(function() {
//     $('a[href*=#]').on('click', function(e) {
//       e.preventDefault();
//       $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
//     });
// });


// Back to top Button // 

// Bet the button
toTop = document.getElementById("topBtn");
// when the user scrolls down from the top of the document, show the button.
window.onscroll = function() {scrollFunction()};

function scrollFunction () {
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        toTop.style.display = "block";
    }else{
        toTop.style.display = "none";
    }
}

// when the user clicks on the button, scroll to the top of the document

function topFunction() {
    document.body.scrollTop = 0; // for safari users 
    document.documentElement.scrollTop = 0; // for other browsers 
}

/// carosuel slid-show ///
const track = document.querySelector('.carsouel__track');
const slides = Array.from(track.children);
//console.log(slides)
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carsouel__nav');
const dots = Array.from(dotsNav.children);
//console.log(dots)
const slideWidth = slides[0].getBoundingClientRect().width;
//console.log(slideWidth)


const updateDot = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

// arrange the slides next to one another
// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';

const setlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
    
};

const hideShowArrows = (prevButton, nextButton, slides, targetIndex) => {

    if(targetIndex === 0) {
        prevButton.classList.add('is--hidden');
        nextButton.classList.remove('is--hidden');
    } else if(targetIndex === slides.length -1 ) {
        prevButton.classList.remove('is--hidden');
        nextButton.classList.add('is--hidden');
    } else{
        prevButton.classList.remove('is--hidden');
        nextButton.classList.remove('is--hidden')
    }
}

slides.forEach(setlidePosition);

const moveToSlide = (track, currentSlide, targetSlide ) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left +')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');

}

// when i click left, move slides to left // 
prevButton.addEventListener('click' , e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(track , currentSlide , prevSlide);
    updateDot(currentDot, prevDot)
    hideShowArrows(prevButton, nextButton, slides, prevIndex);
})


// when i click right, move slide to the right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide')
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide)
  

    moveToSlide(track, currentSlide, nextSlide);
    updateDot(currentDot, nextDot);
    hideShowArrows(prevButton, nextButton, slides, nextIndex);
})

// when i click the nav indicators, move to that slide 
dotsNav.addEventListener('click' , e => {
    const targetDot = e.target.closest('button');

    if(!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDot(currentDot, targetDot);
    hideShowArrows(prevButton, nextButton, slides, targetIndex);

 
})








$(document).ready(function(){

    //  scrolling down navbar function ////

    $(window).scroll(function(){
        // check if the window is scroll more than 500px, add or remove solid class //
        if($(this).scrollTop()> 600){
            $(".bar").addClass("solid");
        }else{
            $(".bar").removeClass("solid");
        }
    })

    var auidoElement = document.createElement("audio");

    auidoElement.setAttribute("src", "assets/audio/intro.mp3");

    // $("#home").on("click", function(){
    //     auidoElement.play();
    // });

    $("#play").on("click", function (event) {
        event.preventDefault();
        this.currentTime = 0;
        auidoElement.play();
    })

    $("#pause").on("click", function (){
        auidoElement.pause();
    })

})