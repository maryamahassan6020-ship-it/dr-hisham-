import React, { useEffect, useMemo, useState } from 'react';
import {
  Activity,
  Check,
  Clock,
  Droplets,
  Globe,
  HeartPulse,
  MapPin,
  Plus,
  Scale,
  Stethoscope,
  Wind,
} from 'lucide-react';

type Lang = 'ar' | 'en';

interface ClinicInfo {
  en: string;
  ar: string;
  start: number;
  end: number;
  pen: string;
  par: string;
}

const PHONE: string = '20XXXXXXXXXX';
const PHONE_SHOWN: string = '';
const SLOT_MIN = 30;

const DOCTOR_PORTRAIT =
  'data:image/jpeg;base64,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';

const CLINICS: ClinicInfo[] = [
  {
    en: 'Top Clinics',
    ar: 'عيادات توب',
    start: 15,
    end: 17,
    pen: 'El Nozha St. at Nasr Road, El Sa’a Square, Rabaa Investment Buildings, Building 13, above Koshary El Tahrir',
    par: 'شارع النزهة مع طريق النصر، ميدان الساعة، عمارات رابعة الاستثماري، عمارة رقم 13، فوق كشري التحرير',
  },
  {
    en: 'Saqr Quraish Clinics',
    ar: 'عيادات صقر قريش',
    start: 19,
    end: 23,
    pen: 'Nasr City, next to the mosque',
    par: 'مدينة نصر، بجوار المسجد',
  },
];

const COPY = {
  en: {
    brand: 'Dr. Hisham Awad',
    n1: 'Home',
    n2: 'The doctor',
    n3: 'Services',
    n4: 'Book & contact',
    book: 'Book a visit',
    welcome: 'Welcome to the clinics of Dr. Hisham Awad',
    h1: 'Where science meets care',
    lead: 'Consultant of internal medicine. Accurate diagnosis and a complete treatment plan, so you feel comfortable and confident from the moment you arrive.',
    careH: 'How we care for our patients',
    careP1:
      'We start by listening, and we give each patient enough time to explain their condition. Then we do a careful clinical examination and review earlier tests to reach the most accurate diagnosis.',
    careP2:
      'We follow the latest medical guidance and check how well each patient responds to treatment, so the care is based on trust and attention.',
    docH: 'Meet the doctor',
    role: 'Consultant of internal medicine',
    cred: [
      'MSc, Faculty of Medicine, Qasr Al-Ainy',
      'Diploma, University of Aberdeen, Scotland',
      'Saudi specialization: Internal Medicine',
      'Consultant, Saba Medical Group (KSA)',
    ],
    whyH: 'Why choose Dr. Hisham',
    why: [
      [
        'Experience that supports accurate diagnosis',
        'A consultant with training in Egypt, Scotland and Saudi Arabia, covering digestive, heart, chest, diabetes and weight problems.',
      ],
      [
        'Care for each patient',
        'Every case gets individual attention, from the first diagnosis until treatment is complete.',
      ],
      [
        'Two easy-to-reach clinics',
        'Clinics in Nasr City with afternoon and evening sessions, so you can pick a time that suits you.',
      ],
    ],
    svcH: 'Medical services',
    svcS: 'Dr. Hisham treats these conditions.',
    svc: [
      'Digestive system and liver diseases',
      'Heart and blood vessel diseases',
      'Chest allergy',
      'Diabetes',
      'Endocrine (glands) problems',
      'Obesity and underweight',
    ],
    bookT: 'Book an appointment',
    bookS: 'Choose the clinic, day and time. Your request opens in WhatsApp or SMS.',
    lName: 'Your name',
    lPhone: 'Phone number',
    lClinic: 'Clinic',
    lDate: 'Date',
    lTime: 'Time',
    lReason: 'Reason for visit (optional)',
    sendWa: 'Send by WhatsApp',
    sendSms: 'Send by SMS',
    note: 'The clinic will confirm your time by message.',
    eFill: 'Please enter your name, phone number, and date.',
    ePhone: 'Please enter a valid phone number.',
    eSetup: 'Booking is not connected yet. Please add the clinic phone number.',
    ok: 'Your request is ready. Press send in the app to finish.',
    foot: 'Dr. Hisham Awad · Consultant of internal medicine',
    map: 'Directions',
    hours: 'Hours: ',
    m: ['Booking request for Dr. Hisham Awad', 'Name', 'Phone', 'Clinic', 'Date', 'Time', 'Reason'],
    am: 'AM',
    pm: 'PM',
    langBtn: 'العربية',
  },
  ar: {
    brand: 'د. هشام عوض',
    n1: 'الصفحة الرئيسية',
    n2: 'عن الطبيب',
    n3: 'خدماتنا الطبية',
    n4: 'الحجز والتواصل',
    book: 'حجز موعد',
    welcome: 'أهلاً بك في عيادات د. هشام عوض',
    h1: 'حيث يلتقي العلم بالرعاية',
    lead: 'استشاري الأمراض الباطنة. تشخيص دقيق وخطة علاج متكاملة، لتشعر بالراحة والثقة من لحظة دخولك العيادة.',
    careH: 'كيف نعتني بمرضانا',
    careP1:
      'نبدأ بالاستماع الجيد للمريض ومنحه الوقت الكافي لشرح حالته، ثم الفحص السريري الدقيق ومراجعة الفحوصات السابقة للوصول إلى أدق تشخيص.',
    careP2:
      'نتبع أحدث التوصيات الطبية ونتابع مدى استجابة كل مريض للعلاج، لتقوم الرعاية على الثقة والاهتمام.',
    docH: 'تعرف على الطبيب',
    role: 'استشاري الأمراض الباطنة',
    cred: [
      'ماجستير، كلية الطب قصر العيني',
      'دبلوم جامعة أبردين، اسكتلندا',
      'تصنيف التخصصات السعودية: الباطنة',
      'استشاري، مجموعة سابا الطبية (السعودية)',
    ],
    whyH: 'لماذا د. هشام عوض',
    why: [
      [
        'خبرة تضمن دقة التشخيص',
        'استشاري تدرب في مصر واسكتلندا والسعودية، ويعالج أمراض الجهاز الهضمي والقلب والصدر والسكر والوزن.',
      ],
      [
        'رعاية مخصصة لكل مريض',
        'كل حالة تحصل على اهتمام خاص، من التشخيص الأول حتى اكتمال العلاج.',
      ],
      [
        'عيادتان سهلتا الوصول',
        'عيادات في مدينة نصر بمواعيد بعد العصر وفي المساء، لتختار الوقت المناسب لك.',
      ],
    ],
    svcH: 'خدماتنا الطبية',
    svcS: 'يعالج د. هشام هذه الحالات.',
    svc: [
      'أمراض الجهاز الهضمي والكبد',
      'أمراض القلب والأوعية الدموية',
      'حساسية الصدر',
      'مرض السكر',
      'مشاكل الغدد الصماء',
      'السمنة والنحافة',
    ],
    bookT: 'احجز موعدك',
    bookS: 'اختر العيادة واليوم والوقت. سيفتح طلبك في واتساب أو رسالة SMS.',
    lName: 'الاسم',
    lPhone: 'رقم الهاتف',
    lClinic: 'العيادة',
    lDate: 'التاريخ',
    lTime: 'الوقت',
    lReason: 'سبب الزيارة (اختياري)',
    sendWa: 'إرسال عبر واتساب',
    sendSms: 'إرسال برسالة SMS',
    note: 'ستؤكد العيادة الموعد برسالة.',
    eFill: 'من فضلك اكتب الاسم ورقم الهاتف والتاريخ.',
    ePhone: 'من فضلك اكتب رقم هاتف صحيحا.',
    eSetup: 'الحجز غير مفعل بعد. يجب إضافة رقم هاتف العيادة.',
    ok: 'طلبك جاهز. اضغط إرسال في التطبيق لإنهاء الحجز.',
    foot: 'د. هشام عوض · استشاري الأمراض الباطنة',
    map: 'الاتجاهات',
    hours: 'المواعيد: ',
    m: ['طلب حجز عند د. هشام عوض', 'الاسم', 'الهاتف', 'العيادة', 'التاريخ', 'الوقت', 'السبب'],
    am: 'ص',
    pm: 'م',
    langBtn: 'English',
  },
} as const;

const SERVICE_ICONS = [Stethoscope, HeartPulse, Wind, Droplets, Activity, Scale];

function pad(n: number) {
  return n < 10 ? `0${n}` : `${n}`;
}

function formatTimeLabel(h: number, m: number, lang: Lang) {
  const H = h % 24;
  let x = H % 12;
  if (x === 0) x = 12;
  return `${x}:${pad(m)} ${H >= 12 ? COPY[lang].pm : COPY[lang].am}`;
}

export default function App() {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      const saved = localStorage.getItem('lang');
      return saved === 'en' || saved === 'ar' ? saved : 'ar';
    } catch {
      return 'ar';
    }
  });

  const todayStr = useMemo(() => {
    const now = new Date();
    return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
  }, []);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [clinicIdx, setClinicIdx] = useState(0);
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [reason, setReason] = useState('');
  const [statusMsg, setStatusMsg] = useState<{ text: string; type: 'error' | 'ok' | 'idle' }>({
    text: '',
    type: 'idle',
  });
  const [imgError, setImgError] = useState(false);

  const t = COPY[lang];

  const timeOptions = useMemo(() => {
    const c = CLINICS[clinicIdx];
    const slots: string[] = [];
    for (let m = c.start * 60; m < c.end * 60; m += SLOT_MIN) {
      slots.push(formatTimeLabel(Math.floor(m / 60), m % 60, lang));
    }
    return slots;
  }, [clinicIdx, lang]);

  useEffect(() => {
    if (timeOptions.length > 0 && !timeOptions.includes(timeSlot)) {
      setTimeSlot(timeOptions[0]);
    }
  }, [timeOptions, timeSlot]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.removeAttribute('data-theme');
    document.title = t.brand;
    try {
      localStorage.setItem('lang', lang);
    } catch {
      // ignore storage failures
    }
  }, [lang, t.brand]);

  const handleClinicChange = (idx: number) => {
    setClinicIdx(idx);
    const c = CLINICS[idx];
    setTimeSlot(formatTimeLabel(c.start, 0, lang));
  };

  const handleBook = (channel: 'wa' | 'sms') => {
    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const trimmedReason = reason.trim();

    if (!trimmedName || !trimmedPhone || !date) {
      setStatusMsg({ text: t.eFill, type: 'error' });
      return;
    }
    if (!/^\+?[0-9\s-]{8,}$/.test(trimmedPhone)) {
      setStatusMsg({ text: t.ePhone, type: 'error' });
      return;
    }
    if (/X/.test(PHONE)) {
      setStatusMsg({ text: t.eSetup, type: 'error' });
      return;
    }

    const c = CLINICS[clinicIdx];
    const m = t.m;
    const body = `${m[0]}\n${m[1]}: ${trimmedName}\n${m[2]}: ${trimmedPhone}\n${m[3]}: ${c[lang]}\n${m[4]}: ${date}\n${m[5]}: ${timeSlot}${
      trimmedReason ? `\n${m[6]}: ${trimmedReason}` : ''
    }`;

    const url =
      channel === 'wa'
        ? `https://wa.me/${PHONE}?text=${encodeURIComponent(body)}`
        : `sms:+${PHONE}?&body=${encodeURIComponent(body)}`;

    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener';
    document.body.appendChild(a);
    a.click();
    a.remove();

    setStatusMsg({ text: t.ok, type: 'ok' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Utility Bar */}
      <div className="topbar">
        <div className="wrap">
          <div className="topbar-info">
            {CLINICS.map((c, idx) => (
              <React.Fragment key={c.en}>
                {idx > 0 && (
                  <span className="topbar-sep" aria-hidden="true">
                    |
                  </span>
                )}
                <span className="topbar-item">
                  <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>
                    {c[lang]} ({formatTimeLabel(c.start, 0, lang)} – {formatTimeLabel(c.end, 0, lang)})
                  </span>
                </span>
              </React.Fragment>
            ))}
            {PHONE_SHOWN ? (
              <>
                <span className="topbar-sep" aria-hidden="true">
                  |
                </span>
                <a className="topbar-item" dir="ltr" href={`tel:${PHONE_SHOWN.replace(/\s/g, '')}`}>
                  {PHONE_SHOWN}
                </a>
              </>
            ) : null}
          </div>

          <button
            type="button"
            className="lang-btn"
            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
            aria-label="Language"
          >
            <Globe className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{t.langBtn}</span>
          </button>
        </div>
      </div>

      {/* 3-Zone Sticky Header */}
      <header className="hd">
        <div className="wrap">
          <a className="brand" href="#home">
            {t.brand}
          </a>
          <nav aria-label="Primary">
            <a href="#home">{t.n1}</a>
            <a href="#doctor">{t.n2}</a>
            <a href="#services">{t.n3}</a>
            <a href="#contact">{t.n4}</a>
          </nav>
          <a className="btn" href="#contact">
            {t.book}
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Modern Medical Hero */}
        <div className="hero" id="home">
          <div className="wrap">
            <div className="hero-grid">
              <div>
                <small className="hero-kicker">{t.welcome}</small>
                <h1>{t.h1}</h1>
                <p className="lead">{t.lead}</p>
                <div className="hero-actions">
                  <a className="btn" href="#contact">
                    {t.book}
                  </a>
                  <a className="btn alt" href="#doctor">
                    {t.docH}
                  </a>
                </div>
                <div className="hero-meta">
                  {CLINICS.map((c) => (
                    <div className="hero-meta-item" key={c.en}>
                      <strong>{c[lang]}</strong>
                      <span>
                        {t.hours}
                        {formatTimeLabel(c.start, 0, lang)} – {formatTimeLabel(c.end, 0, lang)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hero-portrait-frame">
                {!imgError ? (
                  <img
                    className="ph"
                    src={DOCTOR_PORTRAIT}
                    alt="Dr. Hisham Awad"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div
                    className="ph flex flex-col items-center justify-center p-6 text-center"
                    style={{ backgroundColor: 'var(--mist)', color: 'var(--blue)' }}
                  >
                    <Plus className="w-10 h-10 mb-2" aria-hidden="true" />
                    <span className="font-bold">{t.brand}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* How We Care */}
        <section>
          <div className="wrap care-grid">
            <div>
              <h2>{t.careH}</h2>
            </div>
            <div className="care-prose">
              <p>{t.careP1}</p>
              <p>{t.careP2}</p>
            </div>
          </div>
        </section>

        {/* Meet the Doctor */}
        <section className="alt-bg" id="doctor">
          <div className="wrap">
            <div className="section-head">
              <h2>{t.docH}</h2>
            </div>
            <div className="doc">
              {!imgError ? (
                <img
                  src={DOCTOR_PORTRAIT}
                  alt="Dr. Hisham Awad"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div
                  className="w-full aspect-[3/4] rounded-2xl flex items-center justify-center border"
                  style={{ backgroundColor: 'var(--mist)', borderColor: 'var(--line)', color: 'var(--blue)' }}
                >
                  <Plus className="w-10 h-10" aria-hidden="true" />
                </div>
              )}
              <div>
                <h3>{t.brand}</h3>
                <p className="r">{t.role}</p>
                <ul>
                  {t.cred.map((item) => (
                    <li key={item}>
                      <Check className="w-4 h-4" strokeWidth={2.5} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a className="btn" href="#contact">
                  {t.book}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section>
          <div className="wrap">
            <div className="section-head">
              <h2>{t.whyH}</h2>
            </div>
            <div className="three">
              {t.why.map(([title, desc], idx) => (
                <div className="card" key={title}>
                  <span className="card-num">0{idx + 1}</span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Medical Services */}
        <section className="alt-bg" id="services">
          <div className="wrap">
            <div className="section-head">
              <h2>{t.svcH}</h2>
              <p className="sub">{t.svcS}</p>
            </div>
            <div className="svc">
              {t.svc.map((service, idx) => {
                const Icon = SERVICE_ICONS[idx] || Stethoscope;
                return (
                  <div className="card" key={service}>
                    <div className="ic" aria-hidden="true">
                      <Icon className="w-6 h-6" strokeWidth={2} />
                    </div>
                    <h3>{service}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Booking & Clinic Locations */}
        <section id="contact">
          <div className="wrap">
            <div className="section-head">
              <h2>{t.bookT}</h2>
              <p className="sub">{t.bookS}</p>
            </div>

            <div className="booking-layout">
              <div className="clinic-cards">
                {CLINICS.map((c) => {
                  const address = lang === 'ar' ? c.par : c.pen;
                  return (
                    <div className="clinic-card" key={c.en}>
                      <h3>{c[lang]}</h3>
                      <p>{address}</p>
                      <p className="clinic-hours">
                        {t.hours}
                        {formatTimeLabel(c.start, 0, lang)} – {formatTimeLabel(c.end, 0, lang)}
                      </p>
                      <a
                        className="clinic-map-link"
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.par)}`}
                        target="_blank"
                        rel="noopener"
                      >
                        <MapPin className="w-4 h-4" aria-hidden="true" />
                        <span>{t.map}</span>
                      </a>
                    </div>
                  );
                })}
              </div>

              <div className="form-card">
                <form onSubmit={(e) => e.preventDefault()} noValidate>
                  <div>
                    <label htmlFor="n">{t.lName}</label>
                    <input
                      id="n"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="p">{t.lPhone}</label>
                    <input
                      id="p"
                      type="tel"
                      autoComplete="tel"
                      dir="ltr"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="c">{t.lClinic}</label>
                    <select
                      id="c"
                      value={clinicIdx}
                      onChange={(e) => handleClinicChange(Number(e.target.value))}
                    >
                      {CLINICS.map((c, idx) => (
                        <option key={c.en} value={idx}>
                          {c[lang]} ({formatTimeLabel(c.start, 0, lang)} – {formatTimeLabel(c.end, 0, lang)})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="d">{t.lDate}</label>
                    <input
                      id="d"
                      type="date"
                      min={todayStr}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                  <div className="full">
                    <label htmlFor="t">{t.lTime}</label>
                    <select
                      id="t"
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                    >
                      {timeOptions.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="full">
                    <label htmlFor="r">{t.lReason}</label>
                    <textarea
                      id="r"
                      rows={3}
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                    />
                  </div>
                  <div className="full">
                    <div className="btns">
                      <button className="btn wa" type="button" onClick={() => handleBook('wa')}>
                        {t.sendWa}
                      </button>
                      <button className="btn" type="button" onClick={() => handleBook('sms')}>
                        {t.sendSms}
                      </button>
                    </div>
                    <p
                      id="msg"
                      role="status"
                      style={{
                        color: statusMsg.type === 'ok' ? 'var(--blue)' : 'var(--red)',
                      }}
                    >
                      {statusMsg.text}
                    </p>
                    <p className="note">{t.note}</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="ft">
        <div className="wrap">
          <div className="cols">
            {CLINICS.map((c) => {
              const address = lang === 'ar' ? c.par : c.pen;
              return (
                <div key={c.en}>
                  <h3>{c[lang]}</h3>
                  <p>{address}</p>
                  <p>
                    {t.hours}
                    {formatTimeLabel(c.start, 0, lang)} – {formatTimeLabel(c.end, 0, lang)}
                  </p>
                  <div className="links">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.par)}`}
                      target="_blank"
                      rel="noopener"
                    >
                      {t.map}
                    </a>
                    {PHONE_SHOWN ? (
                      <a dir="ltr" href={`tel:${PHONE_SHOWN.replace(/\s/g, '')}`}>
                        {PHONE_SHOWN}
                      </a>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cp">{t.foot}</div>
        </div>
      </footer>
    </div>
  );
}
