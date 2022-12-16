const jokeUrl = 'https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit'
let joke = '';
const speech_btn = document.getElementById('speech_btn');
function textToSpeech(){
    VoiceRSS.speech({
        key: 'b26597acb7674e90933980ef4d1e533c',
        src: joke,
        hl: 'en-us',
        v: 'Linda',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}



async function getJoke(){
    try{
        const response = await fetch(jokeUrl).then((jokes)=>{ return jokes.json()});
        console.log(response);
        if(response.setup){
            joke = `${response.setup}... ${response.delivery}`;
        }else{
            joke = response.joke;
        }
        console.log('Joke',joke)
        textToSpeech();
 
    }
    catch(e){
        console.log('Error :',e)
    }

}

speech_btn.addEventListener('click',getJoke)



