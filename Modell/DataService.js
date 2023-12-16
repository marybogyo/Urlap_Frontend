export default class DataService{
constructor(){
    axios.defaults.baseURL="http://127.0.0.1:8000/api/";
}
getData(vegpont, callback){
    axios
    .get(vegpont)
    .then(function (response){
        //console.log(response.data)
        callback(response.data);
    })
    .catch(function(error){
       //console.log(error);
    })
    .finally(function (){
        let IdMezo = document.getElementById('modositoId');
        IdMezo.value = "";
        document.getElementById('submit').value = "Küld";
    });
}
async postData(vegpont, postAdat)
{
    await axios
    .post(vegpont, {
        name: postAdat.Nev,
        kor: postAdat.Kor,
        neme: postAdat.Nem
      })
    .then(function (response){
        //console.log(response.data)
        // console.log("postban vagyok");
    })
    .catch(function(error){
       //console.log(error);
    })
    .finally(function (){

    });
}
async putData(vegpont, id, putAdat){
    await axios
    .put(vegpont+"/"+id, {
        name: putAdat.Nev,
        kor: putAdat.Kor,
        neme: putAdat.Nem
    })
    .then(function(response){
        // console.log(response);
   
    })

}
deleteData(vegpont, id, hibaCallback, frissitCallback){
    // console.log(id);
    axios
    .delete(vegpont+"/"+id)
    .then(function(response){
        // console.log(response);
        frissitCallback();
    })
    .catch(function (error){
        hibaCallback(error)
    })
    .finally(function(){
        
    })
}
}