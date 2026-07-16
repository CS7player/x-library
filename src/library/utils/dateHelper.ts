export interface DateInfo {
 day: number;
 shortDayName: string;
 unix_date_format: string;
 display_date_format: string;
 display_dt_format: string;
 format_day: string;
 month: number;
 format_month: string;
 year: number;
}

export class DateHelper {
 static readonly weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

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
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
 }

 static getDMY(date = new Date()): string {
  return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
 }

 static getHMS(date = new Date()): string {
  return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
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

 static getFormattedDtInfo(date = new Date()): DateInfo {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const ymd = `${year}-${month}-${day}`;
  return {
   day: date.getDay(),
   shortDayName: this.weekDays[date.getDay()],
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