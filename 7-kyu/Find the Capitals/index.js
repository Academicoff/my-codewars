function capital(capitals){
    return capitals.map(i => `The capital of ${i.country||i.state} is ${i.capital}`)
}