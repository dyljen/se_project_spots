const initialCards = [
  {
    name: "Lobster",
    link: "https://images.unsplash.com/photo-1559814048-149b70765d47?q=80&w=2624&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Oyster",
    link: "https://images.unsplash.com/photo-1616977782967-a1859e09b014?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Bass",
    link: "https://images.unsplash.com/photo-1722797657635-8a57ebd1d757?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Tuna",
    link: "https://images.unsplash.com/photo-1566177229701-8895c29b9c68?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Crab",
    link: "https://images.unsplash.com/photo-1576727431775-2062c0234ca7?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Shrimp",
    link: "https://images.unsplash.com/photo-1578069744397-2f3942a02a7b?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const profileEditButton = document.querySelector(".profile__edit");

const editProfileModal = document.querySelector("#edit-profile-modal");

const modalExitButton = document.querySelector(".modal__close-btn");

const profileName = document.querySelector(".profile__title");

const nameInputModal = document.querySelector("#profile__name-input");

const profileDescription = document.querySelector(".profile__description");

const descriptionInputModal = document.querySelector(
  "#profile__description-input"
);

const editFormElement = document.querySelector(".modal__form");

const cardTemplate = document.querySelector("#card__template");

const cardsList = document.querySelector(".cards__list");

function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardNameEl = cardElement.querySelector(".card__title");
  const cardImageEl = cardElement.querySelector(".card__image");

  cardNameEl.textContent = data.name;

  cardImageEl.src = data.link;
  cardImageEl.alt = "${data.name} image";

  return cardElement;
}

function openModal() {
  nameInputModal.value = profileName.textContent;
  descriptionInputModal.value = profileDescription.textContent;
  editProfileModal.classList.add("modal_opened");
}

function closeModal() {
  editProfileModal.classList.remove("modal_opened");
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInputModal.value;
  profileDescription.textContent = descriptionInputModal.value;
  closeModal();
}

profileEditButton.addEventListener("click", openModal);

modalExitButton.addEventListener("click", closeModal);

editFormElement.addEventListener("submit", handleEditFormSubmit);

for (let i = 0; i < initialCards.length; i++) {
  const cardElement = getCardElement(initialCards[i]);
  cardsList.prepend(cardElement);
}
