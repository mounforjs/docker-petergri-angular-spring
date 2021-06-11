package com.example.messagingappspring.controller;

import com.example.messagingappspring.DTO.AdminInfoDTO;
import com.example.messagingappspring.DTO.UserInfoDTO;
import com.example.messagingappspring.UserInfo;
import com.example.messagingappspring.database.DatabaseConnection;
import org.springframework.web.bind.annotation.*;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@RestController
public class FriendController {
    DatabaseConnection databaseConnection = DatabaseConnection.getInstance();

    @CrossOrigin
    @RequestMapping("/addFriend")
    public void addFriend(@RequestParam String userId, @RequestParam String friendId) {
        try {
            databaseConnection.createStatement().executeUpdate(String.format("INSERT INTO is_friend_of (user_id, friend_id) " +
                    "VALUES(%s, %s)", userId, friendId));
            databaseConnection.createStatement().executeUpdate(String.format("INSERT INTO is_friend_of (user_id, friend_id) " +
                    "VALUES(%s, %s)", friendId, userId));
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }

    @CrossOrigin
    @RequestMapping("/getFriends")
    public List<UserInfoDTO> getFriends(@RequestParam String userId) {
        List<UserInfoDTO> friends = new ArrayList<>();
        try {
            List<String> friendIds = new ArrayList<>();
            ResultSet rs1 = databaseConnection.createStatement().executeQuery("select * from is_friend_of where user_id="+userId);
            while(rs1.next()) {
                friendIds.add(String.valueOf(rs1.getInt(2)));
            }
            for(String friendId : friendIds) {
                ResultSet rs2 = databaseConnection.createStatement().executeQuery("select * from user_info where user_id=" + friendId);
                while(rs2.next()) {
                    friends.add(new UserInfoDTO(rs2.getInt(1), rs2.getString(2), rs2.getString(3)));
                }
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return friends;
    }
}
