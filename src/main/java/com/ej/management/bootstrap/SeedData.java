//package com.ej.management.bootstrap;
//
//import com.ej.management.domain.Category;
//import com.ej.management.domain.Person;
//import com.ej.management.domain.Task;
//import com.ej.management.service.CategoryService;
//import com.ej.management.service.PersonService;
//import com.ej.management.service.TaskService;
//import org.springframework.context.ApplicationListener;
//import org.springframework.context.event.ContextRefreshedEvent;
//import org.springframework.stereotype.Component;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@Component
//public class SeedData implements ApplicationListener<ContextRefreshedEvent> {
//
//    private CategoryService categoryService;
//    private TaskService taskService;
//    private PersonService personService;
//
//    public SeedData(CategoryService categoryService, TaskService taskService, PersonService personService) {
//
//        this.categoryService = categoryService;
//        this.taskService = taskService;
//        this.personService = personService;
//    }
//
//   @Override
//    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent){
//
//
//        createPersons();
//        createCategories();
//        createTasks();
//    }
//
//
//    private void createCategories() {
//
//        Category category = new Category();
//        category.setId(1L);
//        category.setCategoryName("Dog");
//        categoryService.saveCategory(category);
//
//        Category category2 = new Category();
//        category2.setId(2L);
//        category2.setCategoryName("Grocery");
//        categoryService.saveCategory(category2);
//
//        Category category3 = new Category();
//        category3.setId(3L);
//        category3.setCategoryName("Target");
//        categoryService.saveCategory(category3);
//
//        Category category4 = new Category();
//        category4.setId(4L);
//        category4.setCategoryName("Misc");
//        categoryService.saveCategory(category4);
//
//        Category category5 = new Category();
//        category5.setId(5L);
//        category5.setCategoryName("Personal");
//        categoryService.saveCategory(category5);
//
//        Category category6 = new Category();
//        category6.setId(6L);
//        category6.setCategoryName("Work");
//        categoryService.saveCategory(category6);
//
//
//    }
//
//    private void createPersons() {
//
//        Person person = new Person();
//        person.setId(1L);
//        person.setName("Eric");
//        personService.savePerson(person);
//
//        Person person1 = new Person();
//        person1.setId(2L);
//        person1.setName("Natalie");
//        personService.savePerson(person1);
//
//    }
//
//
//    private void createTasks() {
//
//        List<Person> eric = new ArrayList<>();
//        eric.add(personService.findByPersonId(1L).orElseGet(Person::new));
//
//        List<Person> natalie = new ArrayList<>();
//        natalie.add(personService.findByPersonId(2L).orElseGet(Person::new));
//
//        Category category = categoryService.findByCategoryId(1L).orElseGet(Category::new);
//        Category category1 = categoryService.findByCategoryId(2L).orElseGet(Category::new);
//
//        Task task = new Task(1L, "Give dogs HeartWorm Meds", null, "2018-05-15", false, eric, category);
//
//        taskService.saveTask(task);
//
//
//        Task task2 = new Task(2L, "Get pizza sauce materials", null, "2018-05-22", false, eric, category1);
//        taskService.saveTask(task2);
//
//        Task task3 = new Task(3l, "Buy dog treats ", null, "2018-06-16", false, natalie, category);
//        taskService.saveTask(task3);
//    }
//
//}
