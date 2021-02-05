// Creates a JSON variable
let peopleInfo =
    {
        "people": [
            {
                "Name": "Jane Doe",
                "Sex": "f",
                "Born": "1876",
                "Died": "1956",
                "Father": "Petreus de Miliano",
                "Mother": "Sophia van Damme"
            },
            {
                "Name": "Jane Ramirez",
                "Sex": "f",
                "Born": "1102",
                "Died": "--",
                "Father": "Themistocles Merovech",
                "Mother": "Amara Flores"
            },
            {
                "Name": "Kelly Doe",
                "Sex": "m",
                "Born": "1902",
                "Died": "1929",
                "Father": "Warwick Warwick",
                "Mother": "Colita Warren"
            },
            {
                "Name": "David Smith",
                "Sex": "m",
                "Born": "2000",
                "Died": "Still alive",
                "Father": "Alan Smith",
                "Mother": "Leah Thompson"
            },
            {
                "Name": "John Smith",
                "Sex": "m",
                "Born": "1832",
                "Died": "1955",
                "Father": "Cole Doe",
                "Mother": "Jane Christensen"
            }]
    };

//Function match searches through JSON to find name
function match() {

    //grabs the name the user put in the search field
    let name = document.getElementById("names").value;

    //turns the name to uppercase to be easily compared
    name = name.toUpperCase();

    //answer returns a string
    let answer = "";

    //convert JSON to a string
    let string = JSON.stringify(peopleInfo);

    //parse the JSON string
    let obj = JSON.parse(string);


    //loops through parse JSON string to see if the name matches
    //the name the user is searching for
    for (let i = 0; i < 5; i++) {
        if (obj.people[i].Name.toUpperCase().includes(name) && name !== "") {
            answer += "Name: " + obj.people[i].Name + "<br>"
                + "Sex: " + obj.people[i].Sex + "<br>"
                + "Born: " + obj.people[i].Born + "<br>"
                + "Died: " + obj.people[i].Died + "<br>"
                + "Father: " + obj.people[i].Father + "<br>"
                + "Mother: " + obj.people[i].Mother + "<br>" + "<br>";

        }

    }

    //if no name is found lets user know
    if (answer === "") {
        answer = "No person found.";
    }

    //puts the answer in the p tag "info"
    document.getElementById("info").innerHTML = answer;
}
