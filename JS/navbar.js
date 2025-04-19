const getContent = (navbar) => {
    fetch("navbar.html")
//.text es porque podemos recibir el html en un texto como tal y usarlo asi 
      .then(response => response.text())
      .then(data => {
        document.getElementById("navbar").innerHTML = data;
      })
      .catch(err => console.error("Error al cargar el navbar:", err));
};

getContent()
