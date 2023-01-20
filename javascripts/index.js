window.onload = async () => {
  document.querySelector("#main-container").style["max-with"] = `${window.visualViewport["width"]}px`;
  console.log("loaded");
  let buttons = document.querySelectorAll(".button-link");
  var container = document.querySelector("#sub-container");

  buttons.forEach((button) => {
    button.addEventListener("click", async () => {
      let target = button.textContent;
      target = target.trim().toLowerCase();
      let view = await (await fetch(`./partials/${target}.html`)).text();
      // history.pushState({},{},"home");
      container.innerHTML = view;
    });
  });
};
