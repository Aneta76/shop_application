package com.aneta.shop.service.Impl;

import com.aneta.shop.converter.Converter;
import com.aneta.shop.converter.UserConverter;
import com.aneta.shop.dto.UserDTO;
import com.aneta.shop.entity.Role;
import com.aneta.shop.entity.User;
import com.aneta.shop.respository.RoleRepository;
import com.aneta.shop.respository.UserRepository;
import com.aneta.shop.service.UserService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

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

    @Override
    @Transactional
    public User registerUser(User user) {
        List<Role> roles = new LinkedList<>();
        Optional<Role> roleUSER = roleRepository.findById(1L);
        Role role = roleUSER.get();
        if (role.getName().equals("user")) {
            user.getRoles().add(role);
        } else {
            roles.add(new Role("user"));
            roleRepository.save(new Role("user"));
        }
        return userRepository.save(user);
    }
}