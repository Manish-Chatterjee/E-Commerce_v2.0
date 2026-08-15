package com.example.ecom.auth.security;

import org.springframework.security.config.Customizer;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

//import com.example.ecom.auth.entity.User;
import com.example.ecom.auth.repository.UserRepository;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity  // this is used to give permission for specific method in controller with @PreAuthorize("hasRole('ADMIN')")
public class SecurityConfig {
	
    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    public SecurityConfig(
            JwtAuthenticationFilter jwtAuthenticationFilter) {

        this.jwtAuthenticationFilter = jwtAuthenticationFilter;
    }
	
//	@Autowired
//	private UserRepository userRepository;
//    
//    // Fetch user from database
//    @Bean
//    public UserDetailsService userDetailsService() {
//
//        return username -> userRepository.findByUsername(username)
//                .orElseThrow(() ->
//                    new UsernameNotFoundException(
//                        "User not found: " + username
//                    )
//                );
//    }
	
//	@Bean  // for basic authentication with 2 users manually without db
//	public UserDetailsService userDetailsService(PasswordEncoder passwordEncoder) {
//
//	    UserDetails admin = User.builder()
//	            .username("admin")
//	            .password(passwordEncoder.encode("admin123"))
//	            .roles("ADMIN")
//	            .build();
//
//	    UserDetails user = User.builder()
//	            .username("user")
//	            .password(passwordEncoder.encode("user123"))
//	            .roles("USER")
//	            .build();
//
//	    return new InMemoryUserDetailsManager(admin, user);
//	}
	
//	@Bean
//	public PasswordEncoder passwordEncoder() {
//	    return new BCryptPasswordEncoder();
//	}
	
    @Bean  // for authorisation
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http
            // Disable CSRF for REST APIs
            .csrf(csrf -> csrf.disable())
            
            .cors(cors -> {})

            // Don't create HTTP sessions
            .sessionManagement(session ->
                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            )

            // Authorization rules
            .authorizeHttpRequests(auth -> auth

                // Public endpoints
                .requestMatchers(
                	    "/api/auth/register",
                	    "/api/auth/login",
                	    "/api/products/**"
                ).permitAll()

                // Admin only
                .requestMatchers("/api/admin/**")
                .hasRole("ADMIN")

                // Admin + User
                .requestMatchers("/api/user/**")
                .hasAnyRole("USER", "ADMIN")

                // Everything else requires authentication
                .anyRequest()
                .authenticated()
            )
        
         // Basic Authentication
//        .httpBasic(Customizer.withDefaults());
            
            // JWT filter
            .addFilterBefore(
                    jwtAuthenticationFilter,
                    UsernamePasswordAuthenticationFilter.class
            );

		return http.build();
	}
    
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {

        CorsConfiguration configuration =
                new CorsConfiguration();

        configuration.setAllowedOrigins(
                List.of("http://localhost:5173")
        );

        configuration.setAllowedMethods(
                List.of(
                        "GET",
                        "POST",
                        "PUT",
                        "PATCH",
                        "DELETE",
                        "OPTIONS"
                )
        );

        configuration.setAllowedHeaders(
                List.of("*")
        );

        configuration.setAllowCredentials(true);


        UrlBasedCorsConfigurationSource source =
                new UrlBasedCorsConfigurationSource();

        source.registerCorsConfiguration(
                "/**",
                configuration
        );

        return source;
    }

}
