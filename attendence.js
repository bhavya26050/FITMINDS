document.getElementById('attendanceForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const memberName = document.getElementById('memberName').value;
    const date = document.getElementById('date').value;
    const attendanceTable = document.getElementById('attendanceTable');
    const newRow = attendanceTable.insertRow();
    const newCell1 = newRow.insertCell();
    const newCell2 = newRow.insertCell();
    newCell1.textContent = memberName;
    newCell2.textContent = date;
    document.getElementById('memberName').value = '';
    document.getElementById('date').value = '';
});