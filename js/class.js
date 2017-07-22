/**
 * @class Product.
 * 
 * @param {number} price 
 * @param {number} category 
 * @param {number} firm
 * @param {string} model
 * @param {string} description
 */
function Product(price, category, firm, model, description) {
	this.getPrice = function () {
		return price
	}
	this.getCategory = function () {
		return category 
	}
	this.getFirm = function () {
		return firm 
	}
	this.getModel = function () {
		return model
	}
	this.getDescription = function () {
		return description
	}
	this.toString = function () {
		return `${price} ${category} ${model}`
	}
} 

/**
 * @class Cart.
 */
function Cart() {
	this.productsCart = []
}
Cart.prototype.addToCard = function (product) {
	this.productsCart.push(product)
}
Cart.prototype.removeFromCard = function (index) {
	this.productsCart.splice(index - 1, 1)
}
Cart.prototype.clearProducts = function () {
	 this.productsCart.splice(0,this.productsCart.length)
}
Cart.prototype.showCart = function () {
	let res = ``
	for(let i = 0 ; i < this.productsCart.length; ++i)
		res += `${i + 1}. ${this.productsCart[i].toString()}\n`
	if (this.productsCart.length == 0)
		res = "Корзина пуста"
	return res
}

/**
 * @class Offer.
 * 
 * @param {string} email
 * @param {string} phoneNumber 
 * @param {number} postCode 
 */	
function Offer(email, phoneNumber, postCode, offerProducts) {
	this.email = email
	this.postCode = postCode
	this.phoneNumber = phoneNumber
	this.offerProducts = offerProducts
}

Offer.test = function (data, reg) {
	return reg.test(data)
}

/**
 * @class Shop.
 * 
 * @param {Array} products 
 */	
function Shop(products) {
	Cart.apply(this)
	this.products = products
	this.sortProducts = function (flag) {
		let callback
		switch (flag) {
			case [ASC]: {
				callback = function (first, last) {
					return first.getPrice() > last.getPrice()
				}
				break
			}
			case [DESC]: {
				callback = function (first, last) {
					return first.getPrice() < last.getPrice()
				}
				break
			}
		}
		return this.products.sort(callback)
	}
	this.filter = function (category) {
		return products.filter((el) => el.getCategory() == category)
	}
	this.showAllProducts = function () {
			let res = ``
			for(let i = 0 ; i < products.length; ++i)
			res +=`${i + 1}. ${products[i].toString()}\n`
			return res
	}
}
Shop.prototype = Object.create(Cart.prototype)
Shop.prototype.constructor = Shop