while(true){
    let userNum = prompt("enter an odd number between 1 an 50");
    userNum = parseFloat(userNum);
    if(userNum % 2 === 1 && userNum <= 50 && userNum>=1){
        for (let i =1; i<50; i++){
            if (i === userNum){
                console.log(`Yikes, Skipping ${i}`);
                continue
            }
            console.log(`odd number: ${userNum}`)
        }
        break
    }


}
