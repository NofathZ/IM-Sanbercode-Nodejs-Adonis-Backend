try {
    let allItems = [
        {
            name: "Sepatu brand Staccatu",
            price: 1500000
        },
        {
            name: "Baju brand Zoro",
            price: 500000
        },
        {
            name: "Baju brand H&N",
            price: 250000
        },
        {
            name: "Sweater brand Uniklooh",
            price: 175000
        },
        {
            name: "Casing Handphone",
            price: 50000
        }
    ]

    let minimal = allItems[0].price;
    
    allItems.sort((valueOne, valueTwo) => { return valueTwo.price - valueOne.price });
    
    function checkMin() {
        allItems.forEach(item => {
            if (item.price < minimal) {
                minimal = item.price
            }
        })
    }
    checkMin();

    function shoppingTime(memberID, money) {
        if (!memberID) {
            throw "Mohon maaf, toko X hanya berlaku untuk member saja"
        }

        if (money < minimal) {
            throw "Mohon maaf, uang tidak cukup"
        }

        let allPurchase = [];
        let changeMoney = money;
        (function() {
            allItems.forEach(item => {
                if (changeMoney >= item.price) {
                    allPurchase.push(item.name);
                    changeMoney -= item.price;
                }
            })
        })()

        let customerData = {
            memberID: memberID,
            money: money,
            listPurchase: allPurchase,
            changeMoney: changeMoney
        }

        console.log(customerData)
    }
    
    shoppingTime("324193hDew2", 700000);

} catch(err) {
    console.log(err)
}