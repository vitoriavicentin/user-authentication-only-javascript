function compare() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const modal = document.getElementById("myModal");
    const modalText = document.getElementById("modal-text");
    const closeBtn = document.getElementsByClassName("close")[0];

    const message = (username === password)
        ? "Username and password are the same!"
        : "Username and password are different.";

    showModal(modal, modalText, message);

    closeBtn.onclick = () => hideModal(modal);
    window.onclick = (event) => {
        if (event.target == modal) {
            hideModal(modal);
        }
    };
}

function showModal(modal, modalText, message) {
    modalText.textContent = message;
    modal.style.display = "block";
}

function hideModal(modal) {
    modal.style.display = "none";
}
