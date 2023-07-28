let links = document.querySelectorAll('nav a');

links.forEach(a => {
a.addEventListener('click', function(){
    links.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
});
});



