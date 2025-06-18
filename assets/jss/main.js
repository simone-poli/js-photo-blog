    const rowEl = document.querySelector(".row")
    const modalEl = document.getElementById("modal")
    const modalImg = document.querySelector(".modalImg")

    const endpoint = "https://lanciweb.github.io/demo/api/pictures/"
    



    
    
    fetch(endpoint)
    .then(response => response.json())
    .then(data =>{
        console.log(data)

    data.forEach((image) => {
        const {title, url} = image

        
        const markup = `
        <div class="col-sm-1 col-md-2 col-3">
            <div class="card">
                <div class="image">
                   <img class="imageThumb" src="${url}" alt="${title}"> 
                </div>
                <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste blanditiis dolore aliquid soluta nam rem. </p>
                </div>
            </div>
        </div>
        `
        
    rowEl.insertAdjacentHTML('beforeend', markup)
    });
    
    const allImages = document.querySelectorAll('.imageThumb')

    allImages.forEach(img =>{
        img.addEventListener('click', () =>{
            modalEl.style.display = 'block'
            modalImg.src = img.src;
            console.log(img.src)
        })
        
    })
    })
    

