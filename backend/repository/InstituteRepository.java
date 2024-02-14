package com.chessacademy.srinath.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.chessacademy.srinath.model.Institute;

@Repository
public interface InstituteRepository extends JpaRepository<Institute, Long> {
}
