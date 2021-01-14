// EXO 1

console.log("____1____");

let personnageUn = {
    nom : "Lemaire",
    prenom : "Maxence",
    age : 25,
    taille : 195,
}

console.log(personnageUn);
console.log(personnageUn.age);

// EXO 2 - 3

console.log("____2-3____");

let personnageDeux = {
    nom : "Vervekken",
    prenom : "Adrien",
    age : 25,
    taille : 194,
}

let personnageTrois = {
    nom : personnageUn.nom,
    prenom : "Sébastien",
    age : personnageDeux.age,
    taille : 180,
}

console.log(personnageTrois);

// EXO 4

console.log("____4____");

let personnageQuatre = {
    saluer() {
        console.log(`Coucou ${personnageDeux.nom}`);
    }
}

personnageQuatre.saluer();

// EXO 5

console.log("____5____");

let personnageCinq = {
    nom : "Dutranoix",
    prenom : "Basile",
    sePresenter() {
        console.log(`Bonjour je m'appelle ${personnageCinq.nom} ${personnageCinq.prenom}`);
    }
}

personnageCinq.sePresenter();

// EXO 6

// console.log("____6____");

// let personnageSix = {
//     nom : "Orban",
//     changerAge() {
//         let ageP = prompt("Âge ?");
//         personnageSix.age = ageP;
//         alert(`${this.nom} a ${this.age} ans.`);
//     }
// }

// personnageSix.changerAge();
// console.log(personnageSix);

// EXO 7

console.log("____7____");

personnageUno = {
    nom : "Hellepute",
    age : 25,
}

personnageDos = {
    nom : "Mille",
    age : 25,
}

personnageTres = {
    nom : "Suciu",
    age : 25,
}

voleur = {
    usurpation() {
        let nom = personnageUno.nom;
        let age = personnageUno.age;
        console.log(`Bonjour je suis ${nom} et j'ai ${age} ans`);
    }
}

voleur.usurpation()

// EXO 8 

console.log("____8____");

françois = {
    panier : ["cerise", "tomate"],
    derober() {
        françois.panier.push(sergio.panier[0], sergio.panier[1])
        sergio.panier.splice(0, sergio.panier.length)
    }
}

sergio = {
    panier : ["citron", "pain"],
}

françois.derober()
console.log(françois);
console.log(sergio);

