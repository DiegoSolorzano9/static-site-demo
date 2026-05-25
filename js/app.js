const statusText = document.getElementById('status-text');
const statusBtn = document.getElementById('status-btn');

let isAvailable = true;

statusBtn.addEventListener('click', () => {
  isAvailable = !isAvailable;
  
  if (isAvailable) {
    statusText.textContent = 'Disponible para proyectos';
    statusText.className = 'status-active';
    statusBtn.textContent = 'Cambiar Disponibilidad';
    statusBtn.style.background = '#3b82f6';
  } else {
    statusText.textContent = 'Enfocado en laboratorios (Ocupado)';
    statusText.className = 'status-busy';
    statusBtn.textContent = 'Volver a estar Disponible';
    statusBtn.style.background = '#4b5563';
  }
});