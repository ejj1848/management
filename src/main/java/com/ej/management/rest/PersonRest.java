package com.ej.management.rest;

import com.ej.management.domain.Person;
import com.ej.management.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/person")
public class PersonRest {


    private PersonService personService;

    @Autowired
    public PersonRest(PersonService personService) {
        this.personService = personService;
    }


    @GetMapping(value = "/")
    public Iterable<Person> getAllPeople(){
        return personService.findAllPeople();
    }

    @PostMapping(value="/")
    public Person addPerson(@RequestBody Person person){
       return personService.savePerson(person);
    }
}
