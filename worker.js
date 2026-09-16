export default {
  async fetch(request) {
    return new Response(`<!DOCTYPE html>
<html lang="hi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Online Naka</title>
<style>
*{box-sizing:border-box}body{margin:0;font-family:Arial,sans-serif;background:#f5f7fb;color:#172033}
header{background:#0757d5;color:white;padding:22px 16px;text-align:center}header h1{margin:0;font-size:30px}header p{margin:8px 0 0}
.container{max-width:600px;margin:auto;padding:16px}.card{background:white;border-radius:16px;padding:18px;margin:14px 0;box-shadow:0 3px 12px #0001}
h2{margin-top:0}button{width:100%;border:0;border-radius:12px;padding:14px;margin:7px 0;font-size:17px;font-weight:bold;background:#0757d5;color:white}
button.secondary{background:#e9eef8;color:#172033}button.success{background:#159447}button.danger{background:#d93025}
input,select{width:100%;padding:13px;margin:7px 0;border:1px solid #ccd3df;border-radius:10px;font-size:16px}
.role{font-size:20px;padding:20px}.badge{display:inline-block;background:#e7f0ff;color:#0757d5;padding:7px 10px;border-radius:20px;margin:4px}
.notice{background:#fff5d6;padding:12px;border-radius:10px;margin:10px 0}.worker{border:1px solid #dce2ec;border-radius:12px;padding:12px;margin:10px 0}
.small{font-size:13px;color:#657085}.hidden{display:none}#msg{position:fixed;bottom:15px;left:15px;right:15px;background:#172033;color:white;padding:13px;border-radius:10px;text-align:center;display:none}
</style>
</head>
<body>
<header><h1>\u{1f6e0}\u{fe0f} Online Naka</h1><p>\u{928}\u{93e}\u{915}\u{947} \u{92a}\u{930} \u{91c}\u{93e}\u{928}\u{947} \u{938}\u{947} \u{906}\u{938}\u{93e}\u{928} \u{2014} \u{92e}\u{94b}\u{92c}\u{93e}\u{907}\u{932} \u{938}\u{947} \u{915}\u{93e}\u{92e} \u{914}\u{930} \u{906}\u{926}\u{92e}\u{940}</p></header>
<div class="container">
<div id="home" class="card"><h2>\u{906}\u{92a} \u{915}\u{94d}\u{92f}\u{93e} \u{915}\u{930}\u{928}\u{93e} \u{91a}\u{93e}\u{939}\u{924}\u{947} \u{939}\u{948}\u{902}?</h2>
<button class="role" onclick="show('workerReg')">\u{1f477} \u{92e}\u{941}\u{91d}\u{947} \u{915}\u{93e}\u{92e} \u{91a}\u{93e}\u{939}\u{93f}\u{90f}</button>
<button class="role" onclick="show('contractorReg')">\u{1f3d7}\u{fe0f} \u{92e}\u{941}\u{91d}\u{947} \u{906}\u{926}\u{92e}\u{940} \u{91a}\u{93e}\u{939}\u{93f}\u{90f}</button></div>

<div id="workerReg" class="card hidden"><h2>\u{1f477} Worker Registration</h2>
<input id="wn" placeholder="\u{906}\u{92a}\u{915}\u{93e} \u{928}\u{93e}\u{92e}"><input id="wp" placeholder="\u{92e}\u{94b}\u{92c}\u{93e}\u{907}\u{932} \u{928}\u{902}\u{92c}\u{930}" maxlength="10">
<select id="wcat"><option>Labour</option><option>Raj Mistry</option><option>Tile Fitter</option><option>Plumber</option><option>Electrician</option><option>Painter</option><option>Welder</option><option>AC Technician</option><option>Carpenter</option><option>\u{905}\u{928}\u{94d}\u{92f}</option></select>
<select id="wnaka"><option>\u{917}\u{941}\u{932}\u{93e}\u{92c} \u{938}\u{928} \u{921}\u{947}\u{930}\u{940}</option><option>\u{930}\u{93e}\u{91c}\u{927}\u{93e}\u{928}\u{940} \u{928}\u{93e}\u{915}\u{93e}</option><option>\u{924}\u{941}\u{930}\u{94d}\u{92d}\u{947} \u{928}\u{93e}\u{915}\u{93e}</option><option>\u{915}\u{94b}\u{92a}\u{930}\u{940} \u{928}\u{93e}\u{915}\u{93e}</option></select>
<input id="wrate" placeholder="\u{906}\u{92a}\u{915}\u{93e} \u{930}\u{94b}\u{91c} \u{915}\u{93e} \u{930}\u{947}\u{91f} \u{20b9}"><button onclick="sendOTP('worker')">\u{1f4f1} OTP \u{938}\u{947} \u{91c}\u{941}\u{921}\u{93c}\u{947}\u{902}</button>
<button class="secondary" onclick="home()">\u{2190} \u{935}\u{93e}\u{92a}\u{938}</button></div>

<div id="contractorReg" class="card hidden"><h2>\u{1f3d7}\u{fe0f} Contractor Registration</h2>
<input id="cn" placeholder="\u{906}\u{92a}\u{915}\u{93e} \u{928}\u{93e}\u{92e}"><input id="cp" placeholder="\u{92e}\u{94b}\u{92c}\u{93e}\u{907}\u{932} \u{928}\u{902}\u{92c}\u{930}" maxlength="10">
<select id="crole"><option>Contractor</option><option>Builder</option><option>Site Supervisor</option><option>Project Owner</option></select>
<select id="ccat"><option>Labour</option><option>Raj Mistry</option><option>Tile Fitter</option><option>Plumber</option><option>Electrician</option><option>Painter</option><option>Welder</option><option>AC Technician</option><option>Carpenter</option><option>\u{905}\u{928}\u{94d}\u{92f}</option></select>
<select id="cnaka"><option>\u{917}\u{941}\u{932}\u{93e}\u{92c} \u{938}\u{928} \u{921}\u{947}\u{930}\u{940}</option><option>\u{930}\u{93e}\u{91c}\u{927}\u{93e}\u{928}\u{940} \u{928}\u{93e}\u{915}\u{93e}</option><option>\u{924}\u{941}\u{930}\u{94d}\u{92d}\u{947} \u{928}\u{93e}\u{915}\u{93e}</option><option>\u{915}\u{94b}\u{92a}\u{930}\u{940} \u{928}\u{93e}\u{915}\u{93e}</option></select>
<input id="qty" type="number" min="1" value="1" placeholder="\u{915}\u{93f}\u{924}\u{928}\u{947} \u{906}\u{926}\u{92e}\u{940} \u{91a}\u{93e}\u{939}\u{93f}\u{90f}?">
<button onclick="sendOTP('contractor')">\u{1f4f1} OTP \u{938}\u{947} \u{91c}\u{941}\u{921}\u{93c}\u{947}\u{902}</button><button class="secondary" onclick="home()">\u{2190} \u{935}\u{93e}\u{92a}\u{938}</button></div>

<div id="otp" class="card hidden"><h2>\u{1f510} OTP Verification</h2><p>Demo testing \u{915}\u{947} \u{932}\u{93f}\u{90f} OTP \u{939}\u{948}: <b>1234</b></p>
<input id="otpbox" maxlength="4" placeholder="OTP \u{921}\u{93e}\u{932}\u{947}\u{902}"><button onclick="verifyOTP()">Verify OTP</button></div>

<div id="dashboard" class="card hidden"><h2 id="welcome"></h2>
<div class="notice">\u{1f389} Online Naka \u{92e}\u{947}\u{902} \u{906}\u{92a}\u{915}\u{93e} \u{938}\u{94d}\u{935}\u{93e}\u{917}\u{924} \u{939}\u{948}!<br>\u{92a}\u{939}\u{932}\u{947} <b>15 \u{938}\u{92b}\u{932} hiring FREE</b> \u{939}\u{948}\u{902}\u{964} \u{909}\u{938}\u{915}\u{947} \u{92c}\u{93e}\u{926} Worker \u{20b9}20 \u{914}\u{930} Contractor \u{20b9}30 \u{92a}\u{94d}\u{930}\u{924}\u{93f} \u{938}\u{92b}\u{932} hiring \u{915}\u{940} service fee \u{932}\u{93e}\u{917}\u{942} \u{939}\u{94b}\u{917}\u{940}\u{964}</div>
<div id="workerPanel" class="hidden"><h3>\u{1f477} Worker Panel</h3><p>\u{906}\u{91c} \u{909}\u{92a}\u{932}\u{92c}\u{94d}\u{927}\u{924}\u{93e}:</p>
<button id="availBtn" class="success" onclick="toggleAvailable()">\u{1f7e2} \u{906}\u{91c} \u{909}\u{92a}\u{932}\u{92c}\u{94d}\u{927} \u{939}\u{942}\u{901}</button><p id="availText"></p></div>
<div id="contractorPanel" class="hidden"><h3>\u{1f3d7}\u{fe0f} \u{906}\u{926}\u{92e}\u{940} \u{916}\u{94b}\u{91c}\u{947}\u{902}</h3>
<select id="findcat"><option>Labour</option><option>Raj Mistry</option><option>Tile Fitter</option><option>Plumber</option><option>Electrician</option><option>Painter</option><option>Welder</option><option>AC Technician</option><option>Carpenter</option><option>\u{905}\u{928}\u{94d}\u{92f}</option></select>
<select id="findnaka"><option>\u{917}\u{941}\u{932}\u{93e}\u{92c} \u{938}\u{928} \u{921}\u{947}\u{930}\u{940}</option><option>\u{930}\u{93e}\u{91c}\u{927}\u{93e}\u{928}\u{940} \u{928}\u{93e}\u{915}\u{93e}</option><option>\u{924}\u{941}\u{930}\u{94d}\u{92d}\u{947} \u{928}\u{93e}\u{915}\u{93e}</option><option>\u{915}\u{94b}\u{92a}\u{930}\u{940} \u{928}\u{93e}\u{915}\u{93e}</option></select>
<input id="findqty" type="number" min="1" value="1"><button onclick="findWorkers()">\u{1f50e} Available \u{906}\u{926}\u{92e}\u{940} \u{916}\u{94b}\u{91c}\u{947}\u{902}</button><div id="results"></div></div>
<button class="secondary" onclick="historyBox()">\u{1f4cb} Work History</button><button class="secondary" onclick="logout()">Logout</button></div>

<div id="history" class="card hidden"><h2>\u{1f4cb} Work History</h2><div id="hist"></div><button class="secondary" onclick="backDash()">\u{2190} \u{935}\u{93e}\u{92a}\u{938}</button></div>
</div><div id="msg"></div>
<script>
var pendingRole="";
function show(id){document.querySelectorAll(".card").forEach(x=>x.classList.add("hidden"));document.getElementById(id).classList.remove("hidden")}
function home(){show("home")}
function msg(t){var x=document.getElementById("msg");x.innerHTML=t;x.style.display="block";setTimeout(()=>x.style.display="none",2500)}
function sendOTP(role){pendingRole=role;if(role==="worker"){if(!document.getElementById("wn").value||document.getElementById("wp").value.length<10){msg("\u{928}\u{93e}\u{92e} \u{914}\u{930} \u{938}\u{939}\u{940} \u{92e}\u{94b}\u{92c}\u{93e}\u{907}\u{932} \u{928}\u{902}\u{92c}\u{930} \u{921}\u{93e}\u{932}\u{93f}\u{90f}");return}}else{if(!document.getElementById("cn").value||document.getElementById("cp").value.length<10){msg("\u{928}\u{93e}\u{92e} \u{914}\u{930} \u{938}\u{939}\u{940} \u{92e}\u{94b}\u{92c}\u{93e}\u{907}\u{932} \u{928}\u{902}\u{92c}\u{930} \u{921}\u{93e}\u{932}\u{93f}\u{90f}");return}}show("otp")}
function verifyOTP(){if(document.getElementById("otpbox").value!=="1234"){msg("OTP \u{917}\u{932}\u{924} \u{939}\u{948}\u{964} Demo OTP 1234 \u{939}\u{948}");return}var u={};if(pendingRole==="worker"){u.role="worker";u.name=wn.value;u.phone=wp.value;u.category=wcat.value;u.naka=wnaka.value;u.rate=wrate.value||"1000";u.available=false}else{u.role="contractor";u.name=cn.value;u.phone=cp.value;u.crole=crole.value;u.category=ccat.value;u.naka=cnaka.value;u.qty=qty.value}u.freeHires=0;localStorage.setItem("onlineNakaUser",JSON.stringify(u));openDashboard()}
function openDashboard(){var u=JSON.parse(localStorage.getItem("onlineNakaUser"));if(!u){home();return}show("dashboard");welcome.innerHTML="\u{928}\u{92e}\u{938}\u{94d}\u{924}\u{947}, "+u.name+" \u{1f44b}";if(u.role==="worker"){workerPanel.classList.remove("hidden");contractorPanel.classList.add("hidden");updateAvailability()}else{workerPanel.classList.add("hidden");contractorPanel.classList.remove("hidden")}}
function toggleAvailable(){var u=JSON.parse(localStorage.getItem("onlineNakaUser"));u.available=!u.available;u.availableUntil=u.available?Date.now()+1800000:0;localStorage.setItem("onlineNakaUser",JSON.stringify(u));updateAvailability()}
function updateAvailability(){var u=JSON.parse(localStorage.getItem("onlineNakaUser"));if(u.available&&Date.now()<u.availableUntil){availText.innerHTML="\u{1f7e2} Available \u{2014} \u{905}\u{917}\u{932}\u{947} 30 \u{92e}\u{93f}\u{928}\u{91f} \u{924}\u{915}";availBtn.innerHTML="\u{1f534} \u{905}\u{92d}\u{940} unavailable \u{915}\u{930}\u{947}\u{902}"}else{u.available=false;localStorage.setItem("onlineNakaUser",JSON.stringify(u));availText.innerHTML="\u{1f534} \u{905}\u{92d}\u{940} Available \u{928}\u{939}\u{940}\u{902} \u{939}\u{948}\u{902}";availBtn.innerHTML="\u{1f7e2} \u{906}\u{91c} \u{909}\u{92a}\u{932}\u{92c}\u{94d}\u{927} \u{939}\u{942}\u{901}"}}
function findWorkers(){var cat=findcat.value,naka=findnaka.value,qty=findqty.value;results.innerHTML='<div class="worker"><b>\u{1f477} Available Worker</b><br><span class="badge">'+cat+'</span><span class="badge">\u{1f7e2} Available</span><p>\u{1f4cd} '+naka+'</p><p>\u{1f4cf} 20 KM \u{915}\u{947} \u{905}\u{902}\u{926}\u{930}</p><p>\u{1f4b0} Rate: \u{20b9}1000/day</p><p>\u{1f465} \u{906}\u{935}\u{936}\u{94d}\u{92f}\u{915}\u{924}\u{93e}: '+qty+' \u{906}\u{926}\u{92e}\u{940}</p><button class="success" onclick="hire()">\u{1f91d} Hiring Request \u{92d}\u{947}\u{91c}\u{947}\u{902}</button></div>'}
function hire(){var u=JSON.parse(localStorage.getItem("onlineNakaUser"));u.freeHires=(u.freeHires||0)+1;localStorage.setItem("onlineNakaUser",JSON.stringify(u));var h=JSON.parse(localStorage.getItem("onlineNakaHistory")||"[]");h.push({date:new Date().toLocaleString("en-IN"),contractor:u.role==="contractor"?u.name:"Demo Contractor",worker:u.role==="worker"?u.name:"Available Worker",category:u.category||findcat.value,naka:u.naka||findnaka.value});localStorage.setItem("onlineNakaHistory",JSON.stringify(h));msg(u.freeHires<=15?"\u{2705} Hiring Confirmed \u{2014} Free #"+u.freeHires:"\u{2705} Hiring Confirmed \u{2014} Worker \u{20b9}20 + Contractor \u{20b9}30")}
function historyBox(){show("history");var h=JSON.parse(localStorage.getItem("onlineNakaHistory")||"[]");hist.innerHTML=h.length?h.slice().reverse().map((a,i)=>'<div class="worker"><b>Hiring '+(h.length-i)+'</b><br>\u{1f4c5} '+a.date+'<br>\u{1f477} '+a.worker+'<br>\u{1f3d7}\u{fe0f} '+a.contractor+'<br>\u{1f527} '+a.category+'<br>\u{1f4cd} '+a.naka+'</div>').join(""):"<p>\u{905}\u{92d}\u{940} \u{915}\u{94b}\u{908} Work History \u{928}\u{939}\u{940}\u{902} \u{939}\u{948}\u{964}</p>"}
function backDash(){openDashboard()}function logout(){localStorage.removeItem("onlineNakaUser");show("home")}if(localStorage.getItem("onlineNakaUser"))openDashboard();
</script></body></html>`,{headers:{"content-type":"text/html;charset=UTF-8"}}, { headers: { "content-type": "text/html; charset=UTF-8" } })
  }
};
