const createAutoComplete = ({
  root,
  dropdownList,
  onDropdownSelect,
  searchBoxText,
  fetchData,
}) => {
  root.innerHTML = `
    <label><b>Search</b></label>
    <input class="input"></input>
    <div class ="dropdown">
        <div class ="dropdown-menu">
            <div class="dropdown-content results">
            </div>
        </div>
    </div>
`;

  //get data from API and populate the page
  const inputSearch = root.querySelector(".input");
  const dropdown = root.querySelector(".dropdown");
  const resultsWrapper = root.querySelector(".results");

  const onInput = async (e) => {
    const items = await fetchData(e.target.value);
    if (!items.length) {
      dropdown.classList.remove("is-active");
    }

    resultsWrapper.innerHTML = "";
    dropdown.classList.add("is-active");

    for (let item of items) {
      const options = document.createElement("a");

      options.classList.add("dropdown-item");
      options.innerHTML = dropdownList(item);

      //This should happen when you click an item on the search results dropdown.
      options.addEventListener("click", () => {
        inputSearch.value = searchBoxText(item);
        dropdown.classList.remove("is-active");
        onDropdownSelect(item);
      });
      resultsWrapper.appendChild(options);
    }
  };

  //to get the dropdown to close when clicked outside it
  document.addEventListener("click", (event) => {
    if (!root.contains(event.target)) {
      dropdown.classList.remove("is-active");
    }
  });

  //event listener added to the inputSearch searchbox which calls onInput function on userinput
  //debounce function found in utils.js
  inputSearch.addEventListener("input", debounce(onInput));
};
