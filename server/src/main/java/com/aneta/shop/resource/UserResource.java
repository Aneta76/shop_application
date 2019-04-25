package com.aneta.shop.resource;

import com.aneta.shop.dto.UserDTO;
import com.aneta.shop.entity.User;
import com.aneta.shop.respository.UserRepository;
import com.aneta.shop.service.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserResource extends AbstractResource<User, UserDTO> {

    private final UserService userService;
    private final UserRepository userRepository;

    public UserResource(UserService userService, UserRepository userRepository) {
        this.userService = userService;
        this.userRepository = userRepository;
    }

    @Override
    public UserService getService() {
        return userService;
    }

    @PostMapping("/reg")
    public User registerNewUser(@RequestBody User user) {
        User registeredUser = userRepository.save(user);
        return registeredUser;
    }

}
