document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("joinForm").addEventListener("submit", function(e){
  e.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const skill = document.getElementById("skill").value.trim();
  const bio = document.getElementById("bio").value.trim();
  
  // تحقق بسيط من الإيميل
  if (!email || !email.includes('@') || !email.includes('.')) {
    document.getElementById("msg").textContent = "بريد إلكتروني غير صحيح!";
    return;
  }
  
  // إصلاح البريد (كان sa3y.neywork@gmail.com، غيرته إلى sa3y.network@gmail.com – تأكد من الصحة)
  const mail = "sa3y.network@gmail.com";
  const subject = "طلب انضمام — سعي";
  const body = `الاسم: ${name}\nالبريد: ${email}\nالهاتف: ${phone}\nالمهارة: ${skill}\nنبذة: ${bio}`;
  window.location.href = `mailto:${mail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  document.getElementById("msg").textContent = "سيتم فتح بريدك لإرسال التفاصيل. شكراً!";
});