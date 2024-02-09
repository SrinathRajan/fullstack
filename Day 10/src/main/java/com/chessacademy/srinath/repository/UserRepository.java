package com.chessacademy.srinath.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.chessacademy.srinath.model.User;

public interface UserRepository extends JpaRepository<User, String>{

    Optional<User> findByEmail(String email);
    

}
