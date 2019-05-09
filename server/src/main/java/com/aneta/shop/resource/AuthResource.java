package com.aneta.shop.resource;


import com.aneta.shop.converter.UserConverter;
import com.aneta.shop.dto.UserDTO;
import com.aneta.shop.entity.User;
import com.aneta.shop.security.SecurityUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class AuthResource {

    private final SecurityUtils securityUtils;
    private final UserConverter userConverter;

    public AuthResource(SecurityUtils securityUtils, UserConverter userConverter) {
        this.securityUtils = securityUtils;
        this.userConverter = userConverter;
    }

    @GetMapping("/logged-user-info")
    public UserDTO getLoggedUserInfo() {
        return securityUtils.getCurrentUser().map(userConverter::convertToDTO).orElse(null);
    }

    @GetMapping("/logged-user-full-info")
    public User getFullUserInfo(){
       return securityUtils.getCurrentUser().get();
    }
}
