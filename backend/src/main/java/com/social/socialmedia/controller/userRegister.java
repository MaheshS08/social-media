package com.social.socialmedia.controller;

import org.springframework.web.bind.annotation.RestController;

import com.social.socialmedia.entities.User;
import com.social.socialmedia.services.userRegisterService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin
@RestController
public class userRegister {

    @Autowired
    private userRegisterService service;
    
    @PostMapping("/register")
    public String register(@RequestBody User user) {
        service.register(user);
        
        return "jj" ;
    }
    

}
