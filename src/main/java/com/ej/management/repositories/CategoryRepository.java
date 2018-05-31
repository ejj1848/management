package com.ej.management.repositories;

import com.ej.management.domain.Category;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CategoryRepository extends CrudRepository<Category, Long> {

    Category findByCategoryName(String name);
}
