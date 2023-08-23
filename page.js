// onload
window.addEventListener("load", () => {
    populateUsersTable();
})
// click
function populateUsersTable() {
    // call the api
    fetch(`https://jsonplaceholder.typicode.com/users/5`)
        .then(response => response.json())  // convert to json format
        .then(user => {
            const tableBody = document.getElementById("table");
            tableBody.innerHTML = "";

            // for (let propertyName in user) {
            //     let row = tableBody.insertRow(-1);
            //     let cell = row.insertCell(-1);
            //     cell.innerHTML = propertyName;
            //     cell = row.insertCell(-1);
            //     cell.innerHTML = user[propertyName];
            //     if (propertyName == "email") break;
            // }

            let headerCaptions = {
                id: "Id",
                name: "Name",
                username: "User Name",
                email: "e-Mail",
                address: "City"
            };

            // for (let propertyName in user) {
            //     let row = tableBody.insertRow(-1);
            //     let cell = row.insertCell(-1);
            //     cell.innerHTML = headerCaptions[propertyName];
            //     cell = row.insertCell(-1);
            //     cell.innerHTML = user[propertyName];
            //     if (propertyName == "email") break;
            // }

            for (let propertyName in headerCaptions) {
                let row = tableBody.insertRow(-1);
                let cell = row.insertCell(-1);
                cell.innerHTML = headerCaptions[propertyName];
                cell = row.insertCell(-1);
                if (propertyName != "address")
                    cell.innerHTML = user[propertyName];
                else
                    cell.innerHTML = user[propertyName].city;
                if (propertyName == "address") break;
            }


            // for (let headerProp in headers) {
            //     headerRow.insertCell(-1).innerHTML = headers[headerProp];
            // }
            // for (let user of users) {
            //     let row = usersTableBody.insertRow(-1);
            //     for (let headerProp in headers) {
            //         row.insertCell(-1).innerHTML = user[headerProp];
            //     }
            // }
        });
}