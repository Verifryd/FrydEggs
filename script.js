var fabergeButton = document.getElementById('purchaseButton');
var fabergeVideo = document.getElementById('productVideo');
var kringleButton = document.getElementById('kringleproductButton');
var kringleVideo = document.getElementById('kringleproductVideo');
var dpteButton = document.getElementById('dptepurchaseButton');
var dpteVideo = document.getElementById('dpteproductVideo');

if (fabergeButton && fabergeVideo) {
    fabergeButton.addEventListener('click', function() {
        // Hide the product image and show the video player
        document.getElementById('fabergeImage').style.display = 'none';
        fabergeVideo.style.display = 'block';
        fabergeVideo.play();

        this.style.display = 'none';

        // When the video ends, change the Fabergé Egg image to the EarlyEggcessA GIF
        // and hide the video
        fabergeVideo.addEventListener('ended', function() {
            document.getElementById('fabergeImage').src = 'assets/EarlyEggcessA.gif';
            document.getElementById('fabergeImage').style.display = 'block';
            fabergeVideo.style.display = 'none';
        });
    });

    fabergeVideo.addEventListener('ended', function() {
        // Enable the "Next Egg" button when the video has ended
        document.getElementById('nextButton').disabled = false;

    });
}

if (kringleButton && kringleVideo) {
    kringleButton.addEventListener('click', function() {
        // Hide the product image and show the video player
        document.getElementById('kringleImage').style.display = 'none';
        kringleVideo.style.display = 'block';
        kringleVideo.play();

        this.style.display = 'none';

        // When the video ends, change the Fabergé Egg image to the EarlyEggcessA GIF
        // and hide the video
        kringleVideo.addEventListener('ended', function() {
            document.getElementById('kringleImage').src = 'assets/EarlyEggcessB.gif';
            document.getElementById('kringleImage').style.display = 'block';
            kringleVideo.style.display = 'none';
        });
    });

    kringleVideo.addEventListener('ended', function() {
        // Enable the "Next Egg" button when the video has ended
        document.getElementById('nextButton').disabled = false;
    });
}

if (dpteButton && dpteVideo) {
    dpteButton.addEventListener('click', function() {
        // Hide the product image and show the video player
        document.getElementById('DPtEImage').style.display = 'none';
        dpteVideo.style.display = 'block';
        dpteVideo.play();

        this.style.display = 'none';

        // When the video ends, change the Fabergé Egg image to the EarlyEggcessA GIF
        // and hide the video
        dpteVideo.addEventListener('ended', function() {
            document.getElementById('DPtEImage').src = 'assets/EarlyEggcessC.gif';
            document.getElementById('DPtEImage').style.display = 'block';
            dpteVideo.style.display = 'none';
        });
    });

    dpteVideo.addEventListener('ended', function() {
        // Enable the "Next Egg" button when the video has ended
        document.getElementById('nextButton').disabled = false;
    });
}

// When the video ends, enable the "Next Egg" button and set a flag in localStorage
video.addEventListener('ended', function() {
    document.getElementById('nextButton').disabled = false;
    localStorage.setItem('kringleProductViewed', 'true'); // Use a different key for each product
});

// When the video ends, enable the "Next Egg" button and set a flag in localStorage
video.addEventListener('ended', function() {
    document.getElementById('nextButton').disabled = false;
    localStorage.setItem('DPtEProductViewed', 'true'); // Use a different key for each product
});

window.onload = function() {
    // If the 'kringleProductViewed' flag is not set in localStorage, disable the link
    if (!localStorage.getItem('kringleProductViewed')) {
        document.getElementById('kringleLink').onclick = function(event) {
            event.preventDefault();
        }
    }
    // Repeat for each product...
};

window.onload = function() {
    // If the 'DPtEProductViewed' flag is not set in localStorage, disable the link
    if (!localStorage.getItem('DPtEProductViewed')) {
        document.getElementById('DPtELink').onclick = function(event) {
            event.preventDefault();
        }
    }
    // Repeat for each product...
};


window.onload = function() {
    // your code here
};



