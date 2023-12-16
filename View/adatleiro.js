export const adatLeiro={
    ID: {
        megjelenes:"ID",
    },
    Nev:{
        megjelenes: "Név",
        tipus: "text",
        placeholder: "",
        pattern: "^[A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű']{2,}$",//"[A-Z][a-z]{3}",
        value:"",
        szoveg: "Legalább 3 betű, a névnek nagybetűvel kell kezdődnie",
        required: true,
    },

    Kor:{
        megjelenes: "Kor",
        tipus: "number", 
        value: "0",
        pattern: {min:"0", max:"25"},
        szoveg: "0 és 25 év kötötti számot adhat meg!",
        required: false,
    },
    Nem:{
        megjelenes: "Neme",
        tipus: "text",
        placeholder: "",
        pattern: "[a-z]",
        value:"",
        szoveg: "Nő vagy férfi",
        required: true,
    }
}