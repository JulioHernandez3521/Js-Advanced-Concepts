import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent = async (element)=>{

    const id1 = '5d86371f1efebc31def272e2';
    const id2 = '5d86371f1efebc31def272e2';
    try {
        const hero1 = await findHero(id1);
        const hero2 = await findHero(id2);


        element.innerHTML = `
            ${hero1.name} <br/>
            ${hero2.name} <br/>
        `;
    } catch (error) {
        element.innerHTML = error;
    }
    
}

/**
 * 
 * @param {String} id 
 * @returns {Promise<Object}
 */
const findHero = async (id) =>{
    const hero = heroes.find(hero => hero.id === id);
    if(!hero)
        throw `Hero with id ${id} not found.`;

    return hero;
} 