var myHttp = new XMLHttpRequest();
var arrData =[];
myHttp.open('GET' , 'http://api.weatherapi.com/v1/search.json?key=97f24d0fac664531826232959211509&q=lond%20XML:%20http://api.weatherapi.com/v1/search.xml?key=%3CYOUR_API_KEY%3E&q=lond');
myHttp.send();
myHttp.onreadystatechange = function (){
  if (myHttp.readyState == 4 && myHttp.status == 200) {
 
    arrData = JSON.parse(myHttp.response);
    document.getElementById("input").onkeyup = function(){ 
        search(this.value);
    };

} 
} 

function search(char){
    console.log(char);

var cartoona=``;
for(var i=0;i<arrData.length;i++)
{ 
    if(arrData[i].name.includes(char)==true)
    {
        cartoona= `  <div class="col-sm  px-0 ">
        <div class="today d-flex justify-content-between align-items-center px-3 pt-1 ">
              <p> Wednesday</p>
       <p> 15September</p></div>
    
       <h5 class="px-3 py-1 "> ${arrData[i].name}</h5>
    
       <div class="d-flex justify-content-between">  
           <h1 class="px-3">${arrData[i].lat}</h1> 
     <i class="fas fa-cloud-sun px-3 text-white"></i>
    </div>
    <p class="text-primary fs-6 px-3 py-1  "> partly cloud</p>
    <div class="d-flex">        
    <i class="fas fa-umbrella fs-6 ps-3 p-1"> </i> <p>20%</p>
    <i class="fas fa-wind fs-6 ps-3  p-1"> </i> <p>18km/h</p>
    <i class="far fa-compass fs-6 ps-3  p-1"> </i> <p>East</p>
    
    </div>
    </div>
    
    <div class="col-sm text-center today px-0">
      <div class=" bg-darker px-3 py-2"> Tuesday</div>
      <i class="fas fa-cloud-sun-rain fs-1 pt-5 "></i>
      <h3 class="pt-1">${arrData[i].lon}</h3>
      <p>${arrData[i].lat}</p>
      <p class="text-primary fs-6 "> partly cloud</p>
    </div>
    <div class="col-sm text-center px-0">
      <div class="today  px-3 p-2"> Friday</div>
      <i class="fas fa-sun fs-1 pt-5 "></i>
      <h3 class="pt-1">${arrData[i].lon}</h3>
      <p>${arrData[i].lat}</p>
      <p class="text-primary fs-6 "> partly cloud</p>
    </div>`;
        document.getElementById("country").innerHTML=cartoona;
} } }