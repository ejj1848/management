package com.ej.management.service;

import com.ej.management.domain.Category;

import java.util.Optional;

public interface CategoryService {

    Category saveCategory(Category category);
    Optional<Category> findByCategoryId(Long id);
    Iterable<Category> findAllCategories();
    Iterable<Category> saveCategoriesList(Iterable<Category> categories);
    void deleteCategory(Long id);
}
