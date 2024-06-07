package com.felix_vita_app.felix_app.security.controller;



import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @GetMapping
    public ResponseEntity<?> login(){
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
