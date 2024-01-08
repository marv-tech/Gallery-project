   
document.addEventListener('DOMContentLoaded', () =>{
    const randomImage_URL = "https://api.unsplash.com/photos/?client_id=Y7PQHND2WUFyWG6VWU5R2c5YiLUVWDM3bjv4bGDU72k"

    
    const authorName = document.querySelectorAll(".imageAuthor")

    const authorLocation = document.querySelectorAll(".authorLocation")

    fetch (randomImage_URL)
    .then (response => response.json())
    .then (data => {

        let imageArr = data

        //Function that get only the images, author name and their location 
        unsplash= imageArr.map(unsplashImg => ({
            image: unsplashImg.urls.full,
            author: unsplashImg.user.name,
            location: unsplashImg.user.location,
            alt: unsplashImg.alt_description
            }))
        console.log(unsplash)
        appendImage(unsplash)
        
    })

    

    function appendImage(unsplash){

        const imageContainer = document.querySelector(".img-container")

        unsplash.forEach(imageData => {

        const imageDiv = document.createElement('div')
        imageDiv.classList.add('grid-item-cont');

        const imageBio = document.createElement('div')
        imageBio.classList.add('imageBio');

        
        

        const imgDowloaded = document.createElement('img')
        imgDowloaded.classList.add('grid-item')
        imgDowloaded.src= imageData.image
        imgDowloaded.alt= imageData.alt


        imgDowloaded.addEventListener('click', function(){
            // Get the modal
            var modal = document.getElementById("myModal");

            // Get the image and insert it inside the modal - use its "alt" text as a caption

            var modalImg = document.getElementById("img01");
            var captionText = document.getElementById("caption");

            function getImage(){
                var imglist= document.querySelectorAll(".grid-item")
                imglist = Array.from(imglist)

                for (let index = 0; index < imglist.length; index++) {
                    const img = imglist[index];
                    

                    img.addEventListener('click', function(){
                        modal.style.display = "block";
                        modalImg.src = this.src;
                        captionText.innerHTML = this.alt;
                    }) 
                    
                    
                }
            }

            getImage()

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
            modal.style.display = "none";
            }

        })

        const imgAuthor = document.createElement('p')
        imgAuthor.classList.add('imageAuthor')
        imgAuthor.textContent = `${imageData.author}`;

        const imgLocation = document.createElement('p')
        imgLocation.classList.add('authorLocation')
        imgLocation.textContent = `${imageData.location}`;

        const modal =document.createElement('div')
        modal.classList.add('modal')
        modal.setAttribute("id", 'myModal')

        const closeBtn = document.createElement('span')
        closeBtn.classList.add('close')
        closeBtn.innerHTML=`&times`

        const modalImage =document.createElement('img')
        modalImage.classList.add('modal-content')
        modalImage.setAttribute("id", 'img01')

        const imgCaption = document.createElement('div')
        imgCaption.setAttribute("id","caption")

        imageDiv.appendChild(imgDowloaded);
        imageDiv.appendChild(imageBio)
        imageBio.appendChild(imgAuthor);
        imageBio.appendChild(imgLocation);
        imageDiv.appendChild(modal);
        modal.appendChild(closeBtn)
        modal.appendChild(modalImage)
        modal.appendChild(imgCaption)

        imageContainer.appendChild( imageDiv)
            
        });

    }

    const images = document.querySelectorAll('img')   

    function fixHeight (){
        var height =Math.floor(Math.random() * (500- 300+1)) + 300;
        for (let i = 0; i < images.length; i++) {

            images[i].style.height = height; 
        }
    }

    fixHeight ();

    
})
