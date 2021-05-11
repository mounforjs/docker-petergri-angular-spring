package com.example.messagingappspring.DTO;

public class ChatDTO {

    String chatDescription;
    String chatName;
    String creatorId;

    public ChatDTO(String chatDescription, String chatName, String creatorId) {
        this.chatDescription = chatDescription;
        this.chatName = chatName;
        this.creatorId = creatorId;
    }

    public String getChatDescription() {
        return chatDescription;
    }

    public void setChatDescription(String chatDescription) {
        this.chatDescription = chatDescription;
    }

    public String getChatName() {
        return chatName;
    }

    public void setChatName(String chatName) {
        this.chatName = chatName;
    }

    public String getCreatorId() {
        return creatorId;
    }

    public void setCreatorId(String creatorId) {
        this.creatorId = creatorId;
    }
}
