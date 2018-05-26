package com.ej.management.service.Impl;

import com.ej.management.domain.Task;
import com.ej.management.repositories.TaskRepository;
import com.ej.management.service.TaskService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TaskServiceImpl implements TaskService {

    private TaskRepository taskRepository;

    public TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public Task saveTask(Task task) {
        return taskRepository.save(task);
    }

    @Override
    public Optional<Task> findTaskById(Long id) {
        return taskRepository.findById(id);
    }

    @Override
    public Iterable<Task> findAllTasks() {
        return taskRepository.findAll();
    }

    @Override
    public Iterable<Task> saveAllTasks(Iterable<Task> tasks) {
        return taskRepository.saveAll(tasks);
    }

    @Override
    public void deleteTask(Long id) {

        taskRepository.deleteById(id);

    }
}
