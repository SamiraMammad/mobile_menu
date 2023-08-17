
const menuItems = document.querySelectorAll(".menu > ul > li");

menuItems.forEach(function(item) {
    item.addEventListener("click", function(e) {
        const siblings = getSiblings(this);
        
        siblings.forEach(function(sibling) {
            sibling.classList.remove("active");
        });

        this.classList.toggle("active");

       const subMenu = this.querySelector("ul");
        if (subMenu) {
            if (subMenu.style.display === "block") {
                subMenu.style.display = "none";
            } else {
                subMenu.style.display = "block";
            }
        }
    });
});

function getSiblings(element) {
    var siblings = [];
    var sibling = element.parentNode.firstChild;
    
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== element) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    
    return siblings;
}
