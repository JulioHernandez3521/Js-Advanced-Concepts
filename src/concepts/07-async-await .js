import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwait2Component = async (element)=>{

    element.innerHTML = 'Loading...';

    try {
        console.time('start');
        // const hero1 = await findHero(id1);
        // const hero2 = await findHero(id2);
        const [value1,value2,value3 ] = await Promise.all([
           slowPromise(),
           mediumPromise(),
           fastPromise(),
        ]);

        element.innerHTML = `
            ${value1} <br/>
            ${value2} <br/>
            ${value3} <br/>
        `;

        console.timeEnd('start');
    } catch (error) {
        element.innerHTML = error;
    }
    
}

const slowPromise = () => new Promise(resolve =>{
    setTimeout(()=>{
        resolve('Slow Promise');
    },2000);
});
const mediumPromise = () => new Promise(resolve =>{
    setTimeout(()=>{
        resolve('Medium Promise');
    },1500);
});
const fastPromise = () => new Promise(resolve =>{
    setTimeout(()=>{
        resolve('Fast Promise');
    },1000);
});