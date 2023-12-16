export default class TablaSorView{
    #obj={};
    constructor(index, obj, szElem){
        this.index = index;
        this.#obj= obj;
        this.szElem= szElem;
        //console.log(this.#obj);
        this.htmlOsszerak();
        //megfogjuk a törlés gombot
        this.torlesElem = this.szElem.find(".torles:last");
        this.modositElem= this.szElem.find(".modosit:last");
        /*console.log(this.torlesElem);*/
        this.torlesElem.on("click", ()=>{
          //console.log("törlés");
          this.trigger("sorTorles");
        });
        this.modositElem.on("click", ()=>{
          //console.log("módosít");
          this.objectTrigger("sorModosit");
        })
}

    htmlOsszerak() {
        let txt = "<tr>";
        for (const key in this.#obj) {
          txt += `<td>${this.#obj[key]}</td>`;
        }
        txt += `<td><button class="modosit">Módosít</button></td>`;
        txt += `<td><button class="torles">Törlés</button></td>`;
        txt += "</tr>";
        //console.log(txt);
        this.szElem.append(txt);
      }

    trigger(e){
        const esemenyem=new CustomEvent(e, {detail: this.#obj.kyra_id})
        window.dispatchEvent(esemenyem)
      }

    objectTrigger(e){
        const esemenyem=new CustomEvent(e, {detail: this.#obj})
        window.dispatchEvent(esemenyem)
    }
}