const music = new Audio('audio/1.mp3')
// music.play();

// array of songs 
const songs = [
    {
        id: 1,
        songName: `On My Way <br> 
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/1.jpeg"
    },
    {
        id: 2,
        songName: `Faded <br> 
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/2.jpeg"
    },
    {
        id: 3,
        songName: `On & On <br> 
        <div class="subtitle">Cartoon, Daniel Levi</div>`,
        poster: "img/3.jpeg"
    },
    {
        id: 4,
        songName: `Khamoshiyan <br> 
        <div class="subtitle">Jeet Ganguli, Arijit Singh</div>`,
        poster: "img/4.jpeg"
    },
    {
        id: 5,
        songName: `Enna Sona <br> 
        <div class="subtitle">A.R. Rahman, Arijit Singh</div>`,
        poster: "img/5.jpeg"
    },
    {
        id: 6,
        songName: `Phir Mohabbat <br> 
        <div class="subtitle">Mohammed Irfan, Arijit Singh</div>`,
        poster: "img/6.jpeg"
    },
    {
        id: 7,
        songName: `Agar Tum Saath Ho <br> 
        <div class="subtitle">Alka Yagnik, Arijit Singh</div>`,
        poster: "img/7.jpeg"
    },
    {
        id: 8,
        songName: `Milne Hai Mujhse Aayi <br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/8.jpeg"
    },
    {
        id: 9,
        songName: `Dilbar <br> 
        <div class="subtitle">Neha Kakkar, Dhvani Bhanushali</div>`,
        poster: "img/9.jpeg"
    },
    {
        id: 10,
        songName: `Duniya <br> 
        <div class="subtitle">Akhil, Dhvani Bhanushali</div>`,
        poster: "img/10.jpeg"
    },
    {
        id: 11,
        songName: `Lagdi Lahore Di <br> 
        <div class="subtitle">Guru Randhawa, Tulsi Kumar</div>`,
        poster: "img/11.jpeg"
    },
    {
        id: 12,
        songName: `Sanu Ek Pal Chain <br> 
        <div class="subtitle">Rahat Fateh Ali Khan, Tanishk Bagchi</div>`,
        poster: "img/12.jpeg"
    },
    {
        id: 13,
        songName: `O Saathi <br> 
        <div class="subtitle">Atif Aslam</div>`,
        poster: "img/13.jpeg"
    },
    {
        id: 14,
        songName: `Vaaste <br> 
        <div class="subtitle">Dhvani Bhanushali</div>`,
        poster: "img/14.jpeg"
    },
    {
        id: 15,
        songName: `Lut Gaye <br> 
        <div class="subtitle">Jubin Nautiyal, Tanishk Bagchi</div>`,
        poster: "img/15.jpeg"
    },
    {
        id: 16,
        songName: `Deva Deva <br> 
        <div class="subtitle">Pritam, Arijit Singh, Amitabh Bhattacharya</div>`,
        poster: "img/16.jpeg"
    },
    {
        id: 17,
        songName: `Sakhiyaan <br> 
        <div class="subtitle">Maninder Buttar</div>`,
        poster: "img/17.jpeg"
    },
    {
        id: 18,
        songName: `Pasoori <br> 
        <div class="subtitle">Shae Gill, Ali Sethi</div>`,
        poster: "img/18.jpeg"
    },
    {
        id: 19,
        songName: `Insane <br> 
        <div class="subtitle">AP Dhillon, Shinda Kahlon, Gurinder Gill</div>`,
        poster: "img/19.jpeg"
    },
    {
        id: 20,
        songName: `Hawayein <br> 
        <div class="subtitle">Pritam, Arijit Singh</div>`,
        poster: "img/20.jpeg"
    }
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
});

// Play and Pause button
// Movement of music bars 

let masterPlay=document.getElementById('masterPlay');
let wave=document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if(music.paused || music.currentTime<=0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    }
    else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

// For the playlist section 

const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = "rgba(105, 105, 105, 0.0)";
    })
}
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}

// Change in song_name, poster, play and pause in playlist section 

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playlistPlay')).forEach((e)=> {
    e.addEventListener('click', (el)=>{
        index = el.target.id;
        music.src=`audio/${index}.mp3`;
        // poster_master_play.src=`img/${index}.jpeg`;
        music.play()
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) => {
            return els.id==index;
        });

        songTitles.forEach(elss => {
            let { songName, poster } = elss;
            title.innerHTML = songName;
            poster_master_play.src = poster;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgba(105, 105, 105, .1)";
        makeAllPlays();
        el.target.classList.remove('bi-play-circle-fill')
        el.target.classList.add('bi-pause-circle-fill')
        wave.classList.add('active1');
    });
})

// Seek (Time)

let currentStart=document.getElementById('currentStart');
let currentEnd=document.getElementById('currentEnd');
let seek=document.getElementById('seek');
let bar2=document.getElementById('bar2');
let dot=document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', ()=> {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if(sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if(sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;

    let seekbar = seek.value;
    bar2.style.width=`${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration / 100;
});

// Volume bar

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

// Next and previous buttons 

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index=Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src=`audio/${index}.mp3`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id==index;
    });

    songTitles.forEach(elss => {
        let { songName, poster } = elss;
        title.innerHTML = songName;
        poster_master_play.src = poster;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgba(105, 105, 105, .1)";
    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill')
    el.target.classList.add('bi-pause-circle-fill')
    wave.classList.add('active1');
});

next.addEventListener('click', () => {
    index ++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }
    music.src=`audio/${index}.mp3`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id==index;
    });

    songTitles.forEach(elss => {
        let { songName, poster } = elss;
        title.innerHTML = songName;
        poster_master_play.src = poster;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgba(105, 105, 105, .1)";
    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill')
    el.target.classList.add('bi-pause-circle-fill')
    wave.classList.add('active1');
});






// Scroll popular songs left and right

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_songs = document.getElementsByClassName('pop_songs')[0];

pop_song_right.addEventListener('click', () => {
    pop_songs.scrollLeft += 330;
})

pop_song_left.addEventListener('click', () => {
    pop_songs.scrollLeft -= 330;
})

// Scroll popular artists left and right

let pop_artist_left = document.getElementById('pop_artist_left');
let pop_artist_right = document.getElementById('pop_artist_right');
let item = document.getElementsByClassName('item')[0];

pop_artist_right.addEventListener('click', () => {
    item.scrollLeft += 330;
})

pop_artist_left.addEventListener('click', () => {
    item.scrollLeft -= 330;
})