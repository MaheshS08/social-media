package com.social.socialmedia;

import java.security.PublicKey;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Hello world!
 */

@SpringBootApplication
public class SocialMediaApplication {
    public static void main(String[] args) {
        System.out.println("Hello World!");
        //System.out.println(System.getProperty("java.class.path"));
        SpringApplication.run(SocialMediaApplication.class, args);
        
    }
    
    
    @Bean
    public WebMvcConfigurer corsConfigurer() {
    	return new WebMvcConfigurer() {

    		public void addCorsMappings(CorsRegistry corsRegistry) {
    			corsRegistry.addMapping("/**")
    			.allowedOrigins("http://localhost:5173");
    		}
		};
    }
}
