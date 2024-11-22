document.addEventListener("DOMContentLoaded", function () {
  const card = document.getElementById("imcCard");
  const cardBody = card.querySelector(".card-body");

  card.addEventListener("mouseenter", function () {
    cardBody.classList.add("expanded");
  });

  card.addEventListener("mouseleave", function () {
    cardBody.classList.remove("expanded");
  });
});
