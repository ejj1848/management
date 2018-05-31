package com.ej.management.service.Impl;

import com.ej.management.domain.Task;
import com.ej.management.repositories.TaskRepository;
import com.ej.management.service.CategoryService;
import com.ej.management.service.PersonService;
import com.ej.management.service.TaskService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskServiceImpl implements TaskService {

    private TaskRepository taskRepository;
    private PersonService personService;
    private CategoryService categoryService;

    public TaskServiceImpl(TaskRepository taskRepository, PersonService personService, CategoryService categoryService) {
        this.taskRepository = taskRepository;
        this.personService = personService;
        this.categoryService= categoryService;
    }

    @Override
    public Task saveTask(Task task) {
        return taskRepository.save(task);
    }

    @Override
    public List<Task> listTasksByPeople(String name) {


        return taskRepository.findAllTaskByPeople(personService.findByName(name));
    }

    @Override
    public List<Task> listTasksByCategory(String categoryName) {
        return taskRepository.findAllByCategory(categoryService.findByCategoryName(categoryName));
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
