document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

document.addEventListener('dragstart', function (e) {
    e.preventDefault();
});

const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const galleryItems = document.querySelectorAll('.gallery-item')

galleryItems.forEach(div => {
    div.addEventListener('click', e => {
        lightbox.classList.add('active')
        const hqImg = document.createElement('img')
        hqImg.src = div.querySelector('img').src

        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        
        lightbox.appendChild(hqImg)
    })
})

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})

/* Will eventually automate what pictures show up on 
the page without having to hard code them.

I want to eventually put the pieces I want into a folder
and have them appear properly/automatically.*/
