const filter = (list, selected) => {
    let tempFilteredList = list.filter((element) => {
        if (selected == element.raza) {
          return true
        }
      });
      if (tempFilteredList[0].subrazas.length > 0) {
        let temp = tempFilteredList[0].subrazas.map((el) => {
          return { raza: tempFilteredList[0].raza + ' ' + el, subrazas: [] }
        })
        tempFilteredList = tempFilteredList.concat(temp)
        return tempFilteredList;
      } else {
        return tempFilteredList;
      }
}
const filterSubraza = (raza, selected) => {
    let temp = raza.subrazas.filter((el) => {
        if (selected === el) {
          return true;
        }
      })
      return [{ raza: raza.raza + ' ' + temp[0], subrazas: [] }]
}
export {
    filter,
    filterSubraza,
}