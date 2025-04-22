package com.social.socialmedia.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.UUID;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Table(name = "users")
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User implements UserDetails{

	
	@Id	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String username;
	


	private String password;
	

	private String email;
	

<<<<<<< HEAD
	private boolean isEnabled=true;
	

	@Column(name="is_email_verified")
	private boolean isEmailVerified=false;
	
	private LocalDateTime createDate;
=======
>>>>>>> 3d349a034a4eb79a09f4d3a5fe67de16c7145efb
	


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}

	public void setUsername(String username) {
		this.username = username;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	


	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return passwordHash;
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return email;
	}
		
}
