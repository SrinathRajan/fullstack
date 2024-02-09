package com.chessacademy.srinath.model;



import static jakarta.persistence.GenerationType.UUID;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "usercourse")
public class UserCourse {

    @Id
    @GeneratedValue(strategy = UUID)
    private String usercourse_id;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;
 
     @ManyToOne
     @JoinColumn(name="course_id")
     private Course course;


}