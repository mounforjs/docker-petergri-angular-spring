package com.example.messagingappspring.controller;

import com.example.messagingappspring.DTO.ChatDTO;
import com.example.messagingappspring.DTO.FirstReportDTO;
import com.example.messagingappspring.database.DatabaseConnection;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@RestController
public class ReportsController {

    DatabaseConnection databaseConnection = DatabaseConnection.getInstance();

    @CrossOrigin
    @GetMapping("/firstReport")
    public List<FirstReportDTO> firstReport() {
        List<FirstReportDTO> report = new ArrayList<>();
        String sql = "SELECT chat_id, chat_name, creator_id, COUNT(member_id) AS number_of_active_members FROM (chat NATURAL JOIN is_member) JOIN user_info ON member_id = user_info.user_id \n" +
                "WHERE member_id IN (\n" +
                "\tSELECT DISTINCT user_id FROM user_info INNER JOIN message ON sender_id = user_id\n" +
                " \tWHERE sent_time BETWEEN NOW() - INTERVAL 1 MONTH AND NOW()\n" +
                ") \n" +
                "GROUP BY chat_id\n" +
                "ORDER BY number_of_active_members DESC\n" +
                "LIMIT 0,3;";
        try {
            ResultSet resultSet = databaseConnection.createStatement().executeQuery(sql);
            while (resultSet.next()) {
                report.add(new FirstReportDTO(String.valueOf(resultSet.getInt(1)), resultSet.getString(2),String.valueOf(resultSet.getInt(3)), String.valueOf(resultSet.getInt(4))));
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }

        return report;
    }
}
