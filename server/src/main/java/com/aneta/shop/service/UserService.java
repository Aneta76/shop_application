package com.aneta.shop.service;

import com.aneta.shop.dto.UserDTO;
import com.aneta.shop.entity.User;

public interface UserService extends AbstractService<User, UserDTO> {
    User registerUser(User user);
}
