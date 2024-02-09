package com.chessacademy.srinath.model;

import static jakarta.persistence.GenerationType.UUID;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "courses")
public class Course {
    @Id
    @GeneratedValue(strategy = UUID)
    @Column(name = "course_id")
    private String id;

    @Column(nullable = false)
    private String coursename;

    @Column(nullable = false)
    private String content;

}