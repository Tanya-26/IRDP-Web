const age = 15;
const isOldEnough = age>= 18;

if(isOldEnough){
    console.log('Sarah can start driving license 🚗');
}else{
    const yaerLeft = 18 - age;
    console.log(`Sarch is too young. Wait another ${yaerLeft} years`);
}