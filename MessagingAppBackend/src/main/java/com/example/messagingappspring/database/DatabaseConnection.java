package com.example.messagingappspring.database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class DatabaseConnection {

    public Statement init() {
        Statement stmt = null;
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection con = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/MessagingAppDB?serverTimezone=UTC", "root", "1234");
            stmt = con.createStatement();
        } catch (SQLException | ClassNotFoundException throwables) {
            throwables.printStackTrace();
        }
        return stmt;
    }
}
