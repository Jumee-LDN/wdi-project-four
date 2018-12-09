// Our flash functions will have access to this object!
const flashMessage = {};

export function createFlashMessage(message, type) {
  flashMessage.message = message;
  flashMessage.type = type;
}

export function getFlashMessage() {
  return flashMessage;
}

export function clearFlashMessage() {
  flashMessage.message = null;
  flashMessage.type = null;
}
