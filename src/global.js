var logStatus = "unlog";

export function setStatus(status){
    logStatus = status
}

export function getStatus(){
    return logStatus;
}
