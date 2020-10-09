

    const button = document.querySelector("button");
    const backGround = document.querySelector("#background");

    function resetBackground() {
        backGround.classList.toggle("change");
    }

    button.addEventListener("click", resetBackground);
    
