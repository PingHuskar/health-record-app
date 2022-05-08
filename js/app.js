$(document).ready(function(){
        $("#position_box").slideUp();
        $("#medicine_box").slideUp();
        $("#advice_box").slideUp();
        $("#action_box").slideUp();
});
function showSymptoms() {
    $(document).ready(function(){
        $("#symptom_title").click(function(){
            $("#symptom_box").slideDown();
            $("#position_box").slideUp();
            $("#medicine_box").slideUp();
            $("#advice_box").slideUp();
            $("#action_box").slideUp();
        });
    });
}

function showPositions() {
    $(document).ready(function(){
        $("#position_title").click(function(){
            $("#symptom_box").slideUp();
            $("#position_box").slideDown();
            // $("#medicine_box").slideUp();
            // $("#advice_box").slideUp();
            // $("#action_box").slideUp();
        });
    });
}

function showMedicines() {
    $(document).ready(function(){
        $("#medicine_title").click(function(){
            $("#symptom_box").slideUp();
            $("#position_box").slideUp();
            $("#medicine_box").slideDown();
            $("#advice_box").slideUp();
            $("#action_box").slideUp();
        });
    });
}

function showActions() {
    $(document).ready(function(){
        $("#action_title").click(function(){
            $("#action_box").slideDown();
            $("#advice_box").slideDown();
            $("#medicine_box").slideUp();
            $("#symptom_box").slideUp();
            $("#position_box").slideUp();
        });
    });
}

function showAdvices() {
    $(document).ready(function(){
        $("#advice_title").click(function(){
            $("#action_box").slideDown();
            $("#advice_box").slideDown();
            $("#medicine_box").slideUp();
            $("#symptom_box").slideUp();
            $("#position_box").slideUp();
        });
    });
}


function addSymptom(obj) {
    document.getElementById('symptom').value = document.getElementById('symptom').value.replace(`${obj.innerHTML}, `, "") + `${obj.innerHTML}, `
}

function addPosition(obj) {
    document.getElementById('position').value = `${obj.innerHTML}`
}

function addMedicine(obj) {
    document.getElementById('medicine').value = document.getElementById('medicine').value.replace(`${obj.innerHTML}, `, "") + `${obj.innerHTML}, `
}

function addAction(obj) {
    document.getElementById('action').value = document.getElementById('action').value.replace(`${obj.innerHTML}, `, "") + `${obj.innerHTML}, `
}

function addAdvice(obj) {
    document.getElementById('advice').value = document.getElementById('advice').value.replace(`${obj.innerHTML}, `, "") + `${obj.innerHTML}, `
}

function dmgContext(obj) {
    var dmgValue = document.getElementById('damage').value
    var dmgContextVal;
    switch (dmgValue) {
        case "1":
            dmgContextVal = "น้อย"
            document.getElementById('damage_context').style.color = '#7FBD7A'
            break;
        case "2":
            dmgContextVal = "ปานกลาง"
            document.getElementById('damage_context').style.color = 'orange'
            break;
        case "3":
            dmgContextVal = "มาก"
            document.getElementById('damage_context').style.color = '#FF5656'
            break;
    }
    document.getElementById('damage_context').innerHTML = `(${dmgContextVal})`
}



var jsonArray = '{"44444":{"name": "C","last":"D"}, "44447":{"name": "E","last":"G"}}'
    var jsonParsedArray = JSON.parse(jsonArray);
  
    function main(data) {
      var val = document.getElementById('SearchVID').value
      document.getElementById('SearchVID').value = val.replace(/\D/g,'');
      
      console.log(val.length,val)
      var studentData = data[val]
      if (data[val] === undefined) {
        document.getElementById('studentID').value = ""
        // document.getElementById('studentInfo').style.display = "none"
        document.getElementById('name').style.display = "none"
        document.getElementById('last').style.display = "none"
        document.getElementById('error').style.display = "initial"
        document.getElementById('StudentPortrait').src = "image/notFound.png"
      }
      else if (val.length === 5 && data[val] !== undefined) {
        // console.log(studentData)
        document.getElementById('studentID').value = val
        document.getElementById('name').innerHTML = studentData["name"]
        document.getElementById('last').innerHTML = studentData["last"]
        document.getElementById('timestamp').value = moment().format('l') + " " + moment().format('LTS');
        // document.getElementById('studentInfo').style.display = "initial"
        document.getElementById('name').style.display = "initial"
        document.getElementById('last').style.display = "initial"
        document.getElementById('error').style.display = "none"
        document.getElementById('StudentPortrait').src = "image/"+val+".jpg"
      }
      else {
        
      }
    }