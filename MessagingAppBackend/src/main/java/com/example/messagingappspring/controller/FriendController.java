package com.example.messagingappspring.controller;

import com.example.messagingappspring.DTO.AdminInfoDTO;
import com.example.messagingappspring.database.DatabaseConnection;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;

@RestController
public class FriendController {
    DatabaseConnection databaseConnection = DatabaseConnection.getInstance();

    @CrossOrigin
    @RequestMapping("/addFriend")
    public void addFriend(@RequestBody String userId, @RequestBody String friendId) {
        try {
            databaseConnection.statement.executeUpdate(String.format("INSERT INTO is_friend_of (user_id, friend_id) " +
                    "VALUES(%s, %s)", userId, friendId));
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }
}
