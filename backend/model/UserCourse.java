package com.chessacademy.srinath.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "user_courses")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserCourse {
    @Id
    private String userCourseId;

    @ManyToOne
    private User user;

    @ManyToOne
    private Course course;
}
