/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const cards = document.querySelector('.cards');

const followersArray = [
    'tetondan',
    'thetaylorjacobs',
    'justsml',
    'dustinmyers',
    'bigknell'
];

followersArray.forEach((user, item) =>
    axios.get(`https://api.github.com/users/${followersArray[item]}`)
    .then(data => {
        const cardInfo = Card(data.data);
        cards.appendChild(cardInfo)
    })
    .catch(error => console.log('ERORR OCCURED: ', error))
)

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

function Card(Obj) {

    const cardDiv = document.createElement('div')
    const image = document.createElement('img')
    const cardInfoDiv = document.createElement('div')
    const h3Name = document.createElement('h3')
    const pUsername = document.createElement('p')
    const pLocation = document.createElement('p')
    const pProfile = document.createElement('p')
    const aProfile = document.createElement('a')
    const pFollowers = document.createElement('p')
    const pFollowing = document.createElement('p')
    const pBio = document.createElement('p')

    cardDiv.classList.add('card')
    cardInfoDiv.classList.add('card-info')
    h3Name.classList.add('name')
    pUsername.classList.add('username')

    cardDiv.appendChild(image)
    cardDiv.appendChild(cardInfoDiv)
    cardInfoDiv.appendChild(h3Name)
    cardInfoDiv.appendChild(pUsername)
    cardInfoDiv.appendChild(pLocation)
    cardInfoDiv.appendChild(pProfile)
    cardInfoDiv.appendChild(pFollowers)
    cardInfoDiv.appendChild(pFollowing)
    cardInfoDiv.appendChild(pBio)
    pProfile.appendChild(aProfile)

    image.src = Obj.avatar_url
    h3Name.textContent = Obj.name
    pUsername.textContent = Obj.login
    pLocation.textContent = `Location: ${Obj.location}`
    aProfile.textContent = `Profile: ` + Obj.html_url
    pFollowers.textContent = `Followers: ${Obj.followers}`
    pFollowing.textContent = `Following: ${Obj.following}`
    pBio.textContent = `Bio: ${Obj.bio}`

    return cardDiv
}