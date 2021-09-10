const initialPrice = document.querySelector("#initial-price");
const stockQuantity = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current-price");
const calculateBtn = document.querySelector("#calculate-btn");
const outputText = document.querySelector("#output-area");

function calculateProfitLoss()
{
    var quantity = Number(stockQuantity.value)

    var initialPriceNo = Number(initialPrice.value);
    var currentPriceNo = Number(currentPrice.value);

    var costPrice = initialPriceNo * quantity;
    var sellingPrice = currentPriceNo * quantity;

    if(sellingPrice > costPrice)
    {
        var profit = sellingPrice - costPrice;
        var profitPercent = (profit/costPrice * 100);
        outputText.innerText = "The profit is: " + profit + " The profit % is: " + profitPercent;
    }
    else if(costPrice > sellingPrice)
    {
        var loss = costPrice - sellingPrice;
        var lossPercent = loss/costPrice * 100;
        outputText.innerText = "The loss is: " + loss + " The loss % is: " + lossPercent;
    }
}

calculateBtn.addEventListener("click",calculateProfitLoss)