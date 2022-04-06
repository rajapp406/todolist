export enum ToDoStatus {
  completed = "completed",
  pending = "pending",
  canceled = "canceled",
}
export interface ToDoFilter {
  title: string;
  status: ToDoStatus;
}
