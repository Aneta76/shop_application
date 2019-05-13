package com.aneta.shop.resource;

import com.aneta.shop.dto.UserDTO;
import com.aneta.shop.entity.User;
import com.aneta.shop.service.UserService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserResource extends AbstractResource<User, UserDTO> {

    private final UserService userService;

    public UserResource(UserService userService) {
        this.userService = userService;
    }

    @Override
    public UserService getService() {
        return userService;
    }
}
