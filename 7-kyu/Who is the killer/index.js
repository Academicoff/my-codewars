function killer(suspectInfo, dead) {
    for (let prop in suspectInfo){
        // Зашли в Объект и получили prop: 'James': ['Jacob', 'Bill', 'Lucas']
        // Проходимся по ['Jacob', 'Bill', 'Lucas']
        for (let i = 0; i < suspectInfo[prop].length; i++){
            //Получаем Имя с кем виделся подозреваемый в suspectInfo[prop][i]
            //Сравниваем это имя с именами убитых, если не найдено, то прерываем
            for (let j = 0; j < dead.length; j++){
                if( suspectInfo[prop][i] != dead[j]){
                    break;
                }
                //если пройдя по всему [dead] не нашло несовпадений, то возвращаем имя убийы
                return prop;
            }
        }
    }
}