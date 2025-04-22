package com.social.socialmedia.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.social.socialmedia.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>  {

    @Query("SELECT u from User u where u.username = :username")
    User findByUsername(@Param("username") String username);

  
	
}
