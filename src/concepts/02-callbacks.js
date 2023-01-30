import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callBacksComponent = (element)=>{

    const id = '5d86371f233c9f2425f16916';

    findHero(id, (error, hero) => {
        // if(!hero) throw new Error('Hero not Found')
        // element.innerHTML = hero?.name || 'No existe tu hero';

        if(error){
            element.innerHTML = error;
            return;
        }

        element.innerHTML = hero.name;
    })
    
}

/**
 * 
 * @param {String} id 
 * @param {(error: String|Null,  hero: Object) => void} callback 
 */
const findHero = (id, callback) =>{

    const hero = heroes.find(hero => hero.id === id )

    if(!hero){
        callback(`Hero with id ${id} not found.`);
        return;
    }

    callback( null, hero )
}