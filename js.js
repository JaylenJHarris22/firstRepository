function getcomp (){
    let rps = ['rock', 'paper', 'scissors'];
    let choice = rps[Math.floor(Math.random() * rps.length)];
    console.log(choice);
}
getcomp()