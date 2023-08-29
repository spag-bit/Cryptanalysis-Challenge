console.log(
"3b3a83b26b24c35c33c34c39"
.match(/.{1,11}/g)
.map(hex => String.fromCharCode(parseInt(hex, 16)))
.join("")
);