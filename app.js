//Promise chanining

getLocation().then((data) => {
    return getCountry(data.country)
}).then((country) => {
    document.querySelector('#location').innerHTML = `${country.name}`
}).catch((err) => {
    console.log(`Error: ${err}`)
})