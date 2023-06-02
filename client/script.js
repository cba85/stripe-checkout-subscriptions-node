/* Fetch prices and update the form */
fetch("/config")
  .then((r) => r.json())
  .then(({ soloPrice, duoPrice, familyPrice }) => {
    const soloPriceInput = document.querySelector("#soloPrice");
    soloPriceInput.value = soloPrice;
    const duoPriceInput = document.querySelector("#duoPrice");
    duoPriceInput.value = duoPrice;
    const familyPriceInput = document.querySelector("#familyPrice");
    familyPriceInput.value = familyPrice;
  });
