
async function confere() {
  
    loginUsuario = document.getElementById('login').value;
    senhaUsuario = document.getElementById('senha').value;

    await fetch("http://localhost:5114/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({loginUsuario, senhaUsuario}),
    })
      .then((data) => {
        if(data.status == 200)
      })
      .catch((error) => {
        console.error("Error:", error);
      })
  
  }