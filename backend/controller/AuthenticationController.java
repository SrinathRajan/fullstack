package com.chessacademy.srinath.controller;

import static com.chessacademy.srinath.Utils.MyConstant.AUTH;
import static com.chessacademy.srinath.Utils.MyConstant.LOGIN;
import static com.chessacademy.srinath.Utils.MyConstant.REGISTER;
import static org.springframework.http.HttpStatus.ACCEPTED;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chessacademy.srinath.dto.request.LoginRequest;
import com.chessacademy.srinath.dto.request.RegisterRequest;
import com.chessacademy.srinath.dto.response.LoginResponse;
import com.chessacademy.srinath.dto.response.RegisterResponse;
import com.chessacademy.srinath.service.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(AUTH)
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService AuthenticationService;

    @PostMapping(REGISTER)
    public ResponseEntity<RegisterResponse> register(@RequestBody RegisterRequest request){
        RegisterResponse response = new RegisterResponse();
        try {
            response = AuthenticationService.register(request);
            return new ResponseEntity<>(response, ACCEPTED);
        } catch (Exception e) {
            response.setMessage("Something went wrong!");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
    }
    @PostMapping(LOGIN)
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request){
        LoginResponse response = new LoginResponse();
        try {
            response=AuthenticationService.login(request);
            return new ResponseEntity<>(response, ACCEPTED);
            
        } catch (Exception e) {
            // LoginResponse.builder()
            // .message("Something went wrong!").token("").build();
            // return new ResponseEntity<>(response, EXPECTATION_FAILED);
            System.out.println(e);
            response.setMessage("Something went wrong!");
            response.setToken("");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
    }

    

}