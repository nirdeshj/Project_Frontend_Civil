const video = document.getElementById("webcam");

async function startWebcam() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });
    video.srcObject = stream;
  } catch (error) {
    console.error("Webcam access denied:", error);
    alert("Unable to access webcam. Please allow camera permissions.");
  }
}

startWebcam();
