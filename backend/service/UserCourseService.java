package com.chessacademy.srinath.service;



import com.chessacademy.srinath.dto.request.UserCourseRequest;
import com.chessacademy.srinath.dto.response.UserCourseResponse;

import java.util.List;

public interface UserCourseService {
    UserCourseResponse enrollUserInCourse(UserCourseRequest userCourseRequest);
    List<UserCourseResponse> getCoursesEnrolledByUser(String userId);
    List<UserCourseResponse> getAllUserCourses(); 
}

