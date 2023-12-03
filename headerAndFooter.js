// create global header and footer 
//header 
const navLinks = ['<a href="/index.html">Main page</a>','<a href="/cart/index.html">Shopping cart</a>','<a href="/products/index.html">All our products</a>', '<a href="/contact/index.html">Contact us</a>', '<a href="/about us/index.html">About us</a>'];
const header = document.createElement('header');
const nav = document.createElement('nav');
const ul = document.createElement('ul');
for (i=0; i<navLinks.length; i++){
// create li el
const li = document.createElement('li');
li.innerHTML = navLinks[i];
ul.appendChild(li);
}

const body = document.body;
body.insertBefore(header, body.firstChild);
// create heading and append it to the header
const heading = document.createElement("h1");
heading.textContent = "Medieval footwear";
header.appendChild(heading);
header.appendChild(nav);
nav.appendChild(ul);


// footer
const footer = document.createElement('footer');
const p1 = document.createElement("p");
const p2 = document.createElement("p");

body.appendChild(footer);
p1.textContent="©Medieval shoes. All product rights are reserved";
footer.appendChild(p1);
p2.textContent="1 Georgian Drive, Barrie, Ontario, L4M 3X9";
footer.appendChild(p2);


