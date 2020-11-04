function Artist (name, country, genre) {
    this.name = name;
    this.country = country;
    this.genre = genre;
    }

    let artists = [];
    const artistA = new Artist("The Mowgli's","USA", "Alternative rock");
    const artistB = new Artist("Mando Diao", "Sweden", "Indie rock");
    const artistC = new Artist("Good Old War", "USA", "Indie folk");
    const artistD = new Artist("St Lucia", "South Africa", "Synthpop");
    const artistE = new Artist("The Rifles", "England", "Indie rock");

    artists.push(artistA);
    artists.push(artistB);
    artists.push(artistC);
    artists.push(artistD);
    artists.push(artistE);

    console.log("All artists: ");
    console.log(artists);

let stringArtistA = "Kids in love will do almost everything. Kissing in the dark, scared to talk about anything. Kids in love with the girl on the tire swing. Growing up now, growing up now quickly.";
let stringArtistB = "I'm falling in love with your favorite song, I'm gonna sing it all night long, I'm gonna dance with somebody, dance with somebody, dance, dance, dance";
let stringArtistC = "That's the last I'll compromise. Before your perfect eyes. It's the dream that wakes you up. There's nothing like sleeping alone so much";
let stringArtistD = "How long 'til we learn. Dancing is dangerous. How long 'til we find. The devil inside of us. How high is too low. We're not that young. So we're never gonna stop. Never gonna stop. Never gonna stop. Until we break it";
let stringArtistE = "Winter calls the start of june until the end of May. Cause any rule I've ever had I've always had to break. I find I sit around trying to compensate. I feel alright at times but only when I'm drinking";

    function perform() {
    console.log(stringArtistA);
    }

    const contentContainer = document.querySelector("#artist");
    const cardCreate = (artist) => {
        const card = document.createElement("div")
        card innerHTML = `
        <div class = "card" style="border-style: solid">
        <div class = "cardHolder">
        <h2 class = "cardTitle"> <strong>${artist.name}</strong></h2>
        <p class = "cardText"> <strong>Country:</strong> ${artist.country}</p>
        <p class = "cardText"> <strong>Genre:</strong> ${artist.genre}</p>

        </div>
    }