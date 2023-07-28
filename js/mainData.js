const mainData = () => {
    fetch('https://anime-f0219-default-rtdb.europe-west1.firebasedatabase.app/db.json')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data.anime);
        })
}

mainData()