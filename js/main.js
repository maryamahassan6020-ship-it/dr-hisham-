// ===== EDIT THESE DETAILS =====
var PHONE = "20XXXXXXXXXX"; // clinic mobile with country code, no + or spaces (WhatsApp and SMS booking)
var PHONE_SHOWN = "";       // shown in the top bar and footer, e.g. "0100 000 0000"
var CLINICS = [
  {
    en: "Top Clinics",
    ar: "عيادات توب",
    start: 15,
    end: 17,
    pen: "El Nozha St. at Nasr Road, El Sa’a Square, Rabaa Investment Buildings, Building 13, above Koshary El Tahrir",
    par: "شارع النزهة مع طريق النصر، ميدان الساعة، عمارات رابعة الاستثماري، عمارة رقم 13، فوق كشري التحرير"
  },
  {
    en: "Saqr Quraish Clinics",
    ar: "عيادات صقر قريش",
    start: 19,
    end: 23,
    pen: "Nasr City, next to the mosque",
    par: "مدينة نصر، بجوار المسجد"
  }
];
var SLOT_MIN = 30;
// ==============================

var T = {
  en: {
    brand: "Dr. Hisham Awad",
    n1: "Home",
    n2: "The doctor",
    n3: "Services",
    n4: "Book & contact",
    book: "Book a visit",
    welcome: "Welcome to the clinics of Dr. Hisham Awad",
    h1: "Where science meets care",
    lead: "Consultant of internal medicine. Accurate diagnosis and a complete treatment plan, so you feel comfortable and confident from the moment you arrive.",
    careH: "How we care for our patients",
    careP1: "We start by listening, and we give each patient enough time to explain their condition. Then we do a careful clinical examination and review earlier tests to reach the most accurate diagnosis.",
    careP2: "We follow the latest medical guidance and check how well each patient responds to treatment, so the care is based on trust and attention.",
    docH: "Meet the doctor",
    role: "Consultant of internal medicine",
    cred: [
      "MSc, Faculty of Medicine, Qasr Al-Ainy",
      "Diploma, University of Aberdeen, Scotland",
      "Saudi specialization: Internal Medicine",
      "Consultant, Saba Medical Group (KSA)"
    ],
    whyH: "Why choose Dr. Hisham",
    why: [
      [
        "Experience that supports accurate diagnosis",
        "A consultant with training in Egypt, Scotland and Saudi Arabia, covering digestive, heart, chest, diabetes and weight problems."
      ],
      [
        "Care for each patient",
        "Every case gets individual attention, from the first diagnosis until treatment is complete."
      ],
      [
        "Two easy-to-reach clinics",
        "Clinics in Nasr City with afternoon and evening sessions, so you can pick a time that suits you."
      ]
    ],
    svcH: "Medical services",
    svcS: "Dr. Hisham treats these conditions.",
    svc: [
      "Digestive system and liver diseases",
      "Heart and blood vessel diseases",
      "Chest allergy",
      "Diabetes",
      "Endocrine (glands) problems",
      "Obesity and underweight"
    ],
    bookT: "Book an appointment",
    bookS: "Choose the clinic, day and time. Your request opens in WhatsApp or SMS.",
    lName: "Your name",
    lPhone: "Phone number",
    lClinic: "Clinic",
    lDate: "Date",
    lTime: "Time",
    lReason: "Reason for visit (optional)",
    sendWa: "Send by WhatsApp",
    sendSms: "Send by SMS",
    note: "The clinic will confirm your time by message.",
    eFill: "Please enter your name, phone number, and date.",
    ePhone: "Please enter a valid phone number.",
    eSetup: "Booking is not connected yet. Please add the clinic phone number.",
    ok: "Your request is ready. Press send in the app to finish.",
    foot: "Dr. Hisham Awad · Consultant of internal medicine",
    phone: "Phone: ",
    map: "Directions",
    hours: "Hours: ",
    m: ["Booking request for Dr. Hisham Awad", "Name", "Phone", "Clinic", "Date", "Time", "Reason"],
    am: "AM",
    pm: "PM",
    btn: "العربية"
  },
  ar: {
    brand: "د. هشام عوض",
    n1: "الصفحة الرئيسية",
    n2: "عن الطبيب",
    n3: "خدماتنا الطبية",
    n4: "الحجز والتواصل",
    book: "حجز موعد",
    welcome: "أهلاً بك في عيادات د. هشام عوض",
    h1: "حيث يلتقي العلم بالرعاية",
    lead: "استشاري الأمراض الباطنة. تشخيص دقيق وخطة علاج متكاملة، لتشعر بالراحة والثقة من لحظة دخولك العيادة.",
    careH: "كيف نعتني بمرضانا",
    careP1: "نبدأ بالاستماع الجيد للمريض ومنحه الوقت الكافي لشرح حالته، ثم الفحص السريري الدقيق ومراجعة الفحوصات السابقة للوصول إلى أدق تشخيص.",
    careP2: "نتبع أحدث التوصيات الطبية ونتابع مدى استجابة كل مريض للعلاج، لتقوم الرعاية على الثقة والاهتمام.",
    docH: "تعرف على الطبيب",
    role: "استشاري الأمراض الباطنة",
    cred: [
      "ماجستير، كلية الطب قصر العيني",
      "دبلوم جامعة أبردين، اسكتلندا",
      "تصنيف التخصصات السعودية: الباطنة",
      "استشاري، مجموعة سابا الطبية (السعودية)"
    ],
    whyH: "لماذا د. هشام عوض",
    why: [
      [
        "خبرة تضمن دقة التشخيص",
        "استشاري تدرب في مصر واسكتلندا والسعودية، ويعالج أمراض الجهاز الهضمي والقلب والصدر والسكر والوزن."
      ],
      [
        "رعاية مخصصة لكل مريض",
        "كل حالة تحصل على اهتمام خاص، من التشخيص الأول حتى اكتمال العلاج."
      ],
      [
        "عيادتان سهلتا الوصول",
        "عيادات في مدينة نصر بمواعيد بعد العصر وفي المساء، لتختار الوقت المناسب لك."
      ]
    ],
    svcH: "خدماتنا الطبية",
    svcS: "يعالج د. هشام هذه الحالات.",
    svc: [
      "أمراض الجهاز الهضمي والكبد",
      "أمراض القلب والأوعية الدموية",
      "حساسية الصدر",
      "مرض السكر",
      "مشاكل الغدد الصماء",
      "السمنة والنحافة"
    ],
    bookT: "احجز موعدك",
    bookS: "اختر العيادة واليوم والوقت. سيفتح طلبك في واتساب أو رسالة SMS.",
    lName: "الاسم",
    lPhone: "رقم الهاتف",
    lClinic: "العيادة",
    lDate: "التاريخ",
    lTime: "الوقت",
    lReason: "سبب الزيارة (اختياري)",
    sendWa: "إرسال عبر واتساب",
    sendSms: "إرسال برسالة SMS",
    note: "ستؤكد العيادة الموعد برسالة.",
    eFill: "من فضلك اكتب الاسم ورقم الهاتف والتاريخ.",
    ePhone: "من فضلك اكتب رقم هاتف صحيحا.",
    eSetup: "الحجز غير مفعل بعد. يجب إضافة رقم هاتف العيادة.",
    ok: "طلبك جاهز. اضغط إرسال في التطبيق لإنهاء الحجز.",
    foot: "د. هشام عوض · استشاري الأمراض الباطنة",
    phone: "الهاتف: ",
    map: "الاتجاهات",
    hours: "المواعيد: ",
    m: ["طلب حجز عند د. هشام عوض", "الاسم", "الهاتف", "العيادة", "التاريخ", "الوقت", "السبب"],
    am: "ص",
    pm: "م",
    btn: "English"
  }
};

var lang = "ar";
try {
  var sv = localStorage.getItem("lang");
  if (sv === "ar" || sv === "en") lang = sv;
} catch (e) {}

function pad(n) {
  return (n < 10 ? "0" : "") + n;
}

function lab(h, m) {
  var H = h % 24;
  var x = H % 12;
  if (x === 0) x = 12;
  return x + ":" + pad(m) + " " + (H >= 12 ? T[lang].pm : T[lang].am);
}

var $ = function (id) {
  return document.getElementById(id);
};

var cs = $("c");
var ts = $("t");
var ds = $("d");
var msg = $("msg");

var CHECK_ICON =
  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';

var PIN_ICON =
  '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>';

var SVC_ICONS = [
  // Digestive system and liver
  '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v3"/><path d="M9 6c-2.5 0-4 2-4 5 0 3.5 2.5 6 6.5 6h1.5a4 4 0 0 0 0-8H11"/><path d="M12 17v4"/></svg>',
  // Heart and blood vessels
  '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l1.5-2 2 4 1.5-2h6.28"/></svg>',
  // Chest allergy / respiratory
  '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v10"/><path d="M12 10 8 13c-2.5 1.8-4 4-4 6 0 1.2 1 2 2.2 2H9c1.5 0 2.5-1 3-2.5"/><path d="M12 10l4 3c2.5 1.8 4 4 4 6 0 1.2-1 2-2.2 2H15c-1.5 0-2.5-1-3-2.5"/></svg>',
  // Diabetes
  '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/><path d="M12 11v4M10 13h4"/></svg>',
  // Endocrine (glands)
  '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/></svg>',
  // Obesity and underweight
  '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="4"/><path d="M8 10a4 4 0 0 1 8 0"/><path d="M12 10l2-2"/></svg>'
];

function fillTimes(keep) {
  var c = CLINICS[cs.value];
  var old = keep ? ts.selectedIndex : 0;
  ts.innerHTML = "";
  for (var m = c.start * 60; m < c.end * 60; m += SLOT_MIN) {
    var s = lab(Math.floor(m / 60), m % 60);
    ts.add(new Option(s, s));
  }
  if (old >= 0 && old < ts.options.length) ts.selectedIndex = old;
}

function render() {
  var t = T[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i]").forEach(function (e) {
    e.textContent = t[e.getAttribute("data-i")];
  });

  $("lang").textContent = t.btn;

  if ($("topInfo")) {
    $("topInfo").innerHTML =
      CLINICS.map(function (c) {
        return (
          '<span class="topbar-item">' +
          c[lang] +
          " (" +
          lab(c.start, 0) +
          " – " +
          lab(c.end, 0) +
          ")</span>"
        );
      }).join('<span class="topbar-sep" aria-hidden="true">|</span>') +
      (PHONE_SHOWN
        ? '<span class="topbar-sep" aria-hidden="true">|</span><a class="topbar-item" dir="ltr" href="tel:' +
          PHONE_SHOWN.replace(/\s/g, "") +
          '">' +
          PHONE_SHOWN +
          "</a>"
        : "");
  }

  if ($("heroMeta")) {
    $("heroMeta").innerHTML = CLINICS.map(function (c) {
      return (
        '<div class="hero-meta-item"><strong>' +
        c[lang] +
        "</strong><span>" +
        t.hours +
        lab(c.start, 0) +
        " – " +
        lab(c.end, 0) +
        "</span></div>"
      );
    }).join("");
  }

  $("cred").innerHTML = t.cred
    .map(function (x) {
      return "<li>" + CHECK_ICON + "<span>" + x + "</span></li>";
    })
    .join("");

  $("why").innerHTML = t.why
    .map(function (x, i) {
      return (
        '<div class="card"><span class="card-num">0' +
        (i + 1) +
        "</span><h3>" +
        x[0] +
        "</h3><p>" +
        x[1] +
        "</p></div>"
      );
    })
    .join("");

  $("svc").innerHTML = t.svc
    .map(function (x, i) {
      return (
        '<div class="card"><div class="ic">' +
        (SVC_ICONS[i] || SVC_ICONS[0]) +
        "</div><h3>" +
        x +
        "</h3></div>"
      );
    })
    .join("");

  if ($("clinicCards")) {
    $("clinicCards").innerHTML = CLINICS.map(function (c) {
      var addr = c[lang === "ar" ? "par" : "pen"];
      return (
        '<div class="clinic-card"><h3>' +
        c[lang] +
        "</h3><p>" +
        addr +
        '</p><p class="clinic-hours">' +
        t.hours +
        lab(c.start, 0) +
        " – " +
        lab(c.end, 0) +
        '</p><a class="clinic-map-link" href="https://www.google.com/maps/search/?api=1&query=' +
        encodeURIComponent(c.par) +
        '" target="_blank" rel="noopener">' +
        PIN_ICON +
        "<span>" +
        t.map +
        "</span></a></div>"
      );
    }).join("");
  }

  $("clinics").innerHTML = CLINICS.map(function (c) {
    var a = c[lang === "ar" ? "par" : "pen"];
    return (
      "<div><h3>" +
      c[lang] +
      "</h3><p>" +
      a +
      "</p><p>" +
      t.hours +
      lab(c.start, 0) +
      " – " +
      lab(c.end, 0) +
      '</p><div class="links"><a href="https://www.google.com/maps/search/?api=1&query=' +
      encodeURIComponent(c.par) +
      '" target="_blank" rel="noopener">' +
      t.map +
      "</a>" +
      (PHONE_SHOWN
        ? '<a dir="ltr" href="tel:' + PHONE_SHOWN.replace(/\s/g, "") + '">' + PHONE_SHOWN + "</a>"
        : "") +
      "</div></div>"
    );
  }).join("");

  var ci = cs.value || 0;
  cs.innerHTML = "";
  CLINICS.forEach(function (c, i) {
    cs.add(new Option(c[lang] + " (" + lab(c.start, 0) + " – " + lab(c.end, 0) + ")", i));
  });
  cs.value = ci;
  fillTimes(true);

  document.title = t.brand;
  msg.textContent = "";
}

$("lang").addEventListener("click", function () {
  lang = lang === "en" ? "ar" : "en";
  try {
    localStorage.setItem("lang", lang);
  } catch (e) {}
  render();
});

cs.addEventListener("change", function () {
  fillTimes(false);
});

var now = new Date();
ds.min = now.getFullYear() + "-" + pad(now.getMonth() + 1) + "-" + pad(now.getDate());
render();

document.querySelectorAll("[data-ch]").forEach(function (b) {
  b.addEventListener("click", function () {
    var t = T[lang];
    msg.style.color = "var(--red)";
    msg.textContent = "";
    var n = $("n").value.trim();
    var p = $("p").value.trim();
    var r = $("r").value.trim();
    if (!n || !p || !ds.value) {
      msg.textContent = t.eFill;
      return;
    }
    if (!/^\+?[0-9\s-]{8,}$/.test(p)) {
      msg.textContent = t.ePhone;
      return;
    }
    if (/X/.test(PHONE)) {
      msg.textContent = t.eSetup;
      return;
    }
    var c = CLINICS[cs.value];
    var m = t.m;
    var text =
      m[0] +
      "\n" +
      m[1] +
      ": " +
      n +
      "\n" +
      m[2] +
      ": " +
      p +
      "\n" +
      m[3] +
      ": " +
      c[lang] +
      "\n" +
      m[4] +
      ": " +
      ds.value +
      "\n" +
      m[5] +
      ": " +
      ts.value +
      (r ? "\n" + m[6] + ": " + r : "");
    var url =
      b.getAttribute("data-ch") === "wa"
        ? "https://wa.me/" + PHONE + "?text=" + encodeURIComponent(text)
        : "sms:+" + PHONE + "?&body=" + encodeURIComponent(text);
    var a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
    msg.style.color = "var(--blue)";
    msg.textContent = t.ok;
  });
});
