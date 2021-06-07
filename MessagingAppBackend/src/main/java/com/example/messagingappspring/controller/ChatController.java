package com.example.messagingappspring.controller;
import com.example.messagingappspring.DTO.ChatDTO;
import com.example.messagingappspring.DTO.MessageDTO;
import com.example.messagingappspring.DTO.UserInfoDTO;
import com.example.messagingappspring.database.DatabaseConnection;
import org.springframework.web.bind.annotation.*;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;


@RestController
public class ChatController {

    DatabaseConnection databaseConnection = DatabaseConnection.getInstance();


    @CrossOrigin
    @GetMapping("/getChats")
    public List<ChatDTO> getAllChats() {
        List<ChatDTO> chats = new ArrayList<>();
        try {
            ResultSet resultSet = databaseConnection.statement.executeQuery("select * from chat");
            while (resultSet.next()) {
                chats.add(new ChatDTO(resultSet.getString(1), resultSet.getString(3), resultSet.getString(4), resultSet.getString(5)));
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return chats;
    }

    @CrossOrigin
    @GetMapping("/getMessages")
    public List<MessageDTO> getAllMessages(@RequestParam String chatId) {
        List<MessageDTO> messages = new ArrayList<>();
        try {
            ResultSet resultSet = databaseConnection.statement.executeQuery("select * from message where chat_id=" + chatId);
            while (resultSet.next()) {
                messages.add(new MessageDTO(resultSet.getString(2), resultSet.getString(4), resultSet.getString(5)));
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return messages;
    }


    @CrossOrigin
    @RequestMapping("/addNewChat")
    void addNewChat(@RequestBody ChatDTO chat) {
        try {
            databaseConnection.statement.executeUpdate("INSERT INTO chat (chat_description, chat_name, creator_id) " +
                    "VALUES (" + "'" + chat.getChatDescription() + "' , '" + chat.getChatName() + "', " + chat.getCreatorId() + ")");
            addNewMemberToChat(chat.getChatName());
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }

    public void addNewMemberToChat(String chatName){
        try {
            databaseConnection.statement.executeUpdate("INSERT INTO is_member(chat_id, member_id)" +
                    "SELECT chat_id, creator_id FROM chat " +
                    "WHERE chat_name =" + "'" +  chatName + "'");
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }
    @CrossOrigin
    @RequestMapping("/addMessage")
    public void sendMessage(@RequestParam String chatId, @RequestParam String messageContent, @RequestParam String messageSender){
        try {
            databaseConnection.statement.executeUpdate(
                    "INSERT INTO message(chat_id, content, sender_id) VALUES(" +
                    "\"" + chatId + "\", " +
                      "\"" + messageContent + "\", " + "\""+ messageSender+"\")");
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }

}
