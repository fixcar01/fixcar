const whatsappNumber = "966567079640";

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("orderForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = new FormData(this);

    const company = form.get("company") || "";
    const car = form.get("car") || "";
    const model = form.get("model") || "";
    const vin = form.get("vin") || "غير مذكور";
    const requestType = form.get("requestType") || "";
    const description = form.get("description") || "";
    const city = form.get("city") || "";
    const phone = form.get("phone") || "";

    const photos = form.getAll("photos").filter(file => file.size > 0);

    const message = `🚗 *طلب جديد من موقع Fix Car | فكس كار*

السلام عليكم ورحمة الله وبركاته،

أرغب في طلب خدمة من موقع *فكس كار*.
نطلب لك ... ونوفر لك.

━━━━━━━━━━━━━━
🚘 *معلومات السيارة*
━━━━━━━━━━━━━━

• الشركة: ${company}
• نوع السيارة: ${car}
• الموديل: ${model}
• رقم الشاصي: ${vin}

━━━━━━━━━━━━━━
🔧 *تفاصيل الطلب*
━━━━━━━━━━━━━━

• نوع الطلب: ${requestType}
• وصف الطلب: ${description}

━━━━━━━━━━━━━━
📱 *بيانات التواصل*
━━━━━━━━━━━━━━

• المدينة: ${city}
• رقم الجوال: ${phone}

━━━━━━━━━━━━━━
📷 *الصور المرفقة*
━━━━━━━━━━━━━━

${photos.length > 0 ? `تم اختيار ${photos.length} صورة من الموقع، وسأرفقها في المحادثة.` : "لا توجد صور مرفقة."}

📌 *مصدر الطلب: موقع Fix Car الإلكتروني*

شكرًا لكم، وبانتظار تفاصيل الطلب والتوفر والسعر.
`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
});
