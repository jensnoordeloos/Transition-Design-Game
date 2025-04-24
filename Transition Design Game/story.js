const images = [
    "images/Scene_1.jpeg",
    "images/Scene_2.jpeg",
    "images/Scene_3.jpeg",
    "images/Scene_4.jpeg",
    "images/Scene_5.jpeg",
    "images/Scene_6.jpeg",
    "images/Scene_7.jpeg",
    "images/Scene_8.jpeg",
    "images/Scene_9.jpeg",
    "images/Scene_10.jpeg",
    "images/Scene_11.jpeg",
    "images/Scene_12.jpeg",
    "images/Scene_13.jpeg",
    "images/Scene_14.jpeg",
    "images/Scene_15.jpeg",
    "images/Scene_16.jpeg",
    "images/Scene_17.jpeg",
];

let currentImageIndex = 0;
let isImageFadedOut = false;
const story = document.getElementById("story");
const storyImage = document.getElementById("story-image");
const continueBtn = document.getElementById("continue-btn");
const outerStoryContainer = document.getElementById("outerStoryContainer");

let waitingForChildChange = false;

const observer = new MutationObserver((mutations) => {
    mutations.forEach(() => {
        const paragraphs = story.getElementsByTagName("p");
        if (waitingForChildChange && currentImageIndex === 2) {
            advanceToImage4();
        }
        if (waitingForChildChange && currentImageIndex === 5) {
            advanceToImage7();
        }
        if (waitingForChildChange && currentImageIndex === 7) {
            advanceToImage9();
        }
        if (waitingForChildChange && currentImageIndex === 8) {
            advanceToImage10();
        }
        if (waitingForChildChange && currentImageIndex === 9) {
            advanceToImage11();
        }
        if (waitingForChildChange && currentImageIndex === 10 && paragraphs[0].classList.contains('raised')) {
            advanceToImage13();
        }
        if (waitingForChildChange && currentImageIndex === 10 && paragraphs[0].classList.contains('lowered')) {
            advanceToImage14();
        }
        if (waitingForChildChange && currentImageIndex === 10 && paragraphs[0].classList.contains('equal')) {
            advanceToImage15();
        }
        if (waitingForChildChange && currentImageIndex === 13) {
            advanceToImage16();
        }
    });
});

observer.observe(outerStoryContainer, {
    childList: true,
    subtree: true
});

function advanceToImage4() {
    storyImage.style.opacity = 0;
    setTimeout(() => {
        currentImageIndex = 3; // Move to image4
        storyImage.src = images[currentImageIndex];
        storyImage.style.opacity = 1;
        outerStoryContainer.style.opacity = 0;
        waitingForChildChange = false;
        isImageFadedOut = false; // Reset this flag
    }, 1000);
    outerStoryContainer.style.zIndex = "0";
}
function advanceToImage7() {
    storyImage.style.opacity = 0;
    outerStoryContainer.style.opacity = 0;
    setTimeout(() => {
        currentImageIndex = 6; // Move to image7
        storyImage.src = images[currentImageIndex];
        storyImage.style.opacity = 1;
        outerStoryContainer.style.opacity = 0;
        waitingForChildChange = true;
        isImageFadedOut = false;
        console.log(currentImageIndex);
    }, 1000);
    outerStoryContainer.style.zIndex = "0";
}
function advanceToImage9() {
    storyImage.style.opacity = 0;
    outerStoryContainer.style.opacity = 0;
    setTimeout(() => {
        currentImageIndex = 8; // Move to image8
        storyImage.src = images[currentImageIndex];
        storyImage.style.opacity = 1;
        outerStoryContainer.style.opacity = 1;
        waitingForChildChange = true;
        isImageFadedOut = false;
        console.log(currentImageIndex);
    }, 1000);
    outerStoryContainer.style.zIndex = "50";
}
function advanceToImage10() {
    storyImage.style.opacity = 0;
    outerStoryContainer.style.opacity = 0;
    var choice = document.getElementsByClassName("choice");
    for (let i = 0; i < choice.length; i++){
        choice[i].style.textAlign = "left";
        choice[i].style.padding = "0";
        choice[i].style.maxWidth = "500px";
        choice[i].style.lineHeight = "0.5em";
        choice[i].childNodes[0].style.fontSize = "10pt";
    }
    story.style.background = "none";
    var storyText = story.getElementsByTagName("p");
    for (let i = 0; i < storyText.length; i++){
        storyText[i].style.fontSize = "20pt";
    }
    outerStoryContainer.style.height = "auto";
    outerStoryContainer.style.width = "auto";
    outerStoryContainer.style.top = "100px";
    outerStoryContainer.style.left = "300px";
    outerStoryContainer.style.overflow = "hidden";
    setTimeout(() => {
        currentImageIndex = 9; // Move to image8
        storyImage.src = images[currentImageIndex];
        storyImage.style.opacity = 1;
        outerStoryContainer.style.opacity = 1;
        waitingForChildChange = true;
        isImageFadedOut = false;
        console.log(currentImageIndex);
    }, 1000);
    outerStoryContainer.style.zIndex = "50";
}
function advanceToImage11() {
    storyImage.style.opacity = 0;
    outerStoryContainer.style.opacity = 0;
    setTimeout(() => {
        currentImageIndex = 10; // Move to image8
        storyImage.src = images[currentImageIndex];
        storyImage.style.opacity = 1;
        outerStoryContainer.style.opacity = 0;
        waitingForChildChange = true;
        isImageFadedOut = false;
        console.log(currentImageIndex);
    }, 1000);
    outerStoryContainer.style.zIndex = "0";
}
function advanceToImage13() {
    storyImage.style.opacity = 0;
    outerStoryContainer.style.opacity = 0;
    setTimeout(() => {
        currentImageIndex = 11; // Move to image8
        storyImage.src = images[currentImageIndex];
        storyImage.style.opacity = 1;
        outerStoryContainer.style.opacity = 0;
        waitingForChildChange = false;
        isImageFadedOut = false;
        console.log(currentImageIndex);
    }, 1000);
    outerStoryContainer.style.zIndex = "0";
}
function advanceToImage14() {
    storyImage.style.opacity = 0;
    outerStoryContainer.style.opacity = 0;
    setTimeout(() => {
        currentImageIndex = 12; // Move to image8
        storyImage.src = images[currentImageIndex];
        storyImage.style.opacity = 1;
        outerStoryContainer.style.opacity = 0;
        waitingForChildChange = true;
        isImageFadedOut = false;
        console.log(currentImageIndex);
    }, 1000);
    outerStoryContainer.style.zIndex = "0";
}
function advanceToImage15() {
    storyImage.style.opacity = 0;
    outerStoryContainer.style.opacity = 0;
    setTimeout(() => {
        currentImageIndex = 14; // Move to image8
        storyImage.src = images[currentImageIndex];
        storyImage.style.opacity = 1;
        outerStoryContainer.style.opacity = 0;
        waitingForChildChange = true;
        isImageFadedOut = false;
        console.log(currentImageIndex);
    }, 1000);
    outerStoryContainer.style.zIndex = "0";
}
function advanceToImage16() {
    storyImage.style.opacity = 0;
    outerStoryContainer.style.opacity = 0;
    setTimeout(() => {
        currentImageIndex = 14; // Move to image8
        storyImage.src = images[currentImageIndex];
        storyImage.style.opacity = 1;
        outerStoryContainer.style.opacity = 0;
        waitingForChildChange = true;
        isImageFadedOut = false;
        console.log(currentImageIndex);
    }, 1000);
    outerStoryContainer.style.zIndex = "0";
}

continueBtn.addEventListener("click", () => {
    // Don't proceed if we're waiting for child change
    if (waitingForChildChange && currentImageIndex === 2) return;
    if (waitingForChildChange && currentImageIndex === 5) return;
    if (waitingForChildChange && currentImageIndex === 7) return;
    if (waitingForChildChange && currentImageIndex === 8) return;
    if (waitingForChildChange && currentImageIndex === 9) return;
    storyImage.style.opacity = 0;
    isImageFadedOut = true;
    
    setTimeout(() => {
        if (currentImageIndex === 2) {
            // First click on image3
            waitingForChildChange = true;
            outerStoryContainer.style.zIndex = "50";
            outerStoryContainer.style.opacity = 1;
            console.log(currentImageIndex);
        } else if (currentImageIndex === 4) {
            waitingForChildChange = true;
            var choice = document.getElementsByClassName("choice");
            for (let i = 0; i < choice.length; i++){
                choice[i].style.textAlign = "left";
                choice[i].style.padding = "0";
                choice[i].style.maxWidth = "500px";
                choice[i].style.lineHeight = "0.5em";
                choice[i].childNodes[0].style.fontSize = "10pt";
            }
            story.style.background = "none";
            var storyText = story.getElementsByTagName("p");
            for (let i = 0; i < storyText.length; i++){
                storyText[i].style.fontSize = "20pt";
            }
            outerStoryContainer.style.height = "auto";
            outerStoryContainer.style.width = "auto";
            outerStoryContainer.style.top = "100px";
            outerStoryContainer.style.left = "300px";
            outerStoryContainer.style.overflow = "hidden";
            outerStoryContainer.style.zIndex = "50";
            outerStoryContainer.style.opacity = 1;
            currentImageIndex = (currentImageIndex + 1) % images.length;
            storyImage.src = images[currentImageIndex];
            storyImage.style.opacity = 1;
            isImageFadedOut = false;
            console.log(currentImageIndex);
        } else if (currentImageIndex === 6) {
            waitingForChildChange = true;
            var choice = document.getElementsByClassName("choice");
            for (let i = 0; i < choice.length; i++){
                choice[i].style.textAlign = "left";
                choice[i].style.padding = "0";
                choice[i].style.maxWidth = "500px";
                choice[i].style.lineHeight = "0.5em";
                choice[i].childNodes[0].style.fontSize = "10pt";
            }
            story.style.background = "none";
            var storyText = story.getElementsByTagName("p");
            for (let i = 0; i < storyText.length; i++){
                storyText[i].style.fontSize = "20pt";
            }
            outerStoryContainer.style.height = "auto";
            outerStoryContainer.style.width = "auto";
            outerStoryContainer.style.top = "80px";
            outerStoryContainer.style.left = "180px";
            outerStoryContainer.style.overflow = "hidden";
            outerStoryContainer.style.zIndex = "50";
            outerStoryContainer.style.opacity = 1;
            currentImageIndex = (currentImageIndex + 1) % images.length;
            storyImage.src = images[currentImageIndex];
            storyImage.style.opacity = 1;
            isImageFadedOut = false; // Reset this flag
            console.log(currentImageIndex);
        }   else if (currentImageIndex === 7) {
            waitingForChildChange = true;
            var choice = document.getElementsByClassName("choice");
            for (let i = 0; i < choice.length; i++){
                choice[i].style.textAlign = "left";
                choice[i].style.padding = "0";
                choice[i].style.maxWidth = "500px";
                choice[i].style.lineHeight = "0.5em";
                choice[i].childNodes[0].style.fontSize = "10pt";
            }
            story.style.background = "none";
            var storyText = story.getElementsByTagName("p");
            for (let i = 0; i < storyText.length; i++){
                storyText[i].style.fontSize = "20pt";
            }
            outerStoryContainer.style.height = "auto";
            outerStoryContainer.style.width = "auto";
            outerStoryContainer.style.top = "80px";
            outerStoryContainer.style.left = "180px";
            outerStoryContainer.style.overflow = "hidden";
            outerStoryContainer.style.zIndex = "50";
            outerStoryContainer.style.opacity = 1;
            currentImageIndex = (currentImageIndex + 1) % images.length;
            storyImage.src = images[currentImageIndex];
            storyImage.style.opacity = 1;
            isImageFadedOut = false; // Reset this flag
            console.log(currentImageIndex);
        }   else if (currentImageIndex === 8) {
            waitingForChildChange = true;
            var choice = document.getElementsByClassName("choice");
            for (let i = 0; i < choice.length; i++){
                choice[i].style.textAlign = "left";
                choice[i].style.padding = "0";
                choice[i].style.maxWidth = "500px";
                choice[i].style.lineHeight = "0.5em";
                choice[i].childNodes[0].style.fontSize = "10pt";
            }
            story.style.background = "none";
            var storyText = story.getElementsByTagName("p");
            for (let i = 0; i < storyText.length; i++){
                storyText[i].style.fontSize = "20pt";
            }
            outerStoryContainer.style.height = "auto";
            outerStoryContainer.style.width = "auto";
            outerStoryContainer.style.top = "80px";
            outerStoryContainer.style.left = "180px";
            outerStoryContainer.style.overflow = "hidden";
            outerStoryContainer.style.zIndex = "50";
            outerStoryContainer.style.opacity = 1;
            currentImageIndex = (currentImageIndex + 1) % images.length;
            storyImage.src = images[currentImageIndex];
            storyImage.style.opacity = 1;
            isImageFadedOut = false; // Reset this flag
            console.log(currentImageIndex);
        }   else if (currentImageIndex === 10) {
            waitingForChildChange = true;
            outerStoryContainer.removeAttribute('style');
            outerStoryContainer.style.zIndex = "50";
            outerStoryContainer.style.opacity = 1;
            currentImageIndex = 10;
            storyImage.src = images[currentImageIndex];
            storyImage.style.opacity = 0;
            waitingForChildChange = true;
            isImageFadedOut = false; // Reset this flag
            console.log(currentImageIndex);
        }   else if(currentImageIndex === 11){
            // Normal progression
            currentImageIndex = 13;
            storyImage.src = images[currentImageIndex];
            storyImage.style.opacity = 1;
            outerStoryContainer.removeAttribute('style');
            var choice = document.getElementsByClassName("choice");
            for (let i = 0; i < choice.length; i++){
                choice[i].style.textAlign = "left";
                choice[i].style.padding = "0";
                choice[i].style.maxWidth = "500px";
                choice[i].style.lineHeight = "0.5em";
                choice[i].childNodes[0].style.fontSize = "10pt";
            }
            story.style.background = "none";
            var storyText = story.getElementsByTagName("p");
            for (let i = 0; i < storyText.length; i++){
                storyText[i].style.fontSize = "20pt";
            }
            outerStoryContainer.style.height = "auto";
            outerStoryContainer.style.width = "auto";
            outerStoryContainer.style.top = "100px";
            outerStoryContainer.style.left = "300px";
            outerStoryContainer.style.overflow = "hidden";
            outerStoryContainer.style.zIndex = "50";
            outerStoryContainer.style.opacity = 1;
            waitingForChildChange = true;
            isImageFadedOut = false;
            console.log(currentImageIndex);
        }   else if(currentImageIndex === 12){
            // Normal progression
            currentImageIndex = 13;
            storyImage.src = images[currentImageIndex];
            storyImage.style.opacity = 1;
            outerStoryContainer.removeAttribute('style');
            var choice = document.getElementsByClassName("choice");
            for (let i = 0; i < choice.length; i++){
                choice[i].style.textAlign = "left";
                choice[i].style.padding = "0";
                choice[i].style.maxWidth = "500px";
                choice[i].style.lineHeight = "0.5em";
                choice[i].childNodes[0].style.fontSize = "10pt";
            }
            story.style.background = "none";
            var storyText = story.getElementsByTagName("p");
            for (let i = 0; i < storyText.length; i++){
                storyText[i].style.fontSize = "20pt";
            }
            outerStoryContainer.style.height = "auto";
            outerStoryContainer.style.width = "auto";
            outerStoryContainer.style.top = "100px";
            outerStoryContainer.style.left = "300px";
            outerStoryContainer.style.overflow = "hidden";
            outerStoryContainer.style.zIndex = "50";
            outerStoryContainer.style.opacity = 1;
            waitingForChildChange = true;
            isImageFadedOut = false;
            console.log(currentImageIndex);
        }            
        else {
            // Normal progression
            currentImageIndex = (currentImageIndex + 1) % images.length;
            storyImage.src = images[currentImageIndex];
            storyImage.style.opacity = 1;
            outerStoryContainer.removeAttribute('style');
            isImageFadedOut = false;
            console.log(currentImageIndex);
            
            // Reset container styling unless needed
            if (currentImageIndex !== 2 && currentImageIndex !== 6) {
                outerStoryContainer.style.opacity = 0;
                outerStoryContainer.style.zIndex = "0";
            }
        }
    }, 1000);
});