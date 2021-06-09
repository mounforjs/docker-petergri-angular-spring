package com.example.messagingappspring.controller;
import com.example.messagingappspring.DTO.ChatDTO;
import com.example.messagingappspring.DTO.MessageDTO;
import com.example.messagingappspring.DTO.UserInfoDTO;
import com.example.messagingappspring.database.DatabaseConnection;
import org.aspectj.bridge.Message;
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
    @GetMapping("/getMemberIdsOfGivenChat")
    public List<String> getMemberIdsOfGivenChat(@RequestParam String chatId) {
        List<String> members = new ArrayList<>();
        try {
            ResultSet resultSet = databaseConnection.statement.executeQuery("select * from is_member where chat_id=" + chatId);
            while (!resultSet.isClosed() && resultSet.next()) {
                members.add(String.valueOf(resultSet.getInt(2)));
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return members;
    }

    @CrossOrigin
    @GetMapping("/getMessages")
    public List<MessageDTO> getMessages(@RequestParam String chatId) {
        List<MessageDTO> messages = new ArrayList<>();
        try {
            String sql = "select * from message where chat_id=" + chatId;
            ResultSet resultSet = databaseConnection.statement.executeQuery(sql);
            while (!resultSet.isClosed() && resultSet.next()) {
                MessageDTO msg = new MessageDTO(String.valueOf(resultSet.getInt(2)), resultSet.getString(4), String.valueOf(resultSet.getInt(5)));
                messages.add(msg);
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

            ResultSet resultSet = databaseConnection.statement.executeQuery("SELECT * FROM chat WHERE chat_name=" + "'" + chat.getChatName() + "' AND creator_id=" + chat.getCreatorId());

            while (!resultSet.isClosed() && resultSet.next()) {
                chat.setChatId(String.valueOf(resultSet.getInt(1)));
                break;
            }
            addNewMemberToChat(chat);
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }

    public void addNewMemberToChat(ChatDTO chat){
        try {
            databaseConnection.statement.executeUpdate("INSERT INTO is_member(chat_id, member_id) VALUES(" + chat.getChatId() + ", " + chat.getCreatorId() + ")");
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }
    @CrossOrigin
    @RequestMapping("/addMessage")
    public void addMessage(@RequestBody MessageDTO message){
        try {
            databaseConnection.statement.executeUpdate(
                    "INSERT INTO message(chat_id, content, sender_id) VALUES(" +
                            message.getChatId() + ", " +
                      "\"" + message.getContent() + "\", "+ message.getSenderId()+")");
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }

}
