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
    let savedData = localStorage.getItem('medsData');
    let savedMedsData = [];
    if (savedData) {
        savedMedsData = JSON.parse(savedData);
    }

    const currentDate = getFormattedDate();

    if (savedMedsData.length > 0 && savedMedsData[0].date === currentDate) {
        return savedMedsData;
    } else {
        const medsData = [
            { date: currentDate, time: '8:00', med: 'Lacidofil', taken: false },
            { date: currentDate, time: '8:00', med: 'Octeangín', taken: false },
            { date: currentDate, time: '8:15', med: 'Glimbax', taken: false },
            { date: currentDate, time: '8:30', med: 'Corsodyl', taken: false },
            { date: currentDate, time: '8:45', med: 'Nystatyna zawiesina', taken: false },
            { date: currentDate, time: '8:45', med: 'Nystatyna dojelitowo', taken: false },
            { date: currentDate, time: '11:00', med: 'Amotaks', taken: false },
            { date: currentDate, time: '14:00', med: 'Nystatyna zawiesina', taken: false },
            { date: currentDate, time: '16:00', med: 'Octeangín', taken: false },
            { date: currentDate, time: '16:30', med: 'Nystatyna dojelitowo', taken: false },
            { date: currentDate, time: '17:30', med: 'Lacidofil', taken: false },
            { date: currentDate, time: '18:00', med: 'Glimbax', taken: false },
            { date: currentDate, time: '18:30', med: 'Corsodyl', taken: false },
            { date: currentDate, time: '19:00', med: 'Amotaks', taken: false },
            { date: currentDate, time: '19:30', med: 'Nystatyna zawiesina', taken: false },
            { date: currentDate, time: '19:30', med: 'Nystatyna dojelitowo', taken: false },
            { date: currentDate, time: '20:30', med: 'Lacidofil', taken: false },
            { date: currentDate, time: '21:30', med: 'Nystatyna zawiesina', taken: false },
            { date: currentDate, time: '22:30', med: 'Octeangín', taken: false },
            { date: currentDate, time: '23:00', med: 'Corsodyl', taken: false },
            { date: currentDate, time: '23:30', med: 'Nystatyna dojelitowo', taken: false },
            { date: currentDate, time: '3:00', med: 'Amotaks', taken: false }
        ];

        localStorage.setItem('medsData', JSON.stringify(medsData));

        return medsData;
    }
}

let medsData = getMedsData();

function createTable() {
    const tableBody = document.querySelector('#medsTable tbody');
    medsData.forEach((entry, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entry.date}</td>
            <td>${entry.time}</td>
            <td id="medName-${index}" class="${entry.taken ? 'taken' : ''}">${entry.med}</td>
        `;
        tableBody.appendChild(row);

        // Dodanie obsługi kliknięcia na nazwę leku
        row.addEventListener('click', () => {
            toggleTaken(index); // Przełącz stan wzięcia leku
        });

        if (entry.taken) {
            document.getElementById(`medName-${index}`).classList.add('taken');
        }
    });

    loadProgress();
}

function toggleTaken(index) {
    medsData[index].taken = !medsData[index].taken; // Odwróć stan wzięcia leku

    const medName = document.getElementById(`medName-${index}`);
    medName.classList.toggle('taken'); // Przełącz klasę 'taken' dla skreślenia nazwy leku

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
                document.getElementById(`medName-${index}`).classList.add('taken');
            }
        });
    }
}

window.onload = createTable;
