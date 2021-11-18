
function validate(event){
    const firstName=document.getElementById("firstName").value;
    const lastName=document.getElementById("lastName").value;
    const city=document.getElementById("city").value;
    if(firstName==""){
        // alert("Please enter First Name");
        const errFirstName=document.getElementById("errFirstName");
        errFirstName.innerText="Please enter the First Name";
        event.preventDefault();
        return false;
    }else if(lastName=="" ){
        const errLastName=document.getElementById("errLastName");
        errLastName.innerText="Please enter the Last Name";
        // alert("Last Name")
        event.preventDefault();
        return false;
    }else if(city=="" ){
        const errcity=document.getElementById("errcity");
        errcity.innerText="Please enter the city Name";
        // alert("Last Name")
        event.preventDefault();
        return false;
    }
    
    else{
        return true;
    }
   
} 