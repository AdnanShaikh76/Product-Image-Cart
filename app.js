document.querySelectorAll('.preimg img').forEach(image =>{
    image.onclick = () =>{
               document.querySelector('.main-img img').src = image.getAttribute('src');
    }
})