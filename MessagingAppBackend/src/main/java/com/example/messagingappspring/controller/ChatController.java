package com.example.messagingappspring.controller;
import com.example.messagingappspring.DTO.ChatDTO;
import com.example.messagingappspring.database.DatabaseConnection;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;


@RestController
public class ChatController {

    DatabaseConnection databaseConnection = DatabaseConnection.getInstance();

    @CrossOrigin
    @RequestMapping("/addNewChat")
    void addNewChat(@RequestBody ChatDTO chat) {
        try {
            databaseConnection.statement.executeUpdate("INSERT INTO chat (chat_description, chat_name, creator_id) " +
                    "VALUES (" + "'" + chat.getChatDescription() + "' , '" + chat.getChatName() + "', " + chat.getCreatorId() + ")");
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }

    @CrossOrigin
    @RequestMapping("/testPoint")
    String testPoint() {
        return "It works";
    }

}
