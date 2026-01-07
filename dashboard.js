const video = document.getElementById("webcam");

async function startWebcam() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });
    video.srcObject = stream;
  } catch {
    alert("Unable to access webcam. Please allow camera permissions.");
  }
}

startWebcam();

const backgroundDecor = document.createElement("div");
backgroundDecor.classList.add("decorative-shapes");
document.body.appendChild(backgroundDecor);

const decoTypes = ["small-circle", "small-square", "small-triangle"];
for (let i = 0; i < 150; i++) {
  const s = document.createElement("div");
  const type = decoTypes[Math.floor(Math.random() * decoTypes.length)];
  s.classList.add("small-shape", type);

  const top = Math.random() * 100;
  const left = Math.random() * 100;

  s.style.top = top + "%";
  s.style.left = left + "%";
  s.style.opacity = 0.05 + Math.random() * 0.2;
  s.style.transform = `scale(${0.2 + Math.random() * 0.8})`;
  backgroundDecor.appendChild(s);
}
