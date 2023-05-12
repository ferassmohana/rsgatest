const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add(`show`);
            if (entry.target.classList.contains('child2') && document.body.classList.contains('rtlDir')) {
                entry.target.classList.add('moveInLeft')
            } else if (entry.target.classList.contains('child2') && !document.body.classList.contains('rtlDir')) {
                entry.target.classList.add('moveInRight');
            }
            else if (entry.target.classList.contains('child1') && document.body.classList.contains('rtlDir')) {
                entry.target.classList.add('moveInRight');
            } else if (entry.target.classList.contains('child1') && !document.body.classList.contains('rtlDir')) {
                entry.target.classList.add('moveInLeft');
            } else if (entry.target.classList.contains('child3')) {
                entry.target.classList.add('moveInBottom');
            } else if (entry.target.classList.contains('child4')) {
                entry.target.classList.add('moveInTop');
            }
            else if (entry.target.classList.contains('heading-animation')) {
                var textWrapper = document.querySelector('.heading-animation');
                textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

                anime.timeline({ loop: false })
                    .add({
                        targets: '.heading-animation .letter',
                        translateX: [40, 0],
                        translateZ: 0,
                        opacity: [0, 1],
                        easing: "easeOutExpo",
                        duration: 400,
                        delay: (el, i) => 500 + 70 * i
                    })
            } else if (entry.target.classList.contains('video')) {
                console.log('asasdad')
                entry.target.play();
            }
        } else {
            entry.target.classList.remove(`show`);
            entry.target.classList.remove('moveInRight');
            entry.target.classList.remove('moveInLeft');
            entry.target.classList.remove('moveInBottom');
            entry.target.classList.remove('moveInTop');
        }
    })
})

const hiddenElements = document.querySelectorAll('.scrollAnimat');
hiddenElements.forEach((el) => observer.observe(el));

window.addEventListener('load', () => {
    document.getElementById('pageLoader').style.display = "none";
    document.body.style.overflow = 'auto';
})