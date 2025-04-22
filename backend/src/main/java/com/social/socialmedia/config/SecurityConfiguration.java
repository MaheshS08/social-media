package com.social.socialmedia.config;

import org.springframework.boot.autoconfigure.security.oauth2.client.OAuth2ClientProperties;
import org.springframework.boot.autoconfigure.security.oauth2.client.OAuth2ClientPropertiesMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.security.oauth2.client.registration.InMemoryClientRegistrationRepository;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;




@Configuration
@EnableWebSecurity
public class SecurityConfiguration {
	
	private final JwtAuthenticationFilter jwtAuthenticationFilter;
	private final AuthenticationProvider authenticationProvider;
	private final CustomAuthenticationSuccessHandler successHandler;
	private final GoogleConfig googleConfig;
	
	public SecurityConfiguration(JwtAuthenticationFilter jwtAuthenticationFilter,
			AuthenticationProvider authenticationProvider,
			CustomAuthenticationSuccessHandler customAuthenticationSuccessHandler,
			GoogleConfig googleConfig) {
		this.jwtAuthenticationFilter = jwtAuthenticationFilter;
		this.authenticationProvider = authenticationProvider;
		this.successHandler = customAuthenticationSuccessHandler;
		this.googleConfig = googleConfig;
	}
	
	

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
        http
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/v1/auth/**","/oauth2/**")
                        .permitAll()
                        .anyRequest()
                        .authenticated()
                        
                )
                .oauth2Login(oauth2 -> oauth2                		
                		.successHandler(successHandler))
                .sessionManagement(session -> session
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                )
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthenticationFilter,UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
    
    
//    @Bean
//    public ClientRegistrationRepository clientRegistrationRepository(OAuth2ClientProperties properties) {
//    	OAuth2ClientProperties.Registration googleClients = properties.getRegistration().get("google");
//    	ClientRegistration googleClientRegistration = ClientRegistration.withRegistrationId("google")
//    			.clientId(googleConfig.getId())
//    			.clientSecret(googleConfig.getSecret())
//    			.build();
//    	
//    	return new InMemoryClientRegistrationRepository(googleClientRegistration);
//    }
    
}
