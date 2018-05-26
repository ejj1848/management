package com.ej.management.repositories;

import com.ej.management.domain.Task;
import org.springframework.data.repository.CrudRepository;

public interface TaskRepository extends CrudRepository<Task, Long> {


}
