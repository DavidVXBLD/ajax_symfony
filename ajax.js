function getCustomers() {
    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if(httpRequest.readyState === XMLHttpRequest.DONE) {
            if(httpRequest.status === 200) {
                let response = JSON.parse(httpRequest.responseText); // Deserialize la réponse
                console.log(response);
                let ajax = document.getElementById("ajax");
                for(let customers in response) {
                    ajax.innerHTML += `<li>${customers} : ${response[customers]}</li>`
                }
            }
            else {
                console.log("Erreur 404!")
            }
        }
    }
    httpRequest.open("GET", "http://localhost/webservices/public/index.php/customers");
    httpRequest.send();
}