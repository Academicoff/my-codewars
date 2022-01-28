function inter(s1, s2){
    s1 = [...new Set(s1)];
    s2 = [...new Set(s2)];
    return new Set (s1.filter(el => s2.includes(el)));
}

//списал!!! изучать ...new Set, filter и includes 28/01/2022

//### Best solution
//function inter(s1, s2){
//   return new Set( [...s1].filter( e => s2.has(e) ) )
// }