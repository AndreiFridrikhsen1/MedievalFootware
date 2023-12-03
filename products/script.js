const links = JSON.parse(localStorage.getItem("links")); // get links from local storage 


const section = document.querySelector("#shoes");// grabs shoes section

// create as many products on the page as there are links in the main js file.
for (let i=0; i<links.length; i++){
let div = document.createElement('div');// create div that will store buttons and images together 
// make div flexbox to for a better layout of the buttons and images
div.style.display="flex";
div.style.flexDirection="column";
div.style.padding="20px";
div.style.paddingTop = "10px";
let product = document.createElement('img');
product.style.border = "2px solid";
product.src = links[i];
// create button
let button = document.createElement('div');

button.classList.add('button');// adds class for css styles
div.appendChild(product);
div.appendChild(button);
button.textContent = "Add to the cart";
button.style.textAlign = "center";
// add event listsener to the button that adds links to the local storage 
button.addEventListener("click", function(){
    button.classList.add("pressed");// adds visual effect
    const removeEffect = ()=> button.classList.remove("pressed");
    setTimeout(removeEffect, 500); // removes it after 1 seconds
    localStorage.setItem("image", links[i]);

     //  if item has been added to the local storage display the message
     const h1 = document.querySelector("section h1");
     
    button.textContent = "Done!";
    
    button.style.backgroundColor = "yellow";
    // remove message 
    function removeMessage(){
    button.textContent="Add to the cart"; 
    button.style.backgroundColor = "";
    }
    
    setTimeout(removeMessage, 500);
    
  


});
section.appendChild(div); 
}