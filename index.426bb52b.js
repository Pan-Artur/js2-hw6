const e=document.querySelector("#feedback-form"),s=document.querySelector("#success-message");e.addEventListener("submit",t=>{t.preventDefault(),console.log("Дані форми:",{name:t.target.name.value,email:t.target.email.value,message:t.target.message.value}),s.classList.remove("hidden"),e.reset(),setTimeout(()=>{s.classList.add("hidden")},3e3)});
//# sourceMappingURL=index.426bb52b.js.map
