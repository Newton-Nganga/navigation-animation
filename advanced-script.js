//wait for the document to b loaded into the browser
window.addEventListener("load", () => {
    const navItems = document.querySelectorAll("li");
  
    //a function to toggle the class "active"
    const toggleActiveItem = (event) =>{

      event.preventDefault();
      //Remove "active" class from all the items
      navItems.forEach(el => el.classList.remove("active"));
      //get the id of the <li></li> wrapping the children
      let parentElementWithId = event.target;
  
      while (parentElementWithId && !parentElementWithId.id) {
        parentElementWithId = parentElementWithId.parentElement;
    }
      
      // If an element with an id is found, log its id
      parentElementWithId && console.log("ID of parent li:", parentElementWithId.id,"clicked child :",event.target);
      //Add "active" to the clicked item

      document.querySelector(`#${parentElementWithId.id}`).classList.add("active");
    }
  
    navItems.forEach((navItem) => {
      navItem.addEventListener("click", event =>toggleActiveItem(event));
    });
  });
  