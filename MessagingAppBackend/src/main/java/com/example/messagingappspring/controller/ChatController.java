package com.example.messagingappspring.controller;

import com.example.messagingappspring.UserInfo;
import com.example.messagingappspring.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

public class ChatController {

    @Autowired
    UserRepository repository;


    @CrossOrigin
    @GetMapping("/getUser")
    List<UserInfo> getAllUsers() {
        return (List<UserInfo>) repository.findAll();
    }

}
