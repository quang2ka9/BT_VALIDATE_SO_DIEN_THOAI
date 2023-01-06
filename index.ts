let PhoneNumber =new RegExp(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g);

let SDT = ['8409888888881','84988888888','840988888888'];


for( let i of SDT){
    if(PhoneNumber.test(i)){
        console.log(i + 'is valid');

    }else {
        console.log(i+ 'is invalid')
    }
}