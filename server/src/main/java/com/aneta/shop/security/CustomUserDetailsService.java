package com.aneta.shop.security;

import com.aneta.shop.entity.User;
import com.aneta.shop.respository.UserRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    public CustomUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<User> optionalUsers = userRepository.findByEmail(email);
        return optionalUsers.map(user -> new CustomUserDetails(user)).orElseThrow(() -> new UsernameNotFoundException("Email not found"));
    }
}