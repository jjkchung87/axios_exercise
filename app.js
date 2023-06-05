const form = document.querySelector('form');
const input = document.querySelector('input');
const deleteButton = document.querySelector('#deleteButton');
const gifSection = document.querySelector('#gifSection');
//API key: F7QcHqhjkj92gQUbZYbxSRL5JWQC3tGX

async function getGif(input){
    const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: input,
            api_key: "F7QcHqhjkj92gQUbZYbxSRL5JWQC3tGX"
            }
    });
    const gifArray = res.data.data
    const gif = gifArray[Math.floor(Math.random()*gifArray.length)];
    const imageURL = gif.images.fixed_height_small.url;
    createImage(imageURL);

}

// getGif('hilarious');

function createImage (imageURL){
    const newImage = document.createElement('IMG');
    newImage.setAttribute('src',imageURL)
    gifSection.append(newImage);
}


form.addEventListener('submit',function(event){
    event.preventDefault();
    getGif(input.value);
    input.value = "";
})

deleteButton.addEventListener('click',function(){
    gifSection.innerHTML='';
})

