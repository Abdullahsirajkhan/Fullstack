
function session(sessions){
    let filteredsessions = sessions.filter(
        (item) => {
            return item.status === "COMPLETED";   
        }
    )

    console.log(filteredsessions);

    let transformedsessions = filteredsessions.map(
        (item) => {
            item.durationMinutes = item.durationSeconds / 60;
            item.score = item.actionsCount*10 + item.durationMinutes*2;
            if(item.isVIP){
                item.score*=1.5;
            }
            return item;
        }
        

        
    ) 

}

const rawSessions = [
  { id: "S1", userId: "U101", status: "COMPLETED", durationSeconds: 300, actionsCount: 5, isVIP: false },
  { id: "S2", userId: "U102", status: "ABANDONED", durationSeconds: 120, actionsCount: 2, isVIP: false },
  { id: "S3", userId: "U103", status: "COMPLETED", durationSeconds: 600, actionsCount: 12, isVIP: true },
  { id: "S4", userId: "U101", status: "FAILED", durationSeconds: 45, actionsCount: 1, isVIP: false },
  { id: "S5", userId: "U104", status: "COMPLETED", durationSeconds: 180, actionsCount: 4, isVIP: false }
];


session(rawSessions);