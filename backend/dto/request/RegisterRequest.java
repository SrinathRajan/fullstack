package com.chessacademy.srinath.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterRequest {
    public String name;
    public String email;
    private String password;
    private String address;
    private String college;


}
