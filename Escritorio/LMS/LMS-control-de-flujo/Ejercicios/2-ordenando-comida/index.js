const order = (meal) => {
    aMeal = [
    {meal: 'ceviche', status: false},
    {meal: 'tacos', status: true},
    {meal: 'empanada chilena', status: false},
    {meal: 'hamburguesa', status: true}]

    // Ceviche
    if(aMeal[0].status === true){
        return console.log('su ceviche está en camino');
    } 
    // Tacos al pastor
    else if (aMeal[1].status === true){
        return console.log('sus tacos van en camino')
    }
    // Empanada Chilena
    else if (aMeal[2].status === true){
        return console.log('su empanada está en camino');
    } 
    // Hamburguesa
    else {
        return console.log('su hamburguesa está en camino')
    }
}

console.log(order('ceviche'))