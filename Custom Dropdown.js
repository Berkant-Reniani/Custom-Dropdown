const selectedEl = document.getElementById("selected-box");
const itemList = document.getElementById("list");
const icon = document.getElementById("checked");
const items = document.querySelectorAll(".item");
const rotate = document.getElementById("button")


itemList.style.display = "none";
icon.style.display = "none";


selectedEl.addEventListener("click", () => {

    if (itemList.style.display === "none") {
        itemList.style.display = "block";
        rotate.style.transform = "rotate(180deg)";
    } else {
        itemList.style.display = "none";
        rotate.style.transform = "rotate(0deg)";
    }
});

items.forEach(item => {
    item.addEventListener("click", () => {

        rotate.style.transform = "rotate(0deg)";
        selectedEl.innerHTML = item.textContent;

        const rect = item.getBoundingClientRect();
        const listRect = item.parentElement.getBoundingClientRect();

        const topPos = rect.top - listRect.top + rect.height / 2;

        icon.style.top = `${topPos}px`;
        icon.style.display = "block";

        itemList.style.display = "none";
    });
});


