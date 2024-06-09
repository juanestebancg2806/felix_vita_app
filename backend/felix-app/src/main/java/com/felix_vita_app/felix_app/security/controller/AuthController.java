package com.felix_vita_app.felix_app.security.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * REST controller for handling authentication-related requests.
 * This controller is annotated with @RestController, making it a web controller
 * with JSON response capabilities. The base URL for all endpoints in this
 * controller is "/auth".
 */
@RestController
@RequestMapping("/auth")
public class AuthController {

    /**
     * Endpoint for handling login requests.
     *
     * @return a ResponseEntity with HTTP status 200 (OK).
     */
    @GetMapping
    public ResponseEntity<?> login() {
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
