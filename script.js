window.onload = function() {
    // Variables for Fabergé Egg
    var fabergeButton = document.getElementById('purchaseButton');
    var fabergeVideo = document.getElementById('productVideo');

    // Variables for Kringle Kronic
    var kringleButton = document.getElementById('kringleproductButton');
    var kringleVideo = document.getElementById('kringleproductVideo');
    var kringleLink = document.getElementById('kringleLink');

    // Variables for Don't Press the Egg
    var dpteButton = document.getElementById('dptepurchaseButton');
    var dpteVideo = document.getElementById('dpteproductVideo');
    var dpteLink = document.getElementById('DPtELink');

    // If the 'kringleProductViewed' flag is not set in localStorage, disable the link
    if (!localStorage.getItem('kringleProductViewed')) {
        kringleLink.classList.add('disabled');
        kringleLink.onclick = function(event) {
            event.preventDefault();
        }
    }

    // If the 'DPtEProductViewed' flag is not set in localStorage, disable the link
    if (!localStorage.getItem('DPtEProductViewed')) {
        dpteLink.classList.add('disabled');
        dpteLink.onclick = function(event) {
            event.preventDefault();
        }
    }

    if (fabergeButton && fabergeVideo) {
        // All code for Fabergé Egg
    }

    if (kringleButton && kringleVideo) {
        kringleButton.addEventListener('click', function() {
            // All the code for video playing

            kringleVideo.addEventListener('ended', function() {
                // All the code for video ending
                kringleLink.classList.remove('disabled');
            });
        });
    }

    if (dpteButton && dpteVideo) {
        dpteButton.addEventListener('click', function() {
            // All the code for video playing

            dpteVideo.addEventListener('ended', function() {
                // All the code for video ending
                dpteLink.classList.remove('disabled');
            });
        });
    }
};
