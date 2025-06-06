package com.studystay.controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserController {
    @PostMapping("/signup")
    public String signup(@RequestBody String body) {
        return "User signed up!";
    }

    @PostMapping("/login")
    public String login(@RequestBody String body) {
        return "User logged in!";
    }
}