package com.example.messagingappspring.DTO;

public class MessageDTO {

    String chatId;
    String content;
    String senderId;

    public MessageDTO(String chatId, String content, String senderId) {
        this.chatId = chatId;
        this.content = content;
        this.senderId = senderId;
    }

    public String getChatId() {
        return chatId;
    }

    public void setChatId(String chatId) {
        this.chatId = chatId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getSenderId() {
        return senderId;
    }

    public void setSenderId(String senderId) {
        this.senderId = senderId;
    }
}
