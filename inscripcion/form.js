const scriptURL = 'https://script.google.com/macros/s/AKfycbycSoKAYoCspukjV2kjgzJNhJA26GjQ3-nMahqlG4n54G9AciBlcpsFiAWGnbuqb4OV/exec';

const form = document.forms['contact-form'];
const overlay = document.getElementById('overlay');
const loadingIndicator = document.getElementById('loading-indicator');

form.addEventListener('submit', e => {
  e.preventDefault();

  
  const formData = new FormData(form);


  // Obtener la fecha actual en el formato deseado (aaaa-mm-dd)
  const fechaActual = new Date();
  const fechaActualFormateada = `${fechaActual.getFullYear()}-${(fechaActual.getMonth() + 1).toString().padStart(2, '0')}-${fechaActual.getDate().toString().padStart(2, '0')}`;
  formData.set('fecha_actual', fechaActualFormateada);



  fetch(scriptURL, { method: 'POST', body: formData})
  .then(response => {
    if (response.ok) {
      window.location.href = 'https://juanfelipej.github.io/marcopoloPage';
    } else {
      throw new Error('Network response was not ok.');
    }
  })
  .catch(error => console.error('Error!', error.message))
  .finally(() => {

  });
});
