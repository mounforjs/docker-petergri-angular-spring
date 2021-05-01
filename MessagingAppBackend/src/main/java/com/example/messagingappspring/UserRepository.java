package com.example.messagingappspring;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<UserInfo, Integer> {

}
