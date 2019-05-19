package com.aneta.shop.config;

import com.aneta.shop.security.*;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    private final BasicAuthenticationEntryPoint basicAuthenticationEntryPoint;
    private final AuthenticationSuccessHandler authenticationSuccessHandler;
    private final AuthenticationFailureHandler authenticationFailureHandler;
    private final LogoutSuccess logoutSuccessHandler;
    private final CustomUserDetailsService customUserDetailsService;
    private final CustomPasswordEncoder customPasswordEncoder;

    public WebSecurityConfig(BasicAuthenticationEntryPoint basicAuthenticationEntryPoint, AuthenticationSuccessHandler authenticationSuccessHandler, AuthenticationFailureHandler authenticationFailureHandler, LogoutSuccess logoutSuccessHandler, CustomUserDetailsService customUserDetailsService, CustomPasswordEncoder customPasswordEncoder) {
        this.basicAuthenticationEntryPoint = basicAuthenticationEntryPoint;
        this.authenticationSuccessHandler = authenticationSuccessHandler;
        this.authenticationFailureHandler = authenticationFailureHandler;
        this.logoutSuccessHandler = logoutSuccessHandler;
        this.customUserDetailsService = customUserDetailsService;
        this.customPasswordEncoder = customPasswordEncoder;
    }

    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(customUserDetailsService).passwordEncoder(customPasswordEncoder);
    }


    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .exceptionHandling()
                .defaultAuthenticationEntryPointFor(basicAuthenticationEntryPoint, new AntPathRequestMatcher("/api/**"))
                    .and()
                .authorizeRequests()
                .antMatchers("/api/products/**").permitAll()
                .antMatchers("/api/category/all").permitAll()
                .antMatchers("/api/logged-user-info").permitAll()
                .antMatchers("/api/logged-user-full-info").permitAll()
                .antMatchers("/api/users/all").permitAll()
                .antMatchers("/api/user-panel").hasRole("USER")
                .antMatchers("/api/users/delete/**").permitAll()
                .antMatchers("/api/users/new").permitAll()
                .anyRequest().authenticated()
                    .and()
                .formLogin()
                .loginPage("/api/login").permitAll()
                .successHandler(authenticationSuccessHandler)
                .failureHandler(authenticationFailureHandler)
                    .and()
                .logout()
                .logoutUrl("/api/logout")
                .logoutSuccessHandler(logoutSuccessHandler)
                .deleteCookies("JSESSIONID").invalidateHttpSession(true);


    }
}
