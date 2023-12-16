
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

    $(window).on("ujAdatHozzaAdasa", async(event)=>{
        console.log("Az űrlap adatait megkapja a kontroller")
        console.log(event.detail)  
        await this.dataService.postData("kyras", event.detail);
        this.dataService.getData("kyras", this.megjelenit);
        //adatbázisba beilleszteni a kapott adatot
        //dataService.postAxios(apiVegpont, enevt.detail)
    })

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
}