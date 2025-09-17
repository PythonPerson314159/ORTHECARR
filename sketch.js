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
  
    if ((typeof dailybutton=="undefined"&&typeof randombutton=="undefined"&&typeof highbutton=="undefined")||(typeof mode!="undefined"&&mode=="HIGH")){
  
  dailybutton = createButton("Daily Puzzle");
  randombutton = createButton("Random Seed");
  highbutton = createButton("High Scores");
    }
  
  mode="MENU"
 opes=[]
  fghj=19
  ff=new Date()*1
  
//  randomSeed(Math.floor(new Date()/3600000))
    
  k=new Date()*1
	size=5
yu=240000
  createCanvas(600,800);
  textAlign(CENTER)
  textSize(20)
  
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
  xfac=1
  translate(50,0)
  
  
  if (pause%2==1){
    background(0)
  }
  else{
  if (mode=="MENU"){
    if (typeof button!="undefined"){
    button.remove()
    }
    if (typeof ebutton!="undefined"){
    ebutton.remove()
    }
     if (typeof bwutton!="undefined"){
    bwutton.remove()
    }
    
    strokeWeight(2)
    stroke(0)
    fill(0)
    if (bnm==12){
      
      bnm=0
      button.remove()
      if (typeof ebutton!="undefined"){
      ebutton.remove()
      }
      if (typeof bwutton!="undefined"){
      bwutton.remove()
      }
      
      dailybutton = createButton("Daily Puzzle");
  randombutton = createButton("Random Seed");
  highbutton = createButton("High Scores");
    }
    
    
    background("#c4e8e8");
    
  textSize(70)
  text("ORTHECARR",size*50,100)
    
    widd=size*100*2/3
    
  dailybutton.position(600/2-widd/2, 180);
  dailybutton.size(widd,100)
  dailybutton.style("font-size:40px;")
  dailybutton.mousePressed(todail)
  
  randombutton.position(600/2-widd/2, 320);
  randombutton.size(widd,100)
  randombutton.style("font-size:40px;")
    
  randombutton.mousePressed(torand)
  
    
  highbutton.position(600/2-widd/2, 500);
  highbutton.size(widd,100)
  highbutton.style("font-size:40px;")
  highbutton.mousePressed(tohigh)
    
  textSize(25)
  strokeWeight(1)
  text("Copyright 2025",size*50,700)
    
    text(localStorage.getItem("quota0")[0]+"/2 games for today",size*50,460)
  }
  else if (mode=="DAILY"){
    
    bnm=12
    if (typeof dailybutton!="undefined"&&typeof randombutton!="undefined"&&typeof highbutton!="undefined"){
    dailybutton.remove()
    randombutton.remove()
      highbutton.remove()
    }
    
    if (emsd==0){
       button.position(50,687.5);

    }

    fd()
  }
  else if (mode=="RANDOM"){
    bnm=12
    if (typeof dailybutton!="undefined"&&typeof randombutton!="undefined"&&typeof highbutton!="undefined"){
    dailybutton.remove()
    randombutton.remove()
      highbutton.remove()
      
    }
    
    if (emsd==0){
      button.position(50, 687.5);
    }

    fd()
  }

    
  else if (mode=="HIGH"){
     if (typeof dailybutton!="undefined"&&typeof randombutton!="undefined"&&typeof highbutton!="undefined"){
    dailybutton.remove()
    randombutton.remove()
      highbutton.remove()
      
    }
    strokeWeight(0)
    background("#c4e8e8")
  textSize(90)
    text("HIGH\nSCORES",size*50,100)
  textSize(40)
  
    text("Daily",size*50,300)
    text("Random", size*50,550)
  
  textSize(30)
    for (h=0;h<5;h++){
      if (localStorage.getItem("DAILY")==null||localStorage.getItem("DAILY").match(/.{1,4}/g)[h+1]==undefined){
        text("- - - - - - - - - -",size*50,350+h*35)
      }
      else{
        textStyle(NORMAL)
          if(localStorage.getItem("DAILY").match(/.{1,4}/g).sort((a,b)=>b-a)[h+1]>=9000){textStyle(BOLD)}
    text(localStorage.getItem("DAILY").match(/.{1,4}/g).sort((a,b)=>b-a)[h+1]+" pts",size*50,350+h*35)
      }
      if (localStorage.getItem("RANDOM")==null||localStorage.getItem("RANDOM").match(/.{1,4}/g)[h+1]==undefined){
        text("- - - - - - - - - -",size*50,600+h*35)
      }
      else{
        textStyle(NORMAL)
        if(localStorage.getItem("RANDOM").match(/.{1,4}/g).sort((a,b)=>b-a)[h+1]>=9000){textStyle(BOLD)}
    text(localStorage.getItem("RANDOM").match(/.{1,4}/g).sort((a,b)=>b-a)[h+1]+" pts",size*50,600+h*35)
      }
      
      
    }
  
  }
  
}
  
  if (typeof button!="undefined" && mode=="MENU"){
    button.remove()
  }
  if (typeof ebutton!="undefined" && mode=="MENU"){
    
    ebutton.remove()
  }
  if (typeof bwutton!="undefined" && mode=="MENU"){
    
    bwutton.remove()
  }
}

function fdee(){
  if (subbed==true&&oldsubbed==false){
    randomSeed(hex1t(input.value().padEnd(8,'~')))
  gen()
  }
  if (subbed==true){
    fd()
  }
  
  else{
    if(input.value().split("").map((item)=>hex64.indexOf(item)).includes(-1)){
      input.value(input.value().split("").filter((item)=>hex64.includes(item)).join(""))
    }
    
    if (input.value().length>3){
    input.value(input.value().slice(0,8))
    }
  background("#c4e8e8")
  textSize(70)
  text("Enter Seed...",size*50,300)
  input.position(600/2-size*42.5, 350+((801-1)-(800))/2);
  input.size(size*85,100)
  }
  oldsubbed=subbed
}

function fd(){
  if (typeof s=="undefined"){
    if (typeof input=="undefined"){
      sd="Daily puzzle of "+new Date().toGMTString().slice(5,16)
    }
    else{
      sd="Seed: "+input.value()
    }
  }
  else{
    sd="Seed: "+s
  }
  
  translate(0,100,0)
  background("#c4e8e8")
  fill(0)
  strokeWeight(0)
textSize(30)
  textFont(seedth1ng)
  text(sd,size*50,size*100+60)
  textFont("Arial")

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
    textSize(65)
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
    background("#c4e8e8")
    fill(0)
    v=0
      if (z==0){
        v+=30
    }
    if (curs.includes("?")==false){
   v+=10
    if (mn.split(" ")[0]*1>0){
v+=15
    }
    }
    if (button){button.hide()}
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
    text("Final score is "+max(mn.split(" ")[0],0)+" points",size*50,450+50)
    text("in "+floor(((240000-yeu)+1000)/60000)+":"+String(floor((((240000-yeu)+1000)%60000)/1000)).padStart(2,"0"),size*50,515+50)
  }
  else if(fghj!=12){
  strokeWeight(4)
  circle(50+curx*100,50+cury*100,70)
  if (typeof bee!='undefined'&&new Date()-bm<2000) {
    stroke(255,0,0)
   circle(50+bee[0]*100,50+bee[1]*100,70) 
  }
  stroke(0)
    
  }
  
  
    
  if (mn.slice(-4)=="ints" && emsd==0){
    if (df!=13){
      console.log("aa")
     ebutton = createButton("See your solution");
  ebutton.size(widd*3/2,100)
  ebutton.style("font-size:50px;")
  ebutton.mousePressed(seee)
    }
   df=13 
  ebutton.position(600/2-widd*0.75, 687.5);
    
 // noLoop()
  }
}

  
function seee(){
  fghj=12
  
  translate(0,-100,0)
  draw()
  esd=12
  emsd=12
    if (df==13){
  
   bwutton = createButton("See your points");
  bwutton.size(widd*3/2,100)
  bwutton.style("font-size:50px;")
  bwutton.mousePressed(seeee)
  bwutton.position(600/2-widd*0.75,687.5);
      ebutton.remove()
}
}

function seeee(){
  emsd=0
  esd=undefined
  background("#c4e8e8")
    fill(0)
  v=0
      if (z==0){
        v+=30
    }
    if (curs.includes("?")==false){
   v+=10
    if (mn.split(" ")[0]*1>0){
v+=15
    }
    }
    if (button){button.hide()}
  
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
    text("Final score is "+max(mn.split(" ")[0],0)+" points",size*50,450+50)
    text("in "+floor(((240000-yeu)+1000)/60000)+":"+String(floor((((240000-yeu)+1000)%60000)/1000)).padStart(2,"0"),size*50,515+50)
    if (df==13){ 
  ebutton = createButton("See your solution");
  ebutton.position(600/2-widd*0.75, 687.5);
  ebutton.size(widd*3/2,100)
  ebutton.style("font-size:50px;")
  ebutton.mousePressed(seee)
      bwutton.remove()
}
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
      localStorage.setItem("quota0",String(localStorage.getItem("quota0")[0]*1+1)+floor(new Date()/86400000))
      if (mode=="DAILY"){
      localStorage.setItem("rec",floor(new Date()/86400000))
        
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
 if ((key=="m"||key=="M")){
    setup()
  }
  if (key=="p"){
    if(mode=="HIGH"||mode=="MENU"){
      
    }
    else{
pause+=1
    }
  }
  else if(fghj!=12)/*if (["ArrowUp","ArrowDown","ArrowRight","ArrowLeft","Backspace","Enter"].includes(key))*/{
 
  
  if ((key*1==key || (grid.flat().filter((item)=>item=="?k").length==0 && key=="?")) && (grid[cury][curx]=="" || grid[cury][curx][1]=="k")){
    grid[cury][curx]=key+"k"
  }
  
  if (key=="ArrowUp" && cury>0){
    cury-=1
  }
  if (key=="Enter" && opes[opes.length-1]!="Back to start"){
  
    if (opes.length==0){
    append(opes,[curx*100,cury*100])
  }
  
  else if(opes.map((item)=>item.join(",")).indexOf(curx*100+','+cury*100)==-1 && abs(opes.slice(-1)[0][0]-curx*100)+abs(opes.slice(-1)[0][1]-cury*100)==100){
    append(opes,[curx*100,cury*100])
  }
    
    else if(abs(opes.slice(-1)[0][0]-curx*100)+abs(opes.slice(-1)[0][1]-cury*100)==100 && opes[0].join("e")==curx*100+"e"+cury*100 && opes.map((item)=>item.join(",")).filter((item)=>item==curx*100+","+cury*100).length==1){
      append(opes,"Back to start")
    }
  }
  if (key=="-"){
    opes=opes.slice(0,-1)
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
  score=round(see(1))
}
  }
  
function todail(){
  if(localStorage.getItem("rec")!=floor(new Date()/86400000)){
  button = createButton("Finish!");
  button.size(widd*3/2,100)
  button.style("font-size:80px;")
  button.mousePressed(finss)
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
  if (localStorage.getItem("quota0")[0]>=2){
    swal.fire("You've hit your games quota!")
  }
  else{
       button = createButton("Finish!");
  button.size(3*widd/2,100)
  button.style("font-size:80px;")
  button.mousePressed(finss)
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
    df=13
    if (typeof button!="undefined"){
      button.remove()
  }
  if (typeof ebutton!="undefined"){    
    ebutton.remove()
  }
  if (typeof bwutton!="undefined"){
    bwutton.remove()
  }
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
    tcurx=max(min(floor((mouseX-(600-500)/2)/(100)),4),0)
    tcury=max(min(floor(((mouseY-((801-1)-800))-100)/(100)),4),0)
    
      curx=tcurx
      cury=tcury
  }
  
  function doubleClicked(){
    print("oe")
    if (typeof curx!="undefined" && typeof cury!="undefined"){
    
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
  }
  }
  }
