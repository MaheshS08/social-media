package com.social.socialmedia.controller;

import org.springframework.web.bind.annotation.RestController;

import com.social.socialmedia.entities.User;
import com.social.socialmedia.services.userRegisterService;

import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@CrossOrigin
@RestController
public class userRegister {

    @Autowired
    private userRegisterService service;
    
    @PostMapping("/register")
    public String register(@RequestBody User user) {
        System.out.println(user);
        service.register(user);
        
        return "jj" ;
    }


    @PostMapping("/login")
   public ResponseEntity<String> login(@RequestBody User loginDetails) {
    
        boolean success = service.login(loginDetails);

        if (success) {
            return ResponseEntity.ok("Login Successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login Failed");
        }
    }
    
    

}
