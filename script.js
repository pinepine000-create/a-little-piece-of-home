let typingInterval;
const enterButton = document.getElementById("enter-button");
const welcomeScreen = document.getElementById("welcome");
const roomScreen = document.getElementById("room");

enterButton.addEventListener("click", function() {
    welcomeScreen.hidden = true;
    roomScreen.hidden = false;
});

// Pop-up elements
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupMessage = document.getElementById("popup-message");
const closeButton = document.getElementById("close-popup");
const birthdaySong = document.getElementById("birthday-song");

// Messages for each object
const messages = {
    letter: {
        title: "To you ♡",
        message: "Happy birthday, my love. There's so many things I could say to you but none of it would be enough. I hope you like the little space I made for us. I never thought I would ever love someone this much yet here we are. You are everything I could ever want and more. I know you know it already but I love you so much. You get my creative juices flowing and I just want to make infinite things if it means you will be there to see them. I miss you so much, but we will find each other... very soon. Happy birthday, habib albi. Signed, your Hana. "
    },

    mug: {
        title: "Some tea?",
        message: "I know you don't drink coffee so here's a cup of tea to keep you warm. I hope that, when you see it, it reminds you to take a breath, relax your shoulders and take a break if you need to. Muah <3"
    },

    picture: {
        title: "Safe space",
        message: "This is a very pixelated photo of the spaceship room I made for us in HR. LOL It doesn't look like much like this but it holds so many memories. I will never forget those quiet moments with you."
    },

    plant: {
        title: "Plant daddy?",
        message: "This is our baby, so you better water it... I haven't figured out the mechanics yet and this coding stuff is kinda hard, but I will get there eventually."
    },

    radio: {
        title: "Our song",
        message: "I thought this room needed a little ✨ambiance✨. This is my favourite song I wrote. One day I'll record it for real, you just wait. "
    },

    astronaut: {
        title: "My spaceman... and his alien",
        message: "I will always think of you as my spaceman so I made little version of us aren't they so adorbs? hehe anyway, I love you."
    }
};

// Make every object clickable
document.querySelectorAll(".object").forEach(function(object) {
    object.addEventListener("click", function() {
        const objectName = object.classList[1];
        const content = messages[objectName];

        popupTitle.textContent = content.title;

        // Reset the previous typing animation
        clearInterval(typingInterval);
        popupMessage.textContent = "";

        let i = 0;

        clearInterval(typingInterval);
        popupMessage.textContent = "";

        typingInterval = setInterval(function() {
            popupMessage.textContent += content.message.charAt(i);
            i++;

            if (i >= content.message.length) {
                clearInterval(typingInterval);
        }
    }, 20);

// Click the message to reveal everything
popupMessage.onclick = function() {
    clearInterval(typingInterval);
    popupMessage.textContent = content.message;
};

        // Show the music player only for the radio
        birthdaySong.hidden = objectName !== "radio";

        // Toggle the music when clicking the radio
        if (objectName === "radio") {
            if (birthdaySong.paused) {
                birthdaySong.play();
        } else {
            birthdaySong.pause();
    }
}

        popup.hidden = false;
    });
});

// Close the pop-up
closeButton.addEventListener("click", function() {
    popup.hidden = true;
    clearInterval(typingInterval);
});