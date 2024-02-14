package com.chessacademy.srinath.service.impl;

import com.chessacademy.srinath.dto.request.UserCourseRequest;
import com.chessacademy.srinath.dto.response.UserCourseResponse;
import com.chessacademy.srinath.model.Course;
import com.chessacademy.srinath.model.UserCourse;
import com.chessacademy.srinath.repository.CourseRepository;
import com.chessacademy.srinath.repository.UserCourseRepository;
import com.chessacademy.srinath.service.UserCourseService;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserCourseServiceImpl implements UserCourseService {
 @Autowired
    private CourseRepository courseRepository;
    private UserCourseRepository userCourseRepository;

    @Override
    public UserCourseResponse enrollUserInCourse(UserCourseRequest userCourseRequest) {
        Course course = courseRepository.findByCourseName(userCourseRequest.getCourseName())
                .orElseThrow(() -> new IllegalArgumentException("Course not found with name: " + userCourseRequest.getCourseName()));

        UserCourse userCourse = new UserCourse();
        userCourse.setCourse(course);

        userCourseRepository.save(userCourse);

        return mapUserCourseToResponse(userCourse);
    }

    @Override
    public List<UserCourseResponse> getAllUserCourses() {
        List<UserCourse> userCourses = userCourseRepository.findAll();
        return userCourses.stream()
                .map(this::mapUserCourseToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public List<UserCourseResponse> getCoursesEnrolledByUser(String userId) {
        return List.of();
    }

    private UserCourseResponse mapUserCourseToResponse(UserCourse userCourses) {
        UserCourseResponse response = new UserCourseResponse();
        response.setCourseName(userCourses.getCourse().getCourseName());
        response.setContent(userCourses.getCourse().getContent());
        return response;
    }
}

