export const reverseString =(string)=>{
    if(typeof string !== 'string') return '';
    if(string.length === 0) return '';
    return string.split('').reverse().join('')
};

