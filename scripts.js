$(document).ready(function(){
    $('.news-carousel').slick({
        autoplay: true,
        autoplaySpeed: 10000,
        dots: true,
        arrows: false
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const featuredComics = [
        { img: "imags comics/swcapa2025001_dc11.jpeg", title: "Sam Wilson, Captain America (2025)", link: "sam.html" },
        { img: "imags comics/clean.jpg", title: "Daredevil Facsimile Edition (2025)", link: "dare.html" },
        { img: "imags comics/clean (1).jpg", title: "Red Hulk (2025)", link: "red.html" }
    ];
    
    const moreComics = [
        { img: "imags comics/doctor.jpg", title: "Doctor Strange of Asgard (2025) #1", file: "https://www.mediafire.com/file/7q8b9efv6mlm2xd/doctor.cbz/file" },
        { img: "imags comics/webbllod.jpg", title: "WEB OF SPIDER-VERSE: NEW BLOOD (2025) #1", file: "https://www.mediafire.com/file/dshtw93uznt9f1r/Web_of_Spider-Verse_-_New_Blood_001_%25282025%2529_%2528Digital%2529_%2528dekabro-Empire%2529.cbz/file" },
        { img: "imags comics/doom.jpg", title: "One World Under Doom (2025) #1", file: "https://www.mediafire.com/file/rfvszrb3cz76e75/oneworlddoom.cbz/file" },
        { img: "imags comics/marvelholiday.jpg", title: "MARVEL HOLIDAY TALES TO ASTONISH (2024) #1", file: "https://www.mediafire.com/file/trllb5ok7oxp0af/Marvel_Holiday_Tales_To_Astonish_001_%25282025%2529_%2528Digital%2529_%2528Shan-Empire%2529.cbz/file" },
        { img: "imags comics/moonknight12.jpg", title: "Moon Knight – Fist of Khonshu (2024) #0", file: "https://www.mediafire.com/file/wdaycqdewwjkk6r/Moon_Knight_-_Fist_Of_Khonshu_000_%25282024%2529_%2528Digital%2529_%2528Shan-Empire%2529.cbz/file" },
        { img: "imags comics/deadpool2.jpg", title: "DEADPOOL/WOLVERINE: WEAPON X-TRACTION (2029) #1", file: "https://www.mediafire.com/file/9se2iwydgo95wdc/Deadpool-Wolverine_-_Weapon_X-Traction_001_%25282025%2529_%2528Digital%2529_%2528Kileko-Empire%2529.cbz/file" }
    ];

    const classicsComics = [
        { img: "imags comics/Venom Lethal Protector (1993).jpg", title: "Venom: Lethal Protector (1993) #1", link: "https://www.mediafire.com/file/5kgi51m4507jtqy/Venom_-_Lethal_Protector_001_%2528Digital%2529_%2528AnPymGold_-_Empire%2529.cbz/file" },
        { img: "imags comics/Avengers (1963).jpg", title: "Avengers (1963) #1", link: "https://www.mediafire.com/file/ajbazmu9y8zwjg8/Avengers_%25281963%2529_%25231.pdf/file" },
        { img: "imags comics/xmen1963.jpg", title: "Uncanny X-Men (1963) #1", link: "https://www.mediafire.com/file/18nlfdegda2s00z/xmen1963%25231.pdf/file" },
        { img: "imags comics/the spider1963.jpg", title: "The Amazing Spider-Man (1963) #1", link: "https://www.mediafire.com/file/fri1adimlgv41gy/the_Amazing_Spider-Man_%25231.pdf/file" } 
    ];
    
    function renderComics(comics, containerId, isDownloadable = false) {
        const container = document.getElementById(containerId);
        comics.forEach(comic => {
            const comicDiv = document.createElement("div");
            comicDiv.classList.add("comic");
            comicDiv.innerHTML = `
                <a href="${isDownloadable ? comic.file : comic.link}" ${isDownloadable ? 'download' : ''}>
                    <img src="${comic.img}" alt="${comic.title}">
                </a>
                <div class="comic-buttons">
                    <a href="${isDownloadable ? comic.file : comic.link}" ${isDownloadable ? 'download' : ''} class="button">
                        ${isDownloadable ? 'Download ' : ''}${comic.title}
                    </a>
                </div>
            `;
            container.appendChild(comicDiv);
        });
    }

    renderComics(featuredComics, "featuredComicsContainer", false);
    renderComics(moreComics, "moreComicsContainer", true);
    renderComics(classicsComics, "classicsComicsContainer", false); // إضافة الكومكس الكلاسيكية
});