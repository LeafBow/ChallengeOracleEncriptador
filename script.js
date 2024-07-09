let message = "";
let encryptedMessage = "";
let decryptedMessage = "";
let encrypt = false;

function isValid(text) {
  let regex = /^[a-z ]*$/;
  if (regex.test(text)) {
    //texto valido
    return true;
  } else {
    //texto invalido
    return false;
  }
}

function encryptMessage() {
  encryptedMessage = "";
  message = document.getElementById("message").value;
  if (isValid(message)) {
    for (let letter of message) {
      switch (letter) {
        case "a":
          encryptedMessage += "ai";
          encrypt = true;
          break;
        case "e":
          encryptedMessage += "enter";
          encrypt = true;
          break;
        case "i":
          encryptedMessage += "imes";
          encrypt = true;
          break;
        case "o":
          encryptedMessage += "ober";
          encrypt = true;
          break;
        case "u":
          encryptedMessage += "ufat";
          encrypt = true;
          break;
        default:
          encryptedMessage += letter;
      }
    }
    let texten = document.getElementById("textin");
    let textFound = document.getElementById("newMessage");
    let copyButton = document.getElementById("copyButton");
    let image = document.getElementById("imageEncrypted");
    if (encryptedMessage == "") {
      textFound.innerHTML = "Ningún mensaje fue encontrado";
      copyButton.classList.add("hidden");
      textFound.classList.remove("encrypted");
      texten.classList.remove("hidden");
      image.classList.remove("hidden");
    } else {
      textFound.innerHTML = encryptedMessage;
      copyButton.classList.remove("hidden");
      textFound.classList.add("encrypted");
      texten.classList.add("hidden");

      image.classList.add("hidden");
    }
  } else {
    alert("Ingrese solo letras minusculas sin caracteres especiales");
  }
}

function decryptMessage() {
  let input = document.getElementById("message").value;
  if (isValid(input)) {
    if (input && !encrypt) {
      // Proceso de desencriptación
      let regex = /(ai|enter|imes|ober|ufat)/g; // Expresión regular para buscar los patrones

      decryptedMessage = input.replace(regex, function (match) {
        switch (match) {
          case "ai":
            return "a";
          case "enter":
            return "e";
          case "imes":
            return "i";
          case "ober":
            return "o";
          case "ufat":
            return "u";
          default:
            return match; // En caso de que no coincida con ninguno de los patrones, retornar el match original
        }
      });
      let textFound = document.getElementById("newMessage");
      let copyButton = document.getElementById("copyButton");
      let texten = document.getElementById("textin");
      textFound.innerHTML = decryptedMessage;
      copyButton.classList.remove("hidden");
      textFound.classList.add("encrypted");
      texten.classList.add("hidden");
      image.classList.add("hidden");
    } else if (encrypt) {
      // Proceso de desencriptación
      let regex = /(ai|enter|imes|ober|ufat)/g; // Expresión regular para buscar los patrones

      decryptedMessage = encryptedMessage.replace(regex, function (match) {
        switch (match) {
          case "ai":
            return "a";
          case "enter":
            return "e";
          case "imes":
            return "i";
          case "ober":
            return "o";
          case "ufat":
            return "u";
          default:
            return match; // En caso de que no coincida con ninguno de los patrones, retornar el match original
        }
      });
      let textFound = document.getElementById("newMessage");
      let copyButton = document.getElementById("copyButton");
      let texten = document.getElementById("textin");
      textFound.innerHTML = decryptedMessage;
      copyButton.classList.remove("hidden");
      textFound.classList.add("encrypted");
      texten.classList.add("hidden");
      image.classList.add("hidden");
      encrypt = false;
    } else {
      let texten = document.getElementById("textin");
      let textFound = document.getElementById("newMessage");
      let copyButton = document.getElementById("copyButton");
      textFound.innerHTML = "Ningún mensaje fue encontrado";
      copyButton.classList.add("hidden");
      textFound.classList.remove("encrypted");
      texten.classList.remove("hidden");
      image.classList.remove("hidden");
    }
  } else {
    alert("Ingrese solo letras minusculas sin caracteres especiales");
  }
}

function copy() {
  let text = document.getElementById("newMessage").innerText;

  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Texto copiado al portapapeles:", text);
      alert("Texto copiado al portapapeles");
    })
    .catch((err) => {
      console.error("Error al copiar al portapapeles:", err);
      alert("Error al copiar al portapapeles");
    });
}
