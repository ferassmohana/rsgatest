let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
}
let callback = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.play();
        } else {
            entry.target.pause();
        }
    })
}
const observers = new IntersectionObserver(callback, options)

const video = document.querySelectorAll('.video');
video.forEach((el) => observers.observe(el));