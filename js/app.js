$(document).ready(function(){
        $("#position_box").slideUp();
        $("#medicine_box").slideUp();
        $("#advice_box").slideUp();
        $("#action_box").slideUp();
});
function showSymptoms() {
    $(document).ready(function(){
            $("#symptom_box").slideDown();
            $("#position_box").slideUp();
            $("#medicine_box").slideUp();
            $("#advice_box").slideUp();
            $("#action_box").slideUp();
    });
}

function showPositions() {
    $(document).ready(function(){
            $("#symptom_box").slideUp();
            $("#position_box").slideDown();
            $("#medicine_box").slideUp();
            $("#advice_box").slideUp();
            $("#action_box").slideUp();
    });
}

function showMedicines() {
    $(document).ready(function(){
            $("#symptom_box").slideUp();
            $("#position_box").slideUp();
            $("#medicine_box").slideDown();
            $("#advice_box").slideUp();
            $("#action_box").slideUp();
    });
}

function showActions() {
    $(document).ready(function(){
            $("#action_box").slideDown();
            $("#advice_box").slideDown();
            $("#medicine_box").slideUp();
            $("#symptom_box").slideUp();
            $("#position_box").slideUp();
    });
}

function showAdvices() {
    $(document).ready(function(){
            $("#action_box").slideDown();
            $("#advice_box").slideDown();
            $("#medicine_box").slideUp();
            $("#symptom_box").slideUp();
            $("#position_box").slideUp();
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


  

// var jsonArray = '{"44444":{"name": "C","last":"D"}, "44447":{"name": "E","last":"G"}}'
// var jsonParsedArray = JSON.parse(jsonArray);
  
    function main(data) {
        document.getElementById('SearchVID').value = data.replace(/\D/g,'');
        if (data.length === 5) {
            fetch("students.json")
            .then(res => res.json())
            .then(db => {
                // console.log(data.length,data)
                // console.log(db); 
                var studentData = db[data]
                if (studentData === undefined) {
                    document.getElementById('studentID').value = ""
                    // document.getElementById('studentInfo').style.display = "none"
                    document.getElementById('name').style.display = "none"
                    document.getElementById('last').style.display = "none"
                    document.getElementById('bloodGroup').style.display = "none"
                    document.getElementById('drugAllergy').style.display = "none"
                    document.getElementById('congenitalDisease').style.display = "none"
                    document.getElementById('วิธีแก้โรคประจําตัว').style.display = "none"
                    document.getElementById('error').style.display = "initial"
                    document.getElementById('StudentPortrait').src = "image/notFound.png"
                }
                console.log(studentData);
                document.getElementById('name').innerHTML = studentData["name"]
                document.getElementById('last').innerHTML = `${studentData["last"]}<br>`
                document.getElementById('bloodGroup').innerHTML = `กรุ๊ปเลือด : ${studentData["blood"]}<br>`
                document.getElementById('drugAllergy').innerHTML = `แพ้ยา : LoremIpsum <br>`
                document.getElementById('congenitalDisease').innerHTML = `โรคประจําตัว : LoremIpsum <br>`
                document.getElementById('วิธีแก้โรคประจําตัว').innerHTML = `วิธีแก้โรคประจําตัว : LoremIpsum <br>`
                document.getElementById('StudentPortrait').src = "image/"+data+".jpg"
                document.getElementById('name').style.display = "initial"
                document.getElementById('last').style.display = "initial"
                document.getElementById('bloodGroup').style.display = "initial"
                document.getElementById('drugAllergy').style.display = "initial"
                document.getElementById('congenitalDisease').style.display = "initial"
                document.getElementById('วิธีแก้โรคประจําตัว').style.display = "initial"
                document.getElementById('error').style.display = "none"
            })
    //   var val = document.getElementById('SearchVID').value
      
    }
    else {
            document.getElementById('studentID').value = ""
            // document.getElementById('studentInfo').style.display = "none"
            document.getElementById('name').style.display = "none"
            document.getElementById('last').style.display = "none"
            document.getElementById('bloodGroup').style.display = "none"
            document.getElementById('drugAllergy').style.display = "none"
            document.getElementById('congenitalDisease').style.display = "none"
            document.getElementById('วิธีแก้โรคประจําตัว').style.display = "none"
            document.getElementById('error').style.display = "initial"
            document.getElementById('StudentPortrait').src = "image/notFound.png"
          }
    //   var studentData = data[val]
    //   if (data[val] === undefined) {
    //     document.getElementById('studentID').value = ""
    //     // document.getElementById('studentInfo').style.display = "none"
    //     document.getElementById('name').style.display = "none"
    //     document.getElementById('last').style.display = "none"
    //     document.getElementById('error').style.display = "initial"
    //     document.getElementById('StudentPortrait').src = "image/notFound.png"
    //   }
    //   else if (val.length === 5 && data[val] !== undefined) {
    //     // console.log(studentData)
    //     document.getElementById('timestamp').value = moment().format('l') + " " + moment().format('LTS');
    //     document.getElementById('StudentPortrait').src = "image/"+val+".jpg"
    //     $(document).ready(function(){
    //         $("#studentInfo").load(`${val}.txt`);
    //     });
    //     document.getElementById('studentID').value = val
    //     document.getElementById('name').innerHTML = studentData["name"]
    //     document.getElementById('last').innerHTML = studentData["last"]
    //     // document.getElementById('studentInfo').style.display = "initial"
    //     document.getElementById('name').style.display = "initial"
    //     document.getElementById('last').style.display = "initial"
    //     document.getElementById('error').style.display = "none"
    //   }
    //   else {
        
    //   }
    }