package com.ej.management.service.Impl;

import com.ej.management.domain.Person;
import com.ej.management.repositories.PersonRepository;
import com.ej.management.service.PersonService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PersonServiceImpl implements PersonService {


    private PersonRepository personRepository;

    public PersonServiceImpl(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    @Override
    public Person savePerson(Person person){
        if (personRepository.existsByName(person.getName())) {
           return personRepository.findByName(person.getName());
        }
        return personRepository.save(person);
    }

    @Override
    public Optional<Person> findByPersonId(Long id) {
        return personRepository.findById(id);
    }

    @Override
    public Iterable<Person> findAllPeople() {
        return personRepository.findAll();
    }

    @Override
    public Iterable<Person> savePersonList(Iterable<Person> personIterable) {
        return personRepository.saveAll(personIterable);
    }

    @Override
    public void deletePerson(Long id) {

        personRepository.deleteById(id);
    }

    @Override
    public Person findByName(String name) {
        return personRepository.findByName(name);
    }
}
