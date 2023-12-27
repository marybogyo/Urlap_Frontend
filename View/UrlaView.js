import NumberUrlapView from "./NumberView.js";
import TextUrlapView from "./TextUrlap.js";
import { adatLeiro } from "./adatleiro.js";

class UrlapView{
    #formAdat={};
    #inputElemObjektumokLista=[];//itt tároljuk azokat az objektumokat, amelyek létrehozzák a form elemeket, kezdetben üres
    //amelyek létrehozzák a form elemeket
    #urlapValid = true;
    constructor(szElem){
        szElem.append("<form>")
        this.formElem=szElem.find("form")
        //console.log(this.formElem)
        this.htmlOsszeallit();
        /**submit gomb kezelése
         * 1. létrehozom a gombhoz a "kapaszkodót
         * 2. hozzárendelem az eseményt
         * 3. ebben az eseményben összegyűjtöm a form adatait
         * 4. és felküldöm a kontrollernek"
         */
        this.submitElem=this.formElem.find("#submit");
        this.submitElem.on("click", (event)=>{
            event.preventDefault();
            this.#urlapValid=true
            this.#inputElemObjektumokLista.forEach(
                (elem)=>{
                    this.#formAdat[elem.key]=elem.getValue();
                //Itt összegyűjtöm az egyes elemek validációs értékeit, Ha bármelyikük false lesz, nem fogjuk elküldeni az űrlapot!
                this.#urlapValid = this.#urlapValid && elem.getValid();
                }
            );

            console.log(this.#formAdat)
            //A triggert csak akkor hívom meg, ha this.#urlapValid értéke TRUE!
            if (this.#urlapValid) {
                this.trigger("ujAdatHozzaAdasa");
            }else{
                console.log("Az adatok nem validak!")
            }
        });
    }

    trigger(esemeny){
        const e=new CustomEvent(esemeny, {detail: this.#formAdat});
        window.dispatchEvent(e)
    }

    htmlOsszeallit(){
        let txt=""
        for (const key in adatLeiro) {
            switch (adatLeiro[key].tipus) {
                case "text":
                    this.#inputElemObjektumokLista.push(new TextUrlapView(this.formElem,adatLeiro[key],key)) 
                    break;
                case "number":
                    this.#inputElemObjektumokLista.push(new NumberUrlapView(this.formElem,adatLeiro[key],key))
                    break
                default:
                    break;
            }

        }

        txt += `<input type="number" id='modositoId' hidden />`;
        txt += `<div class="kuld">
                    <input type="submit"  
                    id="submit" 
                    value="  Küldés  ">
                    </div>`;
        /*txt += `<div class="mb-3 mt-3">
                    <input type="submit"  
                    id="modosit" 
                    value="Módosít">
                    </div>`;*/
        this.formElem.append(txt)

    }
}
export default UrlapView;