function _0x21a9(_0x3a1101, _0x58cae1) {
    var _0x52a0e9 = _0x52a0();
    return (
        (_0x21a9 = function (_0x21a916, _0x36d135) {
            _0x21a916 = _0x21a916 - 0x10b;
            var _0x3bfb21 = _0x52a0e9[_0x21a916];
            return _0x3bfb21;
        }),
        _0x21a9(_0x3a1101, _0x58cae1)
    );
}
(function (_0x3b5e93, _0x51a4d9) {
    var _0x1d57a1 = _0x21a9,
        _0x2fb26e = _0x3b5e93();
        // console.log(_0x2fb26e);
        
    while (!![]) {
        try {
            var _0xb93089 =
                (parseInt(_0x1d57a1(0x113)) / 0x1) * (parseInt(_0x1d57a1(0x116)) / 0x2) + parseInt(_0x1d57a1(0x10e)) / 0x3 +
                (-parseInt(_0x1d57a1(0x114)) / 0x4) * (parseInt(_0x1d57a1(0x10c)) / 0x5) + -parseInt(_0x1d57a1(0x10d)) / 0x6 +
                (parseInt(_0x1d57a1(0x112)) / 0x7) * (parseInt(_0x1d57a1(0x111)) / 0x8) + -parseInt(_0x1d57a1(0x10f)) / 0x9 +
                (-parseInt(_0x1d57a1(0x117)) / 0xa) * (-parseInt(_0x1d57a1(0x110)) / 0xb);
                // console.log(_0xb93089)
                // console.log(_0x51a4d9)
            if (_0xb93089 === _0x51a4d9) break;
            else _0x2fb26e["push"](_0x2fb26e["shift"]());
            // console.log(_0x2fb26e)
        } catch (_0x505ba2) {
            // console.log(_0x505ba2)
            _0x2fb26e["push"](_0x2fb26e["shift"]());
        }
        
    }
})(_0x52a0, 0x75540);
function _0x52a0() {
    var _0x535f4a = [
        "28BafMaV",
        "758AkXVzG",
        "273012qOQrAs",
        "MzMgNjIgMzMgNjEgMzggMzMgMzUgNjIgMzIgNjIgMzQgNjMgMzUgNjMgMzMgNjMgMzQgNjMgMzkgMGEg",
        "852oURttM",
        "29740fQJuBh",
        "log", // 0x10b
        "65kxVvsh",
        "2876376NPvEii",
        "2765073YLbMKb",
        "1245960jrlvcM",
        "847PPkJDZ",
        "1024208HdtaOl",
    ];
    _0x52a0 = function () {
        return _0x535f4a;
    };
    return _0x52a0();
}

function hex2a(hexString) {   
    var cleanedHexString = hexString.replace(/\s/g, '');
    var asciiString = Buffer.from(cleanedHexString, 'hex').toString('ascii').replace(/\n/g, "");
    // asciiString = asciiString.replace('/\n\g','');
    return asciiString;
}

function breaklastlayer(ct) {
    // var key = "0?A=?=3=.</";
    // var encrypted_text = String.raw`33835245349`;
    var key = String.raw`f¥¡sý¡·¤´±`;
    var encrypted_text = ct;
    var key_char = [];
    var encrypted_text_char = [];
    var clear_text_char = '';
    for(let i = 0; i < key.length; i++) {
        var key_charat = key.charAt(i);
        var key_char_code = key_charat.charCodeAt(0);
        key_char.push(key_char_code);
    }
    
    for(let i = 0; i < encrypted_text.length; i++) {
        var key_charat = encrypted_text.charAt(i);
        var encrypted_text_char_code = key_charat.charCodeAt(0);
        // console.log(encrypted_text.charAt(i))
        encrypted_text_char.push(encrypted_text_char_code);
    }

    // console.log(key_char);
    

    for(let i = 0; i < key.length; i++){
        let a = parseInt(key_char[i]) - parseInt(encrypted_text_char[i]);
        if (a < 0){a = a + 255 }
        let b = a % 255;
        let character = String.fromCharCode(b);
        clear_text_char += character;
    }
    console.log(clear_text_char)
}

function getKey(){
    var result = 'cryptograph'
    var encrypted_text = '♥3(♥♣24ECDI'
    var temp1 = ''
    var temp2 = ''
    var temp3 = ''
    var key_result = ''

    for(let i = 0; i < result.length; i++) {
        temp1 = result.charAt(i);
        temp1 = temp1.charCodeAt(0);
        // console.log(temp1);
        temp2 = encrypted_text.charAt(i);
        temp2 = temp2.charCodeAt(0);
        // console.log(temp2);
        temp3 = (parseInt(temp2) + parseInt(temp1)) % 255;
        if(temp3 < 0 ){temp3 += 255}
        // console.log(temp3);
        key_result += String.fromCharCode(temp3);
    }
    console.log(key_result)
}

function breakme() {
    var _0x5af254 = _0x21a9;
    var s = _0x5af254(0x115);
    var d_b64 = atob(s);
    d_b64 = String.raw`03 b3 a8 03 05 b2 b4 c5 c3 c4 c9`
    var de2 = hex2a(d_b64)
    // const asciiString = Buffer.from(de2, 'hex').toString('ascii');
    console[_0x5af254(0x10b)](_0x5af254(0x115));
    console.log(d_b64);
    console.log(de2);
    // console.log(asciiString.length);
    // console.log(asciiString);
    breaklastlayer(de2);
    getKey();
}
breakme();