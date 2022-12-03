let menuVisible = false;
// Funcion que se olculta o mustra el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    // oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("progreso");
        habilidades[1].classList.add("");
        habilidades[2].classList.add("");
        habilidades[3].classList.add("");
        habilidades[4].classList.add("");
        habilidades[5].classList.add("");
        habilidades[6].classList.add("");
        habilidades[7].classList.add("");
        habilidades[8].classList.add("");
        habilidades[9].classList.add("");
        // habilidades[].classList.add("");
        // habilidades[].classList.add("");
        // habilidades[].classList.add("");
        // habilidades[].classList.add("");
        // habilidades[].classList.add("");
        // habilidades[].classList.add("");
    }

}