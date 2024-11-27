document.addEventListener("copy" , (event)=>{
    const selectedData = window.getSelection().toString();
    event.clipboardData.setData(
        "text/plain",
    "Abe BSDK maan jaya kar bado ki baate 🖕");
    event.preventDefault();
})