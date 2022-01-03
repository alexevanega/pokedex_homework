console.log()
const getData = async (pokemon) => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
    const data = await res.json();
    return data
};

const search = document.getElementById('search')

const res = search.addEventListener('submit', (event)=>{
    event.preventDefault();
    console.log(event);

    const search = document.querySelector('#search_bar').value;
    console.log(search);
    loadData(search)
});

const loadData = async (res) => {
    const data = await getData(res);
    console.log(data)

    if (document.querySelector('#poke_name').innerHTML !== ''){clearData()}
    createCard(data['sprites']['front_default'],data['name'],data['abilities'])
};

const clearData = () => {
    const name = document.getElementById('poke_name');
    const abil1 = document.getElementById('abilities');
    const img = document.getElementById('card_img');

    name.innerHTML = '';
    abil1.innerHTML = '';
    img.setAttribute('src','');

    document.getElementById('poke_card').className = "card visually-hidden"

};


const createCard = (image,pokemon,ability) => {
    const name = document.getElementById('poke_name');
    const img = document.getElementById('card_img');

    name.innerHTML = pokemon;
    img.setAttribute('src',image);

    ability.forEach(abil => {
        const item = document.createElement('li');
        item.innerHTML = abil['ability']['name']
        document.getElementById('abilities').insertAdjacentElement('beforeend',item)
    });


    document.getElementById('poke_card').className = "card bg-transparent"
};