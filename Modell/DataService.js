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

    });
}
async postData(vegpont, postAdat){
    await axios
    .post(vegpont, {
        name: postAdat.Nev,
        kor: postAdat.Kor,
        neme: postAdat.Nem
      })
    .then(function (response){
        //console.log(response.data)
        console.log("postban vagyok");
    })
    .catch(function(error){
       //console.log(error);
    })
    .finally(function (){

    });
}
putData(vegpont, id){
    console.log(id);
    axios
    .delete(vegpont+"/"+id)
    .then(function(response){
        console.log(response);
        frissitCallback();
    })
    .catch(function (error){
        hibaCallback(error)
    })
    .finally(function(){
        
    }) 
}
deleteData(vegpont, id, hibaCallback, frissitCallback){
    console.log(id);
    axios
    .delete(vegpont+"/"+id)
    .then(function(response){
        console.log(response);
        frissitCallback();
    })
    .catch(function (error){
        hibaCallback(error)
    })
    .finally(function(){
        
    })
}
}