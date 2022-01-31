function gGet(url){
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send(null);
    return request.responseText;
}

function main(){
    let json_obj = JSON.parse(gGet("https://api.adviceslip.com/advice"))
    console.log(json_obj);
}

main()