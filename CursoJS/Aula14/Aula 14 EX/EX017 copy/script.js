const arrTable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
printTable = (element, table) => element.innerHTML = table,
calcTable = element => arrTable.map(items => `<option value="${items}">${element} X ${items} = ${element * items}</option>`).join('')

document.querySelector('#generate').addEventListener('click', _=> {
    const getNumber = Number(document.querySelector('#getNumber').value)

    if(isNaN(getNumber)) {
        alert('Digite um número no campo!')
    } else {
        printTable(document.querySelector('#selectTable'), calcTable(getNumber))
    }
})