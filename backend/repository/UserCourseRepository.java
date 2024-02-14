package com.chessacademy.srinath.repository;

import com.chessacademy.srinath.model.UserCourse;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserCourseRepository extends JpaRepository<UserCourse, String> {
    List<UserCourse> findByUserId(String userId);
}

