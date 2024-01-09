
import UrlapView from "../View/UrlaView.js";
import DataService from "../Modell/DataService.js";
import TablaView from "../View/TablaView.js";
export default class Controller{
constructor(){
    new UrlapView($(".urlap"));

    this.dataService=new DataService();
    this.dataService.getData("kyras", this.megjelenit);
     
    $(window).on("sorTorles", (e)=>{
        //adatbázis tábla egy sorának a törlése
        this.dataService.deleteData("kyras", e.detail, this.hibaCallback, this.frissit);
    })
    $(window).on("sorModosit", (event)=>{
        this.mezoToltesModositAdatokkal(event.detail);
    })

    $(window).on("ujAdatHozzaAdasa", async(event)=>{
        console.log(event.detail);
        console.log("Az űrlap adatait megkapja a kontroller")
        let id = document.getElementById('modositoId').value;
        console.log(id);
        if (id == "")
        {
            await this.dataService.postData("kyras", event.detail);
            this.dataService.getData("kyras", this.megjelenit);
            //adatbázisba beilleszteni a kapott adatot
            //dataService.postAxios(apiVegpont, enevt.detail)
        }
        else{           
            await this.dataService.putData("kyras", id, event.detail);
            this.dataService.getData("kyras", this.megjelenit);
            
        }
    })
    /*$(window).on("modosit", (event)=>{
        console.log(event.detail)
        //await this.dataService.putData("kyras", event.detail);
        //this.dataService.getData("kyras", this.megjelenit);
    })*/

}
frissit(){
    location.reload();
}
hibaCallback(err){
    console.log(err)
}

megjelenit(list){
   //console.log(list)
    //példány. a view-t/Táblázatot
    new TablaView(list, $(".adatok"));
}

mezoToltesModositAdatokkal(adatok)
{
    console.log(adatok.name); 
    console.log(adatok.neme); 
    console.log(adatok.kor); 
    console.log(adatok.kyra_id); 
    let nevMezo = document.getElementById('Nev');
    let korMezo = document.getElementById('Kor');
    let nemMezo = document.getElementById('Nem');
    let IdMezo = document.getElementById('modositoId');
    nevMezo.value = adatok.name;
    korMezo.value = adatok.kor;
    nemMezo.value = adatok.neme;
    IdMezo.value = adatok.kyra_id;
    document.getElementById('submit').value = "Módosít";
}
}