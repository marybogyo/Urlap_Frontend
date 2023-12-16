export default class FejlecView{
    #obj;
    constructor(obj, szElem){
        this.#obj=obj;
        this.szElem=szElem;
        this.htmlOsszerak();
    }

    htmlOsszerak(){
        let txt ="<tr>";
for (const key in this.#obj) {
    txt+=`<th>${this.#obj[key].megjelenes}</th>`
}
    txt+="</tr>";
    this.szElem.append(txt);
    }
}