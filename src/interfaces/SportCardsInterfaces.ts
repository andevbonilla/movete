export interface SoccerCardInterface {
    teamLogo: string,
    teamName: string,
    position: string,
    goals: string,
    attendances: string,
    bestVideo: string
}

export interface BasketCardInterface {
    teamLogo: string,
    teamName: string,
    position: string,
    points: string,
    triples: string,
    bestVideo: string
}

export interface FootballCardInterface {
    teamLogo: string,
    teamName: string,
    position: string,
    yards: string,
    touchdownsPasses: string,
    bestVideo: string
}

export interface SwimmingCardInterface {
    distance: string,
    distanceMetric: "M" | "Mi" | "KM",
    time: string,
    timeMetric: "Seconds" | "Minutes" | "Hours",
    totalAchivements: string,
    bestAchivement: string,
    bestVideo: string
}

export interface AthleticCardInterface {
    maxSpeed: string,
    maxSpeedMetric: "Km/h" | "Mi/h",
    maxDistance: string,
    maxDistanceMetric: "mt" | "ft" | "Km" | "Mi",
    medals: string,
    marathons: string,
    bestVideo: string
}