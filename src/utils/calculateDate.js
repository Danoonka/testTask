function getDuration(createdDate){
    let date = new Date();
    let createdAt = new Date(createdDate)
    let duration = date - createdAt;
    return (Math.floor(duration/(86400 * 365*1000)))
}

export default getDuration;