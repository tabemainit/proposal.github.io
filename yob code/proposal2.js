document.oncontextmenu = () => {
    alert("Don't right click");
    return false;
};

document.onkeydown = e => {
    if (e.key === "F12") {
        alert("Don't try to inspect element");
        return false;
    }
    if (e.ctrlKey && e.key === "u") {
        alert("Don't try to view page sources");
        return false;
    }
    if (e.ctrlKey && e.key === "c") {
        alert("Don't try to copy page element");
        return false;
    }
    if (e.ctrlKey && e.key === "v") {
        alert("Don't try to paste anything to page");
        return false;
    }
};

const comeback = document.getElementById("btn2");
const yes = document.getElementById("btn1");

const btt1 = document.getElementById('btt1');
const btt2 = document.getElementById('btt2');
const btt3 = document.getElementById('btt3');
const btt4 = document.getElementById('btt4');
const btt5 = document.getElementById('btt5');
const btt6 = document.getElementById('btt6');
const btt7 = document.getElementById('btt7');
const btt8 = document.getElementById('btt8');
const btt9 = document.getElementById('btt9');
const btt10 = document.getElementById('btt10');
const btt11 = document.getElementById('btt11');
const btt12 = document.getElementById('btt12');

const bbtt1 = document.getElementById('bbtt1');
const bbtt2 = document.getElementById('bbtt2');
const bbtt3 = document.getElementById('bbtt3');
const bbtt4 = document.getElementById('bbtt4');
const bbtt5 = document.getElementById('bbtt5');
const bbtt6 = document.getElementById('bbtt6');
const bbtt7 = document.getElementById('bbtt7');
const bbtt8 = document.getElementById('bbtt8');
const bbtt9 = document.getElementById('bbtt9');
const bbtt10 = document.getElementById('bbtt10');
const bbtt11 = document.getElementById('bbtt11');
const bbtt12 = document.getElementById('bbtt12');

const hands = document.getElementById('hands');
const sadcat = document.getElementById('sadcat');
const crying = document.getElementById('crying');
const sadboi = document.getElementById('sadboi');
const sadman = document.getElementById('sadman');
const hahahuhu = document.getElementById('hahahuhu');
const hang = document.getElementById('hang');
const sadsad = document.getElementById('sadsad');

// Video music sync
const videoMusic = document.getElementById('video-music');
sadcat.addEventListener('play', () => {
    videoMusic.play();
});
sadcat.addEventListener('pause', () => {
    videoMusic.pause();
});
sadcat.addEventListener('ended', () => {
    videoMusic.currentTime = 0; // Reset audio to start when video loops
});

comeback.addEventListener("click", () => {
    btt12.style.opacity = "1";
    comeback.style.opacity = "0";
});

btt12.addEventListener("click", () => {
    btt12.style.opacity = "0";
    bbtt3.style.opacity = "1";
    hands.style.opacity = "1";
});

bbtt3.addEventListener("click", () => {
    btt1.style.opacity = "1";
    bbtt3.style.opacity = "0";
    sadcat.style.opacity = "1";
    sadcat.play().catch((error) => {
        console.log("Video autoplay failed:", error);
    });
});

btt1.addEventListener("click", () => {
    btt1.style.opacity = "0";
    btt4.style.opacity = "1";
    hahahuhu.style.opacity = "1";
});

btt4.addEventListener("click", () => {
    btt2.style.opacity = "1";
    btt4.style.opacity = "0";
    sadboi.style.opacity = "1";
});

btt2.addEventListener("click", () => {
    btt2.style.opacity = "0";
    bbtt1.style.opacity = "1";
    crying.style.opacity = "1";
    yes.style.padding = "50px";
});

bbtt1.addEventListener("click", () => {
    bbtt8.style.opacity = "1";
    bbtt1.style.opacity = "0";
    sadman.style.opacity = "1";
});

bbtt8.addEventListener("click", () => {
    bbtt8.style.opacity = "0";
    btt6.style.opacity = "1";
    hang.style.opacity = "1";
});

btt6.addEventListener("click", () => {
    bbtt6.style.opacity = "1";
    btt6.style.opacity = "0";
    btt3.style.opacity = "1";
});

btt3.addEventListener("click", () => {
    btt1.style.opacity = "1";
    btt2.style.opacity = "1";
    btt3.style.opacity = "1";
    btt4.style.opacity = "1";
    btt5.style.opacity = "1";
    btt6.style.opacity = "1";
    btt9.style.opacity = "1";
    btt10.style.opacity = "1";
    btt11.style.opacity = "1";
    bbtt1.style.opacity = "1";
    bbtt2.style.opacity = "1";
    bbtt3.style.opacity = "1";
    bbtt4.style.opacity = "1";
    bbtt5.style.opacity = "1";
    bbtt6.style.opacity = "1";
    bbtt7.style.opacity = "1";
    bbtt9.style.opacity = "1";
});