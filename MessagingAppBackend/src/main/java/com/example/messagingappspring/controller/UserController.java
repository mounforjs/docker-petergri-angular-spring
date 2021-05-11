package com.example.messagingappspring.controller;

import com.example.messagingappspring.DTO.UserInfoDTO;
import com.example.messagingappspring.UserInfo;
import com.example.messagingappspring.database.DatabaseConnection;

import org.springframework.web.bind.annotation.*;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

@RestController
public class UserController {

    DatabaseConnection databaseConnection = new DatabaseConnection();
    Statement statement = databaseConnection.init();


    @CrossOrigin
    @GetMapping("/getUser")
    List<UserInfoDTO> getAllUsers() {
        List<UserInfoDTO> users = new ArrayList<>();
        try {
            ResultSet resultSet = statement.executeQuery("select * from user_info");
            while(resultSet.next()){
                users.add(new UserInfoDTO(resultSet.getInt(1), resultSet.getString(2), resultSet.getString(3)));
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return users;
    }

    @CrossOrigin
    @GetMapping("/test")
    String test() {
        return "Endpoint works!";
    }

    @CrossOrigin
    @RequestMapping("/addUser")
    public UserInfo addUser(@RequestBody UserInfo user) {
        return null;
    }

    @CrossOrigin
    @RequestMapping("/removeAllUser")
    public void removeAllUser() {

    }

    @CrossOrigin
    @RequestMapping("/removeUser")
    public UserInfo removeUser(@RequestBody UserInfo user) {
        return null;
    }

}