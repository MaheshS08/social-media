package com.social.socialmedia.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.social.socialmedia.entities.User;
import com.social.socialmedia.repository.UserRepository;

@Service
public class userRegisterService {

    @Autowired
    private UserRepository repo;

    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);

    public void register(User user) {
        user.setPassword(encoder.encode(user.getPassword()));
        repo.save(user);
    }

        public boolean login(User user) {
            // Retrieve user from the database using email
            User user1 = repo.findByUsername(user.getUsername());// Assume findByEmail is a valid method in your repository
    
            if (user1 == null) {
                throw new IllegalArgumentException("User not found.");
            }
    
            // Compare the provided password with the hashed password
            boolean passwordMatch = encoder.matches(user.getPassword(), user1.getPassword());
    
            if (passwordMatch) {
                return true;
            } else {
                throw new IllegalArgumentException("Invalid credentials.");
            }
        }
    
   
}
