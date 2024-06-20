async function getData() {

    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=e4c05ca7-82a9-420d-a55d-f9cd42538f0d&offset=0")
        .then(data => data.json())
        .then(data => {
            if(data.status != "success")return;

            const matchesList = data.data;

            if(!matchesList)return [];

            const releventData = matchesList.map(match => `${match.name}, ${match.status}`);

            console.log(releventData);
            document.getElementById("matches").innerHTML = releventData.map(match => `<li> ${match}</li>`).join('');

            return releventData;

        })
        .catch(e => console.log(e));
}
getData();

