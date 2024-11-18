// Inicjalizacja listy urlopów
const leaveList = [];

// Funkcja renderująca listę urlopów
function renderLeaveList() {
  const leaveListElement = document.getElementById('leaveList');
  leaveListElement.innerHTML = ''; // Czyszczenie obecnej listy

  // Jeśli lista urlopów jest pusta
  if (leaveList.length === 0) {
    leaveListElement.innerHTML = '<p>Brak zapisanych urlopów.</p>';
    return;
  }

  // Renderowanie urlopów
  leaveList.forEach((leave) => {
    const leaveItem = document.createElement('div');
    leaveItem.classList.add('leave-item');

    leaveItem.innerHTML = `
      <p><span>${leave.name}</span> - ${leave.date}</p>
    `;

    leaveListElement.appendChild(leaveItem);
  });
}

// Funkcja obsługująca dodanie nowego urlopu
function addLeave(event) {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const dateInput = document.getElementById('date');

  // Pobieranie wartości z formularza
  const name = nameInput.value.trim();
  const date = dateInput.value;

  // Walidacja danych
  if (!name || !date) {
    alert('Proszę uzupełnić wszystkie pola.');
    return;
  }

  // Dodanie nowego urlopu do listy
  leaveList.push({ name, date });

  // Resetowanie formularza
  nameInput.value = '';
  dateInput.value = '';

  // Renderowanie zaktualizowanej listy
  renderLeaveList();
}

// Inicjalizacja formularza
const leaveForm = document.getElementById('leaveForm');
leaveForm.addEventListener('submit', addLeave);

// Pierwsze renderowanie listy urlopów
renderLeaveList();
