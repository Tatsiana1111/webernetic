"use strict";
document.addEventListener('DOMContentLoaded', function () {
    var _a, _b;
    var modal = document.getElementById('modal');
    var overlay = document.createElement('div');
    var openModalBtn = document.getElementById('open-modal-btn');
    var closeModalBtn = document.getElementById('close-modal-btn');
    var loginForm = document.getElementById('login-form');
    overlay.className = 'modal-overlay';
    document.body.appendChild(overlay);
    var openModal = function () {
        modal.style.display = 'block';
        overlay.style.display = 'block';
    };
    var closeModal = function () {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    };
    var outsideClick = function (event) {
        if (event.target === overlay) {
            closeModal();
        }
    };
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    var handleSubmit = function (event) {
        event.preventDefault();
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var remember = document.getElementById('remember').checked;
        var formData = "\n            Email/Phone: ".concat(email, "\n            Password: ").concat(password, "\n            Remember me: ").concat(remember ? 'Yes' : 'No', "\n        ");
        alert(formData);
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        document.getElementById('remember').checked = false;
        closeModal();
    };
    openModalBtn.addEventListener('click', openModal);
    closeModalBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', outsideClick);
    loginForm.addEventListener('submit', handleSubmit);
    (_a = document.querySelector('.signup-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        alert('Кнопка регистрации');
    });
    (_b = document.querySelector('.recovery')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
        alert('Кнопка восстановления');
    });
});
