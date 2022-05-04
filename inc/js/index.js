function showform(courseid) {
        document.getElementById('formRegister').style.display = "block";
}

function openCourse(evt, CourseName) {
    var i, tabcontent, tablinks;

    $("#courseId").val(CourseName);
    document.getElementById("courseId").value = CourseName;

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