
export default class NumberUrlapView{
    #value=""
    #valid=false
    constructor(szElem, obj, key){
        this.szElem=szElem;
        this.obj=obj;
        this.key=key;
        this.numberUrlapElem();
        this.inputElem=$(`#${this.key}`);
        this.#value=this.inputElem.val();
        //a beviteli mező billentyű felengedés eseményének kezelése
        this.inputElem.on("keyup",()=>{
            console.log(this.inputElem.val())
            //eltároljuk az elem értékét a #value privát adattagban.
            this.#value=Number(this.inputElem.val())
            //valid-e az adott mező?
            //let patternStringMin = this.obj.pattern.min;
           // let patternStringMax = this.obj.pattern.max;
            //let patternMin = new RegExp(patternStringMin);
            //let patternMax = new RegExp(patternStringMax);
            //a reguláris OBJEKTUM test metódusa ellenőrzi a megfelelőséget, visszatérési értéke true, vagy false
            if(this.#value>=Number(this.obj.pattern.min) && this.#value<=Number(this.obj.pattern.max)){
                this.#valid=true;
            }else{
                this.#valid=false;
            }
            console.log(this.#valid)
        })  
    }
    getValue(){
        return this.#value
    }
    getValid(){
        console.log(this.#value + ' ' + this.#valid);
        return this.#valid
    }
    numberUrlapElem(){
        let txt='';
        txt+=`<div class="mb-3 mt-3">
                    <label for="${this.key}" class="form-label">${this.obj.megjelenes}</label>
                    <input type="${this.obj.tipus}" class="form-control"
                        id="${this.key}"
                        placeholder="${this.obj.placeholder}"
                        min="${this.obj.pattern.min}"
                        max="${this.obj.pattern.max}"
                        value="${this.obj.value}"
                        name="${this.key}">            
            </div>`;
            this.szElem.append(txt);
    }
    }