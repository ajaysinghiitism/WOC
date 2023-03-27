(()=>{
    
    fetch("https://pixabay.com/api/?key=34544349-1c867ebaac5625b367fda3614&q=yellow+flowers&image_type=photo&pretty=true", {
       method:"GET" 
    }).then(res => res.json())
        .then(image => {
            console.log(image);
            const img= image.hits[Math.floor(Math.random()*20)].largeImageURL;
            const bg = document.querySelector(".mainbg");
            bg.style.backgroundImage = `url(${img})`
        });


}) ();