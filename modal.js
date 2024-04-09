const showButton = document.querySelector('#show-button');
const modalContent = document.querySelector('#modal-content');
const closeModal = document.querySelector('#close-modal');

showButton.addEventListener('click', () => {
    modalContent.show(); // Use showModal() to display the dialog
    document.body.style.overlow = 'hidden';
});

closeModal.addEventListener('click', () => {
    modalContent.close(); // Use close() to close the dialog
});
