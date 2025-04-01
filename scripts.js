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
        { img: "imags comics/Doom's Division.jpg", title: "Doom's Division (2025) #1", link: "sam.html" },
        { img: "imags comics/POOLUMINATI.jpg", title: "POOLUMINATI (2025) #1", link: "dare.html" },
        { img: "imags comics/Iron Man (2024).jpg", title: "Iron Man (2024)", link: "red.html" }
    ];
    
    const moreComics = [
        { img: "imags comics/doctor.jpg", title: "Doctor Strange of Asgard (2025) #1", file: "https://www.mediafire.com/file/7q8b9efv6mlm2xd/doctor.cbz/file" },
        { img: "imags comics/webbllod.jpg", title: "WEB OF SPIDER-VERSE: NEW BLOOD (2025) #1", file: "https://www.mediafire.com/file/dshtw93uznt9f1r/Web_of_Spider-Verse_-_New_Blood_001_%25282025%2529_%2528Digital%2529_%2528dekabro-Empire%2529.cbz/file" },
        { img: "imags comics/doom.jpg", title: "One World Under Doom (2025) #1", file: "https://www.mediafire.com/file/rfvszrb3cz76e75/oneworlddoom.cbz/file" },
        { img: "imags comics/marvelholiday.jpg", title: "MARVEL HOLIDAY TALES TO ASTONISH (2024) #1", file: "https://www.mediafire.com/file/trllb5ok7oxp0af/Marvel_Holiday_Tales_To_Astonish_001_%25282025%2529_%2528Digital%2529_%2528Shan-Empire%2529.cbz/file" },
        { img: "imags comics/moonknight12.jpg", title: "Moon Knight – Fist of Khonshu (2024) #0", file: "https://www.mediafire.com/file/wdaycqdewwjkk6r/Moon_Knight_-_Fist_Of_Khonshu_000_%25282024%2529_%2528Digital%2529_%2528Shan-Empire%2529.cbz/file" },
        { img: "imags comics/Iron Man (2024).jpg", title: "Iron Man (2024)#1", file: "https://www.mediafire.com/file/6kw9b68zu6u2c4y/Iron_Man_001_%25282024%2529_%2528Digital%2529_%2528Shan-Empire%2529.cbz/file" },
        { img: "imags comics/Marvel Rivals Infinity Comic.jpg", title: "Marvel Rivals Infinity Comic (2024) #1", file: "https://www.mediafire.com/file/6m1pebamnbu03e6/Marvel_Rivals_-_Infinity_Comic_001_%25282024%2529_%2528digital-mobile-Empire%2529.cbz/file" },
        { img: "imags comics/DOCTOR DOOM & ROCKET RACCOON.jpg", title: "DOCTOR DOOM & ROCKET RACCOON (2025) #1", file: "https://www.mediafire.com/file/vs5713dhroxfza3/Doctor_Doom_%2526_Rocket_Raccoon_001_%25282025%2529_%2528Digital%2529_%2528Shan-Empire%2529.cbz/file" },
        { img: "imags comics/bloodhunt.jpg", title: "Blood Hunt (2024) #1", file: "https://www.mediafire.com/file/o7ax4cft7g5o8a5/Blood_Hunt_-_Red_Band_001_%25282024%2529_%25284_covers%2529_%2528Digital%252Bscan%2529_%2528dekabro-Empire%2529.cbz/file" },
        { img: "imags comics/Aliens Vs. Avengers.jpg", title: "Aliens Vs. Avengers (2024) #1", file: "https://www.mediafire.com/file/3y5nqfz8yvgae0i/Aliens_vs._Avengers_001_%25282024%2529_%2528Digital%2529_%2528Shan-Empire%2529.cbz/file" },
        { img: "imags comics/clean.jpg", title: "Daredevil Facsimile Edition (2025)#1", file: "https://www.mediafire.com/file/5plk8pkx6pumng1/Daredevil_No._1_Facsimile_Edition_001_%25282025%2529_%2528c2c%2529_%2528digital%2529_%2528Marika-Empire%2529.pdf/file" },
        { img: "imags comics/RED HULK.jpg", title: "RED HULK #1", file: "https://www.mediafire.com/file/afjtzprp7fxwgfg/Red_Hulk_001_%25282025%2529_%2528Digital%2529_%2528Shan-Empire%2529.cbz/file" },
        { img: "imags comics/swcapa2025001_dc11.jpeg", title: "Sam Wilson, Captain America (2025)#1", file: "https://www.mediafire.com/file/2x7c0dx7irrvu34/Sam_Wilson_-_Captain_America_001_%25282025%2529_%2528Digital%2529_%2528Shan-Empire%2529.cbz/file" },
        { img: "imags comics/Doom's Division.jpg", title: "Doom's Division (2025) #1", file: "https://www.mediafire.com/file/7v21no5q2h8lteu/Doom%2527s_Division_001_%25282025%2529_%2528Digital%2529_%2528Shan-Empire%2529.cbz/file" },
        { img: "imags comics/marvalzomb.jpg", title: "Marvel Zombies: Dawn of Decay (2024) #1", file: "https://www.mediafire.com/file/l10zfryoglmxsbd/Marvel_Zombies_-_Dawn_Of_Decay_001_%25282024%2529_%2528Digital%2529_%2528Shan-Empire%2529.cbz/file" },
        { img: "imags comics/Empyre Avengers.jpg", title: "Empyre Avengers (2020)", file: "https://www.mediafire.com/file/o03hrkrqgl6og5d/Empyre_000_-_Avengers_%25282020%2529_%2528Digital%2529_%2528Zone-Empire%2529.cbr/file" },
        { img: "imags comics/X-MANHUNT OMEGA.jpg", title: "X-MANHUNT OMEGA (2025) #1", file: "https://www.mediafire.com/file/jxovm9r4f3bjn74/X-Manhunt_Omega_001_%25282025%2529_%2528digital%2529_%2528Marika-Empire%2529.cbz/file" },
        { img: "imags comics/POOLUMINATI.jpg", title: "POOLUMINATI (2025) #1", file: "https://www.mediafire.com/file/1f96vcxw4m1xo27/Pooluminati_001_%25282025%2529_%2528Digital%2529_%2528Kileko-Empire%2529.cbz/file" },
        { img: "imags comics/Laura Kinney Wolverine.jpg", title: "Laura Kinney: Wolverine (2024) #1", file: "https://www.mediafire.com/file/06vjhkgi7lueruy/Laura_Kinney_-_Wolverine_001_%25282025%2529_%2528digital%2529_%2528Marika-Empire%2529.cbz/file" },
        { img: "imags comics/deadpool2.jpg", title: "DEADPOOL/WOLVERINE: WEAPON X-TRACTION (2029) #1", file: "https://www.mediafire.com/file/9se2iwydgo95wdc/Deadpool-Wolverine_-_Weapon_X-Traction_001_%25282025%2529_%2528Digital%2529_%2528Kileko-Empire%2529.cbz/file" }
    ];

    const classicsComics = [
        { img: "imags comics/Venom Lethal Protector (1993).jpg", title: "Venom: Lethal Protector (1993) #1", link: "https://www.mediafire.com/file/5kgi51m4507jtqy/Venom_-_Lethal_Protector_001_%2528Digital%2529_%2528AnPymGold_-_Empire%2529.cbz/file" },
        { img: "imags comics/Avengers (1963).jpg", title: "Avengers (1963) #1", link: "https://www.mediafire.com/file/ajbazmu9y8zwjg8/Avengers_%25281963%2529_%25231.pdf/file" },
        { img: "imags comics/xmen1963.jpg", title: "Uncanny X-Men (1963) #1", link: "https://www.mediafire.com/file/18nlfdegda2s00z/xmen1963%25231.pdf/file" },
        { img: "imags comics/the spider1963.jpg", title: "The Amazing Spider-Man (1963) #1", link: "https://www.mediafire.com/file/fri1adimlgv41gy/the_Amazing_Spider-Man_%25231.pdf/file" } 
    ];
    const ironmancomics = [
      { img: "imags comics/Iron Man (2024).jpg", title: "Iron Man (2024)#1", file: "https://www.mediafire.com/file/6kw9b68zu6u2c4y/Iron_Man_001_%25282024%2529_%2528Digital%2529_%2528Shan-Empire%2529.cbz/file" },
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
    renderComics(classicsComics, "classicsComicsContainer", false); 
});
document.addEventListener("DOMContentLoaded", function() {

    const toggleButton = document.getElementById("toggleCharacters");
    const charactersBar = document.getElementById("charactersBar");

    toggleButton.addEventListener("click", function() {
        if (charactersBar.style.display === "block") {
            charactersBar.style.display = "none";
        } else {
            charactersBar.style.display = "block";
        }
    });

    
    document.addEventListener("click", function(event) {
        if (!charactersBar.contains(event.target) && event.target !== toggleButton) {
            charactersBar.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {

  const ironmanComics = [
      {
          img: "imags comics/Iron Man (2024).jpg",
          title: "Iron Man (2024) #1",
          file: "https://www.mediafire.com/file/6kw9b68zu6u2c4y/Iron_Man_001_%25282024%2529_%2528Digital%2529_%2528Shan-Empire%2529.cbz/file"
      },
      {
          img: "imags comics/ironman2.jpg",
          title: "Iron Man #2",
          file: "#"
      }
  ];


  function renderComics(comics, containerId) {
      const container = document.getElementById(containerId);
      comics.forEach(comic => {
          const comicDiv = document.createElement("div");
          comicDiv.classList.add("comic");

          comicDiv.innerHTML = `
              <a href="${comic.file}" download>
                  <img src="${comic.img}" alt="${comic.title}">
              </a>
              <div class="comic-buttons">
                  <a href="${comic.file}" download class="button">Download ${comic.title}</a>
              </div>
          `;

          container.appendChild(comicDiv);
      });
  }

  renderComics(ironmanComics, "ironmancomicsContainer");
});
