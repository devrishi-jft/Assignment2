var data,myKey;
data=[
    {"id":01,"name":"dev","age":25},
    {"id":02,"name":"guru","age":20},
    {"id":03,"name":"devrishi","age":27}
]
var count=data.length;
//console.log(count);
var x="";
for (i in data) {

    x+="<tr>"
    x+="<td>"+data[i].id+"</td>"
    x+="<td>"+ data[i].name+"</td>"
    x+="<td>"+data[i].age+"</td>"
    x+="<td><button type='button' onclick='myTemp("+i+")' class='btn btn-primary' data-toggle='modal' data-target='#edit'>Edit</button></td>"
    x+=`<td><button  type='button' onclick='myTemp(${i})' class='btn btn-primary' data-toggle='modal' data-target='#delete'>Delete</button></td>`
    x+="</tr>";
   // console.log(i);

    }
var myHead="<th>ID</th><th>NAME</th><th>AGE</th>";
document.getElementById("demo").innerHTML=myHead+x;
document.getElementById("count").innerHTML="count: "+count;

function myDelete(){
    console.log(myKey);
    delete data[myKey];
    count--;
    myDisplay();
}

function myTemp(temp){
    myKey=temp;
    console.log(myKey);
}

function myEdit(){
    var qq=document.getElementById("ename").value;
    console.log(qq);
    data[myKey].id=document.getElementById("eid").value;
    data[myKey].name=document.getElementById("ename").value;
    data[myKey].age=document.getElementById("eage").value;
    myDisplay();
   // console.log(myKey);
}
function myAdd(){
    //console.log(++i);
   // data.push({"id":10,"name":"news","age":50})
   var id=document.getElementById("id");
   var name=document.getElementById("name");
   var age=document.getElementById("age");
   console.log(id.value);
   console.log(name.value);
   console.log(age.value);
   data.push({"id":id.value,"name":name.value,"age":age.value})
    count++;
    myDisplay();
}
function myDisplay(){
    var x="";
    for (i in data) {
    
        x+="<tr>"
        x+="<td>"+data[i].id+"</td>"
        x+="<td>"+ data[i].name+"</td>"
        x+="<td>"+data[i].age+"</td>"
        x+="<td><button type='button' onclick='myTemp("+i+")' class='btn btn-primary' data-toggle='modal' data-target='#edit'>Edit</button></td>"
        x+=`<td><button  type='button'  onclick='myTemp(${i})' class='btn btn-primary' data-toggle='modal' data-target='#delete'>Delete</button></td>`//two diffrent ways to make dynamic values
        x+="</tr>"
        //console.log(i);
    
        }
    var myHead="<th>ID</th><th>NAME</th><th>AGE</th>";
    document.getElementById("demo").innerHTML=myHead+x;
    document.getElementById("count").innerHTML="count: "+count;   
}

// <button type='button' onclick='myEdit("+i+")'>Edit</button>