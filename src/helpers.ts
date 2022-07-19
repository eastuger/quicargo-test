
export function degToRad(degrees)
{
    return parseFloat((degrees * (Math.PI/180)).toFixed(4))
}

export function getDistance(lat1, lng1, lat2, lng2): number {
    const theta = lng1 - lng2
    let distance = Math.sin(degToRad(lat1)) * Math.sin(degToRad(lat2)) + Math.cos(degToRad(lat1)) * Math.cos(degToRad(lat2)) * Math.cos(theta)

    distance = Math.acos(distance)
    distance = degToRad(distance)
    distance = distance * 60 * 1.1515

    return parseFloat((distance * distance * 1.609344).toFixed(3))
}