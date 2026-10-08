/* =========================================================
   ONLINE NAKA — NEW REPLACEMENT
   PART 1 / 3
   ========================================================= */

const APP = "Online Naka";

const FREE_HIRINGS = 15;
const WORKER_FEE = 20;
const CONTRACTOR_FEE = 30;

const AVAILABILITY_MS = 30 * 60 * 1000;

const ADMIN = "123456";

const LANGUAGES = ["hi", "en", "mr", "gu"];

const NAKAS = [
  "गुलाब सन डेरी",
  "राजधानी नाका"
];

const CATEGORIES = [
  "Labour",
  "Rajmistri",
  "Tile Fitter",
  "Plumber",
  "Electrician",
  "Painter",
  "Carpenter",
  "Waterproofing",
  "Sutar Fitter",
  "Other"
];

const DEFAULT_RATES = {
  "Labour": 1000,
  "Rajmistri": 1700,
  "Tile Fitter": 1500,
  "Plumber": 1500,
  "Electrician": 1500,
  "Painter": 1400,
  "Carpenter": 1500,
  "Waterproofing": 1500,
  "Sutar Fitter": 1500,
  "Other": 1300
};

const TEXT = {
  hi: {
    title: "Online Naka",
    language: "भाषा चुनें",
    mobile: "मोबाइल नंबर",
    otp: "OTP",
    verify: "Verify",
    location: "Location",
    name: "आपका नाम",
    naka: "नाका चुनें",
    work: "मुझे काम चाहिए",
    people: "मुझे आदमी चाहिए",
    category: "काम चुनें",
    available: "मैं 30 मिनट के लिए उपलब्ध हूँ",
    availableNow: "अभी उपलब्ध • 30 मिनट",
    hire: "Hire करें",
    apply: "Apply करें",
    accept: "Accept",
    reject: "Reject",
    requests: "Hiring Requests",
    history: "Hiring History",
    switchMode: "Mode बदलें",
    save: "Save",
    next: "आगे बढ़ें",
    back: "वापस",
    owner: "Owner/Admin",
    rate: "दिहाड़ी Rate",
    saveRate: "Rate Save करें",
    free: "पहली 15 Successful Hirings Free",
    fee: "15 के बाद Worker ₹20 + Contractor ₹30",
    loading: "लोड हो रहा है..."
  },

  en: {
    title: "Online Naka",
    language: "Select Language",
    mobile: "Mobile Number",
    otp: "OTP",
    verify: "Verify",
    location: "Location",
    name: "Your Name",
    naka: "Choose Naka",
    work: "I Need Work",
    people: "I Need Workers",
    category: "Choose Work",
    available: "I am available for 30 minutes",
    availableNow: "Available Now • 30 min",
    hire: "Hire",
    apply: "Apply",
    accept: "Accept",
    reject: "Reject",
    requests: "Hiring Requests",
    history: "Hiring History",
    switchMode: "Switch Mode",
    save: "Save",
    next: "Next",
    back: "Back",
    owner: "Owner/Admin",
    rate: "Daily Rate",
    saveRate: "Save Rate",
    free: "First 15 Successful Hirings Free",
    fee: "After 15: Worker ₹20 + Contractor ₹30",
    loading: "Loading..."
  },

  mr: {
    title: "Online Naka",
    language: "भाषा निवडा",
    mobile: "मोबाईल नंबर",
    otp: "OTP",
    verify: "Verify",
    location: "Location",
    name: "तुमचे नाव",
    naka: "नाका निवडा",
    work: "मला काम पाहिजे",
    people: "मला कामगार पाहिजे",
    category: "काम निवडा",
    available: "मी 30 मिनिटांसाठी उपलब्ध आहे",
    availableNow: "आत्ता उपलब्ध • 30 मिनिटे",
    hire: "Hire",
    apply: "Apply",
    accept: "Accept",
    reject: "Reject",
    requests: "Hiring Requests",
    history: "Hiring History",
    switchMode: "Mode बदला",
    save: "Save",
    next: "पुढे",
    back: "मागे",
    owner: "Owner/Admin",
    rate: "दैनिक दर",
    saveRate: "दर Save करा",
    free: "पहिल्या 15 Successful Hirings Free",
    fee: "15 नंतर Worker ₹20 + Contractor ₹30",
    loading: "लोड होत आहे..."
  },

  gu: {
    title: "Online Naka",
    language: "ભાષા પસંદ કરો",
    mobile: "મોબાઇલ નંબર",
    otp: "OTP",
    verify: "Verify",
    location: "Location",
    name: "તમારું નામ",
    naka: "નાકા પસંદ કરો",
    work: "મને કામ જોઈએ",
    people: "મને માણસ જોઈએ",
    category: "કામ પસંદ કરો",
    available: "હું 30 મિનિટ માટે ઉપલબ્ધ છું",
    availableNow: "હમણાં ઉપલબ્ધ • 30 મિનિટ",
    hire: "Hire",
    apply: "Apply",
    accept: "Accept",
    reject: "Reject",
    requests: "Hiring Requests",
    history: "Hiring History",
    switchMode: "Mode બદલો",
    save: "Save",
    next: "આગળ",
    back: "પાછળ",
    owner: "Owner/Admin",
    rate: "દૈનિક દર",
    saveRate: "દર Save કરો",
    free: "પ્રથમ 15 Successful Hirings Free",
    fee: "15 પછી Worker ₹20 + Contractor ₹30",
    loading: "લોડ થઈ રહ્યું છે..."
  }
};

let state = {
  language: "hi",
  user: null,
  mode: null,
  naka: "",
  category: "",
  availableUntil: 0,
  rates: { ...DEFAULT_RATES }
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=UTF-8"
    }
  });
}

function clean(value, max = 200) {
  return String(value ?? "")
    .trim()
    .slice(0, max);
}

function now() {
  return Date.now();
}

function isAvailable(worker) {
  return !!worker &&
    worker.available === true &&
    Number(worker.availableUntil || 0) > now();
}

function makeId(prefix = "id") {
  return prefix + "_" +
    Date.now().toString(36) + "_" +
    Math.random().toString(36).slice(2, 9);
}

function feeInfo(successfulHirings) {
  const count = Number(successfulHirings || 0);

  if (count < FREE_HIRINGS) {
    return {
      free: true,
      workerFee: 0,
      contractorFee: 0,
      remaining: FREE_HIRINGS - count
    };
  }

  return {
    free: false,
    workerFee: WORKER_FEE,
    contractorFee: CONTRACTOR_FEE,
    remaining: 0
  };
}

function rateFor(category, rates) {
  if (rates && rates[category] != null) {
    return Number(rates[category]);
  }

  return Number(DEFAULT_RATES[category] || 0);
}

function normalizeUser(user) {
  if (!user) return null;

  return {
    id: clean(user.id, 100),
    name: clean(user.name, 100),
    mobile: clean(user.mobile, 30),
    location: clean(user.location, 150),
    naka: clean(user.naka, 100),
    category: clean(user.category, 100),
    mode: user.mode === "contractor"
      ? "contractor"
      : "worker",
    available: user.available === true,
    availableUntil: Number(user.availableUntil || 0)
  };
}

function validateLanguage(lang) {
  return LANGUAGES.includes(lang);
}

function validateNaka(naka) {
  return NAKAS.includes(naka);
}

function validateCategory(category) {
  return CATEGORIES.includes(category);
}

function publicWorker(worker, rates) {
  if (!worker) return null;

  return {
    id: worker.id,
    name: worker.name,
    naka: worker.naka,
    category: worker.category,
    location: worker.location || "",
    available: isAvailable(worker),
    availableUntil: worker.availableUntil || 0,
    rate: rateFor(worker.category, rates)
  };
}

function publicRequest(request) {
  return {
    id: request.id,
    contractorName: request.contractorName || "",
    workerName: request.workerName || "",
    category: request.category || "",
    naka: request.naka || "",
    rate: Number(request.rate || 0),
    status: request.status || "Pending",
    createdAt: request.createdAt || 0,
    acceptedAt: request.acceptedAt || 0,
    workerFee: Number(request.workerFee || 0),
    contractorFee: Number(request.contractorFee || 0)
  };
}

async function getConfig(env) {
  let rates = { ...DEFAULT_RATES };

  if (env.ONLINE_NAKA_KV) {
    const saved = await env.ONLINE_NAKA_KV.get(
      "config:rates",
      "json"
    ).catch(() => null);

    if (saved && typeof saved === "object") {
      rates = { ...rates, ...saved };
    }
  }

  return {
    app: APP,
    languages: LANGUAGES,
    nakas: NAKAS,
    categories: CATEGORIES,
    freeHirings: FREE_HIRINGS,
    workerFee: WORKER_FEE,
    contractorFee: CONTRACTOR_FEE,
    availabilityMinutes: 30,
    rates
  };
    }/* =========================================================
   ONLINE NAKA — NEW REPLACEMENT
   PART 2 / 3
   ========================================================= */

async function getUsers(env) {
  if (!env.ONLINE_NAKA_KV) return [];

  const users = await env.ONLINE_NAKA_KV.get(
    "users",
    "json"
  ).catch(() => []);

  return Array.isArray(users) ? users : [];
}

async function saveUsers(env, users) {
  if (!env.ONLINE_NAKA_KV) return false;

  await env.ONLINE_NAKA_KV.put(
    "users",
    JSON.stringify(users)
  );

  return true;
}

async function getRequests(env) {
  if (!env.ONLINE_NAKA_KV) return [];

  const requests = await env.ONLINE_NAKA_KV.get(
    "requests",
    "json"
  ).catch(() => []);

  return Array.isArray(requests) ? requests : [];
}

async function saveRequests(env, requests) {
  if (!env.ONLINE_NAKA_KV) return false;

  await env.ONLINE_NAKA_KV.put(
    "requests",
    JSON.stringify(requests)
  );

  return true;
}

async function getUser(env, id) {
  const users = await getUsers(env);

  return users.find(
    user => String(user.id) === String(id)
  ) || null;
}

async function saveConfigRates(env, rates) {
  if (!env.ONLINE_NAKA_KV) return false;

  await env.ONLINE_NAKA_KV.put(
    "config:rates",
    JSON.stringify(rates)
  );

  return true;
}

async function createUser(env, data) {
  const users = await getUsers(env);

  const mobile = clean(data.mobile, 30);

  let user = users.find(
    item => item.mobile === mobile
  );

  if (user) {
    user.name = clean(data.name, 100);
    user.location = clean(data.location, 150);
    user.naka = validateNaka(data.naka)
      ? data.naka
      : user.naka;

    user.category = validateCategory(data.category)
      ? data.category
      : user.category;

    if (data.mode === "worker" ||
        data.mode === "contractor") {
      user.mode = data.mode;
    }

    await saveUsers(env, users);

    return user;
  }

  user = {
    id: makeId("user"),
    name: clean(data.name, 100),
    mobile,
    location: clean(data.location, 150),
    naka: validateNaka(data.naka)
      ? data.naka
      : NAKAS[0],
    category: validateCategory(data.category)
      ? data.category
      : CATEGORIES[0],
    mode: data.mode === "contractor"
      ? "contractor"
      : "worker",
    available: false,
    availableUntil: 0,
    successfulHirings: 0,
    createdAt: now()
  };

  users.push(user);

  await saveUsers(env, users);

  return user;
}

async function updateUser(env, id, data) {
  const users = await getUsers(env);

  const index = users.findIndex(
    user => String(user.id) === String(id)
  );

  if (index < 0) {
    return null;
  }

  const user = users[index];

  if (data.name !== undefined) {
    user.name = clean(data.name, 100);
  }

  if (data.location !== undefined) {
    user.location = clean(data.location, 150);
  }

  if (data.naka !== undefined &&
      validateNaka(data.naka)) {
    user.naka = data.naka;
  }

  if (data.category !== undefined &&
      validateCategory(data.category)) {
    user.category = data.category;
  }

  if (data.mode === "worker" ||
      data.mode === "contractor") {
    user.mode = data.mode;
  }

  if (data.available === true) {
    user.available = true;
    user.availableUntil = now() + AVAILABILITY_MS;
  }

  if (data.available === false) {
    user.available = false;
    user.availableUntil = 0;
  }

  await saveUsers(env, users);

  return user;
}

async function createHiringRequest(
  env,
  contractor,
  worker
) {
  const requests = await getRequests(env);

  const contractorId = contractor.id;
  const workerId = worker.id;

  const duplicate = requests.find(
    request =>
      request.contractorId === contractorId &&
      request.workerId === workerId &&
      request.status === "Pending"
  );

  if (duplicate) {
    return {
      ok: false,
      error: "A hiring request is already pending."
    };
  }

  const workerFeeInfo =
    feeInfo(worker.successfulHirings);

  const contractorFeeInfo =
    feeInfo(contractor.successfulHirings);

  const request = {
    id: makeId("hire"),
    contractorId,
    workerId,

    contractorName: contractor.name,
    workerName: worker.name,

    category: worker.category,
    naka: worker.naka,

    status: "Pending",

    rate: rateFor(
      worker.category,
      contractor._rates || {}
    ),

    workerFee: workerFeeInfo.workerFee,
    contractorFee: contractorFeeInfo.contractorFee,

    createdAt: now(),
    acceptedAt: 0
  };

  requests.push(request);

  await saveRequests(env, requests);

  return {
    ok: true,
    request: publicRequest(request)
  };
}

async function acceptHiringRequest(
  env,
  requestId,
  workerId
) {
  const requests = await getRequests(env);
  const users = await getUsers(env);

  const request = requests.find(
    item =>
      String(item.id) === String(requestId) &&
      String(item.workerId) === String(workerId)
  );

  if (!request) {
    return {
      ok: false,
      error: "Hiring request not found."
    };
  }

  if (request.status !== "Pending") {
    return {
      ok: false,
      error: "This request is already processed."
    };
  }

  const worker = users.find(
    user => String(user.id) === String(workerId)
  );

  if (!worker) {
    return {
      ok: false,
      error: "Worker not found."
    };
  }

  request.status = "Accepted";
  request.acceptedAt = now();

  worker.successfulHirings =
    Number(worker.successfulHirings || 0) + 1;

  worker.available = false;
  worker.availableUntil = 0;

  const contractor = users.find(
    user =>
      String(user.id) === String(request.contractorId)
  );

  if (contractor) {
    contractor.successfulHirings =
      Number(contractor.successfulHirings || 0) + 1;
  }

  await saveUsers(env, users);
  await saveRequests(env, requests);

  return {
    ok: true,
    request: publicRequest(request)
  };
}

async function rejectHiringRequest(
  env,
  requestId,
  workerId
) {
  const requests = await getRequests(env);

  const request = requests.find(
    item =>
      String(item.id) === String(requestId) &&
      String(item.workerId) === String(workerId)
  );

  if (!request) {
    return {
      ok: false,
      error: "Hiring request not found."
    };
  }

  if (request.status !== "Pending") {
    return {
      ok: false,
      error: "This request is already processed."
    };
  }

  request.status = "Rejected";

  await saveRequests(env, requests);

  return {
    ok: true,
    request: publicRequest(request)
  };
}

async function handleAPI(request, env) {
  const url = new URL(request.url);
  const path = url.pathname;

  if (request.method === "GET" &&
      path === "/api/config") {
    return json(await getConfig(env));
  }

  if (request.method === "POST" &&
      path === "/api/register") {

    const body = await request.json()
      .catch(() => ({}));

    const mobile = clean(body.mobile, 30);

    if (!mobile) {
      return json({
        ok: false,
        error: "Mobile number is required."
      }, 400);
    }

    if (!clean(body.name, 100)) {
      return json({
        ok: false,
        error: "Name is required."
      }, 400);
    }

    if (!validateNaka(body.naka)) {
      return json({
        ok: false,
        error: "Please select a valid Naka."
      }, 400);
    }

    if (!validateCategory(body.category)) {
      return json({
        ok: false,
        error: "Please select a valid work category."
      }, 400);
    }

    const user = await createUser(env, body);

    return json({
      ok: true,
      user: normalizeUser(user)
    });
  }

  if (request.method === "POST" &&
      path === "/api/user/update") {

    const body = await request.json()
      .catch(() => ({}));

    if (!body.id) {
      return json({
        ok: false,
        error: "User ID is required."
      }, 400);
    }

    const user = await updateUser(
      env,
      body.id,
      body
    );

    if (!user) {
      return json({
        ok: false,
        error: "User not found."
      }, 404);
    }

    return json({
      ok: true,
      user: normalizeUser(user)
    });
  }

  if (request.method === "POST" &&
      path === "/api/available") {

    const body = await request.json()
      .catch(() => ({}));

    if (!body.id) {
      return json({
        ok: false,
        error: "User ID is required."
      }, 400);
    }

    const user = await updateUser(
      env,
      body.id,
      {
        available: body.available !== false
      }
    );

    if (!user) {
      return json({
        ok: false,
        error: "User not found."
      }, 404);
    }

    return json({
      ok: true,
      user: normalizeUser(user)
    });
  }

  if (request.method === "GET" &&
      path === "/api/workers") {

    const naka = url.searchParams.get("naka") || "";
    const category =
      url.searchParams.get("category") || "";

    const users = await getUsers(env);
    const config = await getConfig(env);

    const workers = users
      .filter(user => user.mode === "worker")
      .filter(user => !naka || user.naka === naka)
      .filter(user => !category || user.category === category)
      .filter(user => isAvailable(user))
      .map(user =>
        publicWorker(user, config.rates)
      );

    return json({
      ok: true,
      workers
    });
  }

  if (request.method === "POST" &&
      path === "/api/hire") {

    const body = await request.json()
      .catch(() => ({}));

    if (!body.contractorId ||
        !body.workerId) {
      return json({
        ok: false,
        error: "Contractor and worker are required."
      }, 400);
    }

    const contractor =
      await getUser(env, body.contractorId);

    const worker =
      await getUser(env, body.workerId);

    if (!contractor || !worker) {
      return json({
        ok: false,
        error: "User not found."
      }, 404);
    }

    if (contractor.mode !== "contractor") {
      return json({
        ok: false,
        error: "Contractor mode is required."
      }, 403);
    }

    if (worker.mode !== "worker") {
      return json({
        ok: false,
        error: "Selected user is not a worker."
      }, 400);
    }

    if (!isAvailable(worker)) {
      return json({
        ok: false,
        error: "Worker is no longer available."
      }, 400);
    }

    const config = await getConfig(env);

    contractor._rates = config.rates;

    const result =
      await createHiringRequest(
        env,
        contractor,
        worker
      );

    return json(result, result.ok ? 200 : 400);
  }

  if (request.method === "POST" &&
      path === "/api/request/accept") {

    const body = await request.json()
      .catch(() => ({}));

    const result =
      await acceptHiringRequest(
        env,
        body.requestId,
        body.workerId
      );

    return json(
      result,
      result.ok ? 200 : 400
    );
  }

  if (request.method === "POST" &&
      path === "/api/request/reject") {

    const body = await request.json()
      .catch(() => ({}));

    const result =
      await rejectHiringRequest(
        env,
        body.requestId,
        body.workerId
      );

    return json(
      result,
      result.ok ? 200 : 400
    );
  }

  if (request.method === "GET" &&
      path === "/api/requests") {

    const userId =
      url.searchParams.get("userId") || "";

    const mode =
      url.searchParams.get("mode") || "";

    const requests = await getRequests(env);

    let result = requests;

    if (mode === "worker") {
      result = requests.filter(
        item => String(item.workerId) === String(userId)
      );
    }

    if (mode === "contractor") {
      result = requests.filter(
        item =>
          String(item.contractorId) === String(userId)
      );
    }

    return json({
      ok: true,
      requests: result.map(publicRequest)
    });
  }

  if (request.method === "POST" &&
      path === "/api/admin/rate") {

    const body = await request.json()
      .catch(() => ({}));

    if (String(body.password || "") !== ADMIN) {
      return json({
        ok: false,
        error: "Invalid Admin Password."
      }, 403);
    }

    if (!validateCategory(body.category)) {
      return json({
        ok: false,
        error: "Invalid category."
      }, 400);
    }

    const rate = Number(body.rate);

    if (!Number.isFinite(rate) ||
        rate < 0) {
      return json({
        ok: false,
        error: "Invalid rate."
      }, 400);
    }

    const config = await getConfig(env);

    config.rates[body.category] = rate;

    await saveConfigRates(
      env,
      config.rates
    );

    return json({
      ok: true,
      rates: config.rates
    });
  }

  if (request.method === "POST" &&
      path === "/api/admin/rates") {

    const body = await request.json()
      .catch(() => ({}));

    if (String(body.password || "") !== ADMIN) {
      return json({
        ok: false,
        error: "Invalid Admin Password."
      }, 403);
    }

    const config = await getConfig(env);

    return json({
      ok: true,
      rates: config.rates
    });
  }

  return json({
    ok: false,
    error: "API route not found."
  }, 404);
      }/* =========================================================
   ONLINE NAKA — NEW REPLACEMENT
   PART 3 / 3
   ========================================================= */

function pageHTML() {
  return `<!DOCTYPE html>
<html lang="hi">
<head>
<meta charset="UTF-8">
<meta name="viewport"
      content="width=device-width,initial-scale=1.0">

<title>Online Naka</title>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family:
    Arial,
    "Noto Sans Devanagari",
    sans-serif;
  background: #f3f6f9;
  color: #17202a;
}

header {
  background: #111827;
  color: white;
  padding: 18px 16px;
  text-align: center;
  position: sticky;
  top: 0;
  z-index: 10;
}

header h1 {
  margin: 0;
  font-size: 25px;
}

header p {
  margin: 5px 0 0;
  opacity: .85;
  font-size: 13px;
}

.container {
  width: 100%;
  max-width: 520px;
  margin: auto;
  padding: 15px;
}

.card {
  background: white;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 14px;
  box-shadow:
    0 3px 12px rgba(0,0,0,.08);
}

label {
  display: block;
  font-weight: 700;
  margin: 10px 0 6px;
}

input,
select,
button {
  width: 100%;
  min-height: 48px;
  border-radius: 10px;
  border: 1px solid #ccd3da;
  padding: 12px;
  font-size: 16px;
}

input,
select {
  background: white;
}

button {
  border: 0;
  background: #16a34a;
  color: white;
  font-weight: 700;
  margin-top: 10px;
}

button.secondary {
  background: #2563eb;
}

button.dark {
  background: #111827;
}

button.danger {
  background: #dc2626;
}

button.light {
  background: #e5e7eb;
  color: #111827;
}

button:disabled {
  opacity: .5;
}

.hidden {
  display: none !important;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.mode-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.mode-button {
  background: #eef2ff;
  color: #1e3a8a;
  border: 2px solid #dbeafe;
}

.mode-button.active {
  background: #2563eb;
  color: white;
  border-color: #2563eb;
}

.worker-card {
  border: 1px solid #dce3e8;
  border-radius: 14px;
  padding: 14px;
  margin-top: 10px;
  background: #fff;
}

.worker-name {
  font-size: 18px;
  font-weight: 700;
}

.badge {
  display: inline-block;
  padding: 5px 9px;
  border-radius: 20px;
  font-size: 12px;
  margin: 5px 3px 0 0;
  background: #dcfce7;
  color: #166534;
}

.rate {
  font-size: 20px;
  font-weight: 800;
  margin-top: 8px;
}

.notice {
  background: #fff7ed;
  color: #9a3412;
  padding: 12px;
  border-radius: 10px;
  margin-top: 10px;
  font-size: 14px;
}

.success {
  background: #dcfce7;
  color: #166534;
  padding: 12px;
  border-radius: 10px;
}

.error {
  background: #fee2e2;
  color: #991b1b;
  padding: 12px;
  border-radius: 10px;
}

.small {
  font-size: 13px;
  color: #667085;
}

h2 {
  margin-top: 0;
}

hr {
  border: 0;
  border-top: 1px solid #e5e7eb;
  margin: 15px 0;
}

#toast {
  position: fixed;
  left: 15px;
  right: 15px;
  bottom: 18px;
  z-index: 100;
  display: none;
  padding: 13px;
  border-radius: 12px;
  color: white;
  background: #111827;
  text-align: center;
}

footer {
  text-align: center;
  padding: 20px;
  color: #777;
  font-size: 12px;
}
</style>
</head>

<body>

<header>
  <h1 id="appTitle">Online Naka</h1>
  <p>कामगार और Contractor को जोड़ने का आसान तरीका</p>
</header>

<div class="container">

  <div id="message"></div>

  <!-- LANGUAGE -->
  <div class="card">
    <label id="languageLabel">
      भाषा चुनें
    </label>

    <select id="language">
      <option value="hi">हिन्दी</option>
      <option value="en">English</option>
      <option value="mr">मराठी</option>
      <option value="gu">ગુજરાતી</option>
    </select>
  </div>

  <!-- REGISTRATION -->
  <div id="registrationCard" class="card">

    <h2 id="registrationTitle">
      Registration
    </h2>

    <label id="mobileLabel">
      मोबाइल नंबर
    </label>

    <input
      id="mobile"
      type="tel"
      inputmode="numeric"
      maxlength="15"
      placeholder="Mobile Number"
    >

    <label id="nameLabel">
      आपका नाम
    </label>

    <input
      id="name"
      type="text"
      maxlength="100"
      placeholder="Name"
    >

    <label id="locationLabel">
      Location
    </label>

    <input
      id="location"
      type="text"
      maxlength="150"
      placeholder="Location"
    >

    <label id="nakaLabel">
      नाका चुनें
    </label>

    <select id="naka"></select>

    <label id="categoryLabel">
      काम चुनें
    </label>

    <select id="category"></select>

    <label>
      आपका काम / आवश्यकता
    </label>

    <div class="mode-buttons">

      <button
        id="workerMode"
        class="mode-button"
        type="button"
        onclick="chooseMode('worker')">
        मुझे काम चाहिए
      </button>

      <button
        id="contractorMode"
        class="mode-button"
        type="button"
        onclick="chooseMode('contractor')">
        मुझे आदमी चाहिए
      </button>

    </div>

    <button
      class="secondary"
      type="button"
      onclick="registerUser()">
      <span id="registerButton">
        Registration / Save
      </span>
    </button>

    <div class="small" style="margin-top:10px">
      OTP verification सुविधा server configuration
      के अनुसार जोड़ी जा सकती है।
    </div>

  </div>

  <!-- MAIN -->
  <div id="mainCard" class="card hidden">

    <h2 id="welcome"></h2>

    <div class="row">

      <button
        class="dark"
        type="button"
        onclick="switchMode()">
        <span id="switchText">
          Mode बदलें
        </span>
      </button>

      <button
        class="light"
        type="button"
        onclick="logoutUser()">
        Logout
      </button>

    </div>

  </div>

  <!-- WORKER -->
  <div id="workerPanel" class="card hidden">

    <h2>Worker</h2>

    <div id="workerInfo"></div>

    <button
      id="availableButton"
      type="button"
      onclick="setAvailable()">
      मैं 30 मिनट के लिए उपलब्ध हूँ
    </button>

    <div
      id="availabilityStatus"
      class="notice hidden">
    </div>

    <hr>

    <h2 id="workerRequestsTitle">
      Hiring Requests
    </h2>

    <div id="workerRequests"></div>

  </div>

  <!-- CONTRACTOR -->
  <div id="contractorPanel" class="card hidden">

    <h2>Contractor</h2>

    <label id="searchNakaLabel">
      नाका
    </label>

    <select id="searchNaka"></select>

    <label id="searchCategoryLabel">
      काम
    </label>

    <select id="searchCategory"></select>

    <button
      class="secondary"
      type="button"
      onclick="findWorkers()">
      Workers खोजें
    </button>

    <div id="workersList"></div>

    <hr>

    <h2>
      Hiring History
    </h2>

    <div id="contractorRequests"></div>

  </div>

  <!-- ADMIN -->
  <div id="adminPanel" class="card hidden">

    <h2>Owner / Admin</h2>

    <label>
      Admin Password
    </label>

    <input
      id="adminPassword"
      type="password"
      placeholder="Admin Password"
    >

    <button
      class="dark"
      type="button"
      onclick="loadAdminRates()">
      Rates देखें
    </button>

    <div id="adminRates"></div>

  </div>

  <div class="card">
    <div class="notice">
      पहली 15 Successful Hirings Free.<br>
      15 के बाद Worker ₹20 + Contractor ₹30.
    </div>

    <div class="small" style="margin-top:10px">
      Daily Rate केवल Owner/Admin द्वारा नियंत्रित होगा।
    </div>
  </div>

</div>

<footer>
  Online Naka
</footer>

<div id="toast"></div>

<script>
let config = null;

let currentUser = null;

let currentMode = null;

let selectedLanguage = "hi";

const T = {
  hi: {
    language: "भाषा चुनें",
    mobile: "मोबाइल नंबर",
    name: "आपका नाम",
    location: "Location",
    naka: "नाका चुनें",
    category: "काम चुनें",
    work: "मुझे काम चाहिए",
    people: "मुझे आदमी चाहिए",
    available: "मैं 30 मिनट के लिए उपलब्ध हूँ",
    availableNow: "अभी उपलब्ध • 30 मिनट",
    hire: "Hire करें",
    accept: "Accept",
    reject: "Reject",
    requests: "Hiring Requests",
    history: "Hiring History"
  },

  en: {
    language: "Select Language",
    mobile: "Mobile Number",
    name: "Your Name",
    location: "Location",
    naka: "Choose Naka",
    category: "Choose Work",
    work: "I Need Work",
    people: "I Need Workers",
    available: "I am available for 30 minutes",
    availableNow: "Available Now • 30 min",
    hire: "Hire",
    accept: "Accept",
    reject: "Reject",
    requests: "Hiring Requests",
    history: "Hiring History"
  },

  mr: {
    language: "भाषा निवडा",
    mobile: "मोबाईल नंबर",
    name: "तुमचे नाव",
    location: "Location",
    naka: "नाका निवडा",
    category: "काम निवडा",
    work: "मला काम पाहिजे",
    people: "मला कामगार पाहिजे",
    available: "मी 30 मिनिटांसाठी उपलब्ध आहे",
    availableNow: "आत्ता उपलब्ध • 30 मिनिटे",
    hire: "Hire",
    accept: "Accept",
    reject: "Reject",
    requests: "Hiring Requests",
    history: "Hiring History"
  },

  gu: {
    language: "ભાષા પસંદ કરો",
    mobile: "મોબાઇલ નંબર",
    name: "તમારું નામ",
    location: "Location",
    naka: "નાકા પસંદ કરો",
    category: "કામ પસંદ કરો",
    work: "મને કામ જોઈએ",
    people: "મને માણસ જોઈએ",
    available: "હું 30 મિનિટ માટે ઉપલબ્ધ છું",
    availableNow: "હમણાં ઉપલબ્ધ • 30 મિનિટ",
    hire: "Hire",
    accept: "Accept",
    reject: "Reject",
    requests: "Hiring Requests",
    history: "Hiring History"
  }
};

function el(id) {
  return document.getElementById(id);
}

function showMessage(text, type = "success") {
  const box = el("message");

  box.className = type;
  box.textContent = text;

  setTimeout(() => {
    box.className = "";
    box.textContent = "";
  }, 4000);
}

function toast(text) {
  const box = el("toast");

  box.textContent = text;
  box.style.display = "block";

  setTimeout(() => {
    box.style.display = "none";
  }, 2500);
}

async function api(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      "content-type": "application/json",
      ...(options.headers || {})
    }
  });

  return response.json();
}

function fillSelect(select, items) {
  select.innerHTML = "";

  items.forEach(item => {
    const option =
      document.createElement("option");

    option.value = item;
    option.textContent = item;

    select.appendChild(option);
  });
}

function applyLanguage() {
  const t = T[selectedLanguage] || T.hi;

  el("languageLabel").textContent = t.language;
  el("mobileLabel").textContent = t.mobile;
  el("nameLabel").textContent = t.name;
  el("locationLabel").textContent = t.location;
  el("nakaLabel").textContent = t.naka;
  el("categoryLabel").textContent = t.category;

  el("workerMode").textContent = t.work;
  el("contractorMode").textContent = t.people;

  el("availableButton").textContent =
    t.available;

  el("workerRequestsTitle").textContent =
    t.requests;

  el("searchNakaLabel").textContent =
    t.naka;

  el("searchCategoryLabel").textContent =
    t.category;

  el("appTitle").textContent =
    "Online Naka";
}

function chooseMode(mode) {
  currentMode = mode;

  el("workerMode")
    .classList.toggle(
      "active",
      mode === "worker"
    );

  el("contractorMode")
    .classList.toggle(
      "active",
      mode === "contractor"
    );
}

async function registerUser() {
  const mobile =
    el("mobile").value.trim();

  const name =
    el("name").value.trim();

  const location =
    el("location").value.trim();

  const naka =
    el("naka").value;

  const category =
    el("category").value;

  if (!mobile) {
    showMessage(
      "Mobile number डालें।",
      "error"
    );
    return;
  }

  if (!name) {
    showMessage(
      "नाम डालें।",
      "error"
    );
    return;
  }

  if (!currentMode) {
    showMessage(
      "पहले Worker या Contractor चुनें।",
      "error"
    );
    return;
  }

  const result = await api(
    "/api/register",
    {
      method: "POST",
      body: JSON.stringify({
        mobile,
        name,
        location,
        naka,
        category,
        mode: currentMode
      })
    }
  );

  if (!result.ok) {
    showMessage(
      result.error || "Registration failed.",
      "error"
    );
    return;
  }

  currentUser = result.user;

  localStorage.setItem(
    "online_naka_user",
    JSON.stringify(currentUser)
  );

  el("registrationCard")
    .classList.add("hidden");

  el("mainCard")
    .classList.remove("hidden");

  updateMain();

  showMessage(
    "Registration सफल हुआ।",
    "success"
  );
}

function updateMain() {
  if (!currentUser) return;

  currentMode =
    currentUser.mode || "worker";

  el("welcome").textContent =
    currentUser.name +
    " • " +
    currentMode;

  el("workerPanel")
    .classList.toggle(
      "hidden",
      currentMode !== "worker"
    );

  el("contractorPanel")
    .classList.toggle(
      "hidden",
      currentMode !== "contractor"
    );

  el("workerInfo").innerHTML =
    "<b>" +
    escapeHTML(currentUser.name) +
    "</b><br>" +
    escapeHTML(currentUser.category) +
    "<br>" +
    escapeHTML(currentUser.naka);

  if (currentMode === "worker") {
    loadWorkerRequests();
    updateAvailabilityText();
  } else {
    findWorkers();
    loadContractorRequests();
  }
}

async function setAvailable() {
  if (!currentUser) return;

  const result = await api(
    "/api/available",
    {
      method: "POST",
      body: JSON.stringify({
        id: currentUser.id,
        available: true
      })
    }
  );

  if (!result.ok) {
    showMessage(
      result.error || "Unable to update availability.",
      "error"
    );
    return;
  }

  currentUser = result.user;

  localStorage.setItem(
    "online_naka_user",
    JSON.stringify(currentUser)
  );

  updateAvailabilityText();

  toast(
    T[selectedLanguage].availableNow
  );
}

function updateAvailabilityText() {
  const box = el("availabilityStatus");

  if (!currentUser) return;

  if (
    currentUser.available &&
    Number(currentUser.availableUntil) > Date.now()
  ) {
    const remaining =
      Math.max(
        0,
        Math.ceil(
          (
            Number(currentUser.availableUntil) -
            Date.now()
          ) / 60000
        )
      );

    box.textContent =
      "आप अभी उपलब्ध हैं • " +
      remaining +
      " मिनट बाकी";

    box.classList.remove("hidden");

    setTimeout(
      updateAvailabilityText,
      30000
    );

  } else {
    box.textContent = "";
    box.classList.add("hidden");
  }
}

async function findWorkers() {
  if (!currentUser) return;

  const naka =
    el("searchNaka").value;

  const category =
    el("searchCategory").value;

  const query =
    "/api/workers?naka=" +
    encodeURIComponent(naka) +
    "&category=" +
    encodeURIComponent(category);

  const result = await api(query);

  const list = el("workersList");

  list.innerHTML = "";

  if (!result.ok ||
      !result.workers ||
      result.workers.length === 0) {

    list.innerHTML =
      '<div class="notice">' +
      'अभी कोई उपलब्ध worker नहीं मिला।' +
      '</div>';

    return;
  }

  result.workers.forEach(worker => {

    const div =
      document.createElement("div");

    div.className = "worker-card";

    div.innerHTML =
      '<div class="worker-name">' +
      escapeHTML(worker.name) +
      '</div>' +

      '<span class="badge">' +
      escapeHTML(worker.category) +
      '</span>' +

      '<span class="badge">' +
      escapeHTML(worker.naka) +
      '</span>' +

      '<div class="small">' +
      escapeHTML(worker.location || "") +
      '</div>' +

      '<div class="rate">' +
      "₹" +
      Number(worker.rate || 0) +
      " / day" +
      '</div>' +

      '<button class="secondary" ' +
      'onclick="hireWorker(' +
      JSON.stringify(worker.id) +
      ')">' +
      (T[selectedLanguage].hire) +
      '</button>';

    list.appendChild(div);
  });
}

async function hireWorker(workerId) {
  if (!currentUser) return;

  const result = await api(
    "/api/hire",
    {
      method: "POST",
      body: JSON.stringify({
        contractorId: currentUser.id,
        workerId
      })
    }
  );

  if (!result.ok) {
    showMessage(
      result.error || "Hire request failed.",
      "error"
    );
    return;
  }

  toast(
    "Hiring request भेज दिया गया।"
  );

  loadContractorRequests();
}

async function loadWorkerRequests() {
  if (!currentUser) return;

  const result = await api(
    "/api/requests?userId=" +
    encodeURIComponent(currentUser.id) +
    "&mode=worker"
  );

  const box =
    el("workerRequests");

  box.innerHTML = "";

  if (
    !result.ok ||
    !result.requests ||
    result.requests.length === 0
  ) {
    box.innerHTML =
      '<div class="small">' +
      'कोई hiring request नहीं है।' +
      '</div>';
    return;
  }

  result.requests.forEach(request => {

    const div =
      document.createElement("div");

    div.className =
      "worker-card";

    let buttons = "";

    if (request.status === "Pending") {

      buttons =
        '<button class="secondary" ' +
        'onclick="acceptRequest(' +
        JSON.stringify(request.id) +
        ')">' +
        T[selectedLanguage].accept +
        '</button>' +

        '<button class="danger" ' +
        'onclick="rejectRequest(' +
        JSON.stringify(request.id) +
        ')">' +
        T[selectedLanguage].reject +
        '</button>';
    }

    div.innerHTML =
      "<b>" +
      escapeHTML(request.contractorName) +
      "</b><br>" +

      escapeHTML(request.category) +
      "<br>" +

      "नाका: " +
      escapeHTML(request.naka) +
      "<br>" +

      "Rate: ₹" +
      Number(request.rate || 0) +
      "<br>" +

      "Status: <b>" +
      escapeHTML(request.status) +
      "</b>" +

      buttons;

    box.appendChild(div);
  });
}

async function acceptRequest(requestId) {
  if (!currentUser) return;

  const result = await api(
    "/api/request/accept",
    {
      method: "POST",
      body: JSON.stringify({
        requestId,
        workerId: currentUser.id
      })
    }
  );

  if (!result.ok) {
    showMessage(
      result.error || "Accept failed.",
      "error"
    );
    return;
  }

  currentUser.available = false;
  currentUser.availableUntil = 0;

  localStorage.setItem(
    "online_naka_user",
    JSON.stringify(currentUser)
  );

  toast("Hiring accepted.");

  loadWorkerRequests();
  updateAvailabilityText();
}

async function rejectRequest(requestId) {
  if (!currentUser) return;

  const result = await api(
    "/api/request/reject",
    {
      method: "POST",
      body: JSON.stringify({
        requestId,
        workerId: currentUser.id
      })
    }
  );

  if (!result.ok) {
    showMessage(
      result.error || "Reject failed.",
      "error"
    );
    return;
  }

  toast("Request rejected.");

  loadWorkerRequests();
}

async function loadContractorRequests() {
  if (!currentUser) return;

  const result = await api(
    "/api/requests?userId=" +
    encodeURIComponent(currentUser.id) +
    "&mode=contractor"
  );

  const box =
    el("contractorRequests");

  box.innerHTML = "";

  if (
    !result.ok ||
    !result.requests ||
    result.requests.length === 0
  ) {
    box.innerHTML =
      '<div class="small">' +
      'अभी कोई hiring history नहीं है।' +
      '</div>';
    return;
  }

  result.requests.forEach(request => {

    const div =
      document.createElement("div");

    div.className =
      "worker-card";

    div.innerHTML =
      "<b>" +
      escapeHTML(request.workerName) +
      "</b><br>" +

      escapeHTML(request.category) +
      "<br>" +

      "नाका: " +
      escapeHTML(request.naka) +
      "<br>" +

      "Rate: ₹" +
      Number(request.rate || 0) +
      "<br>" +

      "Status: <b>" +
      escapeHTML(request.status) +
      "</b>";

    box.appendChild(div);
  });
}

function switchMode() {
  if (!currentUser) return;

  currentMode =
    currentMode === "worker"
      ? "contractor"
      : "worker";

  chooseMode(currentMode);

  }
 
