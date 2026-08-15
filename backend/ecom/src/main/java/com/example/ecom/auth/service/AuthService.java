package com.example.ecom.auth.service;

import com.example.ecom.auth.dto.LoginRequest;
import com.example.ecom.auth.dto.RegisterRequest;
import com.example.ecom.auth.entity.Role;
import com.example.ecom.auth.entity.User;
import com.example.ecom.auth.repository.UserRepository;
import com.example.ecom.auth.security.JwtService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService implements UserDetailsService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthService(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder,
            JwtService jwtService) {

        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

	@Override
	public UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {

        return userRepository.findByUsername(username)
                .orElseThrow(() ->
                    new UsernameNotFoundException(
                        "User not found: " + username
                    )
                );

//	For Debugging the username and details
//			throws UsernameNotFoundException {
//
//		System.out.println("Username received: " + username);
//
//		User user = userRepository.findByUsername(username)
//				.orElseThrow(() -> new UsernameNotFoundException("User not found"));
//
//		System.out.println("User found: " + user.getUsername());
//		System.out.println("Role: " + user.getRole());
//
//		return user;
	}

	// REGISTER
	public User register(RegisterRequest request) {

		User user = new User();

		user.setUsername(request.getUsername());
		user.setEmail(request.getEmail());

		// 🔐 Hash password before saving
		user.setPassword(passwordEncoder.encode(request.getPassword()));

//		user.setRole(Role.valueOf(request.getRole().toUpperCase()));
		
	    // Default role for normal registration
	    user.setRole(Role.USER);

		return userRepository.save(user);
	}

//	// LOGIN
//	public User login(String username, String password) {
//
//		User user = userRepository.findByUsername(username).orElseThrow(() -> new RuntimeException("User not found"));
//
//		if (!passwordEncoder.matches(password, user.getPassword())) {
//
//			throw new RuntimeException("Invalid password");
//		}
//
//		return user;
//	}
//
//	public User getUserByUsername(String username) {
//
//		return userRepository.findByUsername(username).orElseThrow(() -> new RuntimeException("User not found"));
//	}
	
    // LOGIN with JWT
//    public String login(LoginRequest request) {
//
//        Authentication authentication =
//                authenticationManager.authenticate(
//                        new UsernamePasswordAuthenticationToken(
//                                request.getUsername(),
//                                request.getPassword()
//                        )
//                );
//
//
//        User user =
//                (User) authentication.getPrincipal();
//
//
//        return jwtService.generateToken(user);
//    }
    
    @Bean
    public AuthenticationManager authenticationManager(
            AuthenticationConfiguration configuration)
            throws Exception {

        return configuration.getAuthenticationManager();
    }
    
    public String generateToken(User user) {
        return jwtService.generateToken(user);
    }
}