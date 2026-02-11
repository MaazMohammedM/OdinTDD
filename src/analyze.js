export const analyzeArray =(arr)=>{
    return {
        length:arr.length,
        min:Math.min(...arr),
        max:Math.max(...arr),
        avg:arr.reduce((acc,current)=>acc+current,0) / arr.length
    }
}