// package com.chessacademy.srinath.controller;



// import static com.chessacademy.srinath.Utils.MyConstant.COURSE;
// import static com.chessacademy.srinath.Utils.MyConstant.COURSELIST;
// // import static com.chess.pk.utils.MyConstant.USER;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// // import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import com.chessacademy.srinath.dto.request.CourseRequest;
// import com.chessacademy.srinath.dto.response.CourseResponse;
// import com.chessacademy.srinath.repository.CourseRepository;
// import com.chessacademy.srinath.service.CourseService;

// @RestController
// @RequestMapping(COURSE)
// public class CourseController {
//     @Autowired

//     private CourseService courseService;
//     private CourseRepository courseRepository;

//     public CourseController(CourseService courseService) {
//         this.courseService = courseService;
//     }

//     @GetMapping(COURSELIST)
//     public ResponseEntity<List<CourseResponse>> getAllCourses() {
//         List<CourseResponse> courses = courseService.getAllCourses();
//         return ResponseEntity.ok(courses);
//     }

//     @GetMapping("/{courseId}")
//     public ResponseEntity<CourseResponse> getCourse(@PathVariable Long courseId) {
//         CourseResponse course = courseService.getCourseById(courseId);
//         return ResponseEntity.ok(course);
//     }

//     @PostMapping
//     public ResponseEntity<CourseResponse> createCourse(@RequestBody CourseRequest courseRequest) {
//         CourseResponse createdCourse = courseService.createCourse(courseRequest);
//         return ResponseEntity.status(HttpStatus.CREATED).body(createdCourse);
//     }

//     @PutMapping("/{courseId}")
//     public ResponseEntity<CourseResponse> updateCourse(@PathVariable Long courseId, @RequestBody CourseRequest courseRequest) {
//         CourseResponse updatedCourse = courseService.updateCourse(courseId, courseRequest);
//         return ResponseEntity.ok(updatedCourse);
//     }

//     @DeleteMapping("/{courseId}")
//     public ResponseEntity<Void> deleteCourse(@PathVariable Long courseId) {
//         courseService.deleteCourse(courseId);
//         return ResponseEntity.noContent().build();
//     }
   
//     }


package com.chessacademy.srinath.controller;

import static com.chessacademy.srinath.Utils.MyConstant.COURSE;
import static com.chessacademy.srinath.Utils.MyConstant.COURSELIST;
// import static com.chess.pk.utils.MyConstant.USER;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.chessacademy.srinath.dto.request.CourseRequest;
import com.chessacademy.srinath.dto.response.CourseResponse;
import com.chessacademy.srinath.service.CourseService;

@RestController
@RequestMapping(COURSE)
public class CourseController {
    @Autowired

    private CourseService courseService;

    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @GetMapping(COURSELIST)
    public ResponseEntity<List<CourseResponse>> getAllCourses() {
        List<CourseResponse> courses = courseService.getAllCourses();
        return ResponseEntity.ok(courses);
    }

    @GetMapping("/{courseId}")
    public ResponseEntity<CourseResponse> getCourse(@PathVariable Long courseId) {
        CourseResponse course = courseService.getCourseById(courseId);
        return ResponseEntity.ok(course);
    }

    @PostMapping
    public ResponseEntity<CourseResponse> createCourse(@RequestBody CourseRequest courseRequest) {
        CourseResponse createdCourse = courseService.createCourse(courseRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCourse);
    }

    @PutMapping("/{courseId}")
    public ResponseEntity<CourseResponse> updateCourse(@PathVariable Long courseId, @RequestBody CourseRequest courseRequest) {
        CourseResponse updatedCourse = courseService.updateCourse(courseId, courseRequest);
        return ResponseEntity.ok(updatedCourse);
    }

    @DeleteMapping("/{courseId}")
    public ResponseEntity<Void> deleteCourse(@PathVariable Long courseId) {
        courseService.deleteCourse(courseId);
        return ResponseEntity.noContent().build();
    }
}




