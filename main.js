

async function getImages() {
    const url = 'https://api.artic.edu/api/v1/artworks?ids=146701,16815,16823,27992,16779,28096,11371,6198,16834,99793,120081,16821,209942,69533,121909,29728,6201,16818&fields=id,title,image_id,artist_title,date_display,medium_display,thumbnail'
    let result = await fetch(url);
    let response = await result.json();
    console.log(response)
    var imagedata = []
    response.data.forEach((x, i) => imagedata.push([x.id, x.title, response.config.iiif_url + '/' + x.image_id + '/full/843,/0/default.jpg',x.artist_title,x.date_display,x.medium_display,x.thumbnail]));
    console.log(imagedata)

    for(let image of imagedata){

        let body = document.getElementById("images")

        let div = document.createElement('div')
        div.id = "div"+ image[0]
        div.classList.add("card");
        body.appendChild(div)

        //add artwork
        let img = document.createElement('img')
        img.src = image[2]
        img.id = image[0]
        img.alt = image[6]['alt_text']
        img.classList.add('img-image')
        div.appendChild(img)

        //add title
        let title = document.createElement("h3")
        title.textContent = image[1]
        div.appendChild(title)

        // date
        let date = document.createElement('h5')
        date.textContent = image[4]
        div.appendChild(date)
        
        //add artist details
        let artist = document.createElement("h5")
        artist.textContent = image[3]
        div.appendChild(artist)

        // medium
        let medium = document.createElement('h5')
        medium.textContent = "Medium: " + image[5]
        div.appendChild(medium)
    }

}

getImages()