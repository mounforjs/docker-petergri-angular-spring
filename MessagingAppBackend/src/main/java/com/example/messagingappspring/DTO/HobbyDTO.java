package com.example.messagingappspring.DTO;

public class HobbyDTO {
    String hobbyId;
    String hobbyName;
    String hobbyDescription;

    public HobbyDTO(String hobbyId, String hobbyName, String hobbyDescription) {
        this.hobbyId = hobbyId;
        this.hobbyName = hobbyName;
        this.hobbyDescription = hobbyDescription;
    }

    public String getHobbyId() {
        return hobbyId;
    }

    public void setHobbyId(String hobbyId) {
        this.hobbyId = hobbyId;
    }

    public String getHobbyName() {
        return hobbyName;
    }

    public void setHobbyName(String hobbyName) {
        this.hobbyName = hobbyName;
    }

    public String getHobbyDescription() {
        return hobbyDescription;
    }

    public void setHobbyDescription(String hobbyDescription) {
        this.hobbyDescription = hobbyDescription;
    }

}
