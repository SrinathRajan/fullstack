package com.chessacademy.srinath.service;

import com.chessacademy.srinath.dto.response.BasicResponse;
import com.chessacademy.srinath.dto.response.UserResponse;

public interface UserService {

    BasicResponse<UserResponse> getAllUser();

}