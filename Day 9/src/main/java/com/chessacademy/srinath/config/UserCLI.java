package com.chessacademy.srinath.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.chessacademy.srinath.enumerated.Role;
import com.chessacademy.srinath.model.User;
import com.chessacademy.srinath.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
@SuppressWarnings("null")
public class UserCLI implements CommandLineRunner{
    
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    @Override
    public void run(String... args) throws Exception {
        if(userRepository.count() > 0)
        return;
        var user = User.builder()
                .name("Admin")
                .email("admin@123")
                .password(passwordEncoder.encode(("admin@123")))
                .role(Role.ADMIN)
                .build();
        userRepository.save(user);
    }

}
