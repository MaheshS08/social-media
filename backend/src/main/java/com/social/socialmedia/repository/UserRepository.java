package com.social.socialmedia.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.social.socialmedia.entities.User;

@Repository
<<<<<<< HEAD
public interface UserRepository extends JpaRepository<User, Integer>{
	Optional<User> findByEmail(String email);
}
=======
public interface UserRepository extends JpaRepository<User, Integer>  {

    @Query("SELECT u from User u where u.username = :username")
    User findByUsername(@Param("username") String username);

  
	
}
>>>>>>> 3d349a034a4eb79a09f4d3a5fe67de16c7145efb
