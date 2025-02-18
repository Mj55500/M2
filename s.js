function generatePassword(length, uppercase, lowercase, numbers, symbols) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let allowedChars = '';
    let password = '';

    if (uppercase) allowedChars += uppercaseChars;
    if (lowercase) allowedChars += lowercaseChars;
    if (numbers) allowedChars += numberChars;
    if (symbols) allowedChars += symbolChars;

    if (allowedChars === '') {
        alert('Выберите хотя бы один параметр!');
        return '';
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

// Получаем элементы из DOM
const lengthInput = document.getElementById('length');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const generateBtn = document.getElementById('generate-btn');
const passwordField = document.getElementById('password');
const copyBtn = document.getElementById('copy-btn');

// Обработчик кнопки "Сгенерировать"
generateBtn.addEventListener('click', function() {
    const length = parseInt(lengthInput.value);
    const uppercase = uppercaseCheckbox.checked;
    const lowercase = lowercaseCheckbox.checked;
    const numbers = numbersCheckbox.checked;
    const symbols = symbolsCheckbox.checked;

    const newPassword = generatePassword(length, uppercase, lowercase, numbers, symbols);
    passwordField.value = newPassword;
});

// Копирование пароля в буфер обмена
copyBtn.addEventListener('click', function() {
    if (passwordField.value) {
        navigator.clipboard.writeText(passwordField.value).then(() => {
            alert('Пароль скопирован в буфер обмена!');
        });
    }
});