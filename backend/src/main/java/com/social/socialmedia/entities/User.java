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
 
 @Table(name = "users")
 @Entity
 public class User implements UserDetails{
 
 	@Id	
 	@Column(nullable = false)
 	private String id = UUID.randomUUID().toString();
 
 	@Column(nullable = false, unique = true, length = 50)
 	private String username;
 
 	@Column(name="password_hash")
 	private String passwordHash;
 	
 	@Column()
 	private String fullname;
 
 	@Column
 	private String email;
 
 	@Column(name = "is_enabled")
 	private boolean isEnabled=true;
 
 	@Column(name="is_email_verified")
 	private boolean isEmailVerified=false;
 
 	@Column(name="create_dt")
 	private LocalDateTime createDate;
 
 	@Column(name="update_dt")
 	private LocalDateTime updateDate;
 
 	public String getId() {
 		return id;
 	}
 
 	public void setId(String id) {
 		this.id = id;
 	}
 
 //	public String getUsername() {
 //		return username;
 //	}
 
 	public void setFullname(String fullname) {
 		this.fullname = fullname;
 	}
 	
 	public String getFullname() {
 		return this.fullname;
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