package com.aneta.shop.service.Impl;

import com.aneta.shop.converter.Converter;
import com.aneta.shop.converter.RoleConverter;
import com.aneta.shop.dto.RoleDTO;
import com.aneta.shop.entity.Role;
import com.aneta.shop.respository.RoleRepository;
import com.aneta.shop.service.RoleService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class RoleServiceImpl extends AbstractServiceImpl<Role, RoleDTO> implements RoleService {

    private final RoleRepository roleRepository;
    private final RoleConverter roleConverter;

    public RoleServiceImpl(RoleRepository roleRepository, RoleConverter roleConverter) {
        this.roleRepository = roleRepository;
        this.roleConverter = roleConverter;
    }

    @Override
    protected JpaRepository<Role, Long> getRepository() {
        return roleRepository;
    }

    @Override
    protected Converter<Role, RoleDTO> getConverter() {
        return roleConverter;
    }
}
