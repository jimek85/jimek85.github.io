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
    const currentDate = getFormattedDate();
    return [
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
        { date: currentDate, time: '23:00', med: 'Corsodyl' },
        { date: currentDate, time: '23:30', med: 'Nystatyna dojelitowo' },
        { date: currentDate, time: '3:00', med: 'Amotaks' }
    ];
}

let medsData = getMedsData();

function createTable() {
    const tableBody = document.querySelector('#medsTable tbody');
    medsData.forEach((entry, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entry.date}</td>
            <td>${entry.time}</td>
            <td>${entry.med}</td>
            <td><input type="checkbox" id="check-${index}" onclick="markAsTaken(${index})"></td>
        `;
        tableBody.appendChild(row);
    });

    loadProgress();
}

function markAsTaken(index) {
    const checkBox = document.getElementById(`check-${index}`);
    if (checkBox.checked) {
        medsData[index].taken = true;
    } else {
        medsData[index].taken = false;
    }

    saveProgress();
}

function saveProgress() {
    localStorage.setItem('medsData', JSON.stringify(medsData));
}

function loadProgress() {
    const savedData = localStorage.getItem('medsData');
    if (savedData) {
        const savedMedsData = JSON.parse(savedData);
        savedMedsData.forEach((entry, index) => {
            medsData[index].taken = entry.taken;
            if (entry.taken) {
                document.getElementById(`check-${index}`).checked = true;
            }
        });
    }
}

window.onload = createTable;
