package com.example.messagingappspring.controller;

import com.example.messagingappspring.DTO.AdminInfoDTO;
import com.example.messagingappspring.DTO.HobbyDTO;
import com.example.messagingappspring.database.DatabaseConnection;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;

@RestController
public class ChoosesController {

    DatabaseConnection databaseConnection = DatabaseConnection.getInstance();

    @CrossOrigin
    @RequestMapping("/addChoice")
    public void addChoice(@RequestParam String hobbyId, @RequestParam String userId) {
        try {
            databaseConnection.statement.executeUpdate(String.format("INSERT INTO chooses (hobby_id, user_id) " +
                    "VALUES(%s, '%s')", hobbyId, userId));
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }

}
