
export function degToRad(degrees: number): number {
    return parseFloat((degrees * (Math.PI/180)).toFixed(4))
}

export function getDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
    const theta = lng1 - lng2
    let distance = Math.sin(degToRad(lat1)) * Math.sin(degToRad(lat2)) + Math.cos(degToRad(lat1)) * Math.cos(degToRad(lat2)) * Math.cos(theta)

    distance = Math.acos(distance)
    distance = degToRad(distance)
    distance = distance * 60 * 1.1515

    return parseFloat((distance * distance * 1.609344).toFixed(3))
}