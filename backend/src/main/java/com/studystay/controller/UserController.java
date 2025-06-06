package com.studystay.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.studystay.model.User;
import com.studystay.repository.UserRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")  // allow frontend to connect
public class UserController {

    @Autowired
    private UserRepository userRepo;

    @PostMapping("/signup")
    public String signup(@RequestBody User user) {
        userRepo.save(user);
        return "Signup successful";
    }

    @PostMapping("/login")
    public String login(@RequestBody User login) {
        User user = userRepo.findByEmail(login.getEmail());
        if (user != null && user.getPassword().equals(login.getPassword())) {
            return "Login successful";
        }
        return "Invalid credentials";
    }
}
