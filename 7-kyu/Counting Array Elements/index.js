function count(array){
    return array.reduce((resultObj, el) => {
        resultObj[el] ? resultObj[el]++ : resultObj[el] = 1;
        return resultObj
    }, {});
}