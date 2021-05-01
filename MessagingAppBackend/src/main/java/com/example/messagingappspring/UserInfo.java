package com.example.messagingappspring;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "user_info" )
public class UserInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long userId;
    private String userName;
    private String userPassword;

    public UserInfo(Long userId, String userName, String userPassword) {
        this.userId = userId;
        this.userName = userName;
        this.userPassword = userPassword;
    }

    public UserInfo() {

    }

}
