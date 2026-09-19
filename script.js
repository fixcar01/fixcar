const whatsappNumber = "966570150943";

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

  const message = `السلام عليكم، أريد طلب من Fix Car 🚗

*معلومات السيارة:*
الشركة: ${company}
السيارة: ${car}
الموديل: ${model}
رقم الشاصي: ${vin}

*تفاصيل الطلب:*
الطلب: ${requestType}
الوصف: ${description}

*التواصل:*
المدينة: ${city}
رقم الجوال: ${phone}

لدي صور للطلب: ${form.get("photos") && form.get("photos").name ? "نعم" : "لا"}`;

  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
});
