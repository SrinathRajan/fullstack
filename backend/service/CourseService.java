package com.chessacademy.srinath.service;



import java.util.List;

import org.springframework.stereotype.Service;

import com.chessacademy.srinath.dto.request.CourseRequest;
import com.chessacademy.srinath.dto.response.CourseResponse;

@Service
public interface CourseService {
    List<CourseResponse> getAllCourses();
    CourseResponse getCourseById(Long courseId);
    CourseResponse createCourse(CourseRequest courseRequest);
    CourseResponse updateCourse(Long courseId, CourseRequest courseRequest);
    void deleteCourse(Long courseId);
}

