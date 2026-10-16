
// NOT USED FOR HOMEWORK 2 DUE TO JS RESTRICTION
/*
// Extend generic HTMLElement interface
class MainNavbar extends HTMLElement {
    constructor() {
        super();
        // attach shadow DOM to element
        let navbar = document.querySelector("main-navbar");
        let shadow = navbar.attachShadow({mode: "closed"});
        // implement functionality...
        
        const navinfo = document.createElement("nav");
        navinfo.innerHTML = `
            <ul>
                <li><a href='./index.html'>Home</a></li>
                <li><a href='./resume.html'>Resume</a></li>
                <li><a href='./projects.html'>Projects</a></li>
                <li><a href='./about-me.html'>About</a></li>
                <li><a href='./experiments.html'>Experiments</a></li>
                <li><a href='./index.html#contact'>Contact Me</a></li>
            </ul>
        `;

        shadow.appendChild(navinfo);
    }
}
customElements.define("main-navbar", MainNavbar);
*/


// Custom Hello World Element
class HelloWorld extends HTMLElement {
    constructor() {
        super();
        
        console.log("Hello World!");
    }
}
customElements.define("hello-world", HelloWorld);

