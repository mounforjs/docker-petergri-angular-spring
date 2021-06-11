package com.example.messagingappspring.DTO;

public class FirstReportDTO {
    private String chatId;
    private String chatName;
    private String creatorId;
    private String numOfActiveMembers;

    public FirstReportDTO(String chatId, String chatName, String creatorId, String numOfActiveMembers) {
        this.chatId = chatId;
        this.chatName = chatName;
        this.creatorId = creatorId;
        this.numOfActiveMembers = numOfActiveMembers;
    }

    public String getChatId() {
        return chatId;
    }

    public void setChatId(String chatId) {
        this.chatId = chatId;
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

    public String getNumOfActiveMembers() {
        return numOfActiveMembers;
    }

    public void setNumOfActiveMembers(String numOfActiveMembers) {
        this.numOfActiveMembers = numOfActiveMembers;
    }
}
