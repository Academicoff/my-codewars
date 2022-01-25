function catMouse(map,moves){
    //coding and coding...

    const arr = map.split('');
    const indexOfCat = arr.indexOf('C') + 1;
    const indexOfMouse = arr.indexOf('m') + 1;
    const indexSlashN = arr.indexOf('\n') + 1;
//   console.log(indexSlashN)
    if ((indexOfCat === 0)||(indexOfMouse === 0)) return "boring without two animals";
//   console.log(indexOfCat)
//   console.log(indexOfMouse)
    const xCatPosition = indexOfCat%indexSlashN;
    const yCatPosition = Math.ceil(indexOfCat/indexSlashN);
//   console.log(xCatPosition)
//   console.log(yCatPosition)
    const xMousePosition = indexOfMouse%indexSlashN;
    const yMousePosition = Math.ceil(indexOfMouse/indexSlashN);
//   console.log(xMousePosition)
//   console.log(yMousePosition)
//   console.log((xCatPosition+yCatPosition+moves)+"|"+(xMousePosition+yMousePosition))
    return Math.abs(xCatPosition-xMousePosition)+Math.abs(yCatPosition-yMousePosition) <= moves ? 'Caught!':'Escaped!';
}

// function catMouse(map,moves){
//     //coding and coding...
//     const indexOfC = map.indexOf('C')
//     const indexOfm = map.indexOf('m')
//     if (!~indexOfC || !~indexOfm) {
//         return 'boring without two animals'
//     }
//     const stepLength = map.indexOf(`
// `) + 1
//     const step = Math.abs(indexOfC % stepLength - indexOfm % stepLength) + Math.abs(parseInt(indexOfC / stepLength) - parseInt(indexOfm / stepLength))
//     return step > moves ? 'Escaped!' : 'Caught!'
// }