//• Crie um Array contendo os numerais de 0 à 30 e filtre quais desses números são ímpares
const numbers = Array.from({ length: 31 }, (char, index) => index )
const filterdNumbers = numbers.filter(number => number % 2)
console.log(filterdNumbers)

//• Crie um Array contendo a lista de palavras abaixo e filtre apenas quais dessas palávras são palíndromos.
const words = [
    'arara', 'amor', 'asa', 'longo', 'ele', 'dinossáuro', 'esse', 
    'peppa', 'mamam', 'tartaruga', 'bandolin', 'matam', 'desodorante',
    'mundo', 'metem', 'terra', 'água', 'mirim', 'fogo', 'sopapos'
]

const reverseWords = []
    words.map(word => {
    const letters = word.split("")
    const reverseWord = letters.reverse().join("")
    if (reverseWord == word) {
        reverseWords.push(word)
    }
})
console.log(reverseWords)


//• Crie uma automação que calcule a sequencia fibonacci até o número máximo 100.
function fibonnaci() {
    const resultNumbers = []
    const maxNumber = 100
    let oldNumber = 1,
        currentNumber = 0
        number = 0,
        i = 0

    while (currentNumber < maxNumber) {
        number = currentNumber + oldNumber
        oldNumber = currentNumber
        currentNumber = number
        i++
        resultNumbers.push(oldNumber)
    }
    console.log(resultNumbers)
}



fibonnaci()
//• crie um Array contendo números de 1 à 10
const numbersArr = Array.from({ length: 10}, (char, index) => index + 1)
console.log(numbersArr)
//• insira o número 0 no início do array
numbersArr.unshift(0)
console.log(numbersArr)

//• insira o número 11 no final do array
numbersArr.push(11)
console.log(numbersArr)

//• remova o número 5 do array
const numbersArrWithout5 = numbersArr.filter(number => number !== 5)
console.log(numbersArrWithout5)

 
//• remova o número 8 do array e no lugar adicione uma sequencia de números:  20, 21, 22.
//• Nesse ponto seu Array deve estar dessa forma: 0, 1, 2, 3, 4, 6, 7, 20, 21, 22, 9, 10, 11.

const numbersArrSpliced = numbersArrWithout5.splice(7,1,20,21,22)
console.log(numbersArrWithout5);
console.log(numbersArrSpliced);


//• a partir do Array abaixo crieu um novo array contendo apenas nome e idade:

const personsArr = [
	{id: 1, nome: 'Liz', idade: 2},
	{id: 2, nome: 'Thaís', idade: 32},
	{id: 3, nome: 'Jonathan', idade: 30},
	{id: 4, nome: 'Thainá', idade: 29},
	{id: 5, nome: 'Fabiano', idade: 45},
]

for(let i = 0; i < personsArr.length; i++) {
    delete personsArr[i].id;
}
console.log(personsArr)

// • Utilize o mesmo array do desafio anterior para criar um array que 
// contenha os valores abaixo dentro de uma tag h3 como no exemplo abaixo:

const personsArr2 = [
	{id: 1, nome: 'Liz', idade: 2},
	{id: 2, nome: 'Thaís', idade: 32},
	{id: 3, nome: 'Jonathan', idade: 30},
	{id: 4, nome: 'Thainá', idade: 29},
	{id: 5, nome: 'Fabiano', idade: 45},
]

personsArr2.map(person => {
    const body = window.document.querySelector('body')
    let h3 = window.document.createElement('h3')
    h3.innerHTML = `${person.id} - ${person.nome} - ${person.idade}`
    body.appendChild(h3)

    console.log(h3);
})


//• Crie uma automação que remova todas as propriedades do objeto abaixo
//• que não comecem com a letra "j"

const namesObject = {
        jason: "Jason",
        thais: "Thaís",
        liz: "Liz",
        jennei: "Jennei",
        jenyffer: "Jennyfer",
        joao: "João",
        bola: "Bola",
        gato: "Gato",
        jaguar: "Jaguar"
    }

    function deleteProps (obj) {
        for (const prop in obj) {
            const firstLetter = prop.substr(0,1)
            if (firstLetter !== 'j') {
                (prop in obj) && (delete obj[prop]);
            }

        }
        
        console.log(namesObject);
    }

    deleteProps(namesObject)
    
