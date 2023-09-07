var tbp;
var tb;


window.onload = function () {
  var inpSubject = document.getElementById("subject");
  var inpDesc = document.getElementById("desc");
  var inpContent = document.getElementById("content");
  var sbmt = document.getElementById("sbmt");
  document.getElementById("mainTable").onclick = buton;

  sbmt.onclick = function () {
    var subject = inpSubject.value;
    var desc = inpDesc.value;
    var content = inpContent.value;
    var userN = localStorage.getItem("username");
    var today = new Date();
    var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    var info = [desc, content, userN, date, page];
    if (subject && desc && content) {
      sessionStorage.setItem(subject, JSON.stringify(info));
      location.reload();
    }
  }
  function buton(e) { // Adds functionality for each button on the table
    tb = document.getElementById("postsTable");

    if (e.target.tagName == 'BUTTON') {
      for (z = 0; z < sessionStorage.length; z++)
      {
        if (e.target.id == "tableBut" + z)
        {
          tbp = document.getElementById("postData" + z);
          break;
        }
      }
      tbp.style.display = "table";
      tb.style.display = "none";
    }
  }
}

function Table(x) {
  document.write("<div id=\"mainTable\"><table id=\"postsTable\">");
  document.write("<thead><tr>");
  document.write("<th id=\"postName\" colspan=\"4\">"+x+"</th></tr></head><tbody>");
  for (var p = 0; p < sessionStorage.length; p++) {
    var key = sessionStorage.key(p);
    var value = sessionStorage.getItem(key);
    var info2 = JSON.parse(value);

    if (info2[4] == x) {
      document.write("<tr><td id=\"postName\">" + key + "</td>");
      document.write("<td id=\"postDescription\">" + info2[0] + "</td>");
      document.write("<td id=\"postInfo\" align=\"center\"> -Posted by " + info2[2] + " <br/>-Posted: " + info2[3] + " </td>");
      document.write("<td id=\"postInput\" align=\"center\"><button id=\"tableBut" + p + "\" name=\"tableBut\">Open</button></td></tr>");

      //info2[1] is the Content accessed by pressing 'open'
    }
  }
  document.write("</tbody></table></div>");
}

function createPosts(z) { // Creates existing posts
  for (var p = 0; p < sessionStorage.length; p++) {
    var key = sessionStorage.key(p);
    var value = sessionStorage.getItem(key);
    var info2 = JSON.parse(value);

    if (info2[4] == z) {
      document.write("<div class=\"posts\"><table id=\"postData" + p + "\" class=\"postData\">");
      document.write("<thead><tr>");
      document.write("<th id=\"postTopic\">" + z + "</th></tr></head><tbody>");
      document.write("<tr><td id=\"postNameP\">" + key + "</td></tr>");
      document.write("<tr><td id=\"postDescription\">" + info2[0] + "</td></tr>");
      document.write("<tr><td id=\"postContent\">" + info2[1] + "</td></tr>");
      document.write("<tr><td id=\"postInfo\" align=\"center\">-Posted by: " + info2[2] + " <br>-Posted in: " + info2[3] + " </td></tr>");
      document.write("<tr><td id=\"postInput\" align=\"center\"><input type=\"button\" value=\"Close Post\" name=\"tableBut\" onclick=\"closePost();\"></td></tr>");
      document.write("</tbody></table></div>");
      //info2[1] is the Content accessed by pressing 'open'
    }
  }
}

function closePost() { // Closes the post and makes the table visible
  tb = document.getElementById("postsTable");
  tbp.style.display = "none";
  tb.style.display = "table";
}

function countPost() {
  document.getElementById("postNum").textContent += sessionStorage.length;
}

function redBody() {
  document.body.style.backgroundColor = "red";
}

function greenBody() {
  document.body.style.backgroundColor = "green";
}

function defaultBody() {
  document.body.style.backgroundColor = "#7d84a0";
}

function validateForm() { // Validate registration data input
  var valid = true;
  if(document.inputform.firstname.value==""){
    alert("First Name is empty");
    document.inputform.firstname.focus();
    valid=false; }
    else if(document.inputform.firstname.value.indexOf(0)!==-1||document.inputform.firstname.value.indexOf(1)!==-1||document.inputform.firstname.value.indexOf(2)!==-1||document.inputform.firstname.value.indexOf(3)!==-1){
      alert("First Name is cant contain this value");
      document.inputform.firstname.focus();
      valid=false; }
      else if (document.inputform.firstname.value.indexOf(4)!==-1||document.inputform.firstname.value.indexOf(5)!==-1||document.inputform.firstname.value.indexOf(6)!==-1||document.inputform.firstname.value.indexOf(7)!==-1) {
        alert("First Name is cant contain this value");
        document.inputform.firstname.focus();
        valid=false;
      }
      else if (document.inputform.firstname.value.indexOf(8)!==-1||document.inputform.firstname.value.indexOf(9)!==-1||document.inputform.firstname.value.indexOf("@")!==-1||document.inputform.firstname.value.indexOf(".")!==-1) {
        alert("First Name is cant contain this value");
        document.inputform.firstname.focus();
        valid=false;
      }
      else if (document.inputform.lastname.value=="") {
        alert("Last Name is empty");
        document.inputform.lastname.focus();
        valid=false;
      }
      else if (document.inputform.lastname.value.indexOf(0)!==-1||document.inputform.lastname.value.indexOf(1)!==-1||document.inputform.lastname.value.indexOf(2)!==-1||document.inputform.lastname.value.indexOf(3)!==-1) {
        alert("Last Name is cant contain this value");
        document.inputform.lastname.focus();
        valid=false;
      }
      else if (document.inputform.lastname.value.indexOf(4)!==-1||document.inputform.lastname.value.indexOf(5)!==-1||document.inputform.lastname.value.indexOf(6)!==-1||document.inputform.lastname.value.indexOf(7)!==-1) {
        alert("Last Name is cant contain this value");
        document.inputform.lastname.focus();
        valid=false;
      }
      else if (document.inputform.lastname.value.indexOf(8)!==-1||document.inputform.lastname.value.indexOf(9)!==-1||document.inputform.lastname.value.indexOf("@")!==-1||document.inputform.lastname.value.indexOf(".")!==-1) {
        alert("Last Name is cant contain this value");
        document.inputform.lastname.focus();
        valid=false;
      }
      else if (document.inputform.username.value=="") {
        alert("UserName is empty");
        document.inputform.username.focus();
        valid=false;
      }
      else if (document.inputform.username.value.indexOf("@")!==-1||document.inputform.username.value.indexOf(".")!==-1||document.inputform.username.value.indexOf("?")!==-1) {
        alert("UserName is contain this value");
        document.inputform.username.focus();
        valid=false;
      }
      else if (document.inputform.password.value=="") {
        alert("password area is empty");
        document.inputform.password.focus();
        valid=false;
      }
      else if (document.inputform.password1.value=="") {
        alert("confirmpassword area is empty");
        document.inputform.password1.focus();
        valid=false;
      }
      else if (document.inputform.password1.value!==document.inputform.password.value) {
        alert("password is not matched");
        document.inputform.password1.focus();
        valid=false;
      }
      else if (document.inputform.email.value=="") {
        alert("Email is empty");
        document.inputform.email.focus();
        valid=false;
      }
      else if (document.inputform.email.value.indexOf("@")==-1||document.inputform.email.value.indexOf(".")==-1) {
        alert("Please Enter valid email, e.g:info@yahoo.com");
        document.inputform.email.focus();
        valid=false;
      }
      else if (document.inputform.phone.value=="") {
        alert("phone no. area is empty");
        document.inputform.phone.focus();
        valid=false;
      }
      else if (document.inputform.phone.value.indexOf("a")!=-1||document.inputform.phone.value.indexOf("b")!=-1||document.inputform.phone.value.indexOf("c")!=-1||document.inputform.phone.value.indexOf("d")!=-1) {
        alert("phone number is not correct");
        document.inputform.phone.focus();
        valid=false;
      }
      else if (document.inputform.phone.value.indexOf("f")!=-1||document.inputform.phone.value.indexOf("g")!=-1||document.inputform.phone.value.indexOf("h")!=-1||document.inputform.phone.value.indexOf("i")!=-1) {
        alert("phone number is not correct");
        document.inputform.phone.focus();
        valid=false;
      }
      else if (document.inputform.phone.value.indexOf("j")!=-1||document.inputform.phone.value.indexOf("k")!=-1||document.inputform.phone.value.indexOf("l")!=-1||document.inputform.phone.value.indexOf("m")!=-1) {
        alert("phone number is not correct");
        document.inputform.phone.focus();
        valid=false;
      }
      else if (document.inputform.phone.value.indexOf("n")!=-1||document.inputform.phone.value.indexOf("o")!=-1||document.inputform.phone.value.indexOf("p")!=-1||document.inputform.phone.value.indexOf("q")!=-1) {
        alert("phone number is not correct");
        document.inputform.phone.focus();
        valid=false;
      }
      else if (document.inputform.phone.value.indexOf("r")!=-1||document.inputform.phone.value.indexOf("s")!=-1||document.inputform.phone.value.indexOf("t")!=-1||document.inputform.phone.value.indexOf("v")!=-1) {
        alert("phone number is not correct");
        document.inputform.phone.focus();
        valid=false;
      }
      else if (document.inputform.phone.value.indexOf("w")!=-1||document.inputform.phone.value.indexOf("x")!=-1||document.inputform.phone.value.indexOf("y")!=-1||document.inputform.phone.value.indexOf("z")!=-1) {
        alert("phone number is not correct");
        document.inputform.phone.focus();
        valid=false;
      }
      else if (document.inputform.phone.value.indexOf("e")!=-1||document.inputform.phone.value.indexOf("u")!=-1||document.inputform.phone.value.indexOf("@")!=-1||document.inputform.phone.value.indexOf(".")!=-1) {
        alert("phone number is not correct");
        document.inputform.phone.focus();
        valid=false;
      }
      else {
        valid=false;
        var x = document.inputform.Gender;

        for(var i=0;i<x.length;i++){
          if(x[i].checked){
            valid = true;
            break;
          }
        }
        if(valid){
          alert("Validation Successful");
          var nameuser =document.getElementById("usrname").value;
          localStorage.setItem("username",nameuser);
          var psswrd =document.getElementById("pass").value;
          localStorage.setItem("password",psswrd);
          var eml =document.getElementById("emil").value;
          localStorage.setItem("email",eml);
          var namefirst =document.getElementById("f").value;
          localStorage.setItem("firstname",namefirst);
          var namelast =document.getElementById("l").value;
          localStorage.setItem("lastname",namelast);
          var day =document.getElementById("d").value;
          localStorage.setItem("birthday",day);
          var month =document.getElementById("m").value;
          localStorage.setItem("birthmonth",month);
          var year =document.getElementById("y").value;
          localStorage.setItem("birthyear",year);
          var gender =document.inputform.Gender.value;
          localStorage.setItem("Gender",gender);
          var phne =document.getElementById("phonenum").value;
          localStorage.setItem("phone",phne);

        }
        else{
          alert("Please Select the date of birth and a Gender");
          document.inputform.select1.focus();
        }
      }
      return valid;
    }

function press(){
  document.inputform.select2.focus();
}

function press1(){
  document.inputform.select3.focus();
}

      function validate(){ // Validates login input
        var detect = true;

        if (document.inptform.Uname.value=="") {
          alert("UserName is empty");
          document.inptform.Uname.focus();
          detect=false
        }
        else if (document.inptform.Uname.value!==localStorage.getItem("username")) {
          alert("invalid UserName");
          document.inptform.Uname.focus();
          detect=false
        }
        else if (document.inptform.psw.value=="") {
          alert("password area is empty");
          document.inptform.psw.focus();
          detect=false;
        }
        else {
            if(document.inptform.psw.value==localStorage.getItem("password")) {
              alert("valid access");
              var a=localStorage.getItem("username");
              localStorage.setItem("username1",a);
              var b=localStorage.getItem("firstname");
              localStorage.setItem("firstname1",b);
              var c=localStorage.getItem("lastname");
              localStorage.setItem("lastname1",c);
              var d=localStorage.getItem("birthday");
              localStorage.setItem("birthday1",d);
              var e=localStorage.getItem("birthmonth");
              localStorage.setItem("birthmonth1",e);
              var f=localStorage.getItem("birthyear");
              localStorage.setItem("birthyear1",f);
              var g=localStorage.getItem("Gender");
              localStorage.setItem("Gender1",g);
              var h=localStorage.getItem("email");
              localStorage.setItem("email1",h);
              var i=localStorage.getItem("phone");
              localStorage.setItem("phone1",i);
            }
            else {
              alert("incorrect password");
              document.inptform.psw.focus();
              detect=false;
            }
          }
          return detect;
        }


      function validateAdmin(){
        var detector= true;

        if (document.inptform.Uname.value=="") {
          alert("UserName is empty");
          document.inptform.Uname.focus();
          detector=false;
        }
        else if (document.inptform.Uname.value!=="admin") {
          alert("invalid admin name");
          document.inptform.Uname.focus();
          detector=false;
        }
        else if (document.inptform.psw.value=="") {
          alert("password area is empty");
          document.inptform.psw.focus();
          detector=false;
        }
        else {
          if (document.inptform.psw.value!=="admin") {
            alert("password is incorrect");
            document.inptform.psw.focus();
            detector=false;
          }
        }
        return detector;
      }

    function GeneralTable(x) {
    document.write("<div><table>");
    document.write("<thead><tr>");
    document.write("<th id=\"postName\" colspan=\"5\">Manage General Discussion Posts</th></tr></head><tbody>");
    for (var p = 0; p < sessionStorage.length; p++) {
        var key = sessionStorage.key(p);
        var value = sessionStorage.getItem(key);
        var info2 = JSON.parse(value);

        if (info2[4] == x) {
          document.write("<tr><td id=\"postName\">" + key + "</td>");
          document.write("<td id=\"postDescription\">" + info2[0] + "</td>");
          document.write("<td id=\"postInfo\" align=\"center\"> -Posted by " + info2[2] + " <br/>-Posted: " + info2[3] + " </td>");
          document.write("<tr><td id=\"postContent\" colspan=\"5\" style=\"border-left: 0px; border-bottom: 0px;\">" + info2[1] + "</td></tr>");
          document.write("<td id=\"postInput\" align=\"center\" colspan=\"5\" style=\"border-left: 0px; border-bottom: solid 5px;\"><input type=\"button\" id=\"rmv\" value=\"remove\"" + `onclick="rmvPost(${p})"` + "name=\"tableBut\"></td></tr>");

            //info2[1] is the Content accessed by pressing 'open'
        }
    }
    document.write("</tbody></table></div>");
}

function WritingTable(x) {
    document.write("<div><table>");
    document.write("<thead><tr>");
    document.write("<th id=\"postName\" colspan=\"5\">Manage Writing Posts</th></tr></head><tbody>");
    for (var p = 0; p < sessionStorage.length; p++) {
        var key = sessionStorage.key(p);
        var value = sessionStorage.getItem(key);
        var info2 = JSON.parse(value);

        if (info2[4] == x) {
          document.write("<tr><td id=\"postName\">" + key + "</td>");
          document.write("<td id=\"postDescription\">" + info2[0] + "</td>");
          document.write("<td id=\"postInfo\" align=\"center\"> -Posted by " + info2[2] + " <br/>-Posted: " + info2[3] + " </td>");
          document.write("<tr><td id=\"postContent\" colspan=\"5\" style=\"border-left: 0px; border-bottom: 0px;\">" + info2[1] + "</td></tr>");
          document.write("<td id=\"postInput\" align=\"center\" colspan=\"5\" style=\"border-left: 0px; border-bottom: solid 5px;\"><input type=\"button\" id=\"rmv\" value=\"remove\"" + `onclick="rmvPost(${p})"` + "name=\"tableBut\"></td></tr>");

            //info2[1] is the Content accessed by pressing 'open'
        }
    }
    document.write("</tbody></table></div>");
}

function StoriesTable(x) {
    document.write("<div><table>");
    document.write("<thead><tr>");
    document.write("<th id=\"postName\" colspan=\"5\">Manage Short Stories Posts</th></tr></head><tbody>");
    for (var p = 0; p < sessionStorage.length; p++) {
        var key = sessionStorage.key(p);
        var value = sessionStorage.getItem(key);
        var info2 = JSON.parse(value);

        if (info2[4] == x) {
          document.write("<tr><td id=\"postName\">" + key + "</td>");
          document.write("<td id=\"postDescription\">" + info2[0] + "</td>");
          document.write("<td id=\"postInfo\" align=\"center\"> -Posted by " + info2[2] + " <br/>-Posted: " + info2[3] + " </td>");
          document.write("<tr><td id=\"postContent\" colspan=\"5\" style=\"border-left: 0px; border-bottom: 0px;\">" + info2[1] + "</td></tr>");
          document.write("<td id=\"postInput\" align=\"center\" colspan=\"5\" style=\"border-left: 0px; border-bottom: solid 5px;\"><input type=\"button\" id=\"rmv\" value=\"remove\"" + `onclick="rmvPost(${p})"` + "name=\"tableBut\"></td></tr>");

            //info2[1] is the Content accessed by pressing 'open'
        }
    }
    document.write("</tbody></table></div>");
}

function RecommendTable(x) {
    document.write("<div><table>");
    document.write("<thead><tr>");
    document.write("<th id=\"postName\" colspan=\"5\">Manage Recommendations Posts</th></tr></head><tbody>");
    for (var p = 0; p < sessionStorage.length; p++) {
        var key = sessionStorage.key(p);
        var value = sessionStorage.getItem(key);
        var info2 = JSON.parse(value);

        if (info2[4] == x) {
          document.write("<tr><td id=\"postName\">" + key + "</td>");
          document.write("<td id=\"postDescription\">" + info2[0] + "</td>");
          document.write("<td id=\"postInfo\" align=\"center\"> -Posted by " + info2[2] + " <br/>-Posted: " + info2[3] + " </td>");
          document.write("<tr><td id=\"postContent\" colspan=\"5\" style=\"border-left: 0px; border-bottom: 0px;\">" + info2[1] + "</td></tr>");
          document.write("<td id=\"postInput\" align=\"center\" colspan=\"5\" style=\"border-left: 0px; border-bottom: solid 5px;\"><input type=\"button\" id=\"rmv\" value=\"remove\"" + `onclick="rmvPost(${p})"` + "name=\"tableBut\"></td></tr>");

            //info2[1] is the Content accessed by pressing 'open'
        }
    }
    document.write("</tbody></table></div>");
}

function CritiqueTable(x) {
    document.write("<div><table>");
    document.write("<thead><tr>");
    document.write("<th id=\"postName\" colspan=\"5\">Manage Critique Posts</th></tr></head><tbody>");
    for (var p = 0; p < sessionStorage.length; p++) {
        var key = sessionStorage.key(p);
        var value = sessionStorage.getItem(key);
        var info2 = JSON.parse(value);

        if (info2[4] == x) {
          document.write("<tr><td id=\"postName\">" + key + "</td>");
          document.write("<td id=\"postDescription\">" + info2[0] + "</td>");
          document.write("<td id=\"postInfo\" align=\"center\"> -Posted by " + info2[2] + " <br/>-Posted: " + info2[3] + " </td>");
          document.write("<tr><td id=\"postContent\" colspan=\"5\" style=\"border-left: 0px; border-bottom: 0px;\">" + info2[1] + "</td></tr>");
          document.write("<td id=\"postInput\" align=\"center\" colspan=\"5\" style=\"border-left: 0px; border-bottom: solid 5px;\"><input type=\"button\" id=\"rmv\" value=\"remove\"" + `onclick="rmvPost(${p})"` + "name=\"tableBut\"></td></tr>");

            //info2[1] is the Content accessed by pressing 'open'
        }
    }
    document.write("</tbody></table></div>");
}

function rmvPost(p) {
    sessionStorage.removeItem(sessionStorage.key(p));
    location.reload();
}
