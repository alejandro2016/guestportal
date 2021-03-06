function init() {
	document.addEventListener("deviceready", deviceReady, true);
	console.log("borro init");
	delete init;
}
 
function checkPreAuth() {
	console.log("checkPreAuth");
    var form = $("#loginForm");
    if(window.localStorage["username"] != undefined && window.localStorage["password"] != undefined) {
        $("#username", form).val(window.localStorage["username"]);
        $("#password", form).val(window.localStorage["password"]);
        handleLogin();
    }
}
 
function handleLogin() {
    var form = $("#loginForm");    
    //disable the button so we can't resubmit while we wait
    $("#submitButton",form).attr("disabled","disabled");
    var u = $("#username", form).val();
    var p = $("#password", form).val();
    if(u != '' && p!= '') {
        $.post("http://wifienter.net/app/testoi.php?method=login&returnformat=json", {username:u,password:p}, function(res) {
            if(res == true) {
				console.log("Fue true la respuesta");
                //store
                window.localStorage["username"] = u;
                window.localStorage["password"] = p;
				console.log("Loggeado y Transfiero a main");                $.mobile.changePage("main.html");
            } else {
                navigator.notification.alert("Your login failed", function() {});
				console.log("Fallo Login");
            }
         $("#submitButton").removeAttr("disabled");
        },"json");
    } else {
        navigator.notification.alert("You must enter a username and password", function() {});
        $("#submitButton").removeAttr("disabled");
		console.log("no ingreso datos");
    }
    return false;
}
 
function deviceReady() {
	console.log("deviceReady");
	$("#loginPage").on("pageinit",function() {
		console.log("pageinit run");
		$("#loginForm").on("submit",handleLogin);
		checkPreAuth();
	});
	$.mobile.changePage("#loginPage");
}