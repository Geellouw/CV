document.getElementById("years").innerHTML = parseInt(new Date().getFullYear()) - 2017;

const button = document.querySelector("button");

button.addEventListener("click", () => {
  window.print();
});

const pageCounters = document.querySelectorAll(".page-counter");
const totalPages = pageCounters.length;

pageCounters.forEach((counter, index) => {
    const currentPageSpan = counter.querySelector(".current-page");
    const totalPagesSpan = counter.querySelector(".total-pages");

    if (currentPageSpan && totalPagesSpan) {
        currentPageSpan.textContent = index + 1;
        totalPagesSpan.textContent = totalPages;
    }
});