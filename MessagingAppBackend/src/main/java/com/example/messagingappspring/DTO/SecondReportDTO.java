package com.example.messagingappspring.DTO;

public class SecondReportDTO {
    private String hobbyName;
    private String numOfChoices;

    public SecondReportDTO(String hobbyName, String numOfChoices) {
        this.hobbyName = hobbyName;
        this.numOfChoices = numOfChoices;
    }
    public String getHobbyName() {
        return hobbyName;
    }

    public void setHobbyName(String hobbyName) {
        this.hobbyName = hobbyName;
    }

    public String getNumOfChoices() {
        return numOfChoices;
    }

    public void setNumOfChoices(String numOfChoices) {
        this.numOfChoices = numOfChoices;
    }
}
