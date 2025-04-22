package com.social.socialmedia.dao;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {
    private String token;
    
    
    public void setToken(String token) {
    	this.token = token;
    }
    
    public String getToken() {
    	return token;
    }
}
