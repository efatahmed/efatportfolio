// LIGHT AND DARK MODE

const /**{node element} */ $themeBtn = document.querySelector("[data-theme-btn]");

const /**{node element} */ $HTML = document.documentElement;

let /** {BOOLEAN | STRING} */ isDark = window.matchMedia("(prefers-color-scheme)").matches;

if(sessionStorage.getItem("theme")){
  $HTML.dataset.theme = sessionStorage.getItem("theme");
} else{
  $HTML.dataset.theme = isDark ? "dark" : "light";
  
}

const changeTheme = () => {
  $HTML.dataset.theme = sessionStorage.getItem("theme") === "light" ? "dark" : "light";

  sessionStorage.setItem("theme", $HTML.dataset.theme)
}
$themeBtn.addEventListener("click", changeTheme);

// TAB// 
const/**{nodelist} */ $tabBtn = document.querySelectorAll("[data-tab-btn]");
let /**{nodeElement} */ [lastActiveTab] = document.querySelectorAll("[data-tab-content]");
let /**{nodeElement} */ [lastActiveTabBtn] = $tabBtn;


$tabBtn.forEach(item => {
  item.addEventListener("click", function() {

    lastActiveTab.classList.remove("active");
    lastActiveTabBtn.classList.remove("active");

    const /**{nodeElement} */ $tabContent = document.querySelector(`[data-tab-content="${item.dataset.tabBtn}"]`);
    $tabContent.classList.add("active");
    this.classList.add("active");

    lastActiveTab = $tabContent;
    lastActiveTabBtn = this;

  });
});