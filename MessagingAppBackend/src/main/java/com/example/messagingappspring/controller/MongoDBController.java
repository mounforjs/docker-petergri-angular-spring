package com.example.messagingappspring.controller;
import com.example.messagingappspring.DTO.UserInfoDTO;
import com.mongodb.ConnectionString;
import com.mongodb.client.*;
import org.bson.Document;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;

@RestController()
@RequestMapping("mongo")
public class MongoDBController {
    MongoClient mongoClient = MongoClients.create("mongodb://localhost:27017");
    MongoDatabase database = mongoClient.getDatabase("messagingappdb");
    MongoCollection<Document> collection = database.getCollection("user_info");


    @CrossOrigin
    @RequestMapping("/addUser")
    public void addUser(@RequestBody UserInfoDTO user){
        Document doc =
                new Document("user_id", collection.countDocuments()+1)
                        .append("user_name", "yasahan")
                        .append("user_password", 123);
        collection.insertOne(doc);
    }

    public void getDataFromDB(){

    }

}
