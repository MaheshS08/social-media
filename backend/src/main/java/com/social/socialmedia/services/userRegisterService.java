package com.social.socialmedia.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.social.socialmedia.entities.User;
import com.social.socialmedia.repository.UserRepository;

@Service
public class userRegisterService {

    @Autowired
    private UserRepository repo;

    public void register(User user) {
        repo.save(user);
    }
    
   
}
