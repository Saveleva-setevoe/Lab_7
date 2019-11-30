          //Практическое 1
// задание 1 
/*
function getNum( num ) {
    var obj = {};
    if ( num < 1 || num > 999 || isNaN( num )) {
        console.log( 'Ошибка. Введите число от 1 до 999' );
        return obj;
    }
    else {
        obj[ 'едининцы' ] = num % 10;
        obj[ 'десятки' ] = ( num - obj[ 'едининцы' ]) % 100 / 10;
        obj[ 'сотни' ] = ( num - obj[ 'едининцы' ] - obj[ 'десятки' ] * 10 ) % 1000 / 100;
        return obj;
    }
}
var a = prompt('Введите число от 0 до 999');
console.log( getNum(a));
*/



// Задание 2
/*
let basket = {
    goodList: [],
    countTotalPrice() {//общая стоимость
        let totalPrice = 0;
        for (let i = 0; i < products.length; i++) {
            let goodsItem = this.goodList[i]; 
            totalPrice += goodsItem.price * goodsItem.count;
        }
        return totalPrice;
    },
    countTotalNumber() {//общее количество
        let totalCount = 0;
        for (let i = 0; i < products.length; i++) {
            let goodsItem = this.goodList[i]; 
            totalCount += goodsItem.count;
        }
        return totalCount;
    },
    putProduct(product, count) {//добавление товара в корзину
        let goodsItem = { 
            product,
            price: product.price,
            count
        }; 
        this.goodList.push(goodsItem);
    }
};
 
let products = [];//
for (let i = 1; i < (parseInt(Math.random() * 10) + 2); i++) {//количество товаров от 1 до 10
    let product = {//заполняем продукты
        name: 'name' + i,
        price: parseInt(Math.random() * 10000) / 100
    };
    products.push(product);
}
console.log(products);
 
for (let i = 1; i <= products.length; i++) {
    // положить в корзину по одному товару на четной позиции и по 2 товара на нечетной позиции
    let count = i % 2 ? 2 : 1;
    basket.putProduct(products[i - 1], count);
}
console.log(basket);
console.log('Общая цена: ' + basket.countTotalPrice().toFixed(2));
console.log('Общее количество: ' + basket.countTotalNumber());
*/

           //Практическое 2
// задание 1

function chessboard() {
    var newTable = document.createElement( 'table' ),//10*10
        lets = [ '','A','B','C','D','E','F','G','H','' ],
        blackFigs1 = [ '8','','','','','','','','','8' ],
        whiteFigs1 = [ '1','','','','','','','','','1' ],
        blackFigs2 = [ '7','','','','','','','','','7' ],
        whiteFigs2 = [ '2','','','','','','','','','2' ];
    for ( var i = 0, a = 9; i < 10, a >= 0; i++, a-- ) {
        var newTr = newTable.insertRow(i);//добавление строки в таблицу
        for ( var j = 0; j < 10; j++ ) {
            var newTd = newTr.insertCell( j );//вставляем новую ячейку в последнюю позицию
                        switch (i) {
                case 0:
                    newTd.innerText = lets[ j ];
                    break;
                case 1:
                    newTd.innerHTML = blackFigs1[ j ];
                    break;
                case 2:
                    newTd.innerHTML = blackFigs2[ j ];
                    break;
                case 7:
                    newTd.innerHTML = whiteFigs2[ j ];
                    break;
                case 8:
                    newTd.innerHTML = whiteFigs1[ j ];
                    break;
                case 9:
                    newTd.innerText = lets[ j ];
                    break;
                default:
                    if ( j === 0 || j === 9 ) {
                        newTd.innerHTML = a;
                    }
                    break;
            }
        }
    }
    var elem = document.getElementsByClassName( 'chess' );
    document.body.appendChild( newTable );
};
chessboard();

