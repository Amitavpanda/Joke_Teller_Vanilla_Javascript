const button = document.getElementById("button");
const audioElement = document.getElementById("audio");

// getJokes function
const tellMe = (joke) => {
  VoiceRSS.speech({
    key: "9a0ad9d1bd864beaa608a61da26fd463",
    src: joke,
    hl: "en-us",
    v: "Linda",
    r: 0,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
};

const getJokes = async () => {
  const apiUrl =
    "https://v2.jokeapi.dev/joke/Programming,Dark?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
  let joke = "";
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data.setup) {
      joke = `${data.setup} ..... ${data.delivery}`;
    } else {
      joke = data.joke;
    }
    //  tell me a joke
    tellMe(joke);
    // enable/disable button
    toggleButton();
  } catch (error) {
    console.log("the error", error);
  }
};

button.addEventListener("click", getJokes);
