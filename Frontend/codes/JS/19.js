


function audit(logs , riskthreshold){

    let filtered = logs.filter(
        item => {
            return item.severity === "HIGH" || item.severity === "CRITICAL";
        }
    );

    let transformed = filtered.map(
        (item) => {
            if(item.severity === "CRITICAL"){
                item.riskscore = 50;
            }
            else{
                item.riskscore = 20;
            }
            item.riskscore += item.failedAttempts * 5;

            if(item.action === "UNAUTHORIZED_ACCESS"){
                item.riskscore *= 2;
            }

            return {
                id : item.id,
                user : item.user,
                riskScore : item.riskscore,
                severity : item.severity
            };
        }
    )

    const total = transformed.reduce(
        (acc , item) => {
            return acc + item.riskScore;
        },0);

    const high = transformed.filter(
        (item) => {
            return item.riskScore > riskthreshold;
        }
    );

    const counts = transformed.reduce(
        (acc , item) => {
            
            acc[item.severity] = (acc[item.severity] || 0) +1;
            return acc;
        },{});

    return {
        flaggedLogs : transformed,
        totalRiskScore : total,
        highRiskUsers : high,
        severityCounts : counts
    }
    
}


const rawLogs = [
  { id: "L101", user: "ali_k", action: "LOGIN_FAIL", severity: "LOW", failedAttempts: 1 },
  { id: "L102", user: "sara_m", action: "UNAUTHORIZED_ACCESS", severity: "HIGH", failedAttempts: 3 },
  { id: "L103", user: "zayn_a", action: "DATA_EXPORT", severity: "CRITICAL", failedAttempts: 0 },
  { id: "L104", user: "sara_m", action: "PASSWORD_RESET", severity: "MEDIUM", failedAttempts: 0 },
  { id: "L105", user: "admin_dev", action: "UNAUTHORIZED_ACCESS", severity: "CRITICAL", failedAttempts: 4 }
];

const threshold = 50;

console.log(audit(rawLogs , threshold));
