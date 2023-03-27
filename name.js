
// $(window).on("load", red());
// function red() {
    
//     $("#name input").on("click", (onclick)=>{
//         const name=currentTarget.value;
//         console.log(name);
//     })
// }

// var el=document.getElementById("#save");
// el.addEventListener("click", (onclick)=> {
           
//         console.log("Ajay");
//         $("div.control").remove();
//     });

$(window).on("load", ()=>{
    $("#name input").on("click", (event)=>{
        const name= event.currentTarget.value;
        console.log(name);
    });
})
