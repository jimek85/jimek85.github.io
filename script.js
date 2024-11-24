document.getElementById('urlopForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Pobieranie danych z formularza
    const name = document.getElementById('name').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    // Tworzenie obiektu urlopu
    const urlop = {
        name: name,
        startDate: startDate,
        endDate: endDate
    };

    // Zapisywanie danych do lokalnego pliku JSON (na GitHubie to nie działa, ale może być użyteczne w testach lokalnych)
    const existingData = JSON.parse(localStorage.getItem('urlopy') || '[]');
    existingData.push(urlop);
    localStorage.setItem('urlopy', JSON.stringify(existingData));

    // Informacja o zapisaniu danych
    alert('Urlop zapisany!');
});
