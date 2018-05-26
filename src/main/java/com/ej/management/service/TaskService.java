package com.ej.management.service;

import com.ej.management.domain.Task;

import java.util.Optional;

public interface TaskService {

    Task saveTask(Task task);
    Optional<Task> findTaskById(Long id);
    Iterable<Task> findAllTasks();
    Iterable<Task> saveAllTasks(Iterable<Task> tasks);
    void deleteTask(Long id);
}
