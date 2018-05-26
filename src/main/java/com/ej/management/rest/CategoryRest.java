package com.ej.management.rest;

import com.ej.management.domain.Category;
import com.ej.management.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/category")
public class CategoryRest {

    private CategoryService categoryService;

    @Autowired
    public CategoryRest(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping(value = "/")
    public Iterable<Category> getAllCategories() {
        return categoryService.findAllCategories();
    }
}
