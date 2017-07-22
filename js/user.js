let allProducts = []
allProducts[0] = new Product(155, 1, 1, "y500", "good notebook")
allProducts[1] = new Product(200, 1, 2, "c500", "good notebook")
allProducts[2] = new Product(100, 2, 2, "a234", "good monoblock")
allProducts[3] = new Product(657, 4, 3, "g675", "good transformer")
allProducts[4] = new Product(345, 3, 4, "k532", "good pc")

let shop = new Shop(allProducts)


do {
  const cmd = prompt(CMD_ENTER)

  if (cmd == "exit") break

  switch (cmd) {
    case "catalog":
      alert(shop.showAllProducts())
      break
    case "listCategory":
      alert(LIST_CATEGORY)
      break
    case "filterCategory": {
      let numCategory = prompt("Введите номер категории")
			alert(parseArr(shop.filter(numCategory)))
      break
    }
    case "sortPrice": {
      let typeSort = prompt(SORT_PRICE)
			alert(parseArr(shop.sortProducts(typeSort)))
			break
    }
    case "cart": {
      alert(shop.showCart())
      break
    }
    case "+cart": {
			let numAdd = prompt(NUM_ADD)
			shop.addToCard(allProducts[numAdd - 1])
      alert(shop.showCart())
      break
    }
    case "-cart": {
			let numAdd = prompt(REMOVE_FROM_CART)
			shop.removeFromCard(numAdd)
      alert(shop.showCart())
      break
    }
    case "showDescription": {
      let numDis = prompt(NUM_DIS)
			alert(allProducts[numDis - 1].getDescription())
      break
    }
    case "offer": {
			let offer_email,
					offer_phone,
					offer_post
			if (shop.productsCart.length == 0){
				alert("Вы не добавили товары в карзину для заказа")
				break
			}
			function testEmail() {
				offer_email = prompt(OFFER_EMAIL)
				if (Offer.test(offer_email,regEmail)) return offer_email
				else{ 
					alert(OFFER_EMAIL_WRONG)
					testEmail()
				}
			}
			function testPhone() {
				offer_phone = prompt(OFFER_PHONE)
				if (Offer.test(offer_phone,regPhoneNumber)) return offer_phone 
				else{ 
					alert(OFFER_PHONE_WRONG)
					testPhone()
				}	
			}
			function testPost() {
				offer_post = prompt(OFFER_POST)
				if (Offer.test(offer_post,regPostCode)) return offer_post
				else{ 
					alert(OFFER_POST_WRONG)
					testPost()
				}		
			}
			testEmail()
			testPhone()
			testPost()
			let offer_products = shop.productsCart.slice().toString()
			let offer = new Offer(offer_email, offer_phone, offer_post, offer_products)
			shop.clearProducts()
			let res =`Данные заказа \n`
			for (let i in offer) {
				res += `${offer[i]}\n`
			}
			alert(res)
      break
    }
    case "help":
      alert(HELP)
      break
    default:
      alert(cmd + " no found")
      break
  }
} while (true)