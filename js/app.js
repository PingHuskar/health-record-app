localStorage.setItem('pcName', 'PC1');
localStorage.removeItem('username');
while (localStorage.getItem('username') === 'null' || localStorage.getItem('username') === null || localStorage.getItem('username') === '') {
    localStorage.setItem('username', prompt("Enter Username", "admin123"));
}
$(document).ready(function() {
    $('button').attr('tabindex', '-1');
});
$(document).ready(function() {
    $("#position_box").slideUp();
    $("#medicine_box").slideUp();
    $("#advice_box").slideUp();
    $("#action_box").slideUp();
    $("#violenceLevel_box").slideUp();
});

function showSymptoms() {
    $(document).ready(function() {
        $("#symptom_box").slideDown();
        $("#position_box").slideUp();
        $("#violenceLevel_box").slideUp();
        $("#medicine_box").slideUp();
        $("#advice_box").slideUp();
        $("#action_box").slideUp();
    });
}

function showPositions() {
    $(document).ready(function() {
        $("#symptom_box").slideUp();
        $("#position_box").slideDown();
        $("#violenceLevel_box").slideDown();
        $("#medicine_box").slideUp();
        $("#advice_box").slideUp();
        $("#action_box").slideUp();
    });
}

function showMedicines() {
    $(document).ready(function() {
        $("#symptom_box").slideUp();
        $("#position_box").slideUp();
        $("#medicine_box").slideDown();
        $("#violenceLevel_box").slideUp();
        $("#advice_box").slideUp();
        $("#action_box").slideUp();
    });
}

function showActions() {
    $(document).ready(function() {
        $("#action_box").slideDown();
        $("#advice_box").slideDown();
        $("#medicine_box").slideUp();
        $("#violenceLevel_box").slideUp();
        $("#symptom_box").slideUp();
        $("#position_box").slideUp();
    });
}

function showAdvices() {
    $(document).ready(function() {
        $("#action_box").slideDown();
        $("#advice_box").slideDown();
        $("#medicine_box").slideUp();
        $("#violenceLevel_box").slideUp();
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

function addviolenceLevel(obj) {
    document.getElementById('violenceLevel').value = `${obj.innerHTML}`
    dmgContext(document.getElementById('violenceLevel'));
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
    var dmgValue = document.getElementById('violenceLevel').value
    var dmgContextVal;
    switch (dmgValue) {
        case "1":
            dmgContextVal = "น้อย"
            document.getElementById('violenceLevel_context').style.color = '#7FBD7A'
            break;
        case "2":
            dmgContextVal = "ปานกลาง"
            document.getElementById('violenceLevel_context').style.color = 'orange'
            break;
        case "3":
            dmgContextVal = "มาก"
            document.getElementById('violenceLevel_context').style.color = '#FF5656'
            break;
    }
    document.getElementById('violenceLevel_context').innerHTML = `(${dmgContextVal})`
}


function main(data) {
    document.getElementById('SearchVID').value = data.replace(/\D/g, '');
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
                    document.getElementById('parentContact').style.display = "none"
                    document.getElementById('error').style.display = "initial"
                    document.getElementById('StudentPortrait').src = "image/notFound.png"
                }
                console.log(studentData);
                
                document.getElementById('pcName').value = localStorage.getItem('pcName')
                document.getElementById('username').value = localStorage.getItem('username')
                document.getElementById('studentID').value = data
                document.getElementById('timestamp').value = moment().format('l') + " " + moment().format('LTS');
                document.getElementById('name').innerHTML = studentData["name"]
                document.getElementById('last').innerHTML = `${studentData["last"]}<br>`
                document.getElementById('bloodGroup').innerHTML = `กรุ๊ปเลือด : ${studentData["blood"]}<br>`
                document.getElementById('drugAllergy').innerHTML = `แพ้ยา : LoremIpsum <br>`
                document.getElementById('congenitalDisease').innerHTML = `โรคประจําตัว : LoremIpsum <br>`
                document.getElementById('วิธีแก้โรคประจําตัว').innerHTML = `วิธีแก้โรคประจําตัว : LoremIpsum <br>`
                document.getElementById('parentContact').innerHTML = `ติดต่อผู้ปกครอง : LoremIpsum <br>`
                document.getElementById('StudentPortrait').src = "image/" + data + ".jpg"
                document.getElementById('name').style.display = "initial"
                document.getElementById('last').style.display = "initial"
                document.getElementById('bloodGroup').style.display = "initial"
                document.getElementById('drugAllergy').style.display = "initial"
                document.getElementById('congenitalDisease').style.display = "initial"
                document.getElementById('วิธีแก้โรคประจําตัว').style.display = "initial"
                document.getElementById('error').style.display = "none"
            })
        //   var val = document.getElementById('SearchVID').value

    } else {
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


var mybutton = document.getElementById("myBtn");

// When the user scrolls down 150px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}