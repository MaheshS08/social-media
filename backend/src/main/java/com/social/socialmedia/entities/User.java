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
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
public class User{
	
	@Id	
	private int id = UUID.randomUUID().hashCode();
	
	
	private String username;
	
	private String passwordHash;
	

	private String email;
	

	private boolean isEnabled=true;
	
	
	private boolean isEmailVerified=false;
	
	private LocalDateTime createDate;
	

	private LocalDateTime updateDate;


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getPasswordHash() {
		return passwordHash;
	}


	public void setPasswordHash(String passwordHash) {
		this.passwordHash = passwordHash;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public boolean isEnabled() {
		return isEnabled;
	}


	public void setEnabled(boolean isEnabled) {
		this.isEnabled = isEnabled;
	}


	public boolean isEmailVerified() {
		return isEmailVerified;
	}


	public void setEmailVerified(boolean isEmailVerified) {
		this.isEmailVerified = isEmailVerified;
	}


	public LocalDateTime getCreateDate() {
		return createDate;
	}


	public void setCreateDate(LocalDateTime createDate) {
		this.createDate = createDate;
	}


	public LocalDateTime getUpdateDate() {
		return updateDate;
	}


	public void setUpdateDate(LocalDateTime updateDate) {
		this.updateDate = updateDate;
	}

	
//	public String getUsername() {
//		return username;
//	}

	

	
}
