let id = (id) => document.getElementById(id);
let fname = id("name"),
    cpf = id("cpf"),
    phone = id("phone"),
    email = id("email"),
    form = id("form");

let error = document.getElementsByClassName("error");

console.log(fname, cpf, phone, email, error);

function engine(id, index, msg) {
    if (id.value.trim() === "") {
        error[index].innerHTML = msg;
    } else {
        error[index].innerHTML = "";
    }
}

function validCPF(cpf) {
    if (cpf == "") {
        return false;
    } else {
        let add = 0;
        for (let index = 0; index < 9; index++) {
            add += parseInt(cpf.charAt(index)) * (10 - i);
            let rev = 11 - (add % 11);
            if (rev == 10 || rev == 11) rev = 0;
            if (rev != parseInt(cpf.charAt(9))) return false;
        }
    }
}

form.addEventListener("submit", (evt) => {
    evt.preventDefault();

    engine(fname, 0, "Nome em branco!");
    engine(cpf, 1, "CPF em branco!");
    engine(phone, 2, "Celular em branco!");
    engine(email, 3, "E-mail em branco!");
})
