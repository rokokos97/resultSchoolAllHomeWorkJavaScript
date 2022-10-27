const clientName = "Igor";
let clientSpentForAllTime = 110;
let clientSpentToday = 25;
let discount;
if (100 < clientSpentForAllTime && clientSpentForAllTime < 300) {
  discount = 10;
} else if (300 < clientSpentForAllTime && clientSpentForAllTime < 500) {
  discount = 20;
} else if (500 < clientSpentForAllTime) {
  discount = 30;
}
alert(`Вам предоставляется скидка в ${discount}%!`);
clientSpentToday = clientSpentToday - clientSpentToday * (discount / 100);
clientSpentForAllTime += clientSpentToday;
alert(
  `Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`
);
