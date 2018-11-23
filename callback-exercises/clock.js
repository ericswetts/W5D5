class Clock {
  constructor() {
    // 1. Create a Date object.
    let date = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    // 3. Call printTime.
    this.printTime();
    // 4. Schedule the tick at 1 second intervals.  
    setInterval(this.tick(), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    const timeString = [this.hours, this.minutes, this.seconds].join(':');
    // Use console.log to print it.
    console.log(timeString);
  }

  tick() {
    this.seconds += 1;
    // 1. Increment the time by one second.
    this.increment_second();
    this.increment_minute();
    this.increment_hour();
    // 2. Call printTime.
    this.printTime();
  }
  
  increment_second(){
    if (this.seconds === 60){
      this.seconds = 0;
      this.minutes += 1;
    }
  }
  
  increment_minute(){
    if (this.minutes === 60){
      this.minutes = 0;
      this.hours += 1;
    }
  }
  
  increment_hour() {
    if (this.hours === 24){
      this.hours = 0;
    }
  }
}

const clock2 = new Clock();
clock2.printTime();