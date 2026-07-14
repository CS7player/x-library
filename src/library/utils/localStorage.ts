export class LocalStorage {

 static set<T>(key: string, value: T): void {
  try {
   const json = JSON.stringify(value);
   const encoded = btoa(json);
   localStorage.setItem(key, encoded);
  } catch (error) {
   console.error(`Failed to store "${key}" in localStorage`, error);
  }
 }

 static get<T>(key: string): T | null {
  try {
   const encoded = localStorage.getItem(key);
   if (encoded === null) {
    return null;
   }
   const json = atob(encoded);
   return JSON.parse(json) as T;
  } catch (error) {
   console.error(`Failed to read "${key}" from localStorage`, error);
   return null;
  }
 }

 static remove(key: string): void {
  localStorage.removeItem(key);
 }

 static clear(): void {
  localStorage.clear();
 }

 static has(key: string): boolean {
  return localStorage.getItem(key) !== null;
 }
}