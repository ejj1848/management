package com.ej.management.service;

import com.ej.management.domain.Person;

import java.util.Optional;

public interface PersonService {

    Person savePerson(Person person);
    Person findByName(String name);
    Optional<Person> findByPersonId(Long id);
    Iterable<Person> findAllPeople();
    Iterable<Person> savePersonList(Iterable<Person> personIterable);
    void deletePerson(Long id);
}
