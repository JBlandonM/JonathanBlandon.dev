window.onload = async () => {
  console.log("loaded");
  const response = await (await fetch("/works")).text();
  let buttons = document.querySelectorAll(".button-link");
  var container = document.querySelector("#sub-container");

  buttons.forEach((button) => {
    button.addEventListener("click", async () => {
      let target = button.textContent;
      target = target.trim().toLowerCase();
      const view = await (await fetch(`/${target}`)).text();
      container.innerHTML = view;
      window.location.assign("#jona");
    });
  });
};
