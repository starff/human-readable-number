module.exports = function toReadable (number) {
   let str = number + '';
   let arr = str.split('').reverse();
   let result = [];
       if(arr[1] == 1) {
        if(arr[0] == 0 ) {
         result.push('ten');
        } else if (arr[0] == 1) {
         result.push('eleven');
        } else if (arr[0] == 2) {
         result.push('twelve');
        } else if (arr[0] == 3) {
         result.push('thirteen');
        } else if (arr[0] == 4) {
         result.push('fourteen');
        } else if (arr[0] == 5) {
         result.push('fifteen');
        } else if (arr[0] == 6) {
         result.push('sixteen');
        } else if (arr[0] == 7) {
         result.push('seventeen');
        } else if (arr[0] == 8) {
         result.push('eighteen');
        } else if (arr[0] == 9){
         result.push('nineteen');
        }
       } else {
        if(arr[0] == 0 && arr.length == 1) {
         result.push('zero');
        } else if (arr[0] == 1) {
         result.push('one');
        } else if (arr[0] == 2) {
         result.push('two');
        } else if (arr[0] == 3) {
         result.push('three');
        } else if (arr[0] == 4) {
         result.push('four');
        } else if (arr[0] == 5) {
         result.push('five');
        } else if (arr[0] == 6) {
         result.push('six');
        } else if (arr[0] == 7) {
         result.push('seven');
        } else if (arr[0] == 8) {
         result.push('eight');
        } else if (arr[0] == 9){
         result.push('nine');
        }
       };
       if(arr[1] == 2) {
        result.push('twenty');
       } else if (arr[1] == 3) {
        result.push('thirty');
       } else if (arr[1] == 4) {
        result.push('forty');   
       } else if (arr[1] == 5) {
        result.push('fifty');  
       } else if (arr[1] == 6) {
        result.push('sixty');  
       } else if (arr[1] == 7) {
        result.push('seventy');  
       } else if (arr[1] == 8) {
        result.push('eighty');  
       } else if (arr[1] == 9) {
        result.push('ninety');  
       };
       if(arr[2] == 1) {
        result.push('one hundred');
       } else if (arr[2] == 2) {
        result.push('two hundred');
       } else if (arr[2] == 3) {
        result.push('three hundred');   
       } else if (arr[2] == 4) {
        result.push('four hundred');   
       } else if (arr[2] == 5) {
        result.push('five hundred');   
       } else if (arr[2] == 6) {
        result.push('six hundred');   
       } else if (arr[2] == 7) {
        result.push('seven hundred');  
       } else if (arr[2] == 8) {
        result.push('eight hundred');   
       } else if (arr[2] == 9) {
        result.push('nine hundred');   
       };  
   return result.reverse().join(' ');
}
