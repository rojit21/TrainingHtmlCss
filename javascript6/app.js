const odd = () => {
    let number=69;
    if(number%2==0){
        console.log("number is even");
    }
    else{
        console.log("number is odd");
    }
};
odd();

const number=[1,2,3,4,5,6,7,8,9,10];
console.log("The array data are "+number);


let num=10;
console.log(num);
function changenumber(num)
{
    num=20;
}
changenumber(num);
console.log("The number is still "+num);



const marks=[11,27,35,45];
marks.push(50);
console.log("The array is: " + marks);
console.log(typeof marks);
