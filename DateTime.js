//Fomate for date in JS
// Date(YYYY,Month,Day,Hours,Minutes,Second,Millisecond);
// Rnage(YYYY,0-11,0-31,0-23,0-59,0-59,0-999)
//, let Coundown =new Date(2024,0,29,20,20,0,0);
//, console.log(`TILL:  ${Coundown.toString()}`);
//, let timeleft = Math.abs(Coundown.getTimezoneOffset()/60);
//, console.log(`TimeLeft:${timeleft}min`);

// const now = new Date(); // Get the current time
// const offset = now.getTimezoneOffset(); // Get the time zone offset

// const localTime = new Date(now.getTime() + offset * 60000); // Adjust UTC time to local time

// console.log("UTC time:", now.toUTCString());
// console.log("Local time:", localTime.toLocaleTimeString());

// const CurrentDateAndTime =new Date();
// let C_D_T = CurrentDateAndTime.toString();
// console.log(C_D_T);
// //OutPut: Fri Jan 26 2024 21:55:36 GMT+0530 (India Standard Time)

// const CurrentDateAndTime = new Date();
// console.log(`Type of Date() is:${typeof(CurrentDateAndTime)} and it returns ${CurrentDateAndTime}`);
// //outPut: Type of Date() is:object and it returns Fri Jan 26 2024 22:09:15 GMT+0530 (India Standard Time)


// const Clock = new Date(2024,0,26,23,58,58,58);
// const Time = new Date();
// console.log(Clock);
// console.log(Time);
// console.log(Clock.toString());
// console.log(Time.toString());
// //outPut:
// // 2024-01-26T18:28:58.058Z
// // 2024-01-26T18:29:53.830Z
// // Fri Jan 26 2024 23:58:58 GMT+0530 (India Standard Time)
// // Fri Jan 26 2024 23:59:53 GMT+0530 (India Standard Time)

// const time =new Date();
// console.log(time.toLocaleTimeString());
// console.log(time.toString());


const date = new Date();
console.log(date.toLocaleTimeString("en-US"));
// 1:55:04 AM

console.log(date.toLocaleTimeString("en-GB"));
// 01:55:04

console.log(date.toLocaleTimeString("ko-KR"));
// 오전 1:55:04

console.log(date.toLocaleTimeString("ar-EG"));
// ١:٥٥:٠٤ ص

console.log(date.toLocaleTimeString(["ban","id"]));
// 01.55.04















// const Time = new Date();
// console.log(Time.toTimeString());
// // 01:36:11 GMT+0530 (India Standard Time)

















// let TimeBomb = new Date();
// let MsgR = new Date();
// let HOURS='';//Created an variable which hold the hours..
// if(MsgR.getHours()>12){//Condition check to if the hours is greater then 12 it will show PM otherwise show AM
//      HOURS=(String)(MsgR.getHours()-12+" PM");
// }else{
//      HOURS=(String)(MsgR.getHours()+" AM");
// }
// let month=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
// console.log(`Bomb will blast with in ${HOURS} ${TimeBomb.getMinutes()} min ${TimeBomb.getSeconds()}s ${TimeBomb.getMilliseconds()} ms ${month[TimeBomb.getMonth()]} ${TimeBomb.getFullYear()}`);
// let MsgR=new Date("1995-12-25T13:15:30");//Declaration of data object with custom data..
// let HOURS='';//Created an variable which hold the hours..
// if(MsgR.getHours()>12){//Condition check to if the hours is greater then 12 it will show PM otherwise show AM
//      HOURS=(String)(MsgR.getHours()-12+"PM");
// }else{
//      HOURS=(String)(MsgR.getHours()+"AM");
// }
// const week =['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];//Created an array which give output as the week name according to getDay() method ...
// console.log(`DATE=${MsgR.getDate()} DAY=${week[MsgR.getDay()]} YEAR=${MsgR.getFullYear()} TIME=${HOURS}`);
//Expected result: DATE=25 DAY=Mon YEAR=1995 TIME=1PM
//
// let myBirthdat = new Date("09-08-2003");
// const day=['Sun','Mon','Tue','Wed','Ths','Fri','Sat'];
// console.log(`I born on ${day[myBirthdat.getDay()]}`);
// let todayis=new Date();
// const day=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
// console.log(`Date=${todayis.getDate()}, Day=${day[todayis.getDay()]} and Year=${todayis.getFullYear()} `);
// //getDay(); give output beween 0 to 6 ... as the week name sequance but starts from 0 as sunday 1 as monday and so on..
// let date = new Date();
// console.log(date.getDate());
// //Return an Intiger between 1 to 31...
// let date1 = Date();
// console.log(`Current Date=${date1} and it's type is ${typeof(date1)}`);
// //While using simple way to create the date it's gives the output as the STRING//
// let date = new Date();
// console.log(`Current Date=${date} and it's type is ${typeof(date)}`);
// // While using the new keyword to create the date.. it's gives the output as the OBJECT//