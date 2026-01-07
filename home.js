const explore_btn = document.getElementById("explore");
explore_btn.addEventListener("click", () => {
  window.location.href = "dashboard.html";
});

const container = document.getElementById("floating-shapes");

const circle = document.createElement("div");
circle.classList.add("shape", "circle");
container.appendChild(circle);

const triangle = document.createElement("div");
triangle.classList.add("shape", "triangle");
container.appendChild(triangle);

const square = document.createElement("div");
square.classList.add("shape", "square");
container.appendChild(square);

const backgroundDecor = document.createElement("div");
backgroundDecor.classList.add("decorative-shapes");
document.body.appendChild(backgroundDecor);

const decoTypes = ["small-circle", "small-square", "small-triangle"];
for (let i = 0; i < 100; i++) {
  const s = document.createElement("div");
  const type = decoTypes[Math.floor(Math.random() * decoTypes.length)];
  s.classList.add("small-shape", type);

  const top = Math.random() * 100;
  const left = Math.random() * 100;

  s.style.top = top + "%";
  s.style.left = left + "%";
  s.style.opacity = 0.05 + Math.random() * 0.15;
  s.style.transform = `scale(${0.2 + Math.random() * 0.8})`;
  backgroundDecor.appendChild(s);
}
