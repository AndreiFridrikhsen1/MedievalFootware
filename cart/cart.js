

const img = document.querySelector("img");
const h1 = document.querySelector("section h1");
const link = localStorage.getItem("image");
if (link != null){
       img.src = link;
} else {
       img.src = "empty2.png";
       h1.textContent = "Your cart is empty";
}

// button that deletes image from cart 

const removeItem = document.querySelector(".button");
removeItem.addEventListener("click", function(e){
    e.target.classList.add("pressed");// adds visual effect
    const removeEffect = ()=> button.classList.remove("pressed");
    setTimeout(removeEffect, 500); // removes it after 1 seconds
    if(link == null){
        alert("Cart is empty");
    }else{
        localStorage.removeItem("image");
        location.reload();
    }
});


