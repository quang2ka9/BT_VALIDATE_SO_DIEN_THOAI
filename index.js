var PhoneNumber = new RegExp(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g);
var SDT = ['8409888888881', '84988888888', '840988888888'];
for (var _i = 0, SDT_1 = SDT; _i < SDT_1.length; _i++) {
    var i = SDT_1[_i];
    if (PhoneNumber.test(i)) {
        console.log(i + 'is valid');
    }
    else {
        console.log(i + 'is invalid');
    }
}
