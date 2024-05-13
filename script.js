

let img = document.querySelectorAll("img");// get all 3 images

let links = ["/images/shoes1.png","/images/shoes2.png","/images/shoes3.png","/images/shoes4.png", "/images/shoes5.png", "/images/shoes6.png", "/images/shoes7.png"];
// store links in local storage 
localStorage.setItem("links", JSON.stringify(links));

let intervalId; 
let index=0;// index of an element in the array
function changeImages(){
    img[0].src=links[index];
    img[1].src=links[index+1];
    img[2].src=links[index+2];
    index ++;
    if (index==links.length-2){// if array length is 5 and index is 3, image[1]=index 4 , and image[2]=index 5 but there's no image at index 5 so set index to 0 if index = 3 (in this case)
        index=0;
    }

}


     intervalId = setInterval(changeImages, 3000);// changes images every 3 second
     


// add click to each image box and once clicked store the link for the image in local storage
let link;
img.forEach(function(image){
     image.addEventListener("click", function(e){
         e.target.style.border = "solid 3px orange";
         link = e.target.src;
         localStorage.setItem("image", link);
         e.target.classList.add("pressed"); // adds pressed class to create a visual effect (round borders)
         //call the function that removes all added effects after 1s
         setTimeout(removeEffects, 1000);

         
     });
});



function removeEffects (){
       for(i=0;i<3;i++){
        img[i].style.border="";
       }
};

// apply effect for all nav buttons
const buttons = document.querySelectorAll("li");

buttons.forEach(button => {
    button.addEventListener("click", function(e){
        e.target.classList.add("pressed");
    });
});