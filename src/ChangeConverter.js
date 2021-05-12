const changeConverter = (num) => {

  const arr = [];
  
  while (true) {
      
    if(num >= 50){
      arr.push('£50');
      num -= 50;
      continue;
    } 
    else if(num >= 20){
      arr.push('£20');
      num -= 20;
      continue;
    } 
    else if(num >= 10){
      arr.push('£10');
      num -= 10;
      continue;
    } 
    else if(num >= 5){
      arr.push('£5');
      num -= 5;
      continue; 
    } 
    else if(num >= 1){
      arr.push('£1');
      num -= 1;
      continue;  
    } 
    else if(num >= 0.50){
      arr.push('50p');
      num = (num - 0.5).toFixed(2);   
      continue;
    } 
    else if(num >= 0.20){
      arr.push('20p');
      num = (num - 0.20).toFixed(2);  
      continue;
    } 
    else if(num >= 0.10){
      arr.push('10p');
      num = (num - 0.10).toFixed(2);
      continue;
    } 
    else if(num >= 0.05){
      arr.push('5p');
      num = (num - 0.05).toFixed(2);
      continue; 
    } 
    else if(num >= 0.02){
      arr.push('2p');
      num = (num - 0.02).toFixed(2);   
      continue;
    } 
    else if(num >= 0.01){
      arr.push('1p');
      num = (num - 0.01).toFixed(2);
      continue;
    }
  break;
  }
  return arr;
}