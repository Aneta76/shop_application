package com.aneta.shop.converter;

import com.aneta.shop.dto.UserDTO;
import com.aneta.shop.entity.User;
import org.springframework.stereotype.Component;

import java.util.stream.Collectors;

@Component
public class UserConverter implements Converter<User, UserDTO> {

    @Override
    public User convertToEntity(UserDTO dto) {
        throw new UnsupportedOperationException();
    }

    @Override
    public UserDTO convertToDTO(User entity) {
        UserDTO userDTO = new UserDTO();
        userDTO.setId(entity.getId());
        userDTO.setFirstName(entity.getFirstName());
        userDTO.setLastName(entity.getLastName());
        userDTO.setEmail(entity.getEmail());
        userDTO.setRoles(entity.getRoles().stream().map(role -> role.getRole()).collect(Collectors.toList()));
        return userDTO;
    }
}