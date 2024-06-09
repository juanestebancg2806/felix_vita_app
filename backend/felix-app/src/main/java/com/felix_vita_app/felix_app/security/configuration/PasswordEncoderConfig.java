package com.felix_vita_app.felix_app.security.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

/**
 * Configuration class for setting up the PasswordEncoder bean.
 * This class is annotated with @Configuration to indicate that it
 * contains bean definitions for the application context.
 */
@Configuration
public class PasswordEncoderConfig  {

    /**
     * Creates a PasswordEncoder bean that uses the BCrypt hashing algorithm.
     * This bean will be managed by the Spring container and can be injected
     * into other components that require password encoding functionality.
     *
     * @return a PasswordEncoder instance that uses BCrypt for hashing passwords.
     */
    @Bean
    public static PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
}
