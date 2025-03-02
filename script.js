// قائمة الفيديوهات (33 فيديو)
const videos =
[
  { url: "https://youtu.be/MOh24PJAPas", titleAr: "فيديو رقم 1", titleEn: "Video Number 1" },
  { url: "https://youtu.be/qJmwlRDy-rE", titleAr: "فيديو رقم 2", titleEn: "Video Number 2" },
  { url: "https://youtu.be/9_x4fgfXilE", titleAr: "فيديو رقم 3", titleEn: "Video Number 3" },
  { url: "https://youtu.be/-SajqERuqeo", titleAr: "فيديو رقم 4", titleEn: "Video Number 4" },
  { url: "https://youtu.be/ONoT5LKYh6g", titleAr: "فيديو رقم 5", titleEn: "Video Number 5" },
  { url: "https://youtu.be/EuM9REHziFo", titleAr: "فيديو رقم 6", titleEn: "Video Number 6" },
  { url: "https://youtu.be/a23CdqdDB8E", titleAr: "فيديو رقم 7", titleEn: "Video Number 7" },
  { url: "https://youtu.be/tA13WcaOOUw", titleAr: "فيديو رقم 8", titleEn: "Video Number 8" },
  { url: "https://youtu.be/itsMZtRHHEM", titleAr: "فيديو رقم 9", titleEn: "Video Number 9" },
  { url: "https://youtu.be/bsclaYfSUik", titleAr: "فيديو رقم 10", titleEn: "Video Number 10" },
  { url: "https://youtu.be/q7U2YHWfetc", titleAr: "فيديو رقم 11", titleEn: "Video Number 11" },
  { url: "https://youtu.be/Z9WUwr64Edc", titleAr: "فيديو رقم 12", titleEn: "Video Number 12" },
  { url: "https://youtu.be/ige13O5-A1k", titleAr: "فيديو رقم 13", titleEn: "Video Number 13" },
  { url: "https://youtu.be/ZkNtO0XBaG8", titleAr: "فيديو رقم 14", titleEn: "Video Number 14" },
  { url: "https://youtu.be/zpka99dJNws", titleAr: "فيديو رقم 15", titleEn: "Video Number 15" },
  { url: "https://youtu.be/LgNV0jX2ggc", titleAr: "فيديو رقم 16", titleEn: "Video Number 16" },
  { url: "https://youtu.be/65V75GNZHeA", titleAr: "فيديو رقم 17", titleEn: "Video Number 17" },
  { url: "https://youtu.be/ttHugVl1rug", titleAr: "فيديو رقم 18", titleEn: "Video Number 18" },
  { url: "https://youtu.be/9OPJpwImiek", titleAr: "فيديو رقم 19", titleEn: "Video Number 19" },
  { url: "https://youtu.be/C2dNfZo8k3A", titleAr: "فيديو رقم 20", titleEn: "Video Number 20" },
  { url: "https://youtu.be/30h8VAhd-Xw", titleAr: "فيديو رقم 21", titleEn: "Video Number 21" },
  { url: "https://youtu.be/OmPgWVqmWUo", titleAr: "فيديو رقم 22", titleEn: "Video Number 22" },
  { url: "https://youtu.be/bFRDIb2H6M4", titleAr: "فيديو رقم 23", titleEn: "Video Number 23" },
  { url: "https://youtu.be/s-b83Ax4Dmk", titleAr: "فيديو رقم 24", titleEn: "Video Number 24" },
  { url: "https://youtu.be/ZlEmyzqWiC4", titleAr: "فيديو رقم 25", titleEn: "Video Number 25" },
  { url: "https://youtu.be/9DModhJ0ePA", titleAr: "فيديو رقم 26", titleEn: "Video Number 26" },
  { url: "https://youtu.be/ob8tcOTJ5W4", titleAr: "فيديو رقم 27", titleEn: "Video Number 27" },
  { url: "https://youtu.be/t_ox4fXLtMQ", titleAr: "فيديو رقم 28", titleEn: "Video Number 28" },
  { url: "https://youtu.be/8xa3FgCD964", titleAr: "فيديو رقم 29", titleEn: "Video Number 29" },
  { url: "https://youtu.be/m928uffZx5Y", titleAr: "فيديو رقم 30", titleEn: "Video Number 30" },
  { url: "https://youtu.be/MJS5gxPPKHU", titleAr: "فيديو رقم 31", titleEn: "Video Number 31" },
  { url: "https://youtu.be/2vEUp0AiadM", titleAr: "فيديو رقم 32", titleEn: "Video Number 32" },
  { url: "https://youtu.be/9jGy4wRUaMM", titleAr: "فيديو رقم 33", titleEn: "Video Number 33" }
  { url: "https://youtu.be/xSOb208gJHQ", titleAr: "فيديو رقم 34", titleEn: "Video Number 34" }
  
];

// نصوص اللغتين
const texts = {
  arabic: {
    welcomeText: "مرحبا معجبي ماهركو!",
    nextButtonText: "التالي",
    warningMessage: `
      عند مشاهدة أحدى الفيديوهات التالية قد يكون الشخص أو الأشخاص في حالة عصبية وقد يقومون بالسب والشتم فعليك تخطي هذا الجزء، أو يقومون بمشاهدة مقاطع طويلة أو قصيرة على أي منصة وتحتوي أغاني أو النساء الكاسيات العاريات فعليك تخطي هذا الجزء، أو يقومون بسماع الأغاني فعليك تخطي هذا الجزء، أو أي شيء محرم فعليك تخطي هذا...
      <br><br>وشكرًا!
    `,
    prevGroup: "السابق",
    nextGroup: "التالي",
    groupText: "المجموعة",
    contactPage: {
      phone: "للتواصل: 0775509940",
      email: "للتواصل: majdialhijazi04@gmail.com",
      maherco: "صفحة maherco على Kick",
      awsamco: "صفحة awsamco على Kick",
      crystalco: "صفحة Crystal على Kick",
      tikriti: "صفحة tikriti على Kick",
      hexawi: "صفحة hexawi على Kick",
      jalta: "صفحة jalta على Kick"
    }
  },
  english: {
    welcomeText: "Hello fans of Maherkoo!",
    nextButtonText: "Next",
    warningMessage: `
      When watching any of the following videos, the person or people may be in a bad mood and may swear or curse, so you should skip this part. Or if they watch long or short clips on any platform containing songs or immodest women, you should skip this part. Or if they listen to music, you should skip this part. Or anything prohibited, you should skip this...
      <br><br>Thank you!
    `,
    prevGroup: "Previous",
    nextGroup: "Next",
    groupText: "Group",
    contactPage: {
      phone: "Contact: 0775509940",
      email: "Contact: majdialhijazi04@gmail.com",
      maherco: "Maherco Page on Kick",
      awsamco: "Awsamco Page on Kick",
      crystalco: "Crystal Page on Kick",
      tikriti: "Tikriti Page on Kick",
      hexawi: "Hexawi Page on Kick",
      jalta: "Jalta Page on Kick"
    }
  }
};

// تحديد اللغة الافتراضية
let currentLanguage = 'arabic';

// متغيرات للتحكم في المجموعات
let currentGroup = 0; // المجموعة الحالية
const videosPerGroup = 30; // عدد الفيديوهات في كل مجموعة

// تحديث النصوص بناءً على اللغة
function updateTexts() {
  document.getElementById('welcome-text').innerText = texts[currentLanguage].welcomeText;
  document.getElementById('nextButton').innerText = texts[currentLanguage].nextButtonText;
  document.getElementById('warning-message').innerHTML = texts[currentLanguage].warningMessage;
  document.getElementById('prev-group-btn').innerText = texts[currentLanguage].prevGroup;
  document.getElementById('next-group-btn').innerText = texts[currentLanguage].nextGroup;

  // تحديث نص "المجموعة X"
  document.getElementById('current-group').innerText = `${texts[currentLanguage].groupText} ${currentGroup + 1}`;

  // تحديث نصوص الأزرار الستة وعلبتا التواصل
  document.getElementById('maherco-button').innerText = texts[currentLanguage].contactPage.maherco;
  document.getElementById('awsamco-button').innerText = texts[currentLanguage].contactPage.awsamco;
  document.getElementById('crystalco-button').innerText = texts[currentLanguage].contactPage.crystalco;
  document.getElementById('tikriti-button').innerText = texts[currentLanguage].contactPage.tikriti;
  document.getElementById('hexawi-button').innerText = texts[currentLanguage].contactPage.hexawi;
  document.getElementById('jalta-button').innerText = texts[currentLanguage].contactPage.jalta;
  document.getElementById('phone-box').innerText = texts[currentLanguage].contactPage.phone;
  document.getElementById('email-box').innerText = texts[currentLanguage].contactPage.email;

  // إعادة رسم الفيديوهات لتحديث عناوينها بناءً على اللغة
  renderVideos();
}

// دالة لإنشاء الفيديوهات في المجموعة الحالية
function renderVideos() {
  const videoContainer = document.getElementById('video-container');
  videoContainer.innerHTML = ''; // مسح الفيديوهات السابقة

  const start = currentGroup * videosPerGroup;
  const end = Math.min(start + videosPerGroup, videos.length);
  const groupVideos = videos.slice(start, end);

  // تقسيم الفيديوهات إلى 3 أعمدة
  const columns = [[], [], []];
  groupVideos.forEach((video, index) => {
    columns[index % 3].push(video); // توزيع الفيديوهات على 3 أعمدة
  });

  // إنشاء الأعمدة وإضافة الفيديوهات إليها
  columns.forEach(columnVideos => {
    const columnDiv = document.createElement('div');
    columnDiv.classList.add('video-column');

    columnVideos.forEach(video => {
      const videoItem = document.createElement('div');
      videoItem.classList.add('video-item');
      videoItem.innerText = currentLanguage === 'arabic' ? video.titleAr : video.titleEn;
      videoItem.onclick = () => window.open(video.url, '_blank'); // فتح الفيديو عند النقر عليه
      columnDiv.appendChild(videoItem);
    });

    videoContainer.appendChild(columnDiv);
  });
}

// دالة للانتقال إلى المجموعة التالية
document.getElementById('next-group-btn').addEventListener('click', function () {
  const totalGroups = Math.ceil(videos.length / videosPerGroup);
  if (currentGroup < totalGroups - 1) {
    currentGroup++;
    updateTexts(); // تحديث النصوص بما في ذلك رقم المجموعة
  }
});

// دالة للعودة إلى المجموعة السابقة
document.getElementById('prev-group-btn').addEventListener('click', function () {
  if (currentGroup > 0) {
    currentGroup--;
    updateTexts(); // تحديث النصوص بما في ذلك رقم المجموعة
  }
});

// التبديل بين الصفحات
document.getElementById('nextButton').addEventListener('click', function () {
  document.getElementById('home').classList.add('hidden');
  document.getElementById('videos').classList.remove('hidden');
  renderVideos();
});

// تغيير اللغة
document.getElementById('arabic-btn').addEventListener('click', function () {
  currentLanguage = 'arabic';
  updateTexts();
  this.classList.add('active');
  document.getElementById('english-btn').classList.remove('active');
});

document.getElementById('english-btn').addEventListener('click', function () {
  currentLanguage = 'english';
  updateTexts();
  this.classList.add('active');
  document.getElementById('arabic-btn').classList.remove('active');
});

// عند تشغيل الموقع لأول مرة، تأكد أن الصفحة الرئيسية فقط مرئية
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('home').classList.remove('hidden');
  document.getElementById('videos').classList.add('hidden');
});
