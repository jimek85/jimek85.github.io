document.addEventListener("DOMContentLoaded", () => {
    const leaveForm = document.getElementById("add-leave-form");
    const leaveList = document.getElementById("leave-list");
    const filterDate = document.getElementById("filter-date");

    // Tablica przechowująca urlopy
    let leaves = [];

    // Funkcja do renderowania listy urlopów
    const renderLeaveList = (filteredLeaves = leaves) => {
        leaveList.innerHTML = "";
        filteredLeaves.forEach(leave => {
            const li = document.createElement("li");
            li.innerHTML = `<span>${leave.name}</span> - <span class="date">${leave.dates}</span>`;
            leaveList.appendChild(li);
        });
    };

    // Funkcja do dodawania urlopu
    const addLeave = (name, dates) => {
        leaves.push({ name, dates });
        renderLeaveList();  // Po dodaniu nowego urlopu, odświeżamy listę
    };

    // Obsługa formularza
    leaveForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const dates = document.getElementById("dates").value;

        if (name && dates) {
            addLeave(name, dates);
            leaveForm.reset();
        }
    });

    // Filtrowanie urlopów po dacie
    filterDate.addEventListener("input", () => {
        const dateValue = filterDate.value;
        if (dateValue) {
            const filteredLeaves = leaves.filter(leave => leave.dates.includes(dateValue));
            renderLeaveList(filteredLeaves);
        } else {
            renderLeaveList();
        }
    });

    // Renderowanie początkowej listy
    renderLeaveList();
});
