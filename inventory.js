
        let inventoryData = [
            { name: 'A1', available: 5},
            { name: 'B1', available: 5},
            { name: 'B1A', available: 5},
            { name: 'C1', available: 5},
            { name: 'C2', available: 5}                                 
        ];

        window.onload = () => {
            loadTableData(inventoryData);
        };

        function loadTableData(inventoryData) {
            const tableBody = document.getElementById('tableData');
            let dataHtml = '';

            for(let inventory of inventoryData) {
                dataHtml += `<tr><td>${inventory.name}</td><td>${inventory.available}</td></tr>`;
            }
            console.log(dataHtml)

            tableBody.innerHTML = dataHtml;
        };


