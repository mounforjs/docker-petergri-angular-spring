package com.example.messagingappspring.controller;

import com.example.messagingappspring.DTO.ChatDTO;
import com.example.messagingappspring.DTO.FirstReportDTO;
import com.example.messagingappspring.DTO.SecondReportDTO;
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

    @CrossOrigin
    @GetMapping("/secondReport")
    public List<SecondReportDTO> secondReport() {
        List<SecondReportDTO> report = new ArrayList<>();
        String sql = "SELECT hobby_name, COUNT(hobby_name) AS number_of_choices\n" +
                "FROM ((hobby NATURAL JOIN chooses) NATURAL JOIN admin_info)\n" +
                "WHERE user_id IN (SELECT creator_id \n" +
                "FROM (\n" +
                "\t(chat NATURAL JOIN is_member) \n" +
                "\tJOIN user_info ON member_id = user_info.user_id\n" +
                ") \n" +
                "GROUP BY chat_id\n" +
                "HAVING COUNT(member_id)=(\n" +
                "\tSELECT MAX(members) FROM (\n" +
                "\tSELECT chat_id, chat_name, creator_id, COUNT(member_id) AS members \n" +
                "\tFROM (\n" +
                "\t\t(chat NATURAL JOIN is_member) \n" +
                "\t\tJOIN user_info ON member_id = user_info.user_id\n" +
                "\t) \n" +
                "\tGROUP BY chat_id) result\n" +
                "))\n" +
                "GROUP BY hobby_name \n" +
                "ORDER BY number_of_choices DESC\n" +
                "LIMIT 0,3;";
        try {
            ResultSet resultSet = databaseConnection.createStatement().executeQuery(sql);
            while (resultSet.next()) {
                report.add(new SecondReportDTO(resultSet.getString(1), String.valueOf(resultSet.getInt(2))));
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }

        return report;
    }
}
