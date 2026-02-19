function infosEtudiant(nom, note) {
    let type ;
    if (note >= 10) {
        type = "admis";
    } else {
        type = "ajourné";
    }

    return `${nom} : ${note}/20 -> ${type}`;
}

console.log(infosEtudiant("Anir",20));

