import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = (element)=>{

    const id = '5d86371f1efebc31def272e2';
    console.log('Inicio del componente')

    findHero(id)
        .then(name => element.innerHTML = name)
        .catch(Error => element.innerHTML = Error)

        
    console.log('Fin del componente')
    
}

/**
 * 
 * @param {String} id 
 * @returns {Promise<String}
 */
const findHero = async (id) =>{
    const hero = heroes.find(hero => hero.id === id);
    if(!hero)
        throw `Hero with id ${id} not found.`;

    return hero.name;
} 