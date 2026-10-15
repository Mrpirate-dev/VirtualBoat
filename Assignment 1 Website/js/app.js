const games = [
  {
    id: "assetto-corsa",
    title: "Assetto Corsa",
    genre: "Racing",
    style: "Driving simulation",
    artClass: "racing-art",
    images: [
      {
        src: "images/assetto-corsa/assetto-blue-hypercar.png",
        alt: "Blue hypercar cruising beside the coast."
      },
      {
        src: "images/assetto-corsa/assetto-white-sports-car.png",
        alt: "White sports car speeding along a circuit."
      },
      {
        src: "images/assetto-corsa/assetto-track-drift.png",
        alt: "A pack of cars drifting around a race circuit."
      },
      {
        src: "images/assetto-corsa/assetto-night-race.png",
        alt: "Cars racing together on a wet track at night."
      }
    ],
    description: "A driving simulator for players who enjoy focusing on car handling, track time, and the details of a race."
  },
  {
    id: "forza-horizon-6",
    title: "Forza Horizon 6",
    genre: "Racing",
    style: "Open-world racing",
    artClass: "forza-art",
    images: [
      {
        src: "images/forza/forza-drift.jpg",
        alt: "Cars drifting together on a road."
      },
      {
        src: "images/forza/forza-car-meet.jpg",
        alt: "A group of customized cars gathered at a meet."
      },
      {
        src: "images/forza/forza-coastal-cars.jpg",
        alt: "Customized cars lined up beside the coast at sunset."
      }
    ],
    description: "An open-world racing pick for players who want to explore, collect cars, and take on road events."
  },
  {
    id: "counter-strike-2",
    title: "Counter-Strike 2",
    genre: "Shooter",
    style: "Tactical team shooter",
    artClass: "shooter-art",
    images: [
      {
        src: "images/counter-strike-2/counter-strike-2-match.jpg",
        alt: "A Counter-Strike 2 player posing alongside a large yellow chick in-game."
      }
    ],
    description: "A team-based tactical shooter where communication, careful aim, and round-by-round decisions matter."
  },
  {
    id: "arc-raiders",
    title: "ARC Raiders",
    genre: "Shooter",
    style: "Co-op extraction shooter",
    artClass: "arc-art",
    images: [
      {
        src: "images/arc-raiders/arc-raiders-key-art.jpg",
        alt: "ARC Raiders key art featuring three raiders."
      }
    ],
    description: "A cooperative action shooter focused on exploring dangerous spaces, working as a team, and making it back safely."
  }
];

const requestedGenre = new URLSearchParams(window.location.search).get("genre");
let activeGenre = requestedGenre === "racing" || requestedGenre === "shooter" ? requestedGenre : "all";
let searchTerm = "";

function createGameCard(game) {
  return `
    <div class="col-sm-6 col-xl-3 game-card" data-game-id="${game.id}" data-genre="${game.genre.toLowerCase()}" data-search="${game.title.toLowerCase()} ${game.genre.toLowerCase()} ${game.style.toLowerCase()}">
      <article class="card">
        <div class="game-art ${game.artClass}${game.images ? " has-image" : ""}" aria-hidden="true">
          ${game.images ? `<img class="game-art-image" src="${game.images[0].src}" alt="">` : ""}
          <span class="game-art-label">${game.genre} / VirtualBoat</span>
        </div>
        <div class="card-body">
          <span class="genre-badge align-self-start mb-3">${game.genre}</span>
          <h3 class="card-title">${game.title}</h3>
          <p class="card-text">${game.style}</p>
          <button class="btn btn-outline-success game-details-button" type="button" data-game-id="${game.id}">View details</button>
        </div>
      </article>
    </div>`;
}

function renderGameCards() {
  const featuredGames = document.querySelector("#featuredGames");
  const gamesGrid = document.querySelector("#gamesGrid");

  if (featuredGames) {
    featuredGames.innerHTML = games.slice(0, 4).map(createGameCard).join("");
  }

  if (gamesGrid) {
    gamesGrid.innerHTML = games.map(createGameCard).join("");
  }
}

function updateGameCount(visibleCount) {
  const countElement = document.querySelector("#resultsCount");
  const emptyState = document.querySelector("#emptyState");

  if (countElement) {
    countElement.textContent = `${visibleCount} ${visibleCount === 1 ? "game" : "games"} shown`;
  }

  if (emptyState) {
    emptyState.classList.toggle("d-none", visibleCount !== 0);
  }
}

function filterGames() {
  let visibleCount = 0;
  const cards = window.jQuery ? window.jQuery(".game-card") : null;

  if (!cards) {
    return;
  }

  cards.each(function () {
    const card = window.jQuery(this);
    const matchesGenre = activeGenre === "all" || card.attr("data-genre") === activeGenre;
    const matchesSearch = card.attr("data-search").includes(searchTerm);
    const isVisible = matchesGenre && matchesSearch;

    card.toggleClass("d-none", !isVisible);
    if (isVisible) {
      visibleCount += 1;
    }
  });

  updateGameCount(visibleCount);
}

function showGameDetails(gameId) {
  const game = games.find((item) => item.id === gameId);
  const modalElement = document.querySelector("#gameDetailsModal");

  if (!game || !modalElement || !window.bootstrap) {
    return;
  }

  document.querySelector("#gameDetailsGenre").textContent = game.genre;
  document.querySelector("#gameDetailsTitle").textContent = game.title;
  document.querySelector("#gameDetailsDescription").textContent = game.description;
  document.querySelector("#gameDetailsStyle").textContent = game.style;
  const gallery = document.querySelector("#gameDetailsGallery");
  gallery.innerHTML = game.images
    ? game.images.map((image) => `
      <div class="col-12 col-md-4">
        <img class="game-gallery-image" src="${image.src}" alt="${image.alt}">
      </div>`).join("")
    : "";
  gallery.classList.toggle("d-none", !game.images);
  window.bootstrap.Modal.getOrCreateInstance(modalElement).show();
}

function handleSignup(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const nameInput = document.querySelector("#playerName");
  const gamerTagInput = document.querySelector("#gamerTag");
  const favoriteGameInput = document.querySelector("#favoriteGame");
  const feedback = document.querySelector("#formFeedback");
  const name = nameInput.value.trim();
  const gamerTag = gamerTagInput.value.trim();
  const favoriteGame = favoriteGameInput.value;
  let isValid = true;

  nameInput.classList.toggle("is-invalid", name.length < 2);
  gamerTagInput.classList.toggle("is-invalid", gamerTag.length < 3 || gamerTag.length > 20);
  favoriteGameInput.classList.toggle("is-invalid", favoriteGame === "");

  if (name.length < 2 || gamerTag.length < 3 || gamerTag.length > 20 || favoriteGame === "") {
    isValid = false;
  }

  if (!isValid) {
    feedback.textContent = "Please check the highlighted fields and try again.";
    return;
  }

  const confirmation = `Welcome, ${name}! Your gamer tag is ${gamerTag}. You picked ${favoriteGame}.`;
  feedback.textContent = confirmation;
  document.querySelector("#signupToastMessage").textContent = `You're on the crew list, ${name}.`;
  window.bootstrap.Toast.getOrCreateInstance(document.querySelector("#signupToast")).show();
  form.reset();
}

renderGameCards();

document.querySelectorAll("[data-filter]").forEach((button) => {
  const isActive = button.dataset.filter === activeGenre;
  button.classList.toggle("active", isActive);
  button.setAttribute("aria-pressed", String(isActive));
});

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    activeGenre = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    });
    filterGames();
  });
});

if (document.querySelector("#gamesGrid")) {
  filterGames();
}

if (window.jQuery) {
  window.jQuery("#gameSearch").on("input", function () {
    searchTerm = window.jQuery(this).val().trim().toLowerCase();
    filterGames();
  });
}

document.querySelectorAll(".game-details-button").forEach((button) => {
  button.addEventListener("click", () => {
    showGameDetails(button.dataset.gameId);
  });
});

const signupForm = document.querySelector("#signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", handleSignup);
}
