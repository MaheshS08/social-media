package com.social.socialmedia.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.social.socialmedia.constants.RouteConstants;
import com.social.socialmedia.dao.AuthenticationRequest;
import com.social.socialmedia.dao.AuthenticationResponse;
import com.social.socialmedia.dao.RegisterRequest;
import com.social.socialmedia.services.AuthenticationService;

@Controller
public class AuthenticationController {
	
	private final AuthenticationService authenticationService;
	
	
	public AuthenticationController(AuthenticationService authenticationService) {
		this.authenticationService = authenticationService;
	}
	
	@PostMapping(value = RouteConstants.REGISTER)
	public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request){
		System.out.println("Hits register endpoint");
		return ResponseEntity.ok(authenticationService.register(request));
	}
	
	@PostMapping(value = RouteConstants.LOGIN)
	public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request){
		return ResponseEntity.ok(authenticationService.authenticate(request));
	}
}
