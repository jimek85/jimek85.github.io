// Funkcja zwracająca formatowaną bieżącą datę (dd.mm.yyyy)
function getFormattedDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Miesiące są indeksowane od 0
    const year = today.getFullYear();
    return `${day}.${month}.${year}`;
}

// Funkcja generująca dane leków na podstawie bieżącej daty
function getMedsData() {
    // Pobierz zapisane dane z localStorage
    let savedData = localStorage.getItem('medsData');
    let savedMedsData = [];
    if (savedData) {
        savedMedsData = JSON.parse(savedData);
    }

    const currentDate = getFormattedDate();

    // Sprawdź czy dane są zapisane na dzisiejszy dzień
    if (savedMedsData.length > 0 && savedMedsData[0].date === currentDate) {
        // Dane są już zapisane na dzisiejszy dzień, zwróć je
        return savedMedsData;
    } else {
        // Dane nie są zapisane na dzisiejszy dzień, wygeneruj nowe dane
        const medsData = [
            { date: currentDate, time: '8:00', med: 'Lacidofil' },
            { date: currentDate, time: '8:00', med: 'Octeangín' },
            { date: currentDate, time: '8:15', med: 'Glimbax' },
            { date: currentDate, time: '8:30', med: 'Corsodyl' },
            { date: currentDate, time: '8:45', med: 'Nystatyna zawiesina' },
            { date: currentDate, time: '8:45', med: 'Nystatyna dojelitowo' },
            { date: currentDate, time: '11:00', med: 'Amotaks' },
            { date: currentDate, time: '14:00', med: 'Nystatyna zawiesina' },
            { date: currentDate, time: '16:00', med: 'Octeangín' },
            { date: currentDate, time: '16:30', med: 'Nystatyna dojelitowo' },
            { date: currentDate, time: '17:30', med: 'Lacidofil' },
            { date: currentDate, time: '18:00', med: 'Glimbax' },
            { date: currentDate, time: '18:30', med: 'Corsodyl' },
            { date: currentDate, time: '19:00', med: 'Amotaks' },
            { date: currentDate, time: '19:30', med: 'Nystatyna zawiesina' },
            { date: currentDate, time: '19:30', med: 'Nystatyna dojelitowo' },
            { date: currentDate, time: '20:30', med: 'Lacidofil' },
            { date: currentDate, time: '21:30', med: 'Nystatyna zawiesina' },
            { date: currentDate, time: '22:30', med: 'Octeangín' },
       
