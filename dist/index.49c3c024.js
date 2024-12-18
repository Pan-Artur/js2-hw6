const e=document.getElementById("feedback-form"),t=document.getElementById("success-message");e.addEventListener("submit",s=>{s.preventDefault(),console.log("Дані форми:",{name:s.target.name.value,email:s.target.email.value,message:s.target.message.value}),t.classList.remove("hidden"),e.reset(),setTimeout(()=>{t.classList.add("hidden")},3e3)});
//# sourceMappingURL=index.49c3c024.js.map
