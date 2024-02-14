// package com.chessacademy.srinath.service.impl;

// import static com.chessacademy.srinath.enumerated.Role.USER;

// import java.util.Optional;

// import org.springframework.security.authentication.AuthenticationManager;
// import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.stereotype.Service;

// import com.chessacademy.srinath.Utils.JwtUtil;
// import com.chessacademy.srinath.dto.request.LoginRequest;
// import com.chessacademy.srinath.dto.request.RegisterRequest;
// import com.chessacademy.srinath.dto.response.LoginResponse;
// import com.chessacademy.srinath.dto.response.RegisterResponse;
// import com.chessacademy.srinath.model.User;
// import com.chessacademy.srinath.repository.UserRepository;
// import com.chessacademy.srinath.service.AuthenticationService;

// import lombok.RequiredArgsConstructor;

// @Service
// @RequiredArgsConstructor
// public class AuthenticationServiceImpl implements AuthenticationService {

//     private final UserRepository userRepository;
//     private final PasswordEncoder passwordEncoder;
//     private final AuthenticationManager authenticationManager;
//     private final JwtUtil jwtUtil;

//     @Override
//     public RegisterResponse register(RegisterRequest request) {
//         Optional<User> isUserExists=userRepository.findByEmail(request.getEmail());
//         if(isUserExists.isPresent()) {
//             return RegisterResponse.builder().message("User with mail id " + request.getEmail() +" is already exists!").build();
//         }
//         var user=User.builder()
//                 .name(request.getName())
//                 .email(request.getEmail())
//                 .password(passwordEncoder.encode(request.getPassword()))
//                 .role(USER)
//                 .build();
//         userRepository.save(user);
//         return RegisterResponse.builder()       
//                 .message("User created successfully!")
//                 .build();
//     }

//     @Override
//     public LoginResponse login(LoginRequest request) {
//         authenticationManager
//                 .authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(),request.getPassword()));
//                 var user=userRepository.findByEmail(request.getEmail()).orElseThrow();
//                 String token=jwtUtil.generateToken(user);
//                 return LoginResponse.builder()
//                         .message("User logged in successfully!")
//                         .token(token)
//                         .build();
        
//     }
// }


package com.chessacademy.srinath.service.impl;

import static com.chessacademy.srinath.enumerated.Role.USER;

import java.util.Optional;

// import org.springframework.boot.autoconfigure.security.oauth2.resource.OAuth2ResourceServerProperties.Jwt;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.chessacademy.srinath.dto.request.LoginRequest;
import com.chessacademy.srinath.dto.request.RegisterRequest;
import com.chessacademy.srinath.dto.response.LoginResponse;
import com.chessacademy.srinath.dto.response.RegisterResponse;
import com.chessacademy.srinath.model.User;
import com.chessacademy.srinath.repository.UserRepository;
import com.chessacademy.srinath.service.AuthenticationService;
import com.chessacademy.srinath.Utils.JwtUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")


public class AuthenticationServiceImpl implements AuthenticationService{
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;
    @Override
    public RegisterResponse register(RegisterRequest request) {
        Optional<User> isUserExists = userRepository.findByEmail(request.getEmail());
        if(isUserExists.isPresent())
        {
            return RegisterResponse.builder().message("User with mail id "+request.getEmail()+" is already exists!")
            .build();
        }
        var user = User.builder()
            .name(request.getName())
            .email(request.getEmail())
            .address(request.getAddress())
            .college(request.getCollege())
            .password(passwordEncoder.encode(request.getPassword()))
            .role(USER)
            .build();
        userRepository.save(user);
        return RegisterResponse.builder()
            .message("User created successfully")
            .build();
    }
    @Override
    public LoginResponse login(LoginRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user=userRepository.findByEmail(request.getEmail()).orElseThrow();
        String token=jwtUtil.generateToken(user);
        return LoginResponse.builder().message("User Logged in success").token(token).build();
        // throw new UnsupportedOperationException("Unimplemented method 'login'");
    }
}
