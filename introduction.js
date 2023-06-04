const introduction_span = document.querySelectorAll('span');

const introduction_observer = new IntersectionObserver(function
(entries){
entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        console.log("소개-등장");
    }
});
});

for (i = 0; i < introduction_span.length; i++)
{
    introduction_observer.observe(introduction_span[i]);
}
let img = document.getElementsByClassName("introduction_img")
const introduction_imgObserver = new IntersectionObserver(function
    (entries){
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let img1 = entry.target.firstElementChild;
            let img2 = entry.target.lastElementChild;
            console.log(img1)
            console.log(img2);
            img1.classList.add('fadeInLeft')
            img2.classList.add('fadeInRight')
            console.log("등장");
        }
    });
    });
for (i = 0; i < img.length; i++)
{
    introduction_imgObserver.observe(img[i])
}
