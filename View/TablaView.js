import FejlecView from "./FejlecView.js";
import { adatLeiro } from "./adatleiro.js";
import TablaSorView from "./TablaSorView.js";

export default class TablaView{
    #list=[];
    constructor(list, szElem){
        this.#list=list;
        szElem.html(`<table class='table table-bordered'>
                        <thead></thead>
                        <tbody></tbody>
                        </table>`);
    this.tbodyElem=szElem.find("tbody");
    this.theadElem=szElem.find("thead");
    new FejlecView(adatLeiro, this.theadElem);
    this.sorMegjelenit();
    }
    
  sorMegjelenit(){
    this.#list.forEach((elem, index)=>{
    new TablaSorView(index, elem, this.tbodyElem)
    })
  }
}