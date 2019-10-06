// when availabilityRequest is called it'll make request to this url
// then I get my data.

export async function availabilityRequest() {
    // I decided to scope the data that is return to the current month
    // that is being returned.
    let url = "http://localhost:3500/api/get-list"
    try {
        // don't return until I get this data back
        console.log("this is working")
        let res = await fetch(url);
        let availabilityData = await res.json();
        return availabilityData;
    } catch (error) {
        // Normally I wouldn't log exceptions to the console. I probably log them to Elasticsearch
        // or bugsnag
        console.log("Oops: ", error);
    }
}