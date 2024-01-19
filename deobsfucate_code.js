function breakme() {
    console.log(
      'MzMgNjIgMzMgNjEgMzggMzMgMzUgNjIgMzIgNjIgMzQgNjMgMzUgNjMgMzMgNjMgMzQgNjMgMzkgMGEg'
    )
  }
  breakme()

// function hex2a(hexString) {   
//     var cleanedHexString = hexString.replace(/\s/g, '');
//     var asciiString = Buffer.from(cleanedHexString, 'hex').toString('ascii').replace(/\n/g, "");
//     // asciiString = asciiString.replace('/\n\g','');
//     return asciiString;
// }

// function breaklastlayer(ct) {
//     // var key = "0?A=?=3=.</";
//     // var encrypted_text = String.raw`33835245349`;
//     var key = String.raw`f¥¡sý¡·¤´±`;
//     var encrypted_text = ct;
//     var key_char = [];
//     var encrypted_text_char = [];
//     var clear_text_char = '';
//     for(let i = 0; i < key.length; i++) {
//         var key_charat = key.charAt(i);
//         var key_char_code = key_charat.charCodeAt(0);
//         key_char.push(key_char_code);
//     }
    
//     for(let i = 0; i < encrypted_text.length; i++) {
//         var key_charat = encrypted_text.charAt(i);
//         var encrypted_text_char_code = key_charat.charCodeAt(0);
//         // console.log(encrypted_text.charAt(i))
//         encrypted_text_char.push(encrypted_text_char_code);
//     }

//     // console.log(key_char);
    

//     for(let i = 0; i < key.length; i++){
//         let a = parseInt(key_char[i]) - parseInt(encrypted_text_char[i]);
//         if (a < 0){a = a + 255 }
//         let b = a % 255;
//         let character = String.fromCharCode(b);
//         clear_text_char += character;
//     }
//     console.log(clear_text_char)
// }

// function getKey(){
//     var result = 'cryptograph'
//     var encrypted_text = '♥3(♥♣24ECDI'
//     var temp1 = ''
//     var temp2 = ''
//     var temp3 = ''
//     var key_result = ''

//     for(let i = 0; i < result.length; i++) {
//         temp1 = result.charAt(i);
//         temp1 = temp1.charCodeAt(0);
//         // console.log(temp1);
//         temp2 = encrypted_text.charAt(i);
//         temp2 = temp2.charCodeAt(0);
//         // console.log(temp2);
//         temp3 = (parseInt(temp2) + parseInt(temp1)) % 255;
//         if(temp3 < 0 ){temp3 += 255}
//         // console.log(temp3);
//         key_result += String.fromCharCode(temp3);
//     }
//     console.log(key_result)
// }

// function breakme() {
//     var _0x5af254 = _0x21a9;
//     var s = _0x5af254(0x115);
//     var d_b64 = atob(s);
//     d_b64 = String.raw`03 b3 a8 03 05 b2 b4 c5 c3 c4 c9`
//     var de2 = hex2a(d_b64)
//     // const asciiString = Buffer.from(de2, 'hex').toString('ascii');
//     console[_0x5af254(0x10b)](_0x5af254(0x115));
//     console.log(d_b64);
//     console.log(de2);
//     // console.log(asciiString.length);
//     // console.log(asciiString);
//     breaklastlayer(de2);
//     getKey();
// }
