const cssSnippets = {
  typing: `.typing {\n  overflow: hidden;\n  border-right: 4px solid white;\n  animation:\n    typing 4s steps(20,end),\n    blink .7s infinite;\n}`,
  gradient: `.gradient {\n  background: linear-gradient(\n    90deg,\n    #ff0080,\n    #00ffff\n  );\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  animation: gradientMove 5s infinite;\n}`,
  float: `.float {\n  animation:\n    floatText 3s ease-in-out infinite;\n}`,
  wave: `.wave span {\n  display: inline-block;\n  animation:\n    wave 1s infinite;\n}\n.wave span:nth-child(2) {\n  animation-delay: .1s;\n}`
};
const toast = document.querySelector(".toast");
let toastTimer;
document.querySelectorAll(".copy").forEach(button => {
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(cssSnippets[button.dataset.code]);
      toast.textContent = "CSS copied to clipboard";
    } catch {
      toast.textContent = "Clipboard permission unavailable";
    }
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 1500);
  });
});
document.querySelectorAll(".preview").forEach(preview => {
  preview.addEventListener("click", () => {
    preview.classList.remove("replay");
    void preview.offsetWidth;
    preview.classList.add("replay");
  });
});
