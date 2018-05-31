package com.ej.management.service.Impl;

import com.ej.management.domain.Category;
import com.ej.management.repositories.CategoryRepository;
import com.ej.management.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;

    public CategoryServiceImpl(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public Category saveCategory(Category category) {
        return categoryRepository.save(category);
    }

    @Override
    public Optional<Category> findByCategoryId(Long id) {
        return categoryRepository.findById(id);
    }

    @Override
    public Iterable<Category> findAllCategories() {
        return categoryRepository.findAll();
    }

    @Override
    public Iterable<Category> saveCategoriesList(Iterable<Category> categories) {
        return categoryRepository.saveAll(categories);
    }

    @Override
    public Category findByCategoryName(String name) {
        return categoryRepository.findByCategoryName(name);
    }

    @Override
    public void deleteCategory(Long id) {

        categoryRepository.deleteById(id);

    }
}
