const autoCompleteConfig = {
  dropdownList(movie) {
    //This is how to show an individual item in the dropdown list of the search box
    const imgsrc = movie.Poster === "N/A" ? "" : movie.Poster;
    return `
        <img src="${imgsrc}"   />
        ${movie.Title}  (${movie.Year})
    `;
  },

  searchBoxText(movie) {
    //what to backfill the searchbox with, when the user clicks on an item from the dropdown list.
    return movie.Title;
  },
  async fetchData(searchTerm) {
    // async function to fetch data using API
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        apikey: "602a48a8",
        s: searchTerm,
      },
    });

    if (response.data.Error) {
      return [];
    }
    return response.data.Search;
  },
};

createAutoComplete({
  //root is where the autoComplets is getting rendered to.
  ...autoCompleteConfig,
  root: document.querySelector("#left-autocomplete"),
  onDropdownSelect(movie) {
    //what to do when someone clicks on an item in the dropdownlist.
    document.querySelector(".tutorial").classList.add("is-hidden");
    onMovieSelect(movie, document.querySelector("#left-summary"), "left");
  },
});

createAutoComplete({
  //root is where the autoComplets is getting rendered to.
  ...autoCompleteConfig,
  root: document.querySelector("#right-autocomplete"),
  onDropdownSelect(movie) {
    //what to do when someone clicks on an item in the dropdownlist.
    document.querySelector(".tutorial").classList.add("is-hidden");
    onMovieSelect(movie, document.querySelector("#right-summary"), "right");
  },
});

let leftMovie;
let rightMovie;
const onMovieSelect = async (movie, summaryElement, side) => {
  //On clicking a movie from the dropdown list, search using the API and pass the response to movieTemplate() to be rendered onto the page.
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "602a48a8",
      i: movie.imdbID,
    },
  });
  summaryElement.innerHTML = movieTemplate(response);
  if (side === "left") {
    leftMovie = response.data;
  } else {
    rightMovie = response.data;
  }

  if (leftMovie && rightMovie) {
    runComparision();
  }
};

const runComparision = () => {
  const leftSideStats = document.querySelectorAll(
    "#left-summary .notification"
  );
  const rightSideStats = document.querySelectorAll(
    "#right-summary .notification"
  );

  leftSideStats.forEach((leftStat, index) => {
    const rightStat = rightSideStats[index];

    const leftSideValue = parseInt(leftStat.dataset.value);
    const rightSideValue = parseInt(rightStat.dataset.value);

    if (rightSideValue > leftSideValue) {
      leftStat.classList.remove("is-primary");
      leftStat.classList.add("is-warning");
      rightStat.classList.add("is-primary");
      rightStat.classList.remove("is-warning");
    } else {
      leftStat.classList.add("is-primary");
      leftStat.classList.remove("is-warning");
      rightStat.classList.remove("is-primary");
      rightStat.classList.add("is-warning");
    }
  });
};
const movieTemplate = (movieDetail) => {
  const dollars = parseInt(
    movieDetail.data.BoxOffice.replace(/\$/g, "").replace(/,/g, "")
  );
  const Metascore = parseInt(movieDetail.data.Metascore);
  const imdbRating = parseFloat(movieDetail.data.imdbRating);
  const imdbVotes = parseInt(movieDetail.data.imdbVotes.replace(/,/g, ""));

  const awards = movieDetail.data.Awards.split(" ").reduce((prev, word) => {
    const value = parseInt(word);
    if (isNaN(value)) {
      return prev;
    } else {
      return prev + value;
    }
  }, 0);

  //to draw HTML elements required to display movie details and populate it with data.
  return `
  <article class="media">
    <figure class="media-left">
     <p class="image">
      <img src="${movieDetail.data.Poster}" />
     </p>
    </figure>
 
   <div class="media-content">
      <div class="content">
        <h1>${movieDetail.data.Title}</h1>
        <h4>${movieDetail.data.Genre}</h4>
        <p>${movieDetail.data.Plot}</p>
    </div>
   </div>
  </article>
  <article data-value = ${awards} class="notification is-primary">
    <p class="titl">${movieDetail.data.Awards}</p>
    <p class="subtitle">Awards</p>
  </article>
  <article data-value = ${Metascore} class="notification is-primary">
    <p class="titl">${movieDetail.data.Metascore}</p>
    <p class="subtitle">Metascore</p>
  </article>
  <article data-value = ${dollars} class="notification is-primary">
    <p class="titl">${movieDetail.data.BoxOffice}</p>
    <p class="subtitle">Box Office</p>
  </article>
  <article data-value = ${imdbRating} class="notification is-primary">
    <p class="titl">${movieDetail.data.imdbRating}</p>
    <p class="subtitle">IMDB Rating</p>
  </article>
  <article data-value = ${imdbVotes} class="notification is-primary">
    <p class="titl">${movieDetail.data.imdbVotes}</p>
    <p class="subtitle">IMDB Votes</p>
  </article>
`;
};
