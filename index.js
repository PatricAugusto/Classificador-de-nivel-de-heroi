let nickName = "Patric";
let XP = 10500;

if(XP <= 1000){
    console.log(`O herói ${nickName} está no nível de Ferro`)
}else if(XP <= 1001 && XP <= 2000){
    console.log(`O herói ${nickName} está no nível de Bronze`)
}else if(XP <= 2001 && XP <= 5000){
    console.log(`O herói ${nickName} está no nível de Prata`)
}else if(XP <= 5001 && XP <= 7000){
    console.log(`O herói ${nickName} está no nível de Ouro`)
}else if(XP <= 7001 && XP <= 8000){
    console.log(`O herói ${nickName} está no nível de Platina`)
}else if(XP <= 8001 && XP <= 9000){
    console.log(`O herói ${nickName} está no nível de Ascendente`)
}else if(XP <= 9001 && XP <= 10000){
    console.log(`O herói ${nickName} está no nível de Imortal`)
}else if(XP >= 10001){
    console.log(`O herói ${nickName} está no nível de Radiante`)
}else{
    console.log("ERROR")
}