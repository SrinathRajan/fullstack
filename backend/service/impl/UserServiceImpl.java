// package com.chessacademy.srinath.service.impl;

// import java.util.List;
// import java.util.stream.Collectors;

// import org.springframework.stereotype.Service;

// import com.chessacademy.srinath.service.UserService;
// import com.chessacademy.srinath.dto.response.BasicResponse;
// import com.chessacademy.srinath.dto.response.UserResponse;
// import com.chessacademy.srinath.model.User;
// import com.chessacademy.srinath.repository.UserRepository;

// import lombok.RequiredArgsConstructor;

// @Service
// @RequiredArgsConstructor
// public class UserServiceImpl implements UserService {

//     private final UserRepository userRepository;

//     @Override
//     public BasicResponse<UserResponse> getAllUser(){
//         List<User> users = userRepository.findAll();
//         List<UserResponse> userResponses = users.stream().map(user -> UserResponse.builder()
//                 .id(user.getId())
//                 .name(user.getName())
//                 .email(user.getEmail())
//                 .role(user.getRole())
//                 .image(user.getImage())
//                 .address(user.getAddress())
//                 .phoneno(user.getPhoneno())
//                 .build())
//                 .collect(Collectors.toList());
//         return BasicResponse.<UserResponse>builder().message("User data fetched successfully!").data(userResponses).build();
//     }

// }


package com.chessacademy.srinath.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.chessacademy.srinath.dto.response.BasicResponse;
import com.chessacademy.srinath.dto.response.UserResponse;
import com.chessacademy.srinath.model.User;
import com.chessacademy.srinath.repository.UserRepository;
import com.chessacademy.srinath.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor

public class UserServiceImpl implements UserService {
    
    private final UserRepository userRepository;
    
    
    @Override
    public BasicResponse<UserResponse> getAllUser() {
        List<User> users= userRepository.findAll();
        List<UserResponse> userResponses= users.stream().map(user -> UserResponse.builder()
        .id(user.getId())
        .name(user.getName())  
        .email(user.getEmail())
        .role(user.getRole())
        .address(user.getAddress())
        .build())
        .collect(Collectors.toList());
        return BasicResponse.<UserResponse>builder()
        .message("User Data fetched")
        .data(userResponses)
        .build();
    }

}
