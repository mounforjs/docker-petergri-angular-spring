package com.example.messagingappspring.controller;

import com.example.messagingappspring.DTO.AdminInfoDTO;
import com.example.messagingappspring.database.DatabaseConnection;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;

@RestController
public class FriendController {
    DatabaseConnection databaseConnection = DatabaseConnection.getInstance();

    @CrossOrigin
    @RequestMapping("/addFriend")
    public void addFriend(@RequestParam String userId, @RequestParam String friendId) {
        try {
            databaseConnection.statement.executeUpdate(String.format("INSERT INTO is_friend_of (user_id, friend_id) " +
                    "VALUES(%s, %s)", userId, friendId));
            databaseConnection.statement.executeUpdate(String.format("INSERT INTO is_friend_of (user_id, friend_id) " +
                    "VALUES(%s, %s)", friendId, userId));
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }
}
