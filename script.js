// Flip the card when it's clicked
document.getElementById('greetingCard').addEventListener('click', function () {
    this.classList.toggle('flip');
});

// Open the front camera
document.getElementById('openCamera').addEventListener('click', function () {
    // Ensure the browser supports navigator.mediaDevices.getUserMedia
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Request access to the front camera
        navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } })
            .then(function (stream) {
                let video = document.createElement('video');
                document.body.appendChild(video);
                video.srcObject = stream;
                video.play();
            })
            .catch(function (err) {
                alert("Error: Unable to access camera. " + err);
            });
    } else {
        alert("Camera access is not supported by your browser.");
    }
});
