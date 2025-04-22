package com.social.socialmedia.services;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.social.socialmedia.dao.AuthenticationRequest;
import com.social.socialmedia.dao.AuthenticationResponse;
import com.social.socialmedia.dao.RegisterRequest;
import com.social.socialmedia.entities.User;
import com.social.socialmedia.repository.UserRepository;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authManager;
    
    
    public AuthenticationService(
    		UserRepository userRepository,
    		PasswordEncoder passwordEncoder,
    		JwtService jwtService,
    		AuthenticationManager authenticationManager) {
    	this.authManager = authenticationManager;
    	this.jwtService = jwtService;
    	this.passwordEncoder = passwordEncoder;
    	this.userRepository = userRepository;
    }
    
    public AuthenticationResponse register(RegisterRequest request) {
    	var user = new User();
    	user.setUsername(request.getUsername());
    	user.setFullname(request.getFullname());
    	user.setPasswordHash(passwordEncoder.encode(request.getPassword()));
    	user.setEmail(request.getEmail());
    	
    	userRepository.save(user);
    	
    	var token = jwtService.generateToken(user);
    	
    	var authResponse = new AuthenticationResponse();
    	authResponse.setToken(token);
    	
    	
    	return authResponse;    	
    }
    
    public AuthenticationResponse authenticate (AuthenticationRequest request) {
    	authManager.authenticate(new UsernamePasswordAuthenticationToken(
    			request.getUsername(), 
    			request.getPassword())
    		);
    	
    	var user = userRepository.findByEmail(request.getUsername()).orElseThrow();
    	var token = jwtService.generateToken(user);
    	
    	var authResponse = new AuthenticationResponse();
    	authResponse.setToken(token);
    	
    	return authResponse;
    	
    	
    }

   
}

