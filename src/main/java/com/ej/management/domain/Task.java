package com.ej.management.domain;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Task {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String description;
    private String dateCompleted;
    private String dueDate;
    private Boolean isCompleted;

    @ManyToMany
    List<Person> people;

    @OneToOne
    Category category;


}
