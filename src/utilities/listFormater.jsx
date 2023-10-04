const listFormater = (lista) => {
    let keys = Object.keys(lista);
    let tempFormatedList = keys.map((element) => {
        let temp = {
            raza: '',
            subrazas: []
        }

        if (lista[element].length > 0) {
            temp.subrazas = lista[element].map((e) => {
                return textCapitalize(e)
            })
        }
        temp.raza = textCapitalize(element)
        return temp;
    });
    return tempFormatedList
}

const textCapitalize = (str) => {
    const arr = str.split(" ");
    
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2 = arr.join(" ");
    return str2;
}

export {
    listFormater,
    textCapitalize
}