package com.chessacademy.srinath.dto.request;



import com.chessacademy.srinath.model.User;
 
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CourseRequest {
     private String id;
     private String coursename;
     private String content;
     private User user;
}
