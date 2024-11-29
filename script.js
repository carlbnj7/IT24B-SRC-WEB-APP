// ModalManager Class
class ModalManager {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);
    this.modalImg = document.getElementById("modal-img");
    this.modalDescription = document.getElementById("modal-description");

    // Bind the closeModal function to the window click
    window.addEventListener("click", (event) => {
      if (event.target === this.modal) {
        this.closeModal();
      }
    });
  }

  viewDetails(imageSrc, description) {
    this.modalImg.src = imageSrc;
    this.modalDescription.textContent = description;
    this.modal.style.display = "block";
  }

  closeModal() {
    this.modal.style.display = "none";
  }
}

// Initialize ModalManager
const modalManager = new ModalManager("modal");

// Attach event listeners for tabs
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", (event) => {
    const floorId = tab.getAttribute("data-floor-id");
    TabManager.openTab(event, floorId);
  });
});

// Attach event listener for modal close button, ensure it exists
const modalCloseButton = document.getElementById("modal-close");
if (modalCloseButton) {
  modalCloseButton.addEventListener("click", () => {
    modalManager.closeModal();
  });
}

// Example usage of viewDetails (link this to image click events)
document.querySelectorAll(".view-detail-btn").forEach(button => {
  button.addEventListener("click", () => {
    const imageSrc = button.getAttribute("data-image-src");
    const description = button.getAttribute("data-description");
    modalManager.viewDetails(imageSrc, description);
  });
});
