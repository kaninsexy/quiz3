function toChange(money) {
  let thaosand,
    fivehunred,
    hunred,
    fifty,
    twenty,
    ten,
    five,
    two,
    one = 0;
  let sum = money;
  thaosand = Math.floor(sum / 1000);
  sum -= thaosand * 1000;
  fivehunred = Math.floor(sum / 500);
  sum -= fivehunred * 500;
  hunred = Math.floor(sum / 100);
  sum -= hunred * 100;
  fifty = Math.floor(sum / 50);
  sum -= fifty * 50;
  twenty = Math.floor(sum / 20);
  sum -= twenty * 20;
  ten = Math.floor(sum / 10);
  sum -= ten * 10;
  five = Math.floor(sum / 5);
  sum -= five * 5;
  two = Math.floor(sum / 2);
  sum -= two * 2;
  one = Math.floor(sum / 1);
  sum -= one * 1;
  console.log(
    `1000:${thaosand},500:${fivehunred},100:${hunred},50:${fifty},20:${twenty},10:${ten},5:${five},2:${two},1:${one}`
  );
}
