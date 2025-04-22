/**** front end code****/
const response = await fetch("https://example.org/post", {
    method: "POST",
    body: JSON.stringify({ username: "tom_1" }),
    headers: {
      "Content-Type": "application/json",
    },
  })
  /**** ends *****/
  