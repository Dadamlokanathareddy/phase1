function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("Application/json");
  xhr.open('GET',file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
       callback(xhr.responseText);
     }
  }
  xhr.send(null);
}
getfile("dynamic.json",function(text){
  var data=JSON.parse(text);
   console.log(data);
   profile(data.basics);
   resumes(data.resume);
   educations(data.education);
   skill(data.skills);
 })

var parent1=document.querySelector('.parent1');
var class1=document.querySelector('.class1');
var resume=document.querySelector('.resume');
function profile(pro){
  var nam=document.createElement('h4');
  nam.textContent="-----PROFILE-----";
class1.appendChild(nam);
parent1.appendChild(class1);

  var image=document.createElement('img');
  image.src=pro.img;
  class1.appendChild(image);
  parent1.appendChild(class1);

  var nam=document.createElement('h3');
  nam.textContent=pro.name;
  class1.appendChild(nam);
  parent1.appendChild(class1);

  var nam=document.createElement('hr');
  class1.append(nam);

  var nam=document.createElement('h3');
  nam.textContent=pro.email;
  class1.appendChild(nam);
  parent1.appendChild(class1);

}
function resumes(pro){
  var nam=document.createElement('h3');
  nam.textContent=pro.info;
  resume.appendChild(nam);
  parent1.appendChild(resume);

  var nam=document.createElement('hr');
  resume.append(nam);

  var nam=document.createElement('h4');
  nam.textContent="If you are working on something that you really care about, you don't have to be pushed.";
resume.appendChild(nam);
parent1.appendChild(resume);

var nam=document.createElement('hr');
resume.append(nam);

}
function educations(edu){
  var nam=document.createElement('h3');
  nam.textContent="EDUCATION DETAILS";
  resume.appendChild(nam);
  parent1.appendChild(resume);

var table=document.createElement('table');
  let row='';
  row+="<tr>"+"<th>"+"sno"+"</th>"+"<th>"+"degree"+"</th>"+"<th>"+"colleg"+"</th>"+"<th>"+"per"+"</th>"+
  "</tr>";
  for(i in edu){

  row +="<tr>"+"<td>"+edu[i].sno+"</td>"+"<td>"+edu[i].degree+"</td>"+"<td>"+edu[i].colleg+"</td>"+
  "<td>"+edu[i].per+"</td>"
  +"</tr>";

}
table.innerHTML=row;
resume.appendChild(table);
parent1.appendChild(resume);
}
function skill(l){
  var hh=document.createElement("h3");
  hh.textContent="SKILL SET";
  resume.append(hh);
  var ul=document.createElement(ul);
  resume.append(ul);
  for(i in l){
    var li=document.createElement("li");
    li.textContent=l[i].info;
    ul.append(li);

  }

}
