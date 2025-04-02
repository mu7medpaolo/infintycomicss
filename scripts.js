// All Comics Data
const comicsData = {
  featured: [
      { img: "imags comics/Doom's Division.jpg", title: "Doom's Division (2025) ", link: "sam.html" },
      { img: "imags comics/Deadpool Wolverine.jpg", title: "Deadpool/Wolverine (2025) ", link: "dare.html" },
      { img: "imags comics/Daredevil Cold Day in Hell.jpg", title:"Daredevil: Cold Day in Hell (2025)", link: "red.html" }
  ],
  more: [
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
      { img: "imags comics/Daredevil Cold Day in Hell.jpg", title: "Daredevil: Cold Day in Hell (2025) #1", file: "https://www.mediafire.com/file/pziwjfgqxpmvwm6/Daredevil_-_Cold_Day_In_Hell_001_%25282025%2529_%2528Digital%2529_%2528Shan-Empire%2529.cbz/file" },  
      { img: "imags comics/Deadpool Wolverine.jpg", title: "Deadpool/Wolverine (2025) #1", file: "https://www.mediafire.com/file/x425ptborg3jsee/Deadpool-Wolverine_001_%25282025%2529_%2528Digital%2529_%2528Kileko-Empire%2529.cbz/file" }, 
      { img: "imags comics/Laura Kinney Wolverine.jpg", title: "Laura Kinney: Wolverine (2024) #1", file: "https://www.mediafire.com/file/06vjhkgi7lueruy/Laura_Kinney_-_Wolverine_001_%25282025%2529_%2528digital%2529_%2528Marika-Empire%2529.cbz/file" },
      { img: "imags comics/deadpool2.jpg", title: "DEADPOOL/WOLVERINE: WEAPON X-TRACTION (2029) #1", file: "https://www.mediafire.com/file/9se2iwydgo95wdc/Deadpool-Wolverine_-_Weapon_X-Traction_001_%25282025%2529_%2528Digital%2529_%2528Kileko-Empire%2529.cbz/file" }
  ],
  classics: [
      { img: "imags comics/Venom Lethal Protector (1993).jpg", title: "Venom: Lethal Protector (1993) #1", file: "https://www.mediafire.com/file/5kgi51m4507jtqy/Venom_-_Lethal_Protector_001_%2528Digital%2529_%2528AnPymGold_-_Empire%2529.cbz/file" },
      { img: "imags comics/Avengers (1963).jpg", title: "Avengers (1963) #1", file: "https://www.mediafire.com/file/ajbazmu9y8zwjg8/Avengers_%25281963%2529_%25231.pdf/file" },
      { img: "imags comics/xmen1963.jpg", title: "Uncanny X-Men (1963) #1", file: "https://www.mediafire.com/file/18nlfdegda2s00z/xmen1963%25231.pdf/file" },
      { img: "imags comics/the spider1963.jpg", title: "The Amazing Spider-Man (1963) #1", file: "https://www.mediafire.com/file/fri1adimlgv41gy/the_Amazing_Spider-Man_%25231.pdf/file" } 
  ]
};

// Combine all comics for search functionality
const allComics = [...comicsData.featured, ...comicsData.more, ...comicsData.classics];

// Initialize the page
document.addEventListener("DOMContentLoaded", function() {
  // Initialize slick carousel
  $('.news-carousel').slick({
      autoplay: true,
      autoplaySpeed: 10000,
      dots: true,
      arrows: false
  });

  // Render all comics sections
  renderComics(comicsData.featured, "featuredComicsContainer", false);
  renderComics(comicsData.more, "moreComicsContainer", true);
  renderComics(comicsData.classics, "classicsComicsContainer", true);

  // Dark mode toggle
  setupDarkMode();

  // Search functionality
  setupSearch();
});

// Render comics function
function renderComics(comics, containerId, isDownloadable = false) {
  const container = document.getElementById(containerId);
  container.innerHTML = ''; // Clear container first
  
  comics.forEach(comic => {
      const comicDiv = document.createElement("div");
      comicDiv.classList.add("comic");
      
      const link = isDownloadable ? comic.file : (comic.link || comic.file);
      const actionText = isDownloadable ? 'Download' : (comic.link ? 'View' : 'Download');
      
      comicDiv.innerHTML = `
          <a href="${link}" ${isDownloadable || !comic.link ? 'download' : ''}>
              <img src="${comic.img}" alt="${comic.title}" loading="lazy">
          </a>
          <div class="comic-buttons">
              <a href="${link}" ${isDownloadable || !comic.link ? 'download' : ''} class="button">
                  ${actionText} ${comic.title}
              </a>
          </div>
      `;
      container.appendChild(comicDiv);
  });
}

// Dark mode setup
function setupDarkMode() {
  const toggleButton = document.getElementById("dark-mode-toggle");
  const body = document.body;

  // Check for saved dark mode preference
  if (localStorage.getItem("darkMode") === "enabled") {
      body.classList.add("dark-mode");
  }

  // Toggle dark mode
  toggleButton.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      localStorage.setItem("darkMode", body.classList.contains("dark-mode") ? "enabled" : "disabled");
  });
}

// Search functionality
function setupSearch() {
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const searchResultsSection = document.getElementById("searchResultsSection");
  const searchResultsContainer = document.getElementById("searchResultsContainer");
  const allSections = document.querySelectorAll(".comics-section:not(#searchResultsSection)");

  function performSearch(query) {
      if (!query) {
          searchResultsSection.style.display = "none";
          allSections.forEach(section => {
              section.style.display = "block";
          });
          return;
      }

      const results = allComics.filter(comic => 
          comic.title.toLowerCase().includes(query.toLowerCase())
      );

      if (results.length > 0) {
          // Hide all other sections
          allSections.forEach(section => {
              section.style.display = "none";
          });
          
          // Show search results
          searchResultsSection.style.display = "block";
          renderComics(results, "searchResultsContainer", true);
      } else {
          alert("No comics found matching your search.");
      }
  }

  // Search on button click
  searchButton.addEventListener("click", function() {
      const query = searchInput.value.trim();
      performSearch(query);
  });

  // Search on Enter key
  searchInput.addEventListener("keyup", function(event) {
      if (event.key === "Enter") {
          performSearch(this.value.trim());
      }
  });
}

