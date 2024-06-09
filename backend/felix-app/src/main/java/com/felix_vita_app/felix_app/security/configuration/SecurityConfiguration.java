package com.felix_vita_app.felix_app.security.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

/**
 * Configuration class for setting up the security configuration for the application.
 * This class is annotated with @Configuration to indicate that it contains bean definitions
 * for the application context.
 */
@Configuration
public class SecurityConfiguration {

    /**
     * Configures the security filter chain.
     *
     * @param http the HttpSecurity to modify.
     * @return the configured SecurityFilterChain.
     * @throws Exception if an error occurs.
     */
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                        .anyRequest().authenticated());

        http.httpBasic(Customizer.withDefaults());

        http.sessionManagement(session ->
                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

        return http.build();
    }

    /**
     * Configures global authentication settings.
     *
     * @param auth the AuthenticationManagerBuilder to modify.
     * @param passwordEncoder the PasswordEncoder to use for encoding passwords.
     * @throws Exception if an error occurs.
     */
    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth, PasswordEncoder passwordEncoder) throws Exception {
        auth.inMemoryAuthentication()
                .passwordEncoder(PasswordEncoderConfig.passwordEncoder())
                .withUser("admin")
                .password(PasswordEncoderConfig.passwordEncoder().encode("admin"))
                .roles("ADMIN");
    }
}
