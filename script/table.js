function sortTable(column) {
    const table = document.querySelector('table');
    const rows = Array.from(table.rows).slice(1); // Ignora la primera fila (cabecera)

    rows.sort((a, b) => {
        const cellA = a.cells[column].textContent.trim();
        const cellB = b.cells[column].textContent.trim();
        return cellA.localeCompare(cellB);
    });

    // Reordenar las filas en la tabla
    table.tBodies[0].innerHTML = '';
    rows.forEach(row => {
        table.tBodies[0].appendChild(row);
    });
}

function sortTableVania(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.querySelector('table');
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /* Loop through all table rows (except the
        first, which contains table headers): */
        for (i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Get the two elements you want to compare,
            one from current row and one from the next: */
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /* Check if the two rows should switch place,
            based on the direction, asc or desc: */
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /* If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again. */
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

function filterTableAxel() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const table = document.querySelector('table');
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        let found = false;
        for (let j = 0; j < row.cells.length; j++) {
            const cellValue = row.cells[j].textContent.toLowerCase();
            if (cellValue.includes(filter)) {
                found = true;
                break;
            }
        }
        row.style.display = found ? '' : 'none';
    }
}

function filterTable() {
    // Declare variables
    var input = document.getElementById('searchInput');
    var filter = input.value.toUpperCase();
    var table = document.querySelector('table');
    var tr = table.getElementsByTagName('tr');
    var td, i, txtValue;

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}