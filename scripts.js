let currentPage = 0;
let username = '';

const story = [
    () => `Hi ${username}, pasti si rehan yang agak batu ini udah bilang/ngasih kamu sesuatu ya?`,
    () => {
        document.getElementById('choices').classList.remove('hidden');
        document.getElementById('next-button').classList.add('hidden');
    },
    () => `hahaha emang batu sih dia, udah dibilang jangan malah ngeyel`,
    () => `well kalo misalnya kamu udah buka ini berarti si rehan udah gabisa lagi buat nahan rasa kagumnya, emang agak batu ni orang, salah banget malah confess`,
    () => `oh iya ni pesan aku bikin sebelum si batu ini confess, jadi ya kalo bisa di tempeleng aja ni si batu ini`,
    () => `oh iya back to the topic, well yap i have crush on you, but I don’t plan on being your boyfriend because I know myself. Actually, I am happy with your choice.`,
    () => `And you should know that you’re the reason I always try to stay happy, kalo kamu tanya kenapa aku bisa suka, well mungkin apa yang aku kasih bisa menjelaskan semua, and thanks for coming into my life and bringing joy and color to it.`,
    () => `well lega sih rasanya confess, walaupun mungkin di satu sisi ini bisa jadi ide yang buruk`,
    () => `makasih buat semuanya ya ${username}, bener bener makasih banget. See you again on the next journey`,
    () => {
        document.getElementById('next-button').innerText = 'Finish';
        document.getElementById('next-button').onclick = () => {
            alert('The End');
            location.reload();
        };
    }
];

function startStory() {
    username = document.getElementById('username-input').value;
    if (username.trim() !== '') {
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('story-screen').classList.remove('hidden');
        nextPage();
    } else {
        alert('Please enter your name to continue.');
    }
}

function nextPage() {
    if (currentPage < story.length) {
        const pageContent = story[currentPage]();
        if (typeof pageContent === 'string') {
            document.getElementById('story-text').innerText = pageContent;
        }
        currentPage++;
    }
}

function handleChoice(choice) {
    document.getElementById('choices').classList.add('hidden');
    document.getElementById('next-button').classList.remove('hidden');

    if (choice === 'yes') {
        currentPage++;
        nextPage();
    } else {
        document.getElementById('story-text').innerText = 'Ah, okay. Maybe next time then!';
    }
}
