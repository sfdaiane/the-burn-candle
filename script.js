function toggleMenu() {
    let divSelected = document.getElementById("menu-mobile-id")

    if (divSelected.classList.contains("show-menu")) {
        // Se ja tiver a classe, aqui ela deve ser retirada
        divSelected.classList.remove("show-menu")
    } else {
        // Se nao tiver, a classe deve ser adicionada
        divSelected.classList.add("show-menu")
    } 
}