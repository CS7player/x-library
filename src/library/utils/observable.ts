export interface CurrentState<T> {
 modified: number;
 state: T
}

export class Observable<T extends Observable<T>> {
 private currentState: CurrentState<T> = { modified: 0, state: this as unknown as T };
 snapshot = () => this.currentState;
 //put the event in the set
 private listenerSet = new Set<() => void>();
 // when subscribe add then and return delete method;
 subscribe = (events: () => void) => {
  this.listenerSet.add(events);
  return () => {
   this.listenerSet.delete(events);
  }
 }
 //iterate and trigger each event;
 protected notify() {
  this.listenerSet.forEach(event => event());
 }
 protected uiRender() {
  this.currentState = {
   modified: this.currentState.modified + 1,
   state: this as unknown as T
  };
  this.notify();
 }
}