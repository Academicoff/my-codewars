function starSign(date) {
    date.setFullYear(2020);
    let day = date.getDay();
    let month = date.getMonth();
    switch(month){
        case 0:  return day < 21 ? "Capricorn" : "Aquarius";
        case 1:  return day < 20 ? "Aquarius" : "Pisces";
        case 2:  return day < 21 ? "Pisces" : "Aries";
        case 3:  return day < 21 ? "Aries" : "Taurus";
        case 4:  return day < 22 ? "Taurus" : "Gemini";
        case 5:  return day < 22 ? "Gemini" : "Cancer";
        case 6:  return day < 23 ? "Cancer" : "Leo";
        case 7:  return day < 24 ? "Leo" : "Virgo";
        case 8:  return day < 24 ? "Virgo" : "Libra";
        case 9:  return day < 24 ? "Libra" : "Scorpio";
        case 10: return day < 23 ? "Scorpio" : "Sagittarius";
        case 11: return day < 22 ? "Sagittarius" : "Capricorn";
    }
}
