var count = 0;

function cc(card) {
  // Cambia solo el código debajo de esta línea
  var answer = '';
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      //answer = count + ' Bet';
      break;
    case 7:
    case 8:
    case 9:
      count += 0;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      //answer = count + ' Hold';
      break;
    default:
      answer = 'Change Me';
  }
  if(count >= 1){
    answer = count + ' Bet';
    } else {
      answer = count + ' Hold';
      }
  // return "Change Me";
  return answer;
  // Cambia solo el código encima de esta línea
}
//cc(7); cc(8); cc(9);
//cc(2); cc(3); cc(4); cc(5); cc(6);
cc(2); cc('J'); cc(9); cc(2); cc(7);
//cc(2); cc(3); cc(7); cc('K'); cc('A');