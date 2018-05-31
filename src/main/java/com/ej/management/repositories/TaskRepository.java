package com.ej.management.repositories;

import com.ej.management.domain.Category;
import com.ej.management.domain.Person;
import com.ej.management.domain.Task;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TaskRepository extends CrudRepository<Task, Long> {

    List<Task> findAllTaskByPeople(Person person);
    List<Task> findAllByCategory(Category category);

}
