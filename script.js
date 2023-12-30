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
    

const images = document.querySelectorAll('img')   

function fixHeight (){
    var height =Math.floor(Math.random() * (500- 300+1)) + 300;
    for (let i = 0; i < images.length; i++) {
        console.log('hi')

        images[i].style.height = height; 
    }
    console.log('hi')
}

fixHeight ();

    
