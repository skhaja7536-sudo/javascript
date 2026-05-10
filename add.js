function add1(...numbers) {
    let sum= 0;
    for(let i of numbers){
        sum+=i;
    }
    console.log(sum);
}
add1();
add1(10);
add1(10,20);
add1(10,20,30,40);
add1(10,20,30);