package com.ej.management.service;

import com.ej.management.domain.Person;
import com.ej.management.domain.Task;

import java.util.List;
import java.util.Optional;

public interface TaskService {

    Task saveTask(Task task);
    Optional<Task> findTaskById(Long id);
    Iterable<Task> findAllTasks();
    Iterable<Task> saveAllTasks(Iterable<Task> tasks);
    List<Task> listTasksByPeople(String name);
    void deleteTask(Long id);
    List<Task> listTasksByCategory(String category);

}
