const dragArea = document.querySelector('.drag-area');
const dragText = document.querySelector('.header');

let button = document.querySelector('.button');
let input = document.querySelector('input');

let file;

button.onclick = () => {
  input.click();
};

input.addEventListener('change', function() {
  file = this.files[0];
  dragArea.classList.add('active');
  displayFile()
})

// quando arrastar o arquivo para a drag-area
dragArea.addEventListener('dragover', (event) =>{
  event.preventDefault();
  dragText.textContent = 'Solte para Enviar';
  dragArea.classList.add('active');
  //console.log('Foto dentro da drag-area');
});

// quando arrastar o arquivo para a drag-area
dragArea.addEventListener('dragleave', (event) =>{
  dragText.textContent = 'Arraste & Solte';
  dragArea.classList.remove('active');
  //console.log('Foto fora da drag-area');
});

// quando arrastar o arquivo para a drag-area
dragArea.addEventListener('drop', (event) =>{
  event.preventDefault();
  
  file = event.dataTransfer.files[0];
  //console.log(file);
  displayFile();
});

function displayFile() {
  let fileType = file.type;

  let validExtensions = ['image/jpeg', 'image/jpg', 'image/png'];

  if(validExtensions.includes(fileType)) {
    let fileReader = new FileReader();

    fileReader.onload = () => {
      let fileUrl = fileReader.result;
      //console.log(fileUrl);
      let imgTag = `<img src="${fileUrl}" alt="">`;
      dragArea.innerHTML = imgTag;
    };
    fileReader.readAsDataURL(file);
  } else {
    alert('Esse arquivo não é uma imagem!');
    dragArea.classList.remove('active');
  }
  //console.log('Foto solta na drag-area');
}