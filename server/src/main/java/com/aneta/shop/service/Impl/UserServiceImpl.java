package com.aneta.shop.service.Impl;

import com.aneta.shop.converter.Converter;
import com.aneta.shop.converter.UserConverter;
import com.aneta.shop.dto.UserDTO;
import com.aneta.shop.entity.User;
import com.aneta.shop.respository.RoleRepository;
import com.aneta.shop.respository.UserRepository;
import com.aneta.shop.service.UserService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl extends AbstractServiceImpl<User, UserDTO> implements UserService {

    private final UserRepository userRepository;
    private final UserConverter userConverter;
    private final RoleRepository roleRepository;

    public UserServiceImpl(UserRepository userRepository, UserConverter userConverter, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.userConverter = userConverter;
        this.roleRepository = roleRepository;
    }

    @Override
    protected JpaRepository<User, Long> getRepository() {
        return userRepository;
    }

    @Override
    protected Converter<User, UserDTO> getConverter() {
        return userConverter;
    }

}