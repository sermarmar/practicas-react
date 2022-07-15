import { heroes, owners } from "./data/heroes";


const getHeroesById = (id) => {
    return heroes.find(heroe => heroe.id === id);
}

console.log(getHeroesById(2));

const getHeroesByOwner = (owner) => {
    return heroes.filter(heroe => heroe.owner === owner);
}

console.log(getHeroesByOwner('DC'));


///Siguiente prueba PROMISE

const promesa = new Promise((resolve, reject) => {

    setTimeout(() => {
        //resolve();
        const heroe = getHeroesById(10);
        resolve(heroe);
    }, 2000);

});

promesa.then((heroe) => {
    console.log('heroe', heroe);
}).catch(err => console.warn(err));

//Async

const getHeroesByIdAsync = (id) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            //resolve();
            const heroe = getHeroesById(id);
            //resolve(heroe);
            if (heroe) {
                resolve(heroe);
            } else {
                reject('No se pudo encontrar el heroe');
            }
        }, 2000);

    })
}

getHeroesByIdAsync(10)
    .then(hero => console.log('Heroe', hero))
    .catch(err => console.warn(err));