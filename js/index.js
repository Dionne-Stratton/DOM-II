// Your code goes here

// 1.
const h1 = document.querySelector('h1')

h1.addEventListener('mousedown', function (event) {
    h1.textContent = 'The Bus is Leaving!'
    h1.style.color = "orange"
})

// 2.
const bodyTitlesColor = document.querySelectorAll("body")

bodyTitlesColor.forEach(function (headerColor) {
    headerColor.addEventListener("keydown", function (event) {
        if (event.keyCode === 32) {
            const h2Color = document.querySelectorAll("body h2")
            h2Color.forEach(function (headerColor2) {
                headerColor2.style.color = "#039c7d"
            })
        }
    })
})

// 3.
const allParagraphsColor = document.querySelectorAll("body p")

allParagraphsColor.forEach(function (paragraph) {
    paragraph.addEventListener("mouseenter", function (event) {
        event.target.style.color = "darkorange"
    })
})

//4.
allParagraphsColor.forEach(function (paragraph) {
    paragraph.addEventListener("mouseleave", function (event) {
        event.target.style.color = "turquoise"
        setTimeout(function () {
            event.target.style.color = "teal"
        }, 600)
    })
})

// 5.

window.addEventListener('load', (event) => {
    console.log('locked N loaded');
});

// 6.
const nav = document.querySelector('.nav');

nav.addEventListener('click', event => {
    event.preventDefault();
});

// 7.
nav.addEventListener('mouseover', event => {
    if (event.target.tagName == 'A') {
        event.target.textContent = event.target.textContent.toUpperCase();
        event.target.style.color = "turquoise"
    }
})

// 8.
nav.addEventListener('mouseout', event => {
    if (event.target.tagName == 'A') {
        event.target.textContent = event.target.textContent.toLowerCase();
        event.target.style.color = "red"
    }
})

// 9.
const h4 = document.querySelectorAll("body h4")

h4.forEach(function (h4) {
    h4.addEventListener('dblclick', function (event) {
        event.target.style.color = "green"
    })
})

// 10.
const h2 = document.querySelectorAll("body h2")

h2.forEach(function (h2) {
    h2.addEventListener("wheel", function (event) {
        event.target.style.color = "purple"
    })
})

