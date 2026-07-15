export interface DateInfo {
 day: number;
 dayName: string;
 shortDayName: string;
 fullDayName: string;
 unix_date_format: string;
 display_date_format: string;
 display_dt_format: string;
 format_day: string;
 month: number;
 format_month: string;
 year: number;
}

export class DateHelper {
 static readonly singleLetterDays = ["S", "M", "T", "W", "T", "F", "S"];
 static readonly weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
 static readonly fullWeekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
 ];

 private static pad(value: number): string {
  return value.toString().padStart(2, "0");
 }

 static getDay(date: string): string {
  return date.split("-")[2];
 }

 static getDayName(date: string): string {
  return new Date(date).toLocaleDateString("en-US", { weekday: "short" });
 }

 static getShortMonthName(date: string): string {
  return new Date(date).toLocaleDateString("default", { month: "short" });
 }

 static getFullMonthName(date: string): string {
  return new Date(date).toLocaleDateString("default", { month: "long" });
 }

 static getYear(date: string): string {
  return new Date(date).getFullYear().toString();
 }

 static getYMD(date = new Date()): string {
  return `${date.getFullYear()}-${this.pad(date.getMonth() + 1)}-${this.pad(date.getDate())}`;
 }

 static getDMY(date = new Date()): string {
  return `${this.pad(date.getDate())}/${this.pad(date.getMonth() + 1)}/${date.getFullYear()}`;
 }

 static getHMS(date = new Date()): string {
  return `${this.pad(date.getHours())}:${this.pad(date.getMinutes())}:${this.pad(date.getSeconds())}`;
 }

 static convertDMYToYMD(date: string): string {
  const [day, month, year] = date.split("/");
  return day && month && year ? `${year}-${month}-${day}` : "";
 }

 static convertYMDToDMY(date: string): string {
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
 }

 static previousDate() {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return {
   year: date.getFullYear(),
   month: date.getMonth() + 1,
   day: date.getDate(),
  };
 }

 static futureDate() {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  return {
   year: date.getFullYear(),
   month: date.getMonth() + 1,
   day: date.getDate(),
  };
 }

 static getMonthDates(month: number, year: number): DateInfo[] {
  const start = new Date(year, month - 1, 1);
  const end = new Date(year, month, 0);
  return this.getDatesBetweenDates(start, end);
 }

 static getDatesBetweenDates(start: Date, end: Date, weekDays: number[] = []): DateInfo[] {
  const dates: DateInfo[] = [];
  const current = new Date(start);
  while (current <= end) {
   if (!weekDays.length || weekDays.includes(current.getDay())) {
    dates.push(this.getFormattedDtInfo(current));
   }
   current.setDate(current.getDate() + 1);
  }
  return dates;
 }

 static getFirstDayAndLastDateOfMonth(month: number, year: number) {
  return {
   start_date: this.getYMD(new Date(year, month - 1, 1)),
   end_date: this.getYMD(new Date(year, month, 0)),
  };
 }

 static getCurrentMonthFirstAndLastDate() {
  const now = new Date();
  return {
   firstDay: this.getYMD(new Date(now.getFullYear(), now.getMonth(), 1)),
   lastDay: this.getYMD(new Date(now.getFullYear(), now.getMonth() + 1, 0)),
  };
 }

 static getTimeFormat(minutes: number): string {
  if (minutes == null) return "00:00";
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${this.pad(hrs)}:${this.pad(mins)}`;
 }

 static getWeekWiseDates(start: Date, end: Date, weekEndDay = 0): Record<string, DateInfo[]> {
  const weeks: Record<string, DateInfo[]> = {};
  const current = new Date(start);
  let week = 1;
  while (current <= end) {
   const key = `week${week}`;
   (weeks[key] ??= []).push(this.getFormattedDtInfo(current));
   if (current.getDay() === weekEndDay) {
    week++;
   }
   current.setDate(current.getDate() + 1);
  }
  return weeks;
 }

 static getFormattedDtInfo(date = new Date()): DateInfo {
  const day = this.pad(date.getDate());
  const month = this.pad(date.getMonth() + 1);
  const year = date.getFullYear();
  const ymd = `${year}-${month}-${day}`;
  return {
   day: date.getDay(),
   dayName: this.singleLetterDays[date.getDay()],
   shortDayName: this.weekDays[date.getDay()],
   fullDayName: this.fullWeekDays[date.getDay()],
   unix_date_format: ymd,
   display_date_format: `${day}/${month}/${year}`,
   display_dt_format: `${day}/${month}/${year}`,
   format_day: day,
   month: date.getMonth() + 1,
   format_month: month,
   year,
  };
 }

}