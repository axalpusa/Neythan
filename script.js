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
const message = "¡Hola! Confirmo mi asistencia. Soy: ";

// Codificar el mensaje para URL
const encodedMessage = encodeURIComponent(message);

// Construir la URL de WhatsApp
const whatsappURL = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodedMessage}`;

// Abrir en una nueva pestaña
window.open(whatsappURL, '_blank');
}

