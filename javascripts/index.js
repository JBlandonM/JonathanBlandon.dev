window.onload = async () => {
  document.querySelector("#main-container").style[
    "max-with"
  ] = `${window.visualViewport["width"]}px`;
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
      let parser = new DOMParser();
      view = parser.parseFromString(view, "text/html");
      const projectElement = view.querySelector(".project");
      projectElement.addEventListener("click", () => {
        console.log(1);
        // let answer =  redirectPrompt(
        //   "Redirecting to Play Guess Project, is ok?"
        // );
        // if (answer) {
        //   window.location.href = "https://playguess.onrender.com";
        // }
      });
    });
  });

  // const projectElement = await document.querySelectorAll(".project")
  // console.log(projectElement);
  // projectElement.forEach((button)=>{
  //   console.log(3);
  //   console.log(button.className);
  // })
  function redirectPrompt(message = "message") {
    return window.confirm(message);
  }
  function redirect() {
    window.alert("Jonathan");
    console.log("object");
    // window.location.href = "https://playguess.onrender.com";
  }
};
