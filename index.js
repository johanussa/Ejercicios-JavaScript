var usuarios = {
  "sebastian": "abc123", 
  "micahel": "12345", 
  "andres": "andres", 
  "felipe": "f245", 
  "samantha": "7852"
};

const user = document.getElementById("nombre");
const pass = document.getElementById("pass");

var flag = false;

function validar() {
  usuarios = Object.entries(usuarios);
  usuarios.forEach((value) => {
    console.log(value[0]);
    if (value[0] == user.value && value[1] == pass.value) {
      alert("El Usuario esta registrado puede continuar");
      flag = true;
    }         
  });
  if (!flag) { alert(`Lo sentimos pero el usuario ${user.value} NO esta registrado :(`); } 
}