fetch("https://swapi.dev/api/planets/")
  .then((response) => {
    if (!response.ok) throw new Error();
  })
  .catch((err) => {
    console.log("Something went wrong with fetch");
    console.log(err);
  });
