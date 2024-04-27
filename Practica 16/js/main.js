let testButton = document.getElementById("test-button");

testButton.addEventListener("click", () => {
    alert("Hola Koders")
})

let titleInput = document.getElementById( "title-input" );

titleInput.addEventListener('keyup', (event) => {
    let text = event.target.value;
    document.getElementById("title").innerText = text; 
})