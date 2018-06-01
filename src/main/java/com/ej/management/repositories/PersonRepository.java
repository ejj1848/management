package com.ej.management.repositories;

import com.ej.management.domain.Person;
import org.springframework.data.repository.CrudRepository;

public interface PersonRepository extends CrudRepository<Person,Long> {

    Person findByName(String name);
    Boolean existsByName(String name);
}
