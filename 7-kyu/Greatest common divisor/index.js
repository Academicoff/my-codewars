function mygcd(x,y){
    //Алгоритм Евклида для НОД
    return  (!y) ? x : mygcd( y, x%y);
}

