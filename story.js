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
const backBtn = document.getElementById("back-btn");
const outerStoryContainer = document.getElementById("outerStoryContainer");
let counter = 0;

let waitingForChildChange = false;

const observer = new MutationObserver((mutations) => {
    mutations.forEach(() => {
        const paragraphs = story.getElementsByTagName("p");
        if (waitingForChildChange && currentImageIndex === 2) {
            advanceToImage4();
            continueBtn.style.display = "block";
        }
        if (waitingForChildChange && currentImageIndex === 5) {
            advanceToImage7();
            continueBtn.style.display = "block";
        }
        if (waitingForChildChange && currentImageIndex === 7) {
            advanceToImage9();
        }
        if (waitingForChildChange && currentImageIndex === 8) {
            advanceToImage10();
        }
        if (waitingForChildChange && currentImageIndex === 9) {
            advanceToImage11();
            continueBtn.style.display = "block";
        }
        if (waitingForChildChange && currentImageIndex === 10 && paragraphs[0].classList.contains('raised')) {
            advanceToImage13();
            continueBtn.style.display = "block";
        }
        if (waitingForChildChange && currentImageIndex === 10 && paragraphs[0].classList.contains('lowered')) {
            advanceToImage14();
            continueBtn.style.display = "block";
        }
        if (waitingForChildChange && currentImageIndex === 10 && paragraphs[0].classList.contains('equal')) {
            advanceToImage15();
            continueBtn.style.display = "block";
        }
        if (waitingForChildChange && currentImageIndex === 13) {
            advanceToImage16();
            continueBtn.style.display = "block";
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
        renderHotspots();
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
        renderHotspots();
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
        renderHotspots();
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
        renderHotspots();
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
        renderHotspots();
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
        renderHotspots();
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
        waitingForChildChange = false;
        isImageFadedOut = false;
        console.log(currentImageIndex);
        renderHotspots();
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
        waitingForChildChange = false;
        isImageFadedOut = false;
        console.log(currentImageIndex);
        renderHotspots();
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
        waitingForChildChange = false;
        isImageFadedOut = false;
        console.log(currentImageIndex);
        renderHotspots();
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

    if (hotspotContainer.children.length > 0) {
        hotspotContainer.innerHTML = "";
    }
    
    setTimeout(() => {
        if (currentImageIndex === 2) {
            // First click on image3
            waitingForChildChange = true;
            outerStoryContainer.style.zIndex = "50";
            outerStoryContainer.style.opacity = 1;
            console.log(currentImageIndex);
            if (hotspotContainer.children.length > 0) {
                hotspotContainer.innerHTML = "";
            }
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
        if(currentImageIndex != 0){
            backBtn.style.display = "block";
        } 
        if(currentImageIndex === 0){
            backBtn.style.display = "none";
        }
        if(waitingForChildChange){
            continueBtn.style.display = "none";
            backBtn.style.display = "none";
        }
        if ([2, 5, 7, 8, 9, 10, 13].includes(Math.max(currentImageIndex -1, 0))) {
            backBtn.style.display = "none";
        };
        closeInfoPopup();
        renderHotspots();
        if (currentImageIndex === 2) {
            counter++;
            if (counter === 2){
                if (hotspotContainer.children.length > 0) {
                    hotspotContainer.innerHTML = "";
                }
            }
        }
        console.log(counter);
    }, 1000);
});

// new additions

backBtn.addEventListener("click", () => {
    if (currentImageIndex === 0) return; // No going back from the first image

    // Optional: prevent going back during wait states
    if (waitingForChildChange && [2, 5, 7, 8, 9, 10, 13].includes(currentImageIndex)) return;
    if ([2, 5, 7, 8, 9, 10, 13].includes(Math.max(currentImageIndex -1, 0))) return;
    if ([2, 5, 7, 8, 9, 10, 13].includes(Math.max(currentImageIndex -2, 0))) {
        backBtn.style.display = "none";
    };
    storyImage.style.opacity = 0;

    setTimeout(() => {
        // Step backward safely
        if(waitingForChildChange){
            backBtn.style.display = "none";
        }
        if(currentImageIndex === 1){
            backBtn.style.display = "none";
        }
        currentImageIndex = Math.max(currentImageIndex - 1, 0);
        storyImage.src = images[currentImageIndex];
        storyImage.style.opacity = 1;
        isImageFadedOut = false;
        console.log("Back to:", currentImageIndex);

        // Reset state
        waitingForChildChange = false;
        outerStoryContainer.style.opacity = 0;
        outerStoryContainer.style.zIndex = "0";

        // Re-render hotspots or content if needed
        renderHotspots();

    }, 1000);
});



let infoModeEnabled = true;

const infoBtn = document.getElementById("toggle-info-mode");
const hotspotContainer = document.getElementById("info-hotspots");

infoBtn.addEventListener("click", () => {
  infoModeEnabled = !infoModeEnabled;
  infoBtn.textContent = infoModeEnabled ? "Exit Info Mode" : "Info Mode";
  renderHotspots();
});

const infoHotspots = {
  2: [
    {
    x: 80, y: 50, width: 40, height: 40,
    title: "Cheap Key websites",
    description: "You might have heard of Cheap Key websites, but here's a quick refresher.",
    link: "https://www.howtogeek.com/are-game-cd-key-sites-safe-or-legal/"
    }
  ],
  3: [
    {
    x: 80, y: 50, width: 40, height: 40,
    title: "Game developers",
    description: "Now that you're playing as a game developer, lets give you some insight into what that entails.",
    link: "https://targetjobs.co.uk/careers-advice/job-descriptions/video-game-developer-job-description"
    }
  ],
  4: [
    {
      x: 80, y: 50, width: 40, height: 40,
      title: "Game Pricing",
      description: "Game prices might seem simple, but there's a multitude of factors that are looked at when deciding on a price.",
      link: "https://xsolla.com/blog/how-to-set-the-right-price-for-your-game"
    }
  ],
  6: [
    {
      x: 80, y: 50, width: 40, height: 40,
      title: "Video Game Piracy",
      description: "Getting free games might sound like a good idea, but it can have some very unintended consequences.",
      link: "33rdsquare.com/games/meaning/is-pirating-games-legal-an-in-depth-look/"
    }
  ],
  10: [
    {
      x: 80, y: 50, width: 40, height: 40,
      title: "Regional Pricing",
      description: "Regional pricing is the act of adjusting prices to their respective regions. While this sounds like a great solution for inequality, sadly, there's factors like inflation, piracy and cheap keys that influence this.",
      link: "https://ramzvpn.com/blog/en/how-steams-regional-pricing-affects-gamers-worldwide/"
    }
  ],
  14: [
    {
      x: 80, y: 50, width: 40, height: 40,
      title: "The effect of properly adjusting prices",
      description: "Lets have a look at what can happen when prices are adjusted properly.",
      link: "https://www.youtube.com/shorts/lSofMoSdMqw"
    }
  ],
  15: [
    {
      x: 80, y: 50, width: 40, height: 40,
      title: "Too Good to Be True?",
      description: "Low prices may seem appealing, but there's usually an invisible effect.",
      link: "https://www.reddit.com/r/Steam/wiki/dangersofkeyresellers/"
    }
  ]
};

function renderHotspots() {
  hotspotContainer.innerHTML = "";
  if (!infoModeEnabled || !infoHotspots[currentImageIndex]) return;

  hotspotContainer.style.pointerEvents = "";

  infoHotspots[currentImageIndex].forEach(h => {
    const hotspot = document.createElement("div");
    hotspot.className = "hotspot";
    hotspot.style.right = `${h.x}px`;
    hotspot.style.top = `${h.y}px`;
    hotspot.style.width = `${h.width}px`;
    hotspot.style.height = `${h.height}px`;

    hotspot.addEventListener("click", (e) => {
      e.stopPropagation();
      showInfoPopup(h);
    });
    hotspotContainer.appendChild(hotspot);
    if(waitingForChildChange){
        closeInfoPopup();
    }
    console.log(currentImageIndex);
    
  });
}

function showInfoPopup(h) {
  document.getElementById("popup-title").textContent = h.title;
  document.getElementById("popup-desc").textContent = h.description;
  document.getElementById("popup-link").href = h.link;
  document.getElementById("info-popup").style.display = "block";
}

function closeInfoPopup() {
  document.getElementById("info-popup").style.display = "none";
}

// Call renderHotspots() after each panel change
// If you have a `showNext()` function, add this line inside it:
renderHotspots();
