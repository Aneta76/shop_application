package com.aneta.shop.converter;

import com.aneta.shop.dto.RoleDTO;
import com.aneta.shop.entity.Role;
import org.springframework.stereotype.Component;

@Component
public class RoleConverter implements Converter<Role, RoleDTO> {


    @Override
    public Role convertToEntity(RoleDTO dto) {
        Role role = new Role();
        role.setId(dto.getId());
        role.setName(dto.getName());
        return role;
    }

    @Override
    public RoleDTO convertToDTO(Role entity) {
        RoleDTO dto = new RoleDTO();
        dto.setId(entity.getId());
        dto.setName(entity.getName());
        return dto;
    }
}
