package com.example.messagingappspring.controller;

import com.example.messagingappspring.DTO.AdminInfoDTO;
import com.example.messagingappspring.DTO.UserInfoDTO;
import com.example.messagingappspring.UserInfo;
import com.example.messagingappspring.database.DatabaseConnection;
import org.apache.catalina.User;
import org.springframework.web.bind.annotation.*;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@RestController
public class AdminController {

    DatabaseConnection databaseConnection = DatabaseConnection.getInstance();

    @CrossOrigin
    @RequestMapping("/getAdmin")
    public UserInfoDTO getAdmin(@RequestBody AdminInfoDTO admin) {
        try {
            ResultSet resultSet = databaseConnection.statement.executeQuery("select * from admin_info where user_id = '"
                    + admin.getUserId() + "'");
            while (resultSet.next()) {
                return new AdminInfoDTO(resultSet.getInt(1), resultSet.getString(2),
                        resultSet.getString(3), resultSet.getString(4), resultSet.getString(5));
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return null;
    }

    @CrossOrigin
    @RequestMapping("/addAdmin")
    public void addAdmin(@RequestBody AdminInfoDTO admin) {
        try {
//            System.out.println(String.format("INSERT INTO admin_info (user_id, birthdate, email) " +
//                    "VALUES('%s', '%s', '%s')", admin.getUserId(), admin.getUserBirthdate(), admin.getUserEmail()));
            databaseConnection.statement.executeUpdate(String.format("INSERT INTO admin_info (user_id, birthdate, email) " +
                    "VALUES('%s', '%s', '%s')", admin.getUserId(), admin.getUserBirthdate(), admin.getUserEmail()));
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }

    @CrossOrigin
    @RequestMapping("/getAdminForLogin")
    public UserInfoDTO getAdminForLogin(@RequestBody UserInfoDTO user) {
        try {
            ResultSet resultSet = databaseConnection.statement.executeQuery("select * from admin_info where user_id = "
                    + user.getUserId());
            while (resultSet.next()) {
                return new UserInfoDTO(resultSet.getInt(1), resultSet.getString(2), resultSet.getString(3));
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return null;
    }

}