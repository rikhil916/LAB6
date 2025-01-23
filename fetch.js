//explore fetching server state using js with the help of fetch function to access remote data using the given API and display the data in the form of table.

document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const table = document.createElement("table");
            const headerRow = document.createElement("tr");

            // Create table headers
            ["ID", "Name", "Username", "Email"].forEach(headerText => {
                const header = document.createElement("th");
                header.textContent = headerText;
                headerRow.appendChild(header);
            });
            table.appendChild(headerRow);

            // Create table rows
            data.forEach(user => {
                const row = document.createElement("tr");

                ["id", "name", "username", "email"].forEach(key => {
                    const cell = document.createElement("td");
                    cell.textContent = user[key];
                    row.appendChild(cell);
                });

                table.appendChild(row);
            });

            document.body.appendChild(table);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
});
