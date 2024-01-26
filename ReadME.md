### Date and Time in JavaScript
**`Date()`** constructor creates `Date` objects. When called as a function, it returns a $string$ representing the current time.
- Format of `Date()` method:<br>
**Date(** Year, Month, Day, Hours, Minutes, Second, Millisecond **);**<br>

  |Attribute|Range|
  |:---:|:---:|
  |Year|YYYY
  |Month|0-11
  |Day|1-31
  |Hours|0-23
  |Minutes|0-59
  |Second|0-59
  |Millisecond|0-999

```Javascript
const Clock = new Date(2024,0,26,23,58,58,58);
const Time = new Date();
console.log(Clock);
console.log(Time);
console.log(Clock.toString());
console.log(Time.toString());
//outPut:
// 2024-01-26T18:28:58.058Z
// 2024-01-26T18:29:53.830Z
// Fri Jan 26 2024 23:58:58 GMT+0530 (India Standard Time)
// Fri Jan 26 2024 23:59:53 GMT+0530 (India Standard Time)
```

```JavaScript
const CurrentDateAndTime = new Date();
console.log(`Type of Date() is:${typeof(CurrentDateAndTime)} and it returns ${CurrentDateAndTime}`);
//outPut: Type of Date() is:object and it returns Fri Jan 26 2024 22:09:15 GMT+0530 (India Standard Time)
```

## 'to' Method
- **`toString()`** <br>
*toString* method of `Date` return the value of `Date()` function into $String.$

  ```JavaScript
  const CurrentDateAndTime =new Date();
  let C_D_T = CurrentDateAndTime.toString();
  console.log(C_D_T);
  //outPut: Fri Jan 26 2024 21:55:36 GMT+0530 (India Standard Time)
  ```
- **`toLocalSrting()`**<br>
*toLocalString* method is similar to the `toString()` but in this method we have the option to select the local time zone formats. 

  |Time Zone|Locales|Format|
  |:---:|:---:|:---:|
  |US English|`en-US`|month-day-year 12-hour AM/PM|
  |British English|`en-GB`|day-month-year 24-hour|
  |Korean|`ko-KR`|year-month-day 12-hour AM/PM|
  |Arabic|`ar-EG`|24-hour in Arabic numerals|
  |Japanese|`ja-JP-u-ca-japanese`|day-month-year 24-hour|
  |Balinese|`["ban","id"]`|*Use when lang. not supported*|
  
  <br>
    
    ```JavaScript
    const date = new Date();
    console.log(date.toLocaleString("en-US"));
    // 1/27/2024, 12:41:20 AM
    
    console.log(date.toLocaleString("en-GB"));
    // 27/01/2024, 00:43:00
    
    console.log(date.toLocaleString("ko-KR"));
    // 2024. 1. 27. 오전 12:43:46
    
    console.log(date.toLocaleString("ar-EG"));
    // ٢٧‏/١‏/٢٠٢٤، ١:٢٠:٢٨ ص
    
    console.log(date.toLocaleString(["ban","id"]));
    // 27/1/2024, 01.22.36
    ```

- **`toTimeString()`**<br>
*toTimeString* method of `Date` return the value of `Date()` function into $String.$

  ```JavaScript
  const Time = new Date();
  console.log(Time.toTimeString());
  // 01:36:11 GMT+0530 (India Standard Time)
  ```
- **`toLocalTimeString()`**<br>
method is similar to the `toTimeString()` but in this method we have the option to select the local time zone formats. 

  |Time Zone|Locales|
  |:---:|:---:|
  |US English|`en-US`|
  |British English|`en-GB`|
  |Korean|`ko-KR`|
  |Arabic|`ar-EG`|
  |Japanese|`ja-JP-u-ca-japanese`|
  |Balinese|`["ban","id"]`|

  ```JavaScript 
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
  ```
  