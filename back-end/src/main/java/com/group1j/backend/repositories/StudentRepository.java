package com.group1j.backend.repositories;

import com.group1j.backend.entities.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StudentRepository extends JpaRepository<Student,Integer> {

    //@Query("SELECT x FROM Student x WHERE x.id = ?1")
    Optional<Student> findById(Integer id);
}
