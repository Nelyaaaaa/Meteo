'use strict';

export const weekDayNames = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche"
];

export const monthNames = [
    "Janvier",
    "Fevrier",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Decembre"
];

export const getDate = function (dateUnix, timezone) {
    const date = new Date((dateUnix + timezone) * 1000);
    const weekDayName = weekDayNames[date.getUTCDay()];
    const monthName = monthNames[date.getUTCMonth()];

    return `${weekDayName} ${date.getUTCDate()} ${monthName}`;
}

export const getTime = function (timeUnix, timezone) {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();

    return `${hours}h${minutes}`;
}

export const getHours = function (timeUnix, timezone) {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();

    return `${hours}h`;
}

export const mps_to_kmh = mps => {
    const mph = mps * 3600;
    return mph / 1000;
}

export const aqiText = {
    1: {
        level: "Bon",
        message: "La qualitée de l'air est considéré comme satisfaisante et la pollution de l'air "
    },
    2: {
        level: "Moyen",
        message: "La qualité de l'air est acceptable. Toutefois, les personnes sensibles peuvent être à risque."
    },
    3: {
        level: "Modéré",
        message: "Les personnes des groupes sensibles peuvent ressentir des effets sur la santé. Le grand public n'est pas susceptible d'être touché"
    },
    4: {
        level: "Médiocre",
        message: "La qualité de l'air est médiocre. Les groupes sensibles et d'autres peuvent subir des effets négatif sur la santé"
    },
    5: {
        level: "Extrêment médiocre",
        message: "La qualité de l'air est extrêmement médiocre. Tout le monde est plus susceptible de subir des effets négatifs"
    }
}
