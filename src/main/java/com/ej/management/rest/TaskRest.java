package com.ej.management.rest;

import com.ej.management.domain.Task;
import com.ej.management.service.TaskService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/task")
public class TaskRest {

    private TaskService taskService;

    public TaskRest(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping(value = "/")
    public Iterable<Task> getAllTasks() {
        System.out.println(taskService.findAllTasks());
        return taskService.findAllTasks();

    }

    @GetMapping(value = "/{taskId}")
    public Task getTaskById(@PathVariable Long taskId) {
        return taskService.findTaskById(taskId).orElseGet(Task::new);
    }


    @PostMapping(value = "/")
    public Task saveTask(@RequestBody Task task) {
        System.out.println(task);
        return taskService.saveTask(task);
    }


    @PutMapping(value = "/")
    public Task updateTask(@RequestBody Task task) {
        return taskService.saveTask(task);
    }

    @DeleteMapping(value = "/{taskId}")
    public void deleteTask(@PathVariable Long taskId) {
        taskService.deleteTask(taskId);
    }

}
