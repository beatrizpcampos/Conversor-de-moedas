const button = document.getElementById('button')
const select = document.getElementById('select')
const dolar = 5.2
const euro = 5.6
const bitcoin =  0.0000081

const convertValues = () => {
    const inputReais = document.getElementById('input-reais').value
    const reaisValue = document.getElementById('reais-value')
    const textValue = document.getElementById('text-value')

    reaisValue.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL",
    }).format(inputReais)

    if (select.value === "US$ Dólar"){
    textValue.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(inputReais / dolar)}

    if (select.value === "€ Euro"){
      textValue.innerHTML = new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "EUR",
      }).format(inputReais / euro)}

    if (select.value === "Bitcoin"){
    textValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
  }).format(inputReais * bitcoin)}
};

const changeCurrency = () => {
  const currencyName = document.getElementById('currency-name')
  const currencyImg = document.getElementById('currency-img')

if (select.value === 'Bitcoin'){
    currencyName.innerHTML = 'Bitcoin'
    currencyImg.src = "./assets/bitcoin.png"
  }

if (select.value === 'US$ Dólar'){
    currencyName.innerHTML = 'Dolar Americano'
    currencyImg.src = "./assets/estados-unidos.png"
  }

  if (select.value === '€ Euro'){
    currencyName.innerHTML = 'Euro'
    currencyImg.src = "./assets/euro.png"
  }

  convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)