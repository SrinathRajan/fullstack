package com.chessacademy.srinath.controller;

import static com.chessacademy.srinath.Utils.MyConstant.USER;
import static com.chessacademy.srinath.Utils.MyConstant.USERLIST;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
import static org.springframework.http.HttpStatus.OK;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chessacademy.srinath.service.UserService;
import com.chessacademy.srinath.dto.response.BasicResponse;
import com.chessacademy.srinath.dto.response.UserResponse;

import lombok.RequiredArgsConstructor;

@RequestMapping(USER)
@RestController
@RequiredArgsConstructor
public class UserController {

        private final UserService userService;

        @GetMapping(USERLIST)
        public ResponseEntity<BasicResponse<UserResponse>> create() {
            BasicResponse<UserResponse> response = new BasicResponse<>();
            try {
                response = userService.getAllUser();
                return new ResponseEntity<>(response,OK);
            } catch (Exception e) {
                response.setMessage("Something went wrong!");
                return new ResponseEntity<>(response, EXPECTATION_FAILED);
            }
        }
    

}