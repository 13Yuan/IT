/**
 * has, add, remove, clear, size, values转数组, union并集, intersection交集, difference差集, subset子集
 */
function Set() {
    const items = {};
    const has = value => items.hasOwnProperty(value);
    const add = value => {
        if (!items.hasOwnProperty(value)) {
            items[value] = value;
            return true;
        }
        return false;
    }
    const remove = value => {
        if(items.hasOwnProperty(value)) {
            delete items[value];
            return true;
        }
        return false;
    }
    const clear = () => {
        items = {};
    }
    const size = () =>{
        Object.keys(items).length;
    }
    const values = () => {
        Object.keys(items);
    }
    const union = (otherSet) => ({...items, ...otherSet});
    const interSection = (otherSet) => {
        const newSet = {};
        const values = Object.keys(items);
        for (let i = 0; i < values.length; i++) {
            const cur = values[i];
            if (otherSet[cur]) {
                newSet.push(cur);
            }
        }
        return newSet;
    }
    const diff = (otherSet) => {
        
    }
}