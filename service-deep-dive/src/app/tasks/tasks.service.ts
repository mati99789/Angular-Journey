import {inject, Injectable, signal} from "@angular/core";
import {Task, TaskStatus} from "./task.model";
import {LoggingService} from "../logging.service";

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = signal<Task[]>([])
  private loggingService = inject(LoggingService)

  allTasks = this.tasks.asReadonly()

  addTask(taskData: { title: string, description: string }) {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN'
    }
    this.tasks.update((oldTasks) => [...oldTasks, newTask])
    this.loggingService.log(`Added task: ${ newTask.title }`)

  }

  updateTasksStatus(taskId: string, status: TaskStatus) {
    this.tasks.update((oldTasks) => oldTasks.map(task => task.id === taskId ? {...task, status: status} : task));
    this.loggingService.log(`Updated task status to: ${ status }`)
  }


}
