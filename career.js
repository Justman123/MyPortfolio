const career_span = document.querySelectorAll('span');

const career_observer = new IntersectionObserver(function
(entries){
entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'rotate(360deg)';
        console.log("등장");
    }
});
});

for (i = 0; i < career_span.length; i++)
{
    career_observer.observe(career_span[i]);
}