function showform(courseid) {
    var x = 0;

    if (courseid == 1) {
        x = 1;
        document.getElementById('formRegister001').style.display = "block";
    }

    if (courseid == 2) {
        x = 2;
        document.getElementById('formRegister002').style.display = "block";
    }

    if (courseid == 3) {
        x = 3;
        document.getElementById('formRegister003').style.display = "block";
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