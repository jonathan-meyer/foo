const rp = require("request-promise");

rp({
  uri: "https://swapi.co/api/people/1",
  json: true
})
  .then(data =>
    Promise.all(
      data.films.map(film =>
        rp({
          uri: film,
          json: true
        }).then(data => data.title)
      )
    )
  )
  .then(data => console.log(data));
