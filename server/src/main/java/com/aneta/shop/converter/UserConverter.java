package com.aneta.shop.converter;

import com.aneta.shop.dto.UserDTO;
import com.aneta.shop.entity.User;
import org.springframework.stereotype.Component;

@Component
public class UserConverter implements Converter<User, UserDTO> {

    @Override
    public User convertToEntity(UserDTO dto) {
        User user = new User();
        user.setId(dto.getId());
        user.setFirstName(dto.getFirstName());
        user.setLastName(dto.getLastName());
        user.setEmail(dto.getEmail());
        user.setRole(dto.getRole());
        return user;
    }

    @Override
    public UserDTO convertToDTO(User entity) {
        UserDTO userDTO = new UserDTO();
        userDTO.setId(entity.getId());
        userDTO.setFirstName(entity.getFirstName());
        userDTO.setLastName(entity.getLastName());
        userDTO.setEmail(entity.getEmail());
        userDTO.setRole(entity.getRole());
        return userDTO;
    }
}
