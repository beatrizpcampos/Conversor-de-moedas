const button = document.getElementById('button')
const select = document.getElementById('select')

const convertValues = async () => {
    const inputReais = document.getElementById('input-reais').value
    const reaisValue = document.getElementById('reais-value')
    const textValue = document.getElementById('text-value')

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
    
    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin =  data.BTCBRL.high

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