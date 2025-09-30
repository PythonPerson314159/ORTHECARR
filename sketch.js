hex64="!0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-"

let seedth1ng
function preload() {
  seedth1ng = loadFont('CONSOLA.TTF');
}

function hex1t(t){
  ere=t.split("").slice(0,8).map((item)=>hex64.indexOf(item)) 
  ere.reverse()
  runtot=0
  for (h in ere){
    runtot+=ere[h]*64**h
  }
  return runtot/64**3
}

bnm=0

function setup() {
  l0l=0
  fontt="Verdana"
  
  
  textFont(fontt)
  
  vad=Math.min(windowWidth / 600, windowHeight / 1000);
  
  size=5
    widd=size*100*2/3
  
  social = new Clickable();     //Create button
social.locate(600/2-widd/2*1.5, 880);        //Position Button
  social.width=widd*1.5
  social.height=100
social.onPress = function(){  //When myButton is pressed
window.open("https://www.youtube.com");
  swal.fire("+2 games!")
  localStorage.setItem("SPECIAL",floor(new Date()/86400000))
}    
  social.text="Get more games for free!"
  
  
  dailybutton = new Clickable();     //Create button
dailybutton.locate(600/2-widd/2, 280);        //Position Button
  dailybutton.width=widd
  dailybutton.height=100
dailybutton.onPress = function(){  //When myButton is pressed
todail()
}    
  dailybutton.text="Daily Puzzle"
  
   randombutton = new Clickable();     //Create button
randombutton.locate(600/2-widd/2, 420);        //Position Button
  randombutton.width=widd
  randombutton.height=100
randombutton.onPress = function(){  //When myButton is pressed
torand()
}    
  randombutton.text="Random Seed"
  
  
   highbutton = new Clickable();     //Create button
highbutton.locate(600/2-widd/2, 600);        //Position Button
  highbutton.width=widd
  highbutton.height=100
highbutton.onPress = function(){  //When myButton is pressed
tohigh()
}    
  highbutton.text="High Scores"
  
  abutton = new Clickable();     //Create button
  abutton.locate(600/2-widd*3/4, 885);        //Position Button
  abutton.width=widd*3/2
  abutton.height=100
  abutton.onPress = function(){
    finss()
  }
  abutton.text="Finish!"
  
  ebutton = new Clickable();     //Create button
  ebutton.locate(600/2-widd*3/4, 785);        //Position Button
  ebutton.width=widd*3/2
  ebutton.height=100
  ebutton.onPress = function(){
    seee()
  }
  ebutton.text="See your solution"
  
  bwutton = new Clickable();     //Create button
  bwutton.locate(600/2-widd*3/4, 785);        //Position Button
  bwutton.width=widd*3/2
  bwutton.height=100
  bwutton.onPress = function(){
    seeee()
  }
  bwutton.text="See your points"
  
  em = new Clickable();     //Create button
  em.locate(20,20);        //Position Button
  em.width=60
  em.height=60
  em.onPress = function(){
mode="MENU"  }
  em.text="🔙"
  
   ep = new Clickable();     //Create button
  ep.locate(520,20);        //Position Button
  ep.width=60
  ep.height=60
  ep.onPress = function(){
if ((mode=="RANDOM"||mode=="DAILY")&&fghj+esd+emsd!=36&&new Date()-l0l>100){
pause+=1
}
  }
  ep.text="⏸️"
  
   et = new Clickable();     //Create button
  et.locate(520,20);        //Position Button
  et.width=60
  et.height=60
  et.onPress = function(){
location.href="https://orthecarr.netlify.app/rules.html"
  }
  et.text="?"
  
  
  for(x=0;x<10;x++){
    eval("e"+x+" = new Clickable()")     //Create button
  eval("e"+x+".locate((x%6)*100+10, 100*floor(x/6)+685)")        //Position Button
  eval("e"+x+".width=80")
  eval("e"+x+".height=80")
  eval("e"+x+".onPress = function(){ if ((grid[cury][curx]=='' || grid[cury][curx][1]=='k')){grid[cury][curx]="+x+"+'k'}}")
  eval("e"+x+".text="+x)
  }
  
eq = new Clickable();     //Create button
  eq.locate(510, 785);        //Position Button
  eq.width=80
  eq.height=80
  eq.onPress = function(){
  if(grid.flat().filter((item)=>item=="?k").length==0&&(grid[cury][curx]=="" || grid[cury][curx][1]=="k")){
    grid[cury][curx]="?k"
  }
  }
  
  eq.text="?"
  
  eb = new Clickable();     //Create button
  eb.locate(410, 785);        //Position Button
  eb.width=80
  eb.height=80
  eb.onPress = function(){
    if ((grid[cury][curx][1]=="k")){
    grid[cury][curx]=""
  }
  }
  eb.text="-"
  
  if (localStorage.getItem("quota0")==null){
    localStorage.setItem("quota0","0"+floor(new Date()/86400000))
  }
  else if (localStorage.getItem("quota0").slice(1)!=floor(new Date()/86400000)){
    localStorage.setItem("quota0","0"+floor(new Date()/86400000))
  }
  
  esd=undefined
bm=0
  df=0
subbed=false
oldsubbed=false
  
  mn=''
  emsd=0
  pause=0
  
   /* if ((typeof dailybutton=="undefined"&&typeof randombutton=="undefined"&&typeof highbutton=="undefined")||(typeof mode!="undefined"&&mode=="HIGH")){
  
 // dailybutton = createButton("Daily Puzzle");
  randombutton = createButton("Random Seed");
  highbutton = createButton("High Scores");
    }*/
  
  mode="MENU"
 opes=[]
  fghj=19
  ff=new Date()*1
  
//  randomSeed(Math.floor(new Date()/3600000))
    
  k=new Date()*1
	size=5
yu=240000
  createCanvas(600*vad,1000*vad);
  textAlign(CENTER)
  
    textSize(40)
  background("#c4e8e8")
  
  uj=[[[3,3],[2,3],[2,2],[2,1],[2,0],[3,0],[4,0],[4,1],[3,1],[3,2],[4,2],[4,3],[4,4],[3,4],[2,4],[1,4],[0,4],[0,3],[0,2],[0,1],[0,0],[1,0],[1,1],[1,2],[1,3]],[[1,3],[0,3],[0,4],[1,4],[2,4],[2,3],[2,2],[3,2],[3,3],[3,4],[4,4],[4,3],[4,2],[4,1],[4,0],[3,0],[3,1],[2,1],[1,1],[1,2],[0,2],[0,1],[0,0],[1,0],[2,0]],[[4,4],[3,4],[2,4],[2,3],[1,3],[1,4],[0,4],[0,3],[0,2],[1,2],[2,2],[3,2],[3,1],[2,1],[1,1],[0,1],[0,0],[1,0],[2,0],[3,0],[4,0],[4,1],[4,2],[4,3],[3,3]],[[4,0],[4,1],[4,2],[3,2],[3,3],[4,3],[4,4],[3,4],[2,4],[2,3],[2,2],[2,1],[1,1],[1,2],[1,3],[1,4],[0,4],[0,3],[0,2],[0,1],[0,0],[1,0],[2,0],[3,0],[3,1]],[[0,0],[1,0],[1,1],[0,1],[0,2],[0,3],[0,4],[1,4],[2,4],[3,4],[3,3],[2,3],[1,3],[1,2],[2,2],[3,2],[3,1],[2,1],[2,0],[3,0],[4,0],[4,1],[4,2],[4,3],[4,4]],[[2,2],[2,1],[2,0],[3,0],[3,1],[3,2],[3,3],[2,3],[1,3],[1,2],[1,1],[1,0],[0,0],[0,1],[0,2],[0,3],[0,4],[1,4],[2,4],[3,4],[4,4],[4,3],[4,2],[4,1],[4,0]],[[0,2],[0,3],[1,3],[2,3],[2,2],[1,2],[1,1],[0,1],[0,0],[1,0],[2,0],[2,1],[3,1],[3,0],[4,0],[4,1],[4,2],[3,2],[3,3],[4,3],[4,4],[3,4],[2,4],[1,4],[0,4]],[[1,3],[0,3],[0,2],[0,1],[0,0],[1,0],[2,0],[2,1],[1,1],[1,2],[2,2],[3,2],[3,1],[3,0],[4,0],[4,1],[4,2],[4,3],[4,4],[3,4],[3,3],[2,3],[2,4],[1,4],[0,4]],[[2,4],[2,3],[2,2],[3,2],[3,3],[3,4],[4,4],[4,3],[4,2],[4,1],[3,1],[2,1],[1,1],[1,2],[1,3],[1,4],[0,4],[0,3],[0,2],[0,1],[0,0],[1,0],[2,0],[3,0],[4,0]],[[3,3],[3,2],[4,2],[4,3],[4,4],[3,4],[2,4],[2,3],[2,2],[2,1],[3,1],[4,1],[4,0],[3,0],[2,0],[1,0],[0,0],[0,1],[1,1],[1,2],[0,2],[0,3],[1,3],[1,4],[0,4]],[[4,2],[4,1],[4,0],[3,0],[2,0],[1,0],[0,0],[0,1],[1,1],[1,2],[1,3],[2,3],[2,2],[2,1],[3,1],[3,2],[3,3],[4,3],[4,4],[3,4],[2,4],[1,4],[0,4],[0,3],[0,2]],[[2,0],[1,0],[1,1],[1,2],[2,2],[2,1],[3,1],[3,0],[4,0],[4,1],[4,2],[3,2],[3,3],[4,3],[4,4],[3,4],[2,4],[2,3],[1,3],[1,4],[0,4],[0,3],[0,2],[0,1],[0,0]],[[4,0],[3,0],[3,1],[4,1],[4,2],[3,2],[2,2],[2,1],[2,0],[1,0],[0,0],[0,1],[1,1],[1,2],[0,2],[0,3],[0,4],[1,4],[1,3],[2,3],[2,4],[3,4],[4,4],[4,3],[3,3]],[[4,2],[4,1],[4,0],[3,0],[2,0],[1,0],[0,0],[0,1],[0,2],[0,3],[1,3],[2,3],[2,2],[1,2],[1,1],[2,1],[3,1],[3,2],[3,3],[4,3],[4,4],[3,4],[2,4],[1,4],[0,4]],[[0,0],[0,1],[0,2],[0,3],[0,4],[1,4],[1,3],[1,2],[1,1],[1,0],[2,0],[3,0],[4,0],[4,1],[3,1],[2,1],[2,2],[3,2],[3,3],[2,3],[2,4],[3,4],[4,4],[4,3],[4,2]],[[3,3],[3,2],[2,2],[2,3],[2,4],[3,4],[4,4],[4,3],[4,2],[4,1],[4,0],[3,0],[3,1],[2,1],[1,1],[1,2],[1,3],[1,4],[0,4],[0,3],[0,2],[0,1],[0,0],[1,0],[2,0]],[[2,0],[3,0],[4,0],[4,1],[3,1],[3,2],[4,2],[4,3],[4,4],[3,4],[3,3],[2,3],[1,3],[1,2],[2,2],[2,1],[1,1],[1,0],[0,0],[0,1],[0,2],[0,3],[0,4],[1,4],[2,4]],[[2,4],[1,4],[0,4],[0,3],[1,3],[2,3],[3,3],[3,4],[4,4],[4,3],[4,2],[4,1],[4,0],[3,0],[3,1],[3,2],[2,2],[2,1],[1,1],[1,2],[0,2],[0,1],[0,0],[1,0],[2,0]],[[3,1],[4,1],[4,2],[3,2],[2,2],[1,2],[1,3],[2,3],[3,3],[4,3],[4,4],[3,4],[2,4],[1,4],[0,4],[0,3],[0,2],[0,1],[0,0],[1,0],[1,1],[2,1],[2,0],[3,0],[4,0]],[[1,1],[1,0],[0,0],[0,1],[0,2],[1,2],[1,3],[0,3],[0,4],[1,4],[2,4],[2,3],[3,3],[3,4],[4,4],[4,3],[4,2],[4,1],[3,1],[3,2],[2,2],[2,1],[2,0],[3,0],[4,0]],[[2,0],[1,0],[0,0],[0,1],[1,1],[1,2],[0,2],[0,3],[0,4],[1,4],[1,3],[2,3],[2,4],[3,4],[4,4],[4,3],[4,2],[4,1],[4,0],[3,0],[3,1],[2,1],[2,2],[3,2],[3,3]],[[0,4],[0,3],[1,3],[1,4],[2,4],[2,3],[2,2],[2,1],[1,1],[1,2],[0,2],[0,1],[0,0],[1,0],[2,0],[3,0],[4,0],[4,1],[4,2],[4,3],[4,4],[3,4],[3,3],[3,2],[3,1]],[[2,2],[2,1],[2,0],[3,0],[4,0],[4,1],[4,2],[4,3],[4,4],[3,4],[2,4],[1,4],[0,4],[0,3],[0,2],[0,1],[0,0],[1,0],[1,1],[1,2],[1,3],[2,3],[3,3],[3,2],[3,1]],[[3,3],[4,3],[4,4],[3,4],[2,4],[2,3],[1,3],[1,4],[0,4],[0,3],[0,2],[1,2],[1,1],[0,1],[0,0],[1,0],[2,0],[2,1],[3,1],[3,0],[4,0],[4,1],[4,2],[3,2],[2,2]],[[4,4],[4,3],[4,2],[3,2],[2,2],[1,2],[1,1],[2,1],[3,1],[4,1],[4,0],[3,0],[2,0],[1,0],[0,0],[0,1],[0,2],[0,3],[0,4],[1,4],[2,4],[3,4],[3,3],[2,3],[1,3]],[[2,4],[2,3],[2,2],[1,2],[1,3],[1,4],[0,4],[0,3],[0,2],[0,1],[0,0],[1,0],[1,1],[2,1],[2,0],[3,0],[4,0],[4,1],[4,2],[4,3],[4,4],[3,4],[3,3],[3,2],[3,1]],[[4,0],[3,0],[2,0],[1,0],[1,1],[2,1],[2,2],[3,2],[3,1],[4,1],[4,2],[4,3],[4,4],[3,4],[3,3],[2,3],[2,4],[1,4],[0,4],[0,3],[1,3],[1,2],[0,2],[0,1],[0,0]],[[1,3],[2,3],[3,3],[3,4],[2,4],[1,4],[0,4],[0,3],[0,2],[1,2],[2,2],[2,1],[1,1],[0,1],[0,0],[1,0],[2,0],[3,0],[4,0],[4,1],[3,1],[3,2],[4,2],[4,3],[4,4]],[[2,2],[2,3],[2,4],[3,4],[4,4],[4,3],[3,3],[3,2],[3,1],[2,1],[1,1],[1,2],[1,3],[1,4],[0,4],[0,3],[0,2],[0,1],[0,0],[1,0],[2,0],[3,0],[4,0],[4,1],[4,2]],[[4,4],[4,3],[4,2],[3,2],[2,2],[1,2],[1,3],[2,3],[3,3],[3,4],[2,4],[1,4],[0,4],[0,3],[0,2],[0,1],[0,0],[1,0],[1,1],[2,1],[2,0],[3,0],[4,0],[4,1],[3,1]],[[1,1],[0,1],[0,0],[1,0],[2,0],[2,1],[2,2],[3,2],[3,1],[3,0],[4,0],[4,1],[4,2],[4,3],[4,4],[3,4],[2,4],[1,4],[0,4],[0,3],[0,2],[1,2],[1,3],[2,3],[3,3]],[[2,2],[2,1],[3,1],[3,2],[3,3],[3,4],[2,4],[2,3],[1,3],[1,4],[0,4],[0,3],[0,2],[1,2],[1,1],[0,1],[0,0],[1,0],[2,0],[3,0],[4,0],[4,1],[4,2],[4,3],[4,4]],[[4,2],[3,2],[3,3],[4,3],[4,4],[3,4],[2,4],[2,3],[2,2],[2,1],[1,1],[1,2],[1,3],[1,4],[0,4],[0,3],[0,2],[0,1],[0,0],[1,0],[2,0],[3,0],[4,0],[4,1],[3,1]],[[3,1],[3,2],[2,2],[1,2],[1,3],[2,3],[2,4],[1,4],[0,4],[0,3],[0,2],[0,1],[0,0],[1,0],[1,1],[2,1],[2,0],[3,0],[4,0],[4,1],[4,2],[4,3],[4,4],[3,4],[3,3]],[[1,1],[2,1],[2,0],[1,0],[0,0],[0,1],[0,2],[0,3],[0,4],[1,4],[1,3],[1,2],[2,2],[3,2],[3,3],[2,3],[2,4],[3,4],[4,4],[4,3],[4,2],[4,1],[4,0],[3,0],[3,1]],[[2,2],[3,2],[3,1],[3,0],[2,0],[2,1],[1,1],[1,0],[0,0],[0,1],[0,2],[1,2],[1,3],[0,3],[0,4],[1,4],[2,4],[2,3],[3,3],[3,4],[4,4],[4,3],[4,2],[4,1],[4,0]],[[1,3],[2,3],[3,3],[3,2],[3,1],[2,1],[1,1],[0,1],[0,0],[1,0],[2,0],[3,0],[4,0],[4,1],[4,2],[4,3],[4,4],[3,4],[2,4],[1,4],[0,4],[0,3],[0,2],[1,2],[2,2]],[[2,4],[2,3],[1,3],[1,4],[0,4],[0,3],[0,2],[1,2],[2,2],[2,1],[1,1],[0,1],[0,0],[1,0],[2,0],[3,0],[4,0],[4,1],[3,1],[3,2],[3,3],[3,4],[4,4],[4,3],[4,2]],[[4,2],[4,3],[3,3],[3,2],[3,1],[4,1],[4,0],[3,0],[2,0],[2,1],[2,2],[2,3],[1,3],[1,2],[1,1],[1,0],[0,0],[0,1],[0,2],[0,3],[0,4],[1,4],[2,4],[3,4],[4,4]],[[0,2],[1,2],[1,1],[0,1],[0,0],[1,0],[2,0],[2,1],[3,1],[3,0],[4,0],[4,1],[4,2],[4,3],[3,3],[3,2],[2,2],[2,3],[1,3],[0,3],[0,4],[1,4],[2,4],[3,4],[4,4]]]
}
  
  function doit(int0,int1,rr){
    ress=[]
    if (int0%2==1){
      int00= int0
    }
    else{
      int00= int0/2
    }
    
    if (int1%2==1){
      int10= int1
    }
    else{
      int10= int1/2
    }
    
      append(ress,(int1*int0)%10)
      append(ress,(int1+int0)%10)
    
    if (int0%2==0&&int1%2==0){
      append(ress,(int10+int00)%10)
    }
    if (int0%2==0||int1%2==0){
      append(ress,(int1*int0/2)%10)
    }
    if (int0%2==0){
      append(ress,((int0/2)+int1)%10)
    }
    if (int1%2==0){
      append(ress,(int0+int1/2)%10)
    }
    if (((int0+int1)/2)%1==0){
      append(ress,((int0+int1)/2)%10)
    }
    
    if (rr==1){
    if (int1==int0){
      ress=ress.filter((item)=>item!=int1)
    }
      if (int1==5){
      ress=ress.filter((item)=>item!=5)
      ress=ress.filter((item)=>item!=0)
    }
      
      if (int1==0){
      ress=ress.filter((item)=>item!=0)
      }
    return random(ress)
    }
    else{
      return ress
    }
  
  }
function draw(){
  
  scale(vad)
  
  translate(50,0)
  
  
  if (fghj+esd+emsd==36){
  translate(0,100)
  }
  
  xfac=1
  
  
  if (pause%2==1){
    background("#c4e8e8");
    textSize(100)
    fill(0)
    strokeWeight(0)
text("PAUSED\nGAME",250,400)
    textSize(40)
    text("Click anywhere to resume.",250,600)
  }
  else{
  if (mode=="MENU"){
    strokeWeight(2)
    stroke(0)
    fill(0)
    if (bnm==12){
      bnm=0
    }
    
    
    background("#c4e8e8");
    
  textSize(70)
  text("ORTHECARR",size*50,200)
  
  textSize(25)
  strokeWeight(1)
  text("Copyright 2025",size*50,800)
    
    text(localStorage.getItem("quota0")[0]+"/"+(2+(localStorage.getItem("SPECIAL")==floor(new Date()/86400000))*2)+" games for today",size*50,560)
  dailybutton.draw()
  randombutton.draw()
  highbutton.draw()
    if (localStorage.getItem("SPECIAL")==null && localStorage.getItem("quota0")==2){
    social.draw()
    }
    et.draw()
  }
  else if (mode=="DAILY"){
    
    bnm=12

    fd()
    
    if (emsd==0&&mn.slice(-4)!="ints"){
       abutton.draw()
ø()
  }
  }
  else if (mode=="RANDOM"){
    bnm=12

    fd()
    
    if (emsd==0&&mn.slice(-4)!="ints"){
abutton.draw()
   
ø()
    }
  }

    
  else if (mode=="HIGH"){
  
    strokeWeight(0)
    background("#c4e8e8")
  textSize(90)
    text("HIGH\nSCORES",size*50,200)
  textSize(40)
  
    text("Daily",size*50,380)
    text("Random", size*50,550+80)
  
  textSize(30)
    for (h=0;h<5;h++){
      if (localStorage.getItem("DAILY")==null||localStorage.getItem("DAILY").match(/.{1,4}/g)[h+1]==undefined){
        text("- - - - - - - - - -",size*50,430+h*35)
      }
      else{
        textStyle(NORMAL)
          if(localStorage.getItem("DAILY").match(/.{1,4}/g).sort((a,b)=>b-a)[h+1]>=9000){textStyle(BOLD)}
    text(localStorage.getItem("DAILY").match(/.{1,4}/g).sort((a,b)=>b-a)[h+1]*1+" pts",size*50,430+h*35)
      }
      if (localStorage.getItem("RANDOM")==null||localStorage.getItem("RANDOM").match(/.{1,4}/g)[h+1]==undefined){
        text("- - - - - - - - - -",size*50,680+h*35)
      }
      else{
        textStyle(NORMAL)
        if(localStorage.getItem("RANDOM").match(/.{1,4}/g).sort((a,b)=>b-a)[h+1]>=9000){textStyle(BOLD)}
    text(localStorage.getItem("RANDOM").match(/.{1,4}/g).sort((a,b)=>b-a)[h+1]*1+" pts",size*50,680+h*35)
      }
      
      
    }
      em.draw()

  }
  
}

  
  if (fghj+esd+emsd==36){
  bwutton.draw()
    
  }
}


function fd(){
translate(50-drawingContext.getTransform().e)  
  
  
  if (mode=="DAILY"){
      sd="Daily puzzle of "+new Date().toGMTString().slice(5,16)
  }
  else{
    sd='Random Seed'
  }
  
  translate(0,100,0)
  background("#c4e8e8")
  fill(0)
  strokeWeight(0)
textSize(30)
  textFont(seedth1ng)
  text(sd,size*50,size*100+60)
  textFont(fontt)

  textSize(40)
  fill(0,0,0,0)
  strokeWeight(0)
  
  fill(220)
  square(0,0,size*100)
  gh=[]
  
  for (u in opes){
if (opes[u].length==2){
  gh.push(opes[u].join(","))
}
    else{gh.push(opes[u].replace("Back to start",opes[0]))
        }
  
}
  
  for (x=0;x<size;x++){
    strokeWeight(4)
  for (y=0;y<size;y++){
    if(gh.includes(x*100+","+y*100)){
      if (opes.length==1){
        fill("#00ffff")
        strokeWeight(0)
    square(x*100,y*100,100)
        
      }
      else{
    fill(lerpColor(color("#00ffff"),color("#ffff00"),gh.indexOf(x*100+","+y*100)/(opes.length-1)))
        strokeWeight(0)
        
    square(x*100,y*100,100)
        
        if (typeof t!='undefined' && oopes[min(t,opes.length-1)].join(",")==x*100+","+y*100&&new Date()-bm<2000){
          stroke(255,0,0)
          fill(0,0,0,0)
          
          bee=[x,y]
          stroke(0)
          fill(0)
        }
      }
      
      if (gh.indexOf(x*100+","+y*100)==0&&gh[0]==gh[gh.length-1]&&gh.length!=1){
      fill(255,255,0)
        strokeWeight(0)
        if ((opes[0][0]-opes[opes.length-2][0])-100==opes[0][1]-opes[opes.length-2][1]){
      triangle(x*100+2,y*100+2,x*100+2,y*100+98,x*100+100,y*100+100)
        }
        else{
      triangle(x*100+2,y*100+2,x*100+100,y*100+2,x*100+100,y*100+100)
        }
        strokeWeight(4)
    }}
    
    
    if (pat3h.map((item)=>item.join(",")).includes(y+","+x)){
      ert=pat3h.map((item)=>item.join(",")).indexOf(y+","+x)
    }
    fill(0)
    grid[y][x]=String(grid[y][x])/*.replaceAll(" ","🟥")*/
  for (ta=1;ta<5;ta++){  
  strokeWeight(4)
    	line(0,ta*100,size*100,ta*100)
    	line(ta*100,0,ta*100,size*100)
    
  }
    	line(0,size*100,size*100,size*100)
    	line(0,0,size*100,0)
  line(size*100,0,size*100,size*100)
    	line(0,size*100,0,0)
    strokeWeight(0)
    if (grid[y][x]==""){
    text("",x*100+50,y*100+50)
    }
    else{
    fill(0)
      if (grid[y][x][1]=="k"){
    fill(255,0,0)
      }
      
    text(grid[y][x][0],x*100+50,y*100+60)
    strokeWeight(4)
      
  }
    
  }
  }
  
  
    strokeWeight(0)
    textSize(45)
    yu-=deltaTime
  
  
  if (new Date()-bm>=2000&&mn.slice(-2)!="ts"){
    mn=" :"
  }
  
  
  
  if (yu<=0){
    yu=60000
    w3=undefined
    xtras+=1
  mn="+1 minute!"
    bm=new Date()
  }
  
  if (mn[1]==":"){
  mn=floor((yu+1000)/60000)+":"+String(floor(((yu+1000)%60000)/1000)).padStart(2,"0")
  }
  fill(0)
  //print(mn)
  text(mn,size*50,-30)
  
  fill(0)
  if (typeof esd!='undefined'){
   mn=String(see())+" points" 
  }
  
    textSize(15)
  strokeWeight(0)
  
  for (k in opes){
    if (opes[k]=="Back to start"){
    textSize(10)
    text("Back to start",opes[0][0]+65,10+opes[0][1])
    }else{
      fill(255,0,0)
    textSize(15)
    text(k*1+1,opes[k][0]+15,20+opes[k][1])
  }
  }
    textSize(40)
  
  fill(0,0,0,0)
  if (mn.slice(-4)=="ints" && typeof esd=='undefined' && typeof a!='undefined'){
   shtuff()
  }
  else if(fghj!=12){
  strokeWeight(4)
  circle(50+curx*100,50+cury*100,70)
  if (typeof bee!='undefined'&&new Date()-bm<2000&&mn!="+1 minute!"&&mn!="Start the grid!") {
    stroke(255,0,0)
   circle(50+bee[0]*100,50+bee[1]*100,70) 
  }
  stroke(0)
    
  }
  
  
    
  if (mn.slice(-4)=="ints" && (emsd==0||esd==12)){
      em.draw()
    
ebutton.draw()
  }
}

  
function seee(){
  fghj=12
  
  translate(0,-100,0)
  esd=12
  emsd=12
  draw()
}

function seeee(){
  emsd=0
  esd=undefined
  shtuff()

}



//navigator.share({title: 'Orthecarr', text: "I scored 8299 points on today's Orthercarr! Can you beat me?", url: 'https://orthecarr.com'})





function finss(){
  oldmn=mn
  mn=see()+" points"
  if (mn[0]*1!=mn[0]){
    
    mn=mn.slice(0,-7)

  }
  else{
    if (see()==0){
      mn="Start the grid!"
    }
    else{
    mn=(see()-curs.includes("?")*1000)+" points"
      localStorage.setItem(mode,String(localStorage.getItem(mode)+mn.split(" ")[0].padStart(4,"0")))
      if (mode=="DAILY"){
      localStorage.setItem("rec",floor(new Date()/86400000))
        
      }
      if (mode=="RANDOM"){
      localStorage.setItem("quota0",String(localStorage.getItem("quota0")[0]*1+1)+floor(new Date()/86400000))
      }
  }
  }
  bm=new Date()
}



function see(fin){
  curs=[]
  oopes=opes
  
  if (oopes.length!=0){
  oopes=opes.join("asd").replaceAll("Back to start",opes[0]).split("asd").map((item)=>item.split(","))
    oopes.forEach((item)=>curs.push(grid[item[1]/100][item[0]/100][0]))
  
  
  var count = {};
  curs.forEach(function(s) {
     count[s] ? count[s]++ : count[s] = 1;
  });
    if (opes.length==0){
      return "Start it!"
    }
  count=Object.keys(count).map((key) => [key, count[key]]).filter((item)=>item[0]!='undefined')
a=count.filter((item)=>item[1]>=2).length*300
  b=oopes.filter((item)=>grid[item[1]/100][item[0]/100]!="").length*100
  c=max((3.5-dist(oopes[0][1],oopes[0][0],oopes[oopes.length-1][1],oopes[oopes.length-1][0])/100)*400,0)
  fins=[]
oopes.forEach((item)=>fins.push(grid[item[1]/100][item[0]/100]))
  d=fins.filter((item)=>item!=""&&item[1]!="k").length*300
    if (opes[opes.length-1]=='Back to start'){
    d-=300  
    }
    z=max(-2000,-xtras*500)
    m=new Date(new Date("Jan 1 1900 "+new Date().toGMTString().slice(17,25))*1+36000000)
    f=99
  if (fin){
  return round(a+b+c+d+f+z)
    
  }
    else{
      if (curs.length<=2){
        return "Too short!"
      }
      else if (curs.indexOf(undefined)!=-1){
      return "Not finished!"
    }
    else{
      e=0
      for (j=0;j<curs.length-2;j++){
        if(curs[j]==curs[j+1]&&curs[j+1]==curs[j+2]){
          return "Repeated thrice!"
        }
      }
      for (t=2;t<curs.length;t++){
        if (curs[t-1]=="?"||curs[t]=="?"||curs[t-2]=="?"){e+=1}else{e+=doit(curs[t-2]*1,1*curs[t-1],0).includes(curs.map((item)=>item*1)[t])*1}
      if (e!=t-1){
        return "Invalid puzzle"
      }
      }
      if (yu!=Infinity){
      yeu=yu
    yeu-=xtras*60000
        
      }
      yu=Infinity
        return round(a+b+c+d+f+z)     
    }}}
  else{
    return 0
  }
}
function keyPressed(){ 
  if (key=="p"){
    if(mode=="HIGH"||mode=="MENU"){
      
    }
    else{
pause+=1
    }
  }
  if (pause%2==0){
  
 if ((key=="m"||key=="M")){
    setup()
  }
  else if(fghj!=12)/*if (["ArrowUp","ArrowDown","ArrowRight","ArrowLeft","Backspace","Enter"].includes(key))*/{
 
  
  if ((key*1==key || (grid.flat().filter((item)=>item=="?k").length==0 && key=="?")) && (grid[cury][curx]=="" || grid[cury][curx][1]=="k")){
    
    grid[cury][curx]=key+"k"
  }
  
  if (key=="ArrowUp" && cury>0){
    cury-=1
  }
    
if (key=="Enter" && opes.length>=2){
     if(opes[opes.length-1]=="Back to start"&&opes[0].join(",")==curx*100+","+100*cury){
      print("E")
        opes=opes.slice(0,-1)
       return
      }
   }    
    
    
  if (key=="Enter" && opes[opes.length-1]!="Back to start"){
  
    if (opes.length==0){
    append(opes,[curx*100,cury*100])
  }
   else if(opes[opes.length-1].join(",")==curx*100+","+100*cury){
        opes=opes.slice(0,-1)
      }
  else if(opes.map((item)=>item.join(",")).indexOf(curx*100+','+cury*100)==-1 && abs(opes.slice(-1)[0][0]-curx*100)+abs(opes.slice(-1)[0][1]-cury*100)==100){
    append(opes,[curx*100,cury*100])
  }
    
    else if(abs(opes.slice(-1)[0][0]-curx*100)+abs(opes.slice(-1)[0][1]-cury*100)==100 && opes[0].join("e")==curx*100+"e"+cury*100 && opes.map((item)=>item.join(",")).filter((item)=>item==curx*100+","+cury*100).length==1){
      append(opes,"Back to start")
    }
  }
  if (key=="Backspace" && (grid[cury][curx][1]=="k")){
    grid[cury][curx]=""
  }
  if (key=="ArrowDown" && cury<size-1){
    cury+=1
  }
  if (key=="ArrowLeft" && curx>0){
    curx-=1
  }
  if (key=="ArrowRight" && curx<size-1){
    curx+=1
  }
    if (key=="-"){
      opes=opes.slice(0,-1)
    }
  score=round(see(1))
}
  }
}
  
function todail(){
  if(localStorage.getItem("rec")!=floor(new Date()/86400000)){
  
  xtras=0
  
  opes=[]
  randomSeed(floor(new Date()/86400000)) 
  gen()
  mode="DAILY"
}
  else{
    swal.fire("You've already done the daily puzzle")
  }
}

function torand(){
  if (localStorage.getItem("quota0")[0]>=2+(localStorage.getItem("SPECIAL")==floor(new Date()/86400000))*2){
    swal.fire("You've hit your games quota!")
  }
  else{
      
  xtras=0
  opes=[]
  
  s=''
  for (g=0;g<8;g++){
    s+=random(hex64.split(""))
  }
  randomSeed(hex1t(s))
  gen()
  mode="RANDOM"
}
}

  function tohigh(){
    mode="HIGH"
  }
  
  function tomenu(){
    mode="MENU"
  }
  

function gen(){
  grid=[]
  curx=0
  cury=0
mn=" :"
  for (u=0;u<size;u++){
    grid.push(Array.from({ length: size }, () => " "))
  }
  pat3h=random(uj)  
score=0

  f=shuffle([1,2,3,4,5,6,7,8,9])
grid[pat3h[0][0]][pat3h[0][1]]=f[0]
grid[pat3h[1][0]][pat3h[1][1]]=f[1]
op=1
  
  for (op=1;op<size**2-1;op++){     
    grid[pat3h[op+1][0]][pat3h[op+1][1]]=doit(grid[pat3h[op-1][0]][pat3h[op-1][1]],grid[pat3h[op][0]][pat3h[op][1]],1)%10
   }
    
  ert=0
    
    chosen=shuffle(shuffle(pat3h)).slice(0,size**2*0.4).join("aaa")
  
  for (x=0;x<size;x++){
  for (y=0;y<size;y++){
    if (chosen.includes(y+","+x)==false){
      grid[y][x]=""
    }
  }
  }
}
  function mousePressed(){
  if (pause%2==0){
    
    if (mouseY/drawingContext.getTransform().a<600){
    
    tcurx=max(min(floor((mouseX-50*drawingContext.getTransform().a)/(100*drawingContext.getTransform().a)),4),0)
    tcury=max(min(floor((mouseY-100*drawingContext.getTransform().a)/(100*drawingContext.getTransform().a)),4),0)
		
    
      curx=tcurx
      cury=tcury
  }
  }
    else{
    l0l=new Date()
      pause+=1
    }
  }
  
  function doubleClicked(){    
  if (pause%2==0){
    if (opes.length>=2){
     if(opes[opes.length-1]=="Back to start"&&opes[0].join(",")==curx*100+","+100*cury){
      print("E")
        opes=opes.slice(0,-1)
       return
      }
   }
    if (typeof curx!="undefined" && typeof cury!="undefined" && fghj!=12){
    
    if (opes[opes.length-1]!="Back to start"){
  
    if (opes.length==0){
    append(opes,[curx*100,cury*100])
  }
  
  else if(opes.map((item)=>item.join(",")).indexOf(curx*100+','+cury*100)==-1 && abs(opes.slice(-1)[0][0]-curx*100)+abs(opes.slice(-1)[0][1]-cury*100)==100){
    append(opes,[curx*100,cury*100])
  }
    
    else if(abs(opes.slice(-1)[0][0]-curx*100)+abs(opes.slice(-1)[0][1]-cury*100)==100 && opes[0].join("e")==curx*100+"e"+cury*100 && opes.map((item)=>item.join(",")).filter((item)=>item==curx*100+","+cury*100).length==1){
      append(opes,"Back to start")
    }
      else if(opes[opes.length-1].join(",")==curx*100+","+100*cury){
        opes=opes.slice(0,-1)
      }
  }
  }
  }
  }

function shtuff(){
  background("#c4e8e8")
    fill(0)
  v=80
      if (z==0){
        v+=30
    }
    if (curs.includes("?")==false){
   v+=10
    if (mn.split(" ")[0]*1>0){
v+=15
    }
    }
    text(a+" diversity points",size*50,-30+v)
    text("+"+b+" chain length points",size*50,45+v)
    text("+"+round(c)+" loopiness points",size*50,120+v)
    text("+"+d+" prefilled points",size*50,195+v)
    text("+"+f+" aura points",size*50,270+v)
    if (z!=0){
    text("-"+abs(z)+" overtime points",size*50,270+75+v)
    }
    if (curs.includes("?")){
      textSize(25)
    text("-1000 wildcard points",size*50,320+(z!=0)*75+v)
      
    if (mn.split(" ")[0]*1<0){
    text("+"+abs(mn.split(" ")[0]*1)+" empathy point(s)",size*50,360+(z!=0)*75+v)
    }
      
      textSize(40)  
    }
    textSize(42.31)
    text("Final score is "+max(mn.split(" ")[0],0)+" points",size*50,450+150)
    text("in "+floor(((240000-yeu)+1000)/60000)+":"+String(floor((((240000-yeu)+1000)%60000)/1000)).padStart(2,"0"),size*50,515+150)
}
    
    
    function ø(){
      for (r=0;r<10;r++){
      eval("e"+r+".draw()")
    }
    eb.draw()
    eq.draw()
      em.draw()
      ep.draw()
    }
    

window.onresize = function() {
  vad=Math.min(windowWidth / 600, windowHeight / 1000)-0.01
  canvas=createCanvas(600*vad,1000*vad);
}
