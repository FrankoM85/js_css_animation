function pageLoad() {
    //1. változó(myObjects), tömb, 2db objektummal)
    let myObjects = [
        {
            tag: "h1",
            content: "Feri"
        },
        {
            tag: "p",
            content: "Frontend Developer"
        }
    ];
    //console.error(myObjects);

    //for (let i = 0; i < myObjects.length; i++) {
                
    //}

    let rootE = document.getElementById("root");

    for (myObject of myObjects) {
        
        console.log(myObject.tag);

        rootE.insertAdjacentHTML("beforeend", `
            <${myObject.tag}>${myObject.content}</${myObject.tag}>
        `);
    }
    rootE.addEventListener("click", function () {
        rootE.classList.toggle("clicked");
    });
}

window.addEventListener("load", pageLoad);