/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.usa.controlador;


import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author JaliNet
 */
@RestController
public class SecurityAdapter extends WebSecurityConfigurerAdapter{
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests(a -> a 
                   .antMatchers("/**","/resources/static/js/**","/js/**","/error","/webjars/**","/Costume/**","/Category/**").permitAll()
                   .anyRequest().authenticated()
                   ).exceptionHandling(e-> e
                                .authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED)))
                              .oauth2Login();
        http.cors().and().csrf().disable();
    }
    
}
