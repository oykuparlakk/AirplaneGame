# GameProject
 ## Özet
 
Bu projede html,css ve javascript kullanılmıştır.Kısaca farklı değerlerde coinleri toplayıp tornedo'dan kaçan 2 boyutlu bir oyun.
### oyunun linki:[link](http://airplanecoingame.eu5.org)

## Tasarım
Projede kullanılan nesnelerin tamamını [Game Developer Studio](https://www.gamedeveloperstudio.com/index.php?orderby=priceup&resultsperpage=25 "Game Developer Studio")'da olan packlerden birini seçtim.Dağlara ve coinlere daha iyi gözükmesi için hareket fonksiyonelliği sağladım.Coinlere için sesleri [Open Game Art ](https://opengameart.org/art-search-advanced?keys=coin&title=&field_art_tags_tid_op=or&field_art_tags_tid=&name=&field_art_type_tid%5B%5D=13&sort_by=count&sort_order=DESC&items_per_page=24&Collection=) sitesinden indirdim. Coinlere düz hareket eden obje olmaması için up ve down hareketini ekledim.
## Test Aşaması

js uzantılı dosyada yorum satırlarında örnek olarak playerda
   /* ctx.fillStyle = 'red';
   ctx.beginPath();
   ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
   ctx.fill();
   ctx.closePath();*/ 
        şeklinde daireler oluşturup o taslağa fonksiyonellik(coine değince skor artması,coinin kaybolması vb.) ekledikten sonra .png dosyalarını yerleştirdim.

