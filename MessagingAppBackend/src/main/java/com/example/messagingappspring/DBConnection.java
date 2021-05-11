package com.example.messagingappspring;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBConnection {


    Connection con;

    {
        try {
            con = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/sonoo","root","root");
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }


}
