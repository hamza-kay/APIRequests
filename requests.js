const getCountry = (countryCode) => {
    return fetch(`http://restcountries.eu/rest/v2/all`).then((response) => {
        if (response.status === 200) {
            return response.json()
            
        } else {
            throw new Error('Unable to fetch country info')
        }

    }).then((data) => {
        return data.find((country) => country.alpha2Code === countryCode)
    })
}


const getLocation = (() => {
    return fetch('http://ipinfo.io/json?token=36bcd2ed2edad2').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else { 
            throw new Error('Unable to fetch info')
        }
    })
})


