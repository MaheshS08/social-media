package com.social.socialmedia.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

import jakarta.annotation.PostConstruct;

@Component
@PropertySource("classpath:google-0auth.properties")
@ConfigurationProperties(prefix = "google.client")
public class GoogleConfig {
	
	@Value("${google.client.id}")
	private String id;
	@Value("${google.client.secret}")
	private String secret;
	
	public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getSecret() { return secret; }
    public void setSecret(String secret) { this.secret = secret; }
    
    @PostConstruct
    public void logProperties() {
        System.out.println("Google OAuth Client ID: " + id);
        System.out.println("Google OAuth Client Secret: " + secret);
    }
}
