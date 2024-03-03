const input_decoder = document.querySelector('.input_encrypted__field');
const output_decoder = document.querySelector('.output_decrypted__field');
const tittle_hidden = document.querySelector('.tittle_decrypted__area');
const paragraph_hidden = document.querySelector('.decrypted_text__message___area');
const copy_button = document.querySelector('#copy_result');
const clear_button = document.querySelector('#clear_result');

function btnEncrypt() {
    const tittle_hidden = document.querySelector('.tittle_decrypted__area');
    const paragraph_hidden = document.querySelector('.decrypted_text__message___area');
    const encrypted_text = encrypt(input_decoder.value);
    output_decoder.value = encrypted_text;
    tittle_hidden.style.display = 'none';
    paragraph_hidden.style.display = 'none';
    input_decoder.value = "";
}

function encrypt(encryptedString) {
    
    let encryption_matrix = [
        ["e", "enter"], 
        ["i", "imes"], 
        ["a", "ai"], 
        ["o", "ober"], 
        ["u", "ufat"]
    ];

    encryptedString = encryptedString.toLowerCase();

    for (let i = 0; i < encryption_matrix.length; i++) {
        if (encryptedString.includes(encryption_matrix[i][0])) {
            encryptedString = encryptedString.replaceAll(encryption_matrix[i][0], encryption_matrix[i][1]);
        }    
    }
    return encryptedString;
}

function btnDecrypt() {
    const decrypted_text = decrypt(input_decoder.value);
    output_decoder.value = decrypted_text;
    tittle_hidden.style.display = 'none';
    paragraph_hidden.style.display = 'none';
    input_decoder.value = "";
}

function decrypt(decryptedString) {
    
    let decryption_matrix = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    decryptedString = decryptedString.toLowerCase();

    for (let i = 0; i < decryption_matrix.length; i++) {
        if (decryptedString.includes(decryption_matrix[i][1])) {
            decryptedString = decryptedString.replaceAll(decryption_matrix[i][1], decryption_matrix[i][0]);
        }    
    }

    return decryptedString;
}

function copy_output_text() {
    navigator.clipboard.writeText(output_decoder.value);
    input_decoder.select();
}

function clear_output_text() {
    input_decoder.value = "";
    output_decoder.value = "";
}
