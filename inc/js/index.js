function showform(courseid) {
    if (courseid == open001) {
        document.getElementById('formRegister001').style.display = "block";
    }
    if (courseid == open002) {
        document.getElementById('formRegister002').style.display = "block";
    }
    if (courseid == open003) {
        document.getElementById('formRegister003').style.display = "block";
    }
}
function closeform(courseid) {
    if (courseid == close001) {
        document.getElementById('formRegister001').style.display = "none";
    }
    if (courseid == close002) {
        document.getElementById('formRegister002').style.display = "none";
    }
    if (courseid == close003) {
        document.getElementById('formRegister003').style.display = "none";
    }
}

function openCourse(evt, CourseName) {
    var i, tabcontent, tablinks;

    // $("#courseId").val(CourseName);
    // document.getElementById("courseId").value = CourseName;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(CourseName).style.display = "block";
    evt.currentTarget.className += " active";
}