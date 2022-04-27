let replikler=["Bana efendim demenize gerek yok efendim.","Ben piskopat değiim, yüksek işlevli bir sosyoplatım.","Büyük güç büyük sorumluluklar getirir.","Başkan Snow'a bir mesajım var bize işkence edebilirsiniz. Bizi bombalayabilirsiniz. Yerle bir edebilirsiniz ama bunu görüyor musunuz? Alevler büyüyor ve eğer biz yanarsak sizde bizimle birlikte yanarsınız.","Kahramanlar doğmaz, karanlıkta dövülürler.","...ve Vison ve yarattığın bütün bu hayat kaos büyüsüdür Wanda. Bu da seni Scarlet Witch yapar.","İhsan Yıldırım. Yıldırım Kuru Temizleme İstanbul'da 7 şubesi, biri illa ki yanı başınızda.","Sen sıcak yatağında yaşlı bir kadın olarak öleceksin Rose, şimdi değil, burada değil... Bana söz ver!","Annem gitmişti. Tüm dünya kararmalı, buz kesmeliydi. Hiçbir şey güzel gözükmemeliydi.","Ölüler için üzülme Harry, yaşayanlar için üzül, en çokta sevgisiz yaşayanlara."];
let filmler=["Harry Potter ve Melez Prens","Sherlock Holmes","Spider-Man","Açlık Oyunları: Alaycı Kuş Bölüm 1","What If...?","WandaVison","Tatlı Hayat","Titanik","Percy Jackson & Olimposlular: Şimşek Hırsızı","Harry Potter ve Ölüm Yadigarları Bölüm 2"];
let resimler=["images/hpvmp.jpg","images/sh.jpg","images/sm.jpg","images/aoak.jpg","images/wi.jpg","images/Wanda.jpg","images/th.jpg","images/t.jpg","images/pjvosh.jpg","images/hpvoyb2.jpg"];

const buton=document.getElementById("btnDegistir");
const replik=document.getElementById("replik");
const film=document.getElementById("film");
const resim=document.getElementById("resim");

let sayi=Math.floor(Math.random() * 10);
replik.innerHTML=replikler[sayi];
film.innerHTML=filmler[sayi];
resim.setAttribute("src",resimler[sayi]);

buton.addEventListener("click",()=>{
    sayi=Math.floor(Math.random() * 10);
    replik.innerHTML=replikler[sayi];
    film.innerHTML=filmler[sayi];
    resim.setAttribute("src",resimler[sayi]);
})