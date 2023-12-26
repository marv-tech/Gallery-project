const randomImage_URL = "https://api.unsplash.com"
fetch (randomImage_URL, {
    method: 'get',
    headers:{
        Authorization: 'Y7PQHND2WUFyWG6VWU5R2c5YiLUVWDM3bjv4bGDU72k'
    },
    mode:'no-cors',
    cache:'default',
})

    .then(function (response){
        return response.json()
    })

    .then (function (data){
        console.log(data)
    })
        

    



    
