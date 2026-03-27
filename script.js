// ==========================
// BASE DE DADOS (SIMULADA)
// ==========================

if (!localStorage.getItem("usuarios")) {
    const usuariosIniciais = [
        {
            nome: "Ana",
            email: "ana@email.com",
            senha: "123",
            tipo: "vendedor"
        },
        {
            nome: "Lucas",
            email: "lucas@email.com",
            senha: "123",
            tipo: "vendedor"
        },
        {
            nome: "Marcos",
            email: "marcos@email.com",
            senha: "123",
            tipo: "cliente"
        }
    ];

    localStorage.setItem("usuarios", JSON.stringify(usuariosIniciais));
}

// ==========================
// FUNÇÕES AUXILIARES
// ==========================

function getUsuarios() {
    return JSON.parse(localStorage.getItem("usuarios")) || [];
}

function salvarUsuarios(lista) {
    localStorage.setItem("usuarios", JSON.stringify(lista));
}

// ==========================
// LOGIN
// ==========================

function login(email, senha) {
    const usuarios = getUsuarios();

    const user = usuarios.find(u => u.email === email && u.senha === senha);

    if (!user) {
        alert("Email ou senha inválidos!");
        return;
    }

    localStorage.setItem("usuario", JSON.stringify(user));
    alert("Login realizado!");
    window.location.href = "index.html";
}

// ==========================
// CADASTRO
// ==========================

function cadastrar(nome, email, senha) {
    const usuarios = getUsuarios();

    const existe = usuarios.find(u => u.email === email);

    if (existe) {
        alert("Email já cadastrado!");
        return;
    }

    const novoUsuario = {
        nome,
        email,
        senha,
        tipo: "cliente"
    };

    usuarios.push(novoUsuario);
    salvarUsuarios(usuarios);

    alert("Cadastro realizado!");
}

// ==========================
// VIRAR VENDEDOR
// ==========================

function virarVendedor() {
    let user = JSON.parse(localStorage.getItem("usuario"));

    if (!user) return;

    user.tipo = "vendedor";
    localStorage.setItem("usuario", JSON.stringify(user));

    let usuarios = getUsuarios();

    usuarios = usuarios.map(u => {
        if (u.email === user.email) {
            u.tipo = "vendedor";
        }
        return u;
    });

    salvarUsuarios(usuarios);

    alert("Agora você é vendedor!");
}