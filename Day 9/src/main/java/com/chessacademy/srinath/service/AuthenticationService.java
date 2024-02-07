package com.chessacademy.srinath.service;

import com.chessacademy.srinath.dto.request.LoginRequest;
import com.chessacademy.srinath.dto.request.RegisterRequest;
import com.chessacademy.srinath.dto.response.LoginResponse;
import com.chessacademy.srinath.dto.response.RegisterResponse;

public interface AuthenticationService {

    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);

}
