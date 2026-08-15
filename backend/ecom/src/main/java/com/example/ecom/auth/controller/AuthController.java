package com.example.ecom.auth.controller;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ecom.auth.dto.LoginRequest;
import com.example.ecom.auth.dto.RegisterRequest;
import com.example.ecom.auth.dto.UserResponse;
import com.example.ecom.auth.entity.User;
import com.example.ecom.auth.service.AuthService;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;
    
    private final AuthenticationManager authenticationManager;
    
    public AuthController(
            AuthService authService,
            AuthenticationManager authenticationManager) {

        this.authService = authService;
        this.authenticationManager = authenticationManager;
    }

//	@PostMapping("/register")
//	public ResponseEntity<User> register(@RequestBody RegisterRequest request) {
//
//		User user = authService.register(request);
//
//		return ResponseEntity.status(HttpStatus.CREATED).body(user);
//	}
    
    @PostMapping("/register")
    public ResponseEntity<UserResponse> register(
            @RequestBody RegisterRequest request) {

        User user = authService.register(request);

        UserResponse response = new UserResponse(
                user.getId(),
                user.getUsername(),
                user.getEmail(),
                user.getRole().name()
        );

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(response);
    }

	// LOGIN
//	@PostMapping("/login")
//	public ResponseEntity<String> login(@RequestBody LoginRequest request) {
//
//		String token = authService.login(request);
//        ResponseCookie cookie = ResponseCookie
//                        .from("jwt", token)
//                        .httpOnly(true)
//                        .secure(false) // true in HTTPS production
//                        .sameSite("Lax")
//                        .path("/")
//                        .maxAge(24 * 60 * 60)
//                        .build();
//        
//        return ResponseEntity
//                .ok()
//                .header(
//                        HttpHeaders.SET_COOKIE,
//                        cookie.toString()
//                )
//                .body("Login successful");
//
////		User user = authService.login(request.getUsername(), request.getPassword());
////
////		UserResponse response = new UserResponse(user.getId(), user.getUsername(), user.getEmail(),
////				user.getRole().name());
////
////		return ResponseEntity.ok(response);
//	}
    @PostMapping("/login")
    public ResponseEntity<String> login(
            @RequestBody LoginRequest request) {

        Authentication authentication =
                authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(
                                request.getUsername(),
                                request.getPassword()
                        )
                );

        User user = (User) authentication.getPrincipal();

        String token = authService.generateToken(user);

        ResponseCookie cookie = ResponseCookie
                .from("jwt", token)
                .httpOnly(true)
                .secure(false)
                .sameSite("Lax")
                .path("/")
                .maxAge(24 * 60 * 60)
                .build();

        return ResponseEntity
                .ok()
                .header(
                        HttpHeaders.SET_COOKIE,
                        cookie.toString()
                )
                .body("Login successful");
    }

	// CURRENT LOGGED-IN USER
	@GetMapping("/me") // for http-cookies approach, checks data after the page is refreshed.
	public ResponseEntity<UserResponse> me(Authentication authentication) {

	    User user = (User) authentication.getPrincipal();

	    UserResponse response = new UserResponse(
	            user.getId(),
	            user.getUsername(),
	            user.getEmail(),
	            user.getRole().name()
	    );
	    
	    return ResponseEntity.ok(response);
		
//	    return ResponseEntity.ok(
//	            authentication.getPrincipal()
//	    );
	}
	
	
	// LOGOUT
	@PostMapping("/logout")
	public ResponseEntity<String> logout() {

	    ResponseCookie cookie =
	            ResponseCookie
	                    .from("jwt", "")
	                    .httpOnly(true)
	                    .secure(false)
	                    .sameSite("Lax")
	                    .path("/")
	                    .maxAge(0)
	                    .build();

	    return ResponseEntity
	            .ok()
	            .header(
	                    HttpHeaders.SET_COOKIE,
	                    cookie.toString()
	            )
	            .body("Logged out successfully");
	}
}
