document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal') as HTMLElement;
    const overlay = document.createElement('div');
    const openModalBtn = document.getElementById('open-modal-btn') as HTMLElement;
    const closeModalBtn = document.getElementById('close-modal-btn') as HTMLElement;
    const loginForm = document.getElementById('login-form') as HTMLFormElement;

    overlay.className = 'modal-overlay';
    document.body.appendChild(overlay);


    const openModal = () => {
        modal.style.display = 'block';
        overlay.style.display = 'block';
    };

    const closeModal = () => {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    };

    const outsideClick = (event: MouseEvent) => {
        if (event.target === overlay) {
            closeModal();
        }
    };

    window.addEventListener('click', (event: MouseEvent) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    const handleSubmit = (event: Event) => {
        event.preventDefault();

        const email = (document.getElementById('email') as HTMLInputElement).value;
        const password = (document.getElementById('password') as HTMLInputElement).value;
        const remember = (document.getElementById('remember') as HTMLInputElement).checked;

        const formData = `
            Email/Phone: ${email}
            Password: ${password}
            Remember me: ${remember ? 'Yes' : 'No'}
        `;

        alert(formData);

        (document.getElementById('email') as HTMLInputElement).value = '';
        (document.getElementById('password') as HTMLInputElement).value = '';
        (document.getElementById('remember') as HTMLInputElement).checked = false;

        closeModal();
    };

    openModalBtn.addEventListener('click', openModal);
    closeModalBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', outsideClick);
    loginForm.addEventListener('submit', handleSubmit);

    document.querySelector('.signup-btn')?.addEventListener('click', () => {
        alert('Кнопка регистрации');
    });

    document.querySelector('.recovery')?.addEventListener('click', () => {
        alert('Кнопка восстановления');
    });
});