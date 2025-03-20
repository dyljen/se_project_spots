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
  {
    name: "Bridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },
];

const profileEditButton = document.querySelector(".profile__edit");

const editProfileModal = document.querySelector("#edit-profile-modal");

const profileExitButton = document.querySelector(".modal__close-btn");

const profileName = document.querySelector(".profile__title");

const nameInputModal = document.querySelector("#profile__name-input");

const profileDescription = document.querySelector(".profile__description");

const descriptionInputModal = document.querySelector(
  "#profile__description-input"
);

const cardModal = document.querySelector("#add-card-modal");

const cardModalCloseBtn = cardModal.querySelector(".modal__close-btn");

const cardModalBtn = document.querySelector(".profile__button");

const cardNameInput = cardModal.querySelector("#card-name-input");

const cardLinkInput = cardModal.querySelector("#card-link-input");

const editFormElement = document.querySelector(".modal__form");

const cardForm = cardModal.querySelector(".modal__form");

const addCardBtn = document.querySelector("#card-submit-button");

const cardTemplate = document.querySelector("#card__template");

const cardsList = document.querySelector(".cards__list");

const previewModal = document.querySelector("#preview-modal");

const previewModalCaptionEl = previewModal.querySelector(".modal__caption");

const previewModalImageEl = previewModal.querySelector(".modal__image");

const previewModalCloseBtn = previewModal.querySelector(
  ".modal__close-btn_type_preview"
);

function openModal(modal) {
  modal.classList.add("modal_opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInputModal.value;
  profileDescription.textContent = descriptionInputModal.value;
  closeModal(editProfileModal);
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const inputValues = { name: cardNameInput.value, link: cardLinkInput.value };
  const cardElement = getCardElement(inputValues);
  cardsList.prepend(cardElement);
  evt.target.reset();
  closeModal(cardModal);
}

function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardNameEl = cardElement.querySelector(".card__title");
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardLikeButton = cardElement.querySelector(".card__like-btn");
  const cardDeleteButton = cardElement.querySelector(".card__delete-btn");

  cardNameEl.textContent = data.name;

  cardImageEl.src = data.link;
  cardImageEl.alt = `${data.name} image`;

  cardLikeButton.addEventListener("click", () => {
    cardLikeButton.classList.toggle("card__like-btn_liked");
  });

  cardDeleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImageEl.addEventListener("click", () => {
    openModal(previewModal);
    previewModalImageEl.src = data.link;
    previewModalImageEl.alt = `${data.name} image`;
    previewModalCaptionEl.textContent = data.name;
  });

  return cardElement;
}

profileEditButton.addEventListener("click", () => {
  nameInputModal.value = profileName.textContent;
  descriptionInputModal.value = profileDescription.textContent;
  openModal(editProfileModal);
});

profileExitButton.addEventListener("click", () => {
  closeModal(editProfileModal);
});

cardModalBtn.addEventListener("click", () => {
  openModal(cardModal);
});

cardModalCloseBtn.addEventListener("click", () => {
  closeModal(cardModal);
});

previewModalCloseBtn.addEventListener("click", () => {
  closeModal(previewModal);
});

editFormElement.addEventListener("submit", handleEditFormSubmit);

initialCards.forEach((card) => {
  const cardElement = getCardElement(card);
  cardsList.append(cardElement);
});

cardForm.addEventListener("submit", handleAddCardSubmit);
