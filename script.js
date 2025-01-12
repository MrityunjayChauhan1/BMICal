function calculateBMI(){
    let feets =document.getElementById('feets').value
    let inches=document.getElementById('inches').value
    let kg=document.getElementById('kg').value

    if (!feets || !inches || !kg) {
        alert("Please enter valid values for all fields.");
        return alert;
    }
        feets=parseInt(feets)
    inches=parseInt(inches)
    kg=parseInt(kg)
    let height=(feets * 12 + inches)/39.37007874;
    let bmi=kg/(height * height)
    let status;
    if(bmi<16.5 ){
       status='Under Weight'
    }
     else if(bmi>16.4 && bmi<24.5){
       status=' Health Normal !!'
    }
    else if(bmi<24.5 && bmi>29.5){
        status='Ovesious Weight'
    }
    else {
        status='You Should Takecare Your Self'
    }
    document.getElementById('result').innerHTML= "Your Bmi is: "+bmi.toFixed(2)+"\n  This is Your Bmi Status: "+status;
    
    
}