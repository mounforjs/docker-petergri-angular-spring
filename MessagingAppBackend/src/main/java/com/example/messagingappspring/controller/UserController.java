package com.example.messagingappspring.controller;

import com.example.messagingappspring.DTO.UserInfoDTO;
import com.example.messagingappspring.UserInfo;
import com.example.messagingappspring.database.DatabaseConnection;
import org.springframework.web.bind.annotation.*;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@RestController
public class UserController {

    DatabaseConnection databaseConnection = DatabaseConnection.getInstance();

    @CrossOrigin
    @GetMapping("/getUsers")
    public List<UserInfoDTO> getAllUsers() {
        List<UserInfoDTO> users = new ArrayList<>();
        try {
            ResultSet resultSet = databaseConnection.statement.executeQuery("select * from user_info");
            while (resultSet.next()) {
                users.add(new UserInfoDTO(resultSet.getInt(1), resultSet.getString(2), resultSet.getString(3)));
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return users;
    }

    @CrossOrigin
    @RequestMapping("/getUser")
    public UserInfoDTO getUser(@RequestBody UserInfoDTO user) {
        try {
            ResultSet resultSet = databaseConnection.statement.executeQuery("select * from user_info where user_name = '"
                    + user.getUserName() + "' and user_password = " + user.getUserPassword());
            while (resultSet.next()) {
                return new UserInfoDTO(resultSet.getInt(1), resultSet.getString(2), resultSet.getString(3));
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return null;
    }

    @CrossOrigin
    @GetMapping("/test")
    String test() {
        return "Endpoint works!";
    }

    @CrossOrigin
    @RequestMapping("/addUser")
    public void addUser(@RequestBody UserInfoDTO user) {
        try {
            databaseConnection.statement.executeUpdate("INSERT INTO user_info (user_name, user_password) VALUES (" + "'" + user.getUserName() + "' , " + user.getUserPassword() + ")");
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }

}