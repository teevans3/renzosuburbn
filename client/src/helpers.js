// am i still using this?
const snippet = (articleTitle) => {
    if (articleTitle.length > 30) {
        return articleTitle.slice(0, 30) + '...';
    }
    return articleTitle
}


const getDate = (dateObj) => {
    // var month = dateObj.getUTCMonth() + 1; //months from 1-12
    // var date = dateObj.getUTCDate();
    // var year = dateObj.getUTCFullYear();
    // // var day = dateObj.getDay();
    
    // const newDate =  month + "/" + date + "/" + year;
    // return newDate;

    const monthNames = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
    const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesay", "Thursday", "Friday", "Saturday"];

    var month = dateObj.getUTCMonth();
    var date = dateObj.getUTCDate();
    var day = dateObj.getUTCDay();

    let ordinal = 'th';
    if (date === 1 || date === 21 || date === 31) {
        ordinal = 'st';
    }
    if (date === 2 || date === 22) {
        ordinal = 'nd';
    }
    if (date === 3 || date === 23) {
        ordinal = 'st';
    }
    const newDate = `${weekdayNames[day]}, ${monthNames[month]} ${date + ordinal}`
    return newDate;
};

// const scrollTo = (h) => {
//     // NEED TO CHANGE THIS TO ACTUAL WEBSITE NAME BEFORE DEVELOPMENT. NOT LOCALHOST
//     // if (window.location.href !== 'http://localhost:3000/') {
//     //     // window.history.push('http://localhost:3000/#about')
//     //     window.history.pushState({h}, '', 'http://localhost:3000/#about')
//     // } else {
//     //     document.getElementById(h).scrollIntoView({behavior: 'smooth'});
//     // }
//     if (window.location.href === 'http://localhost:3000/') {
//         document.getElementById(h).scrollIntoView({behavior: 'smooth'});
//     }
// }

export {getDate};

export {snippet}

// export {scrollTo};