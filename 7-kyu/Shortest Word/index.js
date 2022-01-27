function findShort(s){
    const result = Math.min(...s.split(' ').map((word) => word.length));
    return result;
}