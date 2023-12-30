// const randomImage_URL = "https://api.unsplash.com"
// fetch (randomImage_URL, {
//     method: 'get',
//     headers:{
//         Authorization: 'Y7PQHND2WUFyWG6VWU5R2c5YiLUVWDM3bjv4bGDU72k'
//     },
//     mode:'no-cors',
//     cache:'default'
// })
// .then(res => res.json())
// .then (data => console.log(data))
// .catch(error => console.log(error))
    
document.addEventListener('DOMContentLoaded', () =>{
    const images = document.querySelectorAll('img')   

    function fixHeight (){
        var height =Math.floor(Math.random() * (500- 300+1)) + 300;
        for (let i = 0; i < images.length; i++) {

            images[i].style.height = height; 
        }
    }

    fixHeight ();

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption

    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    function getImage(){
        var imglist= document.querySelectorAll(".grid-item")
        imglist = Array.from(imglist)
        console.log(imglist)


        for (let index = 0; index < imglist.length; index++) {
            const img = imglist[index];
            

            img.addEventListener('click', function(){
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
            }) 
            
            
        }
        console.log('display this')
    }

    getImage()

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    
})
