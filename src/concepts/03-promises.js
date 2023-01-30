import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promeieComponent = (element)=>{
    
    /**
     * 
     * @param {Hero<Object>} hero 
     */
    const renderHero = ( hero ) =>{
        element.innerHTML = hero.name;
    }
    /**
     * 
     * @param {String} error 
     */
    const renderError = ( error ) =>{
        element.innerHTML = `
            <h1 style="color:red">Error!</h1>
            <h3>${ error }</h3>`;
    }

    const renderTwoHeros = (hero1, hero2)=>{
        element.innerHTML = `
            <h3>${hero1.name}</h3>        
            <h3>${hero2.name}</h3>        
        `;

    }


    const id1 = '5d86371f2343e37870b91ef1';
    const id2 = '5d86371f233c9f2425f16916';

    //LLamar solo una promise
    // findHero(id).then(renderHero).catch(renderError);

    //!Promise.all

    Promise.all([
        findHero(id1),
        findHero(id2),
    ])
    .then( ([hero1, hero2]) => {
        renderTwoHeros(hero1,hero2);
    })
    .catch(renderError);

    //!Promise hell en cadena

    // let hero1;
    // findHero(id1)
    //     .then(hero =>{
    //         hero1 = hero;
    //         return findHero(id2);
    //     }).then((hero2)=>{
    //         renderTwoHeros(hero1,hero2);
    //     }).catch(renderError);


    //!Promises hell

    // findHero(id1)
    //     .then((hero1)=>{
    //         findHero(id2)
    //             .then((hero2)=>{
    //                 renderTwoHeros(hero1,hero2)
    //             })
    //             .catch(renderError);
    //     })
    //     .catch(renderError);
    
}

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = (id) =>{
    return new Promise((resolve,reject)=>{

        const hero = heroes.find(hero => hero.id == id);

        if(hero) {
            resolve(hero);
            return;
        }

        reject(`Hero with id ${id} not found`);
    });


}