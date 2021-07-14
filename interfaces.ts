// Interfaces em Typescript servem o mesmo propósito das interfaces no Java, mas
// também servem para tipar dados e a documentação recomenda que seja usada mais interface do
// que type aliases
interface Usuario {
    nome: string;
    email: string;
    address?: string;
}

function getUser(): Usuario { // retorna um usuário
    return {
        nome: "Matheus",
        email: "matheus.hpp135@gmail.com"
    }
}

function setUser(usuario: Usuario) {
    // ...
}




