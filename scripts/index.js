const initialCards = [
  {
    name: "lobster",
    link: "https://unsplash.com/photos/lobster-on-white-saucer-YeOMRwgvPv4",
  },
  {
    name: "oyster",
    link: "https://unsplash.com/photos/person-in-black-leather-jacket-holding-silver-fork-7q6pW_OJFx8",
  },
  { name: "bass", link: "https://unsplash.com/photos/A34kA5Xi_b4" },
  {
    name: "tuna",
    link: "https://unsplash.com/photos/gray-tuna-fish-BRnnJ6vVNdY",
  },
  {
    name: "Crab",
    link: "https://unsplash.com/photos/brown-and-white-crab-J3_ylL4__2U",
  },
  {
    name: "Shrimp",
    link: "https://unsplash.com/photos/pile-of-shrimps-r4QVfQtytQ4",
  },
];

console.log(initialCards);

const profileEditButton = document.querySelector(".profile__edit");

const editProfileModal = document.querySelector("#edit-profile-modal");

const modalExitButton = document.querySelector(".modal__close-btn");

function openModal() {
  editProfileModal.classList.add("modal_opened");
}

function closeModal() {
  editProfileModal.classList.remove("modal_opened");
}

profileEditButton.addEventListener("click", openModal);

modalExitButton.addEventListener("click", closeModal);
