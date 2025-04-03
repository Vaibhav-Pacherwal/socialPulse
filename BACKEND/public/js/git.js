function copyToClipboard() {
    const link = document.getElementById("profileLink").href;
    navigator.clipboard.writeText(link).then(() => {
        alert("Link copied to clipboard! ✅");
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}

function copyToClipboard2(repoUrl) {
    navigator.clipboard.writeText(repoUrl)
        .then(() => alert("Repo URL copied!"))
        .catch(err => console.error("Failed to copy: ", err));
}

function copyToClipboard3(repoUrl) {
    navigator.clipboard.writeText(`git clone ${repoUrl}`)
        .then(() => alert("Git clone command copied to clipboard!"))
        .catch(err => console.error("Failed to copy: ", err));
}

gsap.from(".avatara", {
    y: 20,
    opacity: 0,
    duration: 1.5, 
    scale: 0.2
});


gsap.from(".viewHead", {
    y: 20,
    opacity: 0,
    duration: 1.5, 
    scale: 0.2
});

gsap.from(".view", {
    y: 20,
    opacity: 0,
    duration: 1.5, 
    scale: 0.2
});

gsap.from(".lastUp", {
    y: 20,
    opacity: 0,
    duration: 1.5, 
    scale: 0.2
});

gsap.from(".count", {
    y: 20,
    opacity: 0,
    duration: 1.5, 
    scale: 0.2
});

gsap.from(".repos", {
    y: 20,
    opacity: 0,
    duration: 1.5, 
    scale: 0.2
});

gsap.from(".bio", {
    y: 20,
    opacity: 0,
    duration: 1.5, 
    scale: 0.2
});

gsap.from(".pie", {
    y: 20,
    opacity: 0,
    duration: 1.5, 
    scale: 0.2
});

gsap.from(".texting", {
    y: 20,
    opacity: 0,
    duration: 1.5, 
    scale: 0.2
});



