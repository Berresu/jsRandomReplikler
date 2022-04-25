let replikler=["Bana efendim demenize gerek yok efendim.","Ben piskopat değiim, yüksek işlevli bir sosyoplatım.","Büyük güç büyük sorumluluklar getirir.","Başkan Snow'a bir mesajım var bize işkence edebilirsiniz. Bizi bombalayabilirsiniz. Yerle bir edebilirsiniz ama bunu görüyor musunuz? Alevler büyüyor ve eğer biz yanarsak sizde bizimle birlikte yanarsınız.","Kahramanlar doğmaz, karanlıkta dövülürler.","...ve Vison ve yarattığın bütün bu hayat kaos büyüsüdür Wanda. Bu da seni Scarlet Witch yapar.","İhsan Yıldırım. Yıldırım Kuru Temizleme İstanbul'da 7 şubesi, biri illa ki yanı başınızda.","Sen sıcak yatağında yaşlı bir kadın olarak öleceksin Rose, şimdi değil, burada değil... Bana söz ver!","Annem gitmişti. Tüm dünya kararmalı, buz kesmeliydi. Hiçbir şey güzel gözükmemeliydi.","Ölüler için üzülme Harry, yaşayanlar için üzül, en çokta sevgisiz yaşayanlara."];
let filimler=["Harry Potter ve Melez Prens","Sherlock Holmes","Spider-Man","Açlık Oyunları: Alaycı Kuş Bölüm 1","What If...?","WandaVison","Tatlı Hayat","Titanik","Percy Jackson & Olimposlular: Şimşek Hırsızı","Harry Potter ve Ölüm Yadigarları Bölüm 2"];

const buton=document.getElementById("btnDegistir");
const replik=document.getElementById("replik");
const filim=document.getElementById("filim");

let sayi=Math.floor(Math.random() * 10);
replik.innerHTML=replikler[sayi];

buton.addEventListener("click",()=>{
    sayi=Math.floor(Math.random() * 10);
    replik.innerHTML=replikler[sayi];

    if(sayi==0){
        filim.innerHTML=filimler[0];
        document.body.style.backgroundColor= "#082024";
    }
    else if(sayi==1){
        filim.innerHTML=filimler[1];
        document.body.style.backgroundColor= "#BEA99C";
    }
    else if(sayi==2){
        filim.innerHTML=filimler[2];
        document.body.style.backgroundColor= "#842322";
    }
    else if(sayi==3){
        filim.innerHTML=filimler[3];
        document.body.style.backgroundColor= "#F07829";
    }
    else if(sayi==4){
        filim.innerHTML=filimler[4];
        document.body.style.backgroundColor= "#65294F";
    }
    else if(sayi==5){
        filim.innerHTML=filimler[5];
        document.body.style.backgroundColor= "#8C0001";
    }
    else if(sayi==6){
        filim.innerHTML=filimler[6];
        document.body.style.backgroundColor= "#B3B7C2";
    }
    else if(sayi==7){
        filim.innerHTML=filimler[7];
        document.body.style.backgroundColor= "#001A5A";
    }
    else if(sayi==8){
        filim.innerHTML=filimler[8];
        document.body.style.backgroundColor= "#528366";
    }
    else if(sayi==9){
        filim.innerHTML=filimler[9];
        document.body.style.backgroundColor= "#969393";
    }
})