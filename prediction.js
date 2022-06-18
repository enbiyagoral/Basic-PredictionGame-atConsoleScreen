
let prediction;
let result;
let point=100;
let info=`Oyunun kuralları:\n1)Toplam 100 puanınız var.\n2)Her yanlış cevapta 20 puanınız eksilecektir.\n3)1-10 arasında bir tahminde bulunmayı unutma!\n4)Sıcak ipucunu aldığınızda cevap, verdiğiniz sayıdan 2 az veya 2 fazladır.\n5)Çok sıcak ipucunu aldıktan sonra cevap, yazdığınız sayıdan 1 az veya 1 fazladır ve yanlış vereceğiniz cevap oyunu sonlandırır.`;

console.log(info);
result = Math.floor(Math.random()*10+1);


while(result != prediction && point>0 ){
    prediction= prompt("Write your prediction:");
    if(result == prediction && prediction<=10){
        console.log(`Tebrikler doğru tahmin ettiniz.\nDoğru Cevap: ${result}\nPuanınız: ${point}`);
    }    

    if(Math.abs(result-prediction)<=2 && Math.abs(result-prediction)>=2){
        console.log(`\nİpucu: Sıcak`);
        point -=20;
        console.log(`Cevabınız: ${prediction}\nKalan puanınız: ${point}`); 
    }

    if(Math.abs(result-prediction)==1){

            let x="İpucu: Çok Sıcak";
            point -=20;
            console.log(`\nCevabınız: ${prediction}\n${x}\nKalan puanınız: ${point}`);
            prediction= prompt("Write your prediction:");

            if(result != prediction){
                point=0;
                console.log(`Çok sıcak infosundan sonra cevabı bilemediğiniz için kaybettiniz`);
                break;
            }
            else{
                console.log(`Tebrikler doğru tahmin ettiniz.\nDoğru Cevap: ${result}\nPuanınız: ${point}`);
            }

    }
        
    if(prediction>10){
            console.log("Oyunun kurallarını tekrar gözden geçirin.");
    }
        
    if(Math.abs(result-prediction)>2){
        console.log(`\İpucu: Soğuk`);
        point -=20;
        console.log(`Cevabınız: ${prediction}\nKalan puanınız: ${point}`); 
    }

    if(point == 0 && prediction<=10){
        console.log(`Yeterli krediniz kalmadı.\nPuanınız: ${point}\nDoğru Cevap:${result}`);
        break;
    }        
}
