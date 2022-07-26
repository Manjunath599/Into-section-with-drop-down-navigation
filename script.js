const feat = document.querySelector(".feat");
const comp = document.querySelector(".comp");

const features = document.querySelector(".features");
const company = document.querySelector(".company");
const main = document.querySelector("main");
const menu = document.querySelector(".menu");

feat.addEventListener("click", () => {

    features.classList.add("showlink");

    const img1 = document.querySelector(".arrowdown1");
    img1.setAttribute("src", "images/icon-arrow-up.svg");

    setTimeout(() => {
        features.classList.remove("showlink");
        img1.setAttribute("src", "images/icon-arrow-down.svg");

    }, 1000);

});

comp.addEventListener("click", () => {

    company.classList.add("showlink");

    const img2 = document.querySelector(".arrowdown2");
    img2.setAttribute("src", "images/icon-arrow-up.svg");

    setTimeout(() => {
        company.classList.remove("showlink");
        img2.setAttribute("src", "images/icon-arrow-down.svg")
    }, 1000);

});



menu.addEventListener("click", () => {

    const element = document.createElement("div");

    element.classList.add("sidebar-show");

    element.innerHTML = `<img class="close-menu" src="images/icon-close-menu.svg">
    <p class="options feature">Features <img class="arrowdown1" src="images/icon-arrow-down.svg" alt="">
    <div class="features">
    <p><img src="images/icon-todo.svg" alt="">Todo List</p>
    <p><img src="images/icon-calendar.svg" alt="">Calender</p>
    <p><img src="images/icon-reminders.svg" alt="">Remainder</p>
    <p><img src="images/icon-planning.svg" alt="">Planning</p>
  </div></p>
    <p class="options compan">Company <img class="arrowdown2" src="images/icon-arrow-down.svg" alt="">
    <div class="company">
    <p>History</p>
    <p>Our Team</p>
    <p>Blog</p>
  </div></p>
    <p class="options">Careers</p>
    <p class="options">About</p>
    <button class="btn-1 login-btn">Login</button>
        <button class="btn-2 reg-btn">Register</button>`

    const closeBtn = element.querySelector(".close-menu");
    const featuresBtn = element.querySelector(".feature");
    const companyBtn = element.querySelector(".compan");

    featuresBtn.addEventListener("click", () => {
        features.classList.add("showlink");
        featuresBtn.classList.add("features-click");

        const img1 = element.querySelector(".arrowdown1");
        img1.setAttribute("src", "images/icon-arrow-up.svg");

        setTimeout(() => {
            features.classList.remove("showlink");
            featuresBtn.classList.remove("features-click");
            img1.setAttribute("src", "images/icon-arrow-down.svg");

        }, 1000);


    });


    companyBtn.addEventListener("click", () => {
        company.classList.add("showlink");
        companyBtn.classList.add("company-click");

        const img1 = element.querySelector(".arrowdown2");
        img1.setAttribute("src", "images/icon-arrow-up.svg");

        setTimeout(() => {
            company.classList.remove("showlink");
            companyBtn.classList.remove("company-click");
            img1.setAttribute("src", "images/icon-arrow-down.svg");

        }, 1000);
    });

    closeBtn.addEventListener("click", () => {
        element.classList.add("sidebar-close");
    });

    main.appendChild(element);
});



