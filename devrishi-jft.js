var data=[],myKey,count;

async function pullData(){
    var myPull= await fetch("https://jsonplaceholder.typicode.com/users");
    var dataObj = await myPull.json();
    

    for(i in dataObj){
        data.push(dataObj[i]);
        //console.log(data[i]);
    }
    count=data.length;
    //console.log(count);
    myDisplay();
}

function myDisplay(){
    var x="<tbody role='rowgroup'>";
    let myId=1;
    for (i in data) {
    
        x+="<tr role='row'>"
        x+="<td role='cell' id='eid"+i+"'>"+ myId++ +"</td>"
        x+="<td role='cell' id='ename"+i+"'>"+ data[i].name+"</td>"
        x+="<td role='cell' id='eemail"+i+"'>"+data[i].email+"</td>"
        x+="<td role='cell'><button type='button' onclick='myEditInput("+i+")' class='btn btn-primary' data-toggle='modal' data-target='#edit'>Edit</button></td>"
        x+=`<td role='cell'><button  type='button'  onclick='myTemp(${i})' class='btn btn-primary' data-toggle='modal' data-target='#delete'>Delete</button></td>`//two diffrent ways to make dynamic values
        x+="</tr>"
        //console.log(i);
        }
        x+="</tbody>";
    var myHead='<thead role="rowgroup"><tr role="row"><th>ID</th><th>NAME</th><th>E-MAIL</th></tr></thead>';
    document.getElementById("demo").innerHTML=myHead+x;
    document.getElementById("count").innerHTML="count: "+count;  
    //console.log(count)
    
}
pullData();
//var count=data.length;

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
function myEditInput(temp){
    myKey=temp;
    //var idText=document.getElementById("eid" + temp).innerText;
    //document.getElementById("eid").value=idText;
    //console.log(idText);

    var nameText=document.getElementById("ename" + temp).innerText;
    document.getElementById("ename").value=nameText;
    console.log(nameText);

    var emailText=document.getElementById("eemail" + temp).innerText;
    document.getElementById("eemail").value=emailText;
    console.log(emailText);
    //data[myKey].id=document.getElementById("eid").value;
    data[myKey].name=document.getElementById("ename").value;
    data[myKey].age=document.getElementById("eemail").value;
    //console.log(data[myKey.id]); 

}
function myEdit(){
    
    //var qq=document.getElementById("eid").value;
    //console.log(qq);
    //data[myKey].id=document.getElementById("eid").value;
    data[myKey].name=document.getElementById("ename").value;
    data[myKey].email=document.getElementById("eemail").value;
    myDisplay();
   // console.log(myKey);
}
function myAdd(){
    //console.log(++i);
   // data.push({"id":10,"name":"news","age":50})
   //var id=document.getElementById("id");
   var name=document.getElementById("name");
   var email=document.getElementById("email");
   //console.log(id.value);
   console.log(name.value);
   console.log(email.value);
   data.push({"name":name.value,"email":email.value})
    count++;
    myDisplay();
}


// <button type='button' onclick='myEdit("+i+")'>Edit</button>