var data = [
    {
        img: "./KenaiFjords.png",
        country: "Alaska - USA",
        place: "Kenai Fjords Park",
        describe:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, expedita reprehenderit!",
    },
    {
        img: "./GlowwormCaves.png",
        country: "The North Island - New Zealand",
        place: "Glowworm Caves",
        describe:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, expedita reprehenderit!",
    },
    {
        img: "./Pamukkale.png",
        country: "Denizli - Turkey",
        place: "Pamukkale Castle",
        describe:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, expedita reprehenderit!",
    },
    {
        img: "./PragserWildsee.png",
        country: "South Tyrol - Italy",
        place: "Pragser Wildsee",
        describe:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, expedita reprehenderit!",
    },
    {
        img: "./KumamotoCastle.png",
        country: "Kumamoto - Japan",
        place: "Kumamoto Castle",
        describe:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, expedita reprehenderit!",
    },
    {
        img: "./SepulvedaDam.png",
        country: "California - USA",
        place: "Sepulveda Dam",
        describe:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, expedita reprehenderit!",
    },
];

const introduce = document.querySelector(".introduce");
const ordinalNumber = document.querySelector(".ordinal-number");
ordinalNumber.innerHTML = "";
introduce.innerHTML = "";
for (let i = 0; i < data.length; i++) {
    introduce.innerHTML += `
        <div class="wrapper">
            <span>
                <h5 class="country" style="--idx: 0">${data[i].country}</h5>
            </span>  
            <span>
                <h1 class="place" style="--idx: 1">${data[i].place}</h1>
            </span>
            <span>
                <p class="describe" style="--idx: 2">${data[i].describe}</p>
            </span>
            <span>
                <button class="discover-button" style="--idx: 3">Discover Now</button>
            </span>
        </div>
    `;
    ordinalNumber.innerHTML += `<h2>0${i + 1}</h2>`;
}
introduce.children[0].classList.add("active");
ordinalNumber.children[0].classList.add("active");

const thumbnailListWrapper = document.querySelector(".thumbnail-list .wrapper");
thumbnailListWrapper.innerHTML += `<div class="thumbnail zoom"><img src="${data[0].img}" alt=""></div>`;
for (let i = 1; i < data.length; i++) {
    thumbnailListWrapper.innerHTML += `<div class="thumbnail" style="--idx: ${
        i - 1
    }"><img src="${data[i].img}" alt=""></div>`;
}

var currentIndex = 0;
const nextBtn = document.querySelector(".navigation .next-button");
nextBtn.addEventListener("click", () => {
    nextBtn.disabled = true;
    var clone = thumbnailListWrapper.children[0].cloneNode(true);
    clone.classList.remove("zoom");
    thumbnailListWrapper.appendChild(clone);
    thumbnailListWrapper.children[1].classList.add("zoom");
    setTimeout(() => {
        thumbnailListWrapper.children[0].remove();
        nextBtn.disabled = false;
    }, 1000);
    for (let i = 2; i < thumbnailListWrapper.childElementCount; i++) {
        thumbnailListWrapper.children[i].style = `--idx: ${i - 2}`;
    }
    if (currentIndex < data.length - 1) {
        currentIndex++;
    } else currentIndex = 0;
    for (let i = 0; i < data.length; i++) {
        introduce.children[i].classList.remove("active");
        ordinalNumber.children[i].classList.remove("active");
    }
    introduce.children[currentIndex].classList.add("active");
    ordinalNumber.children[currentIndex].classList.add("active");
    ordinalNumber.children[currentIndex].textContent = `0${currentIndex + 1}`;
});
