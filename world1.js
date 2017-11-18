function display(key){
	    var xhttp = new XMLHttpRequest();
			if (key.length==0){
			    document.getElementById("result").innerHTML = " ";
			    return;
			}else{ 
		
			 xhttp.onreadystatechange = function(){
				if (xhttp.readyState== 4 && xhttp.status == 200){
					document.getElementById("result").innerHTML = xhttp.responseText;
				}
			};
			
		
			xhttp.open("GET", "world1.php?country=" + key, true);
			xhttp.send();
			
		
		    }
		
}
		
function display2(){
    var v = document.getElementById("country");
    var a = document.getElementById("certify");
    if (a.checked == true){
        displayALL();
    }else{
         display(v.value);
    }
   
}


function displayALL(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if (request.readyState == XMLHttpRequest.DONE){
            if(request.status == 200){
                document.getElementById("result").innerHTML= request.responseText;
            }
        }
    };
    
    request.open("GET", "world1.php?all=true", true);
    request.send();
}


window.onload =function(){
    var look = document.getElementById("lookup");
    look.addEventListener("click", display2);
}	
    		