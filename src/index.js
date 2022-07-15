/*const getImagenPromesa = () => {
    return new Promise(resolve => resolve('https://jasldjfewalsas.com'));
}

getImagenPromesa().then(console.log)*/

//Asincrono
const getImagen = async() => {

    return 'https://jasldjfewalsas.com';

}

getImagen().then(console.log)

//Sincrono
const getGif = async() => {

    try {
        const apiKey = 'C1GDcgdRovtdHV4ZEi4VgrwVnJKagymo';
        const resp = await (await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`));
        const { data } = await resp.json();

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    } catch (error) {
        //Manejo de error
    }

}

getGif().then(console.log)