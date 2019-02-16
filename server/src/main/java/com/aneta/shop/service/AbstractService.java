package com.aneta.shop.service;

import com.aneta.shop.dto.AbstractDTO;
import com.aneta.shop.entity.AbstractEntity;

import java.util.Collection;

public interface AbstractService<ENTITY extends AbstractEntity, DTO extends AbstractDTO> {
    DTO update(DTO dto);

    DTO findById(Long id);

    DTO save(DTO dto);

    void delete(Long id);

    Collection<DTO> getAll();
}
