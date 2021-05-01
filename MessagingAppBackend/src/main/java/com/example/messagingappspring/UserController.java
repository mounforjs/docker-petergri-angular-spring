package com.example.messagingappspring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    UserRepository repository;

    @CrossOrigin
    @GetMapping("/hello")
    String hello() {
        return "Hellooo";
    }

    @CrossOrigin
    @GetMapping("/getUser")
    List<UserInfo> getAllUsers() {
        return (List<UserInfo>) repository.findAll();
    }

    @CrossOrigin
    @RequestMapping("/addUser")
    public UserInfo addUser(@RequestBody UserInfo user) {
        repository.save(user);
        return user;
    }

    @CrossOrigin
    @RequestMapping("/removeAllUser")
    public void removeAllUser() {
        repository.deleteAll();
    }

    @CrossOrigin
    @RequestMapping("/removeUser")
    public UserInfo removeUser(@RequestBody UserInfo user) {
        repository.delete(user);
        return user;
    }

}