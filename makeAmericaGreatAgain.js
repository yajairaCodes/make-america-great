function Countries(cap,con,lan){
 this.capital=cap;
 this.continent=con;
 this.idiom = lan;
 this.language=function(){
   console.log("this country speaks "+this.idiom);
 }
}
var usa= new Countries("DC","murika","american");
usa.language();
