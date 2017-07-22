const regEmail = /[a-z0-9]+\@[a-z]+\.[a-z]{2,}/i
const	regPhoneNumber = /\([0-9]{3}\)\s[0-9]{3}\-[0-9]{2}\-[0-9]{2}/
const regPostCode = /[0-9]+/
const	ASC = "ASC"
const DESC = "DESC"
function parseArr(arr) {
	let res = ""
	for (let i = 0; i < arr.length; ++i) {
		res += `${i +1}. ${arr[i]} \n`
	}
	return res
}

const CMD_ENTER = "Здравствуйте. Введдите команду\n Для помощи введите help"
const LIST_CATEGORY = "Категории:" + "\n"
  + "'1' - ноутбуки" + "\n"
  + "'2' - моноблоки" + "\n"
  + "'3' - персональные компьютеры" + "\n"
  + "'4' - трансформеры" + "\n"
const SORT_PRICE = "Введите как показать товары\n"
														+"По возрастанию цены 'ASC'\n"
													  +"По убыванию цены 'DESC'"
const NUM_ADD = "Введите номер товара в каталоге который добавить"
const REMOVE_FROM_CART = "Введите номер товара в корзине который убрать"
const HELP = "Команды:" + "\n"
  + "'catalog' - каталог всех товаров" + "\n"
  + "'listCategory' - показать список категорий" + "\n"
  + "'filterCategory' - показать товары в выбранной категории" + "\n"
  + "'sortPrice' - отсортировать товары по цене" + "\n"
  + "'cart' - показывает какие товары в корзине" + "\n"
  + "'+cart' - добавляет товар в корзину" + "\n"
  + "'-cart' - удаляет товар в корзину" + "\n"
  + "'showDescription' - Выводит описание товара" + "\n"
  + "'count' - for echo count of movies."
const NUM_DIS = "Введите номер продукта для которого нужно вывести описание"
const OFFER_EMAIL = "Введите свой email"
const OFFER_EMAIL_WRONG = "Вы ввели неверный email"
const OFFER_PHONE = "Введите свой номер телефона\n" + "Пример (123) 456-78-90"
const OFFER_PHONE_WRONG = "Вы ввели неверный телефон"
const OFFER_POST = "Введите номер отделения почты"
const OFFER_POST_WRONG = "Вы ввели неверный номер отделения"