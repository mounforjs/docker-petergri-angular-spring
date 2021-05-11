package com.example.messagingappspring.repository;

import com.example.messagingappspring.UserInfo;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<UserInfo, Integer> {

}
