let notes = [12, 8, 15, 10, 7];
let bst = 0, nbr = 0, som = 0, i;

for (i = 0; i < notes.length; i++) {
    
    som += notes[i];

    if (notes[i] > bst) {
        bst = notes[i];
    }

    if (notes[i] >= 10) {
        nbr++;
    }

}

let moy = som / notes.length;

console.log (`la moyenne des notes est ${moy}`);
console.log (`La meilleure note est ${bst}`);
console.log (`Le nombre des notes >= 10 est ${nbr}`);