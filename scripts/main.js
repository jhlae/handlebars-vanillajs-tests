// const URL = "https://jsonplaceholder.typicode.com/users";
const URL = "scripts/users.json";
const HBS_TEMPLATE = "scripts/handlebars/templates/userList.hbs";

// Fetch the contents from json file
let init = async () => {
  await fetch(URL).then(res => res.json()).then(data => {
    cb(data);
  })
  .catch(function() {
    console.log("Error");
  });
}

// Callback function for fetching the HBS template and compiling it
let cb = async (data) => {
  await fetch(HBS_TEMPLATE)
    .then(res => res.text())
    .then(template => {
      let tpl = Handlebars.compile(template);
      let target = document.getElementById("users-list");
      let usersList = tpl(data);
      target.innerHTML = usersList;
    })
  .catch(function() {
    console.log("Error");
  });
}

init();