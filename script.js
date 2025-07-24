function createStars() {
  const starsContainer = document.getElementById('stars');
  const starCount = window.innerWidth < 768 ? 30 : 50;
  
  for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.width = Math.random() * 3 + 1 + 'px';
      star.style.height = star.style.width;
      star.style.animationDelay = Math.random() * 2 + 's';
      starsContainer.appendChild(star);
  }
}

// Abrir sobre con animación
function openEnvelope() {
  const envelope = document.getElementById('envelope');
  const mainContainer = document.getElementById('mainContainer');
  const invitationPage = document.getElementById('invitationPage');
  
  envelope.classList.add('opened');

    // Reproducir música al hacer clic
    const audio = document.getElementById("bg-music");
    if (audio) {
      audio.play().catch(e => {
        console.log("El navegador bloqueó el audio hasta interacción adicional");
      });
    }

  setTimeout(() => {
      mainContainer.style.display = 'none';
      invitationPage.style.display = 'block';
  }, 800);
}

// Cerrar invitación y regresar al sobre
function closeInvitation() {
  const envelope = document.getElementById('envelope');
  const mainContainer = document.getElementById('mainContainer');
  const invitationPage = document.getElementById('invitationPage');
  
  invitationPage.style.display = 'none';
  mainContainer.style.display = 'flex';
  envelope.classList.remove('opened');
}

// Confirmar asistencia
function confirmAttendance(event) {
  event.preventDefault();
  
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  
  if (firstName && lastName) {
      const fullName = `${firstName} ${lastName}`;
      
      // Verificar si ya está en la lista
      if (!confirmedGuests.some(guest => guest.toLowerCase() === fullName.toLowerCase())) {
          confirmedGuests.push(fullName);
          updateGuestsList();
          
          // Limpiar formulario
          document.getElementById('firstName').value = '';
          document.getElementById('lastName').value = '';
          
          // Mostrar mensaje de confirmación
          alert(`¡Genial ${firstName}! Tu asistencia ha sido confirmada. ¡Te esperamos en la celebración! 🎉`);
      } else {
          alert(`${fullName} ya está confirmado en la lista de invitados.`);
      }
  }
}

function sendWhatsApp() {
// Número de teléfono (cambiar por el número real)
const phoneNumber = "+51973157252";

// Mensaje predefinido (puedes personalizarlo)
const message = "¡Hola! Confirmo mi asistencia. ";

// Codificar el mensaje para URL
const encodedMessage = encodeURIComponent(message);

// Construir la URL de WhatsApp
const whatsappURL = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodedMessage}`;

// Abrir en una nueva pestaña
window.open(whatsappURL, '_blank');
}

// Contador xd
function updateCountdown() {
  const eventDate = new Date('Aug 16, 2025 17:00:00').getTime();
  const now = new Date().getTime();
  const timeLeft = eventDate - now;

  if (timeLeft <= 0) {
    // Cuando se alcanza la fecha, mostrar todos los valores en 0
    document.getElementById('days').textContent = 0;
    document.getElementById('hours').textContent = 0;
    document.getElementById('minutes').textContent = 0;
    document.getElementById('seconds').textContent = 0;
    return; // Detener ejecución de esta iteración
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();