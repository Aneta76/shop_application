package com.aneta.shop.converter;

import com.aneta.shop.dto.UserDTO;
import com.aneta.shop.entity.Role;
import com.aneta.shop.entity.User;
import com.aneta.shop.respository.RoleRepository;
import com.aneta.shop.respository.UserRepository;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
public class UserConverter implements Converter<User, UserDTO> {

    private final RoleRepository roleRepository;

    public UserConverter(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @Override
    public User convertToEntity(UserDTO dto) {
        User user = new User();
        List<Role> roleList = new LinkedList<>();
        Optional<Role> roleUSER = roleRepository.findById(1L);
        Role role = roleUSER.get();
        if (role.getName().equals("USER")) {
            user.getRoles().add(role);
        } else {
            roleList.add(new Role("USER"));
            roleRepository.save(new Role("USER"));
        }
        user.setId(dto.getId());
        user.setFirstName(dto.getFirstName());
        user.setLastName(dto.getLastName());
        user.setZipCode(dto.getZipCode());
        user.setPhoneNumber(dto.getPhoneNumber());
        user.setPassword(dto.getPassword());
        user.setCountry(dto.getCountry());
        user.setCity(dto.getCity());
        user.setEmail(dto.getEmail());
        user.setAddressLine(dto.getAddressLine());
        return user;
    }

    @Override
    public UserDTO convertToDTO(User entity) {
        UserDTO userDTO = new UserDTO();
        userDTO.setId(entity.getId());
        userDTO.setFirstName(entity.getFirstName());
        userDTO.setLastName(entity.getLastName());
        userDTO.setZipCode(entity.getZipCode());
        userDTO.setPassword(entity.getPassword());
        userDTO.setPhoneNumber(entity.getPhoneNumber());
        userDTO.setCountry(entity.getCountry());
        userDTO.setAddressLine(entity.getAddressLine());
        userDTO.setCity(entity.getCity());
        userDTO.setEmail(entity.getEmail());
        userDTO.setRoles(entity.getRoles().stream().map(role -> role.getName()).collect(Collectors.toList()));
        return userDTO;
    }
}