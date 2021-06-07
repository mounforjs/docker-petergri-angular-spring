package com.example.messagingappspring.DTO;

public class AdminInfoDTO extends UserInfoDTO {
    private String userEmail;
    private String userBirthdate;

    public AdminInfoDTO(int userId, String userName, String userPassword, String userEmail, String userBirthdate) {
        super(userId, userName, userPassword);
        this.userEmail = userEmail;
        this.userBirthdate = userBirthdate;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public String getUserBirthdate() {
        return userBirthdate;
    }
}
