package com.example.messagingappspring.controller;

import com.example.messagingappspring.UserInfo;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

public class ChatController {



    @CrossOrigin
    @GetMapping("/getUser")
    List<UserInfo> getAllUsers() {
        return null;
    }

}
